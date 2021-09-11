const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");


router.get('/',(req,res)=>{
    res.send('hello router');
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
        const user = new User({
            email:email,
            password:password,
            name:name
        })

        user.save().then(user=>{
            res.json({message:"User saved succesfully"})
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })
})
module.exports = router;