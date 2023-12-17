import React, { useState } from 'react'

const Register = () => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    async function register(ev) {
        ev.preventDefault();
       const response= await fetch('https://mern-blog-backend-t0qk.onrender.com/register',{
            method:'POST',
            body:JSON.stringify({userName,password}),
            headers:{'Content-Type':'application/json'},
        

        })
        if(response.status===200){
            alert("registration successfull..")
        }
        else{
            alert("registration failed..")
        }
    }
  return (
    <div>
        <form  className="register" onSubmit={register}>
            <h1>Register</h1>

            <input type='text'
            placeholder='user name '
            value={userName}
            onChange={ev=>setUserName(ev.target.value)}
            />

            <input type='text'
             placeholder='password'
             value={password}
             onChange={ev=>setPassword(ev.target.value)}
             />
            <button>register</button>

        </form>
    </div>
  )
}

export default Register
