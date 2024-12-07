import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Nav = () => {
  // ============================== usesate for signout
  const[show, setShow] = useState(true)
  // ================================ taking data from redux
  const sliceUser = useSelector((state)=> state.currentUser.value)

  console.log(JSON.parse(localStorage.getItem('currentUser')))
  return (
    <>
      <div className="motherLay">
        <div className="container">
          <div className="menuRow">
            <div className="logo">
              <img src="images/Foodieland..png" alt="logo" />
            </div>
            <div className="menus">
              <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="">Recipes</Link></li>
                <li><Link to="">Blog</Link></li>
                <li><Link to="/LayoutTwo">Contact</Link></li>
                <li><Link to="">About us</Link></li>
              </ul>
            </div>
            <div className="user relative">
              <div className="user_profile"  >
                <div className="image" onClick={()=>setShow(!show)} >
                  <img src={sliceUser?.photoURL} alt="" />
                </div>
                {
                  show?
                  ''
                  :
                  <div className="signOut">
                    <button>SignOut</button>
                  </div>
                }
                {/* -------------- showing user data from redux ------------------------ */}
                <p className='text-[18px] text-[black]'>{sliceUser?.displayName}</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}            

export default Nav