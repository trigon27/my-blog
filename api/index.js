const express = require('express');
const app = express();
const Post=require('./models/Post')
const cors = require('cors');
const Users=require('./models/Users');
const jwt=require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const  mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const uploadMiddleware=multer({dest:'uploads/'})
const port = 4000;
const secret='lsjfahsuihejfhh3uffvh';

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//mongoDB connection
mongoose.connect('mongodb+srv://shaikhpc0786:spiderman@cluster0.gkdbxsk.mongodb.net/?retryWrites=true&w=majority')

//registration 

app.post('/register', async(req, res) => {
    const {userName,password}=req.body;
      // console.log(userName,password);
   
  try {
      // Check if username is provided
      if (!userName) {
        return res.status(400).json({ error: 'Username is required' });
    }

    //creating hash password 
    const hashedPassword = await bcrypt.hash(password, 10);
      const dataDoc = await Users.create({userName,password:hashedPassword})
      res.json(dataDoc);
  } catch (error) {
      console.error('Error creating user: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

//login 

app.post('/login',async(req,res)=>{
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

//profile 
app.get('/profile',(req,res)=>{
  const {token}=req.cookies;
  jwt.verify(token,secret,{},(err,info)=>{
    if(err) throw err;
    res.json(info);
  })
  res.json(req.cookies)
})

//log out
app.post('/logout',(req,res)=>{
  res.cookie('token','').json('ok');
})

//post blog
app.post('/post',uploadMiddleware.single('file'),async(req,res)=>{
 const {originalname,path}=req.file;
 const parts=originalname.split('.')
 const ext = parts[parts.length -1];
 const newPath=path+'.'+ext
 fs.renameSync(path,newPath)

 const {token}=req.cookies;
  jwt.verify(token,secret,{},async(err,info)=>{
    if(err) throw err;
    const {title,summary,content}=req.body
 const PostDoc=await Post.create({
  title,
  summary,
  content,
  cover:newPath,
  author:info.id,
 })
  res.json(PostDoc);
  });


})

app.get('/post',async(req,res)=>{

  res.json(await Post.find()
  .populate('author',['userName'])
  .sort({createdAt:-1})
  .limit(25))
})

app.get('/post/:id',async(req,res)=>{
  const {id}=req.params;
  const postDoc=await Post.findById(id).populate('author',['userName']);
  res.json(postDoc)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
