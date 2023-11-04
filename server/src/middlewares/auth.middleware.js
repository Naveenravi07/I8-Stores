const jwt = require('jsonwebtoken')

function AuthMiddileWare(req, res, next) {
    if(['/auth/login','/auth/signup'].includes(req._parsedUrl.pathname)) return next()
    if (req.headers.authorization ) {
        try {
            const decoded = jwt.decode(req.headers.authorization.split(' ')[1])
            if(decoded==null) throw err
            req.headers['data'] = decoded
            next()
        } catch (err) { return res.status(400).json({msg:"token verification failed"})}
    } else res.status(400).json({msg:"please provide an authorization token"})
}
module.exports = { AuthMiddileWare }
