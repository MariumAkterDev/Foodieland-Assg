import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Foote from '../Footer/Foote'
import { useSelector } from 'react-redux'

const LayoutOne = () => {
   // ================================ taking data from redux
   const sliceUser = useSelector((state)=> state.currentUser.value)
   const navigate = useNavigate()

   useEffect(()=>{
    if(sliceUser == null){
      navigate('/LayoutTwo/LogIn')
    }
   })

  return (
    <>
      <Nav/>
      <Outlet/>
      
    </>
  )
}

export default LayoutOne