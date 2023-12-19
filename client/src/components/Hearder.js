import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'

const Header = () => {
  const navigate =useNavigate();
 const {setUserInfo,UserInfo}=useContext(UserContext)
  useEffect(()=>{
   fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response =>{
       // eslint-disable-next-line
        response.json().then(userInfo=>{
         setUserInfo(userInfo)

        })
    })
  },[])

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST',

    });
    setUserInfo(null)
    navigate('/')
    

  }
  const userName=UserInfo?.userName;

  //Icons
  const logoutIcon=  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
  
  const createIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>

  const loginIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

  const registerIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
</svg>



  return (
    <header>
    <Link to='/' className="logo">StoryScribe</Link>
    <nav>
      {userName&& (
        <>
        <Link to='/create' className='create-link'>{createIcon}Create Post</Link>
        <a href=" "onClick={logout} className="logout-link">{logoutIcon}Log Out</a>
        </>
      )}
      {!userName && (
        <>
          <Link to="/login" className='create-link'>{loginIcon}Log in </Link>
      <Link to="/register" className='create-link'>{registerIcon}Register</Link>
        </>
      )}
    </nav>
  </header>
  )
}

export default Header
