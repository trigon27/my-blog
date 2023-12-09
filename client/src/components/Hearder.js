import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Header = () => {
 const {setUserInfo,UserInfo}=useContext(UserContext)
  useEffect(()=>{
   fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response =>{
        response.json().then(userInfo=>{
         setUserInfo(userInfo)

        })
    })
  })// to add useEffect dependecy[]

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST',

    });
    setUserInfo(null)

  }
  const userName=UserInfo?.userName;
  return (
    <header>
    <Link to='/' className="logo">my Blog</Link>
    <nav>
      {userName&& (
        <>
        <Link to='/create'>Create Post</Link>
        <a href=" "onClick={logout}>Log Out</a>
        </>
      )}
      {!userName && (
        <>
          <Link to="/login">Log in </Link>
      <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  </header>
  )
}

export default Header
