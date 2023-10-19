export function checkAuthorization(role) {
    return async (req, res, next) => {
        try {
            const userRole = req.session.role
            if(userRole == role) {
                next(req)
            }
            else {
                const err = new Error('Forbidden response')
                err.status = 403
            } 
        } catch(err) {
                next(err)
            }
    }
}