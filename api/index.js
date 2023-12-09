const express = require('express');
const app = express();
const cors = require('cors');
const Users=require('./models/Users')
const  mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const port = 4000;

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://shaikhpc0786:spiderman@cluster0.gkdbxsk.mongodb.net/?retryWrites=true&w=majority')
app.post('/register', async(req, res) => {
    const {userName,password}=req.body;
      console.log(userName,password);
   
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
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//mongodb+srv://shaikhpc0786:trigon27@cluster0.gkdbxsk.mongodb.net/?retryWrites=true&w=majority