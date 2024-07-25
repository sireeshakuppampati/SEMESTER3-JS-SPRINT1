import './Navbar.css';
//import homebanner from '../Assets/homebanner.jpeg'

import logo from '../Assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { useState } from 'react';

import { Link } from 'react-router-dom';


const Navbar = () => {
const [menu,setMenu] = useState("shop");

//const [scrollPosition,setScrollPosition] = useState("image");
  return (
    <>
    <div className="topsection">
      <div className="smallbar">
        <p>
          Save <span style={{color:'yellow'}}> 30% </span>on select 2024 <br />
          Find trusted brands at unbelievable prices in our Outlet Sale.
        </p>
        <bold>TECH THINKERS</bold>
        <button id='btn1'>SHOP NOW</button>
      </div>
      </div>
        <div className="navbar1">
          <div className="nav-logo">
            <img src={logo} alt=" " />
            <p>SHOPPER</p>
          </div>
          
          <div className="searchbar">
            <input type="search" name="search" placeholder="Search Tech Thinkers"/>
            <button className='bt2'>< FaSearch  style={{color:'red', cursor:'pointer'}}/></button>
          </div> 
          <div >
          < FaCanadianMapleLeaf  style={{color:'red',height:'40px',width:'30px',margin:'5px',}}/>
          <select>
            <option value="english">ENGLISH</option>
            <option value="french">FRENCH</option>
          </select>
          </div>
          <div className="iconSection1">
          <VscAccount />
          <Link to='/account'>Account</Link>
          </div>
          <div className="iconSection2"> 
          < BsCart  />
          <Link to='/cart'>Cart</Link>
            <div className="cartCount">0</div>
          </div>
        </div>
      <div className='navbar2'>
        <ul className='nav-menu'>
          <li onClick={ () =>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={ () =>{setMenu("tv&monitors")}}><Link to='/tv&monitors'>Tv & Monitors</Link>{menu==="tv&monitors"?<hr/>:<></>}</li>
          <li onClick={ () =>{setMenu("audio&videos")}}><Link to='/audio&videos'>Audio & Video</Link>{menu==="audio&videos"?<hr/>:<></>}</li>
          <li onClick={ () =>{setMenu("laptops&tablets")}}><Link to='/laptops&tablets'>Laptops & Tablets</Link>{menu==="laptops&tablets"?<hr/>:<></>}</li>
        </ul>
        <div><button id='btn1' style={{float:'right'}}>Login</button></div>
      </div>
      
    </>
  )
}

export default Navbar;
