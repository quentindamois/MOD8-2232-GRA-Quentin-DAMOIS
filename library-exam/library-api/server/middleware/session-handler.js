import repository from '../persistence/authentication-repository.js'

// Session handler middleware
export default async (req, res, next) => {
  try {
    delete req.session
    const id = req.cookies['session-id']

    if (id === undefined) {
      return next() // Pass request to next request handler or middleware
    }

    const session = await repository.findSession(id)

    if (session === null) {
      delete req.cookies['session-id']
      deleteSessionIdCookie(res) // Instruct browser to delete session id cookie
      return next() // Pass request to next request handler or middleware
    }

    const now = new Date(Date.now())
    const user = await repository.findUser(session.username)

    if (session.expiryTime <= now || user === null) {
      delete req.cookies['session-id']
      deleteSessionIdCookie(res) // Instruct browser to delete session id cookie
      await repository.deleteSession(id) // Delete session from database because it is expired (or user account was deleted)
      return next() // Pass request to next request handler or middleware
    }

    // Session is valid and not expired, and user account still exists
    // Attach session and user to request to be accessed by subsequent middleware and request handlers
    req.session = session
    req.session.user = user

    // Extend session by pageCount specified in .env
    const extendedTime = now
    const pageCountMinutes = Number.parseInt(process.env.SESSION_DURATION) || 15
    const expiryTime = new Date(now.getTime() + pageCountMinutes * 60 * 1000)
    await repository.extendSession(id, extendedTime, expiryTime)

    next() // Pass request to next request handler or middleware
  } catch (err) {
    next(err)
  }
}

const deleteSessionIdCookie = (res) => {
  // The following built-in method for deleting a cookie doesn't use the required cookie options
  // res.clearCookie('session-id')

  // Manually delete the cookie by setting a past expiry date and empty value, with the required cookie options
  const expires = new Date(0) // January 1, 1970
  const cookieOptions = { expires, httpOnly: true, secure: true, sameSite: 'Lax' }
  res.cookie('session-id', '', cookieOptions) // Instruct browser to delete session id cookie
}
