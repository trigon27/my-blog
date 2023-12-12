const jwt=require('jsonwebtoken');
const express = require('express');
const logoutRoutes=express.Router();

logoutRoutes.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok');
  })
  module.exports=logoutRoutes;