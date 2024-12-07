import React, { useEffect, useState } from 'react'
import './Catagories.css'
import { data, Link } from 'react-router-dom'


const Catagories = () => {
  const [cardData, setCardData] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setCardData(json))
  },[])



  return (
    <>
      <div className="motherly">
        <div className="container">
          <div className="catagory_row">
            <div className="row_one">
              <h2>Categories</h2>
              <button>View All</button>
            </div>
            <div className="row_two">
              <div className="menu flex flex-col items-center gap-4">
                {/* <img className='bbb' src="images/break.png" alt="" /> */}
                <Link to="" className="breakfast">Breakfast</Link>
              </div>
              <div className="menu flex flex-col items-center gap-4">
                {/* <img className='bbb' src="images/lunch.png" alt="" /> */}
                <Link to="" className="breakfast">Lunch</Link>
              </div>
              <div className="menu flex flex-col items-center gap-4">
                {/* <img className='bbb' src="images/dinner.png" alt="" /> */}
                <Link to="" className="breakfast">Dinner</Link>
              </div>
            </div>
            <div className="row_three flex gap-5 flex-wrap justify-center">
              {
                cardData.map((item)=>(
                  <div className="siglecard">
                    <p className='off'>10% off</p>
                    <div className="img">
                      <img src="images/break.png" alt="" />
                    </div>
                    <div className="details">
                      <h2>Name: {item.name}</h2>
                      <h2>Price: {item.username}</h2>
                      <h2>Ingredients: {item.email} </h2>
                      <h2>Catagory: </h2>
                    </div>
                  </div>
                ))
              }
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catagories