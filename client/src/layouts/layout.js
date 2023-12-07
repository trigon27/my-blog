import React from 'react'
import Header from '../components/Hearder'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <main>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default Layout
