const jwt = require('jsonwebtoken');

const checkJWT = (req, res, next)=>{
    const token = req.headers['x-access-token'];

    if(!token){
        return res.status(401).json({
            auth: false,
            message: "Token not found"
        });
    }

    jwt.verify(token, '@tiARA', (err, decoded)=>{
        if(err){
            return res.status(500).json({
                auth: false,
                message: "Failed to authenticate"
            });
        }

        next();
    });
}

module.exports = checkJWT;