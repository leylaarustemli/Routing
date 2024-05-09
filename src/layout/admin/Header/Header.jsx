import React from 'react'
import "./Header.css"
import "../../site/Header/Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
    <div className="container">
    <div className="left-header">
        <div className="title-head">
          <h5>Start Bootstrap</h5>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/admin">Products</Link>
          </li>
          <li>
            <Link to="/admin/add">Add</Link>
          </li>
          
          
        </ul>
      </div>
      <div className="right-header">
      <i className="fa-solid fa-cart-shopping"></i>
      <p>Card</p>
      <p className='sifir'>0</p>
      </div>
    </div>
    </div>

  )
}

export default Header