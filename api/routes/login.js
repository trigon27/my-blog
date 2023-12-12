const express = require('express');
const Users=require('../models/Users');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const secret='lsjfahsuihejfhh3uffvh';
// const cookieParser = require('cookie-parser');
const loginRoutes=express.Router();
loginRoutes.post('/login',async(req,res)=>{
    const {userName,password}=req.body;
    const docData=await Users.findOne({userName});
    if (!docData) {
      return res.status(400).json("Username not found");
    }
   const passOK= bcrypt.compareSync(password,docData.password)
    // res.json(passOK)
    if(passOK){
      //log in
      jwt.sign({userName,id:docData._id},secret,{},(err,token)=>{
        if(err) throw err;
        else{
          res.cookie('token',token).json({
            id:docData._id,
            userName,
          });
        }
      })
     
    }
    else{
      res.status(400).json(" wrong crentiations")
    }
  })

  module.exports=loginRoutes;