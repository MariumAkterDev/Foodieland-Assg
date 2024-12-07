import React from 'react'
import './Banner.css'
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { RiPlayMiniFill } from "react-icons/ri";




const Banner = () => {
  return (
    <>
      <div className="motherlay">
        <div className="container">
          <div className="shorna_banner_row">
            <div className="banner_row">
              <div className="banner_text">
                <div className="hot">
                  <img src="images/image 14.png" alt="hot" />
                  <p>Hot Recipes</p>
                </div>
                <h1>Spicy delicious chicken wings</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqut enim ad minim 
                </p>
                <div className="min_chick">
                  <div className="min">
                    <div className="ico"><PiTimerFill className='text-[24px]'/></div>
                    <p>30 Minutes</p>
                  </div>
                  <div className="min !w-[140px]">
                    <div className="ico"><PiForkKnifeFill className='text-[24px]' /></div>
                    <p>Chicken</p>
                  </div>
                </div>
                <div className="banner_btm">
                  <div className="jhon">
                    <img src="images/Ellipse 2.png" alt="jhon" />
                    <div className="jhon_text">
                      <h2>John Smith</h2>
                      <p>15 March 2022</p>
                    </div>
                  </div>
                  <div className="banner_btn">
                    <button>
                      View Recipes
                      <RiPlayMiniFill className='text-[black] bg-[white] rounded-full p-[2px]' />
                    </button>
                  </div>
                </div>
              </div>
              <div className="banner_img">
                <img src="images/Mask Group.png" alt="bannerImg" />
              </div>
              <div className="hand_img">
                <img src="images/Badge.png" alt="badge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner