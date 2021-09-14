const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requirelogin =require('../middleware/requirelogin')
const Post = mongoose.model("Post")

router.get('/allposts',(req, res)=>{
    Post.find().populate("postedBy","_id name").then(posts=>{
        res.json({posts:posts})
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/createpost',requirelogin,(req,res)=>{
    const {title,body,price} = req.body

    if(!title || !body || !price){
        return res.status(422).json({error:"Please enter all neccesary fields."})
    }

    req.user.password = undefined

    const post = new Post({
        title:title,
        body:body,
        price:price,
        postedBy:req.user
    })

    post.save().then(result=>{
        res.json({post:result})
    }).catch(err=>{
        console.log(err)
    })
})

router.get('/userposts',requirelogin,(req,res)=>{
    Post.find({postedBy:req.user._id}).populate("postedBy","_id name")
    .then(userposts=>{
        res.json({userposts:userposts})
    }).catch(err=>{
        console.log(err)
    })
})
module.exports = router