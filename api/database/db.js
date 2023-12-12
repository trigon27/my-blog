const  mongoose = require('mongoose');

 const DBconnection=async()=>{
    const MONO_URL=`mongodb+srv://shaikhpc0786:spiderman@cluster0.gkdbxsk.mongodb.net/?retryWrites=true&w=majority`
    try{
       await mongoose.connect(MONO_URL);
       console.log("mongoDB connected successfully ")

    }catch(error){
        console.error("found error while fechting data from database ",error.message);
    }
}
module.exports = DBconnection;