const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../keys')
const requirelogin = require('../middleware/requirelogin')

router.get('/',(req,res)=>{
    res.send('hello router')
})


router.post('/signup',(req, res)=>{
    const {name,email,password} = req.body;
    if(!email || !password || !name){
        return res.status(422).json({err:"Please enter content into all fields."})
    }
    User.findOne({email:email}).then((savedUser)=>{
        if((savedUser)){
            return res.status(422).json({err:"User already exists for this email."})
        }
        bcrypt.hash(password,12).then(hashedpassword=>{
            const user = new User({
                email:email,
                password:hashedpassword,
                name:name
            })
            user.save().then(user=>{
            res.json({message:"User saved succesfully"})
            }).catch(err=>{
                console.log(err)
            })
        })   


    }).catch(err=>{
        console.log(err)
    })
})

router.post('/signin', (req,res)=>{
    const{email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error:'Please add email or password.'})
    }
    User.findOne({email:email}).then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:'Invalid Email or Password.'})
        }

        bcrypt.compare(password,savedUser.password).then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({id:savedUser._id}, JWT_SECRET)
                res.json({token:token})
            }else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        }).catch(err=>{
            console.log(err)
        })

    })
})

module.exports = router