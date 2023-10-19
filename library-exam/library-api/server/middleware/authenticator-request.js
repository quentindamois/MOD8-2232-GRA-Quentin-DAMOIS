export default async (req, res, next ) => {
    try {
        if(req.sessions) {
            next(req)
        }

        const err = new Error('Not Authorized.')
        err.status = 401
        return next(err)

    } catch(err) {
        next(err)
    }
}