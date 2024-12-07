import React from 'react'
import { Outlet } from 'react-router-dom'
import Register from '../Register/Register'

const LayoutTwo = () => {
  return (
    <>
        <Outlet/>
        <Register/>
    </>
  )
}

export default LayoutTwo