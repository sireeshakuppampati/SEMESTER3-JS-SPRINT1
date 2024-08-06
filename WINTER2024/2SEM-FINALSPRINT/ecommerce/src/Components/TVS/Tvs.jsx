import React from 'react'
import tv4 from '../Assets/tv4.jpeg';
import './Tvs.css';

const Tvs = () => {
  return (
    <div className='Tvs'>
        <img style={{height:'300px',width:'500px'}} src={tv4} alt="home" />
        <p style={{float:'right'}}></p>
        <h1 style={{fontSize:'16pts', color:'orange'}}>FLAT 50% OFF</h1>
        <h1>12 hours</h1>
        <button style={{backgroundColor:'orange',color:'white',borderRadius:'50%'}}>Explore Now</button>
      
    </div>
  )
}

export default Tvs
