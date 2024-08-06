import './Hero.css' ;
import ban from '../Assets/ban.webp';
import { GiHearts } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
import { BsBalloonHeartFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='hero'>
        <img style={{height:'400px',width:'800px'}} src={ban} alt="home" />
        <div className="caption"> 
        <GiHearts  style={{color:'red', height:'60px', width:'30px'}}/>
        <BsFillHeartFill   style={{color:'red', height:'50px',width:'40px'}}/>
        <BsBalloonHeartFill  style={{color:'red', height:'80px',width:'40px'}}/>
        <p style={{float:'right'}}>
          <h1>Discover <span style={{color:'red'}}> Mother's Day</span> gifts at great prices.</h1>
          <h3>Celebrate Mother's Day on Sunday, May 12 with these top picks and more gift ideas below.</h3>
        </p>
        </div>
      
    </div>
  )
}

export default Hero;
