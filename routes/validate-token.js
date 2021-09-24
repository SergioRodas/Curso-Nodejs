const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const token = req.header('auth-token')

    if(!token) return res.status(401).json({ error: 'Acceso denegado' })

    try {
        const verify = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verify
        next()
    } catch (error) {
        res.status(400).json({error: 'El token no es válido'})
    }

}

module.exports = verifyToken