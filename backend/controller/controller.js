const User = require('../model/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const express = require('express');
const app = express();

// const my_mw=((req, res, next)=>{
//     console.log('my middleware Logged');
//     next()
// })
// app.use(my_mw)

const home = async(req, res)=>{
    
   return res.status(200).json({data:'success'})
}

const register=async(req, res)=>{
    const {username, password} = req.body;

    try {
        if(username != '' && password !=''){
            const exist =await User.findOne({username});
            if(exist) return res.status(500).json({error:'user already exist'});
            else{
                const salt = await bcrypt.genSalt(10);
                const newUser = new User({username, password})
                newUser.password = await bcrypt.hash(password, salt);
                await newUser.save().then(result=>res.status(200).json({data:newUser})).catch(err=>res.status(500).json({error:'error saving new user'}))
            }
        }
        
    } catch (error) {
     res.status(500).json({error})
    }
}

const login=async(req, res)=>{
    const {username, password} = req.body;

    try {
        if(username != '' && password !=''){
            const exist =await User.findOne({username});
            if(exist){
                const isValid = await bcrypt.compare(password, exist.password);
                const data = exist._doc
                if(isValid){ 
                    const secret = process.env.JWT_SECRET;
                  const token= jwt.sign({
                        username:username,
                        enabled:true
                    }, secret, {expiresIn:'1h'})
                    return res.status(200).json({token});
            }
                else{
                    return res.status(500).json({error:'invalid password'});
                }
            }
            else{
                return res.status(500).json({error:'invalid username'});
            }
        }
        
    } catch (error) {
     res.status(500).json({error})
    }
}

module.exports={register, login, home}