const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    console.log('middle ware ran');
    const token = req.headers['authorization'];
    if(!token) {
        console.log('unauthorized request')
       return res.status(403).json({error:'unauthorized'})
    }else{
    
    const reqToken = token.slice(7);
        jwt.verify(reqToken, process.env.JWT_SECRET, (err, decoded)=>{
            if(err) return res.status(400).json({error:err.name});
            else{
                
                next()
            }
            
        })
    }
}