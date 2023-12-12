const express = require('express');
const Users=require('../models/Users');
const jwt=require('jsonwebtoken');
const secret='lsjfahsuihejfhh3uffvh';
const profileRoutes=express.Router()
profileRoutes.get('/profile',(req,res)=>{
    const {token}=req.cookies;
    jwt.verify(token,secret,{},(err,info)=>{
      if(err) throw err;
      res.json(info);
    })
    res.json(req.cookies)
  })

  module.exports=profileRoutes;