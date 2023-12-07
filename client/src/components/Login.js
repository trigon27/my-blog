import React from 'react'

const Login = () => {
  return (
    <div>
        <form className='login'>
            <h1>Log in </h1>
            <input type='text' placeholder='user name '/>
            <input type='text' placeholder='password'/>
            <button>log in</button>
        </form>
    </div>
  )
}

export default Login
