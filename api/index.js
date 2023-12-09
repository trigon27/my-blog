const express = require('express');
const app = express();
const cors = require('cors');
const Users=require('./models/Users');
const jwt=require('jsonwebtoken');
<<<<<<< HEAD
const cookieParser = require('cookie-parser');
=======
>>>>>>> c353972767fc5fb68ef14ab96fb1ccd91de32fee
const  mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const port = 4000;
const secret='lsjfahsuihejfhh3uffvh';

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

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

<<<<<<< HEAD
//login 

app.post('/login',async(req,res)=>{
  const {userName,password}=req.body;
  const docData=await Users.findOne({userName});
  if (!docData) {
    return res.status(400).json("Username not found");
  }
=======
app.post('/login',async(req,res)=>{
  const {userName,password}=req.body;
  const docData=await Users.findOne({userName});
>>>>>>> c353972767fc5fb68ef14ab96fb1ccd91de32fee
 const passOK= bcrypt.compareSync(password,docData.password)
  // res.json(passOK)
  if(passOK){
    //log in
    jwt.sign({userName,id:docData._id},secret,{},(err,token)=>{
      if(err) throw err;
      else{
<<<<<<< HEAD
        res.cookie('token',token).json({
          id:docData._id,
          userName,
        });
=======
        res.cookie('token',token).json('ok');
>>>>>>> c353972767fc5fb68ef14ab96fb1ccd91de32fee
      }
    })
   
  }
  else{
    res.status(400).json(" wrong crentiations")
  }
})
<<<<<<< HEAD

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

=======
>>>>>>> c353972767fc5fb68ef14ab96fb1ccd91de32fee
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//mongodb+srv://shaikhpc0786:trigon27@cluster0.gkdbxsk.mongodb.net/?retryWrites=true&w=majority