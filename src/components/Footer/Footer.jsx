import React from 'react'
import { Outlet } from 'react-router-dom'

const Footer = () => {
  return (
    <div><h1>Footer</h1>
    
        <Outlet/>
    </div>
  )
}

export default Footer