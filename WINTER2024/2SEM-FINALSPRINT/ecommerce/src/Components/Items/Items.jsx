
import './Item.css'


const Items = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price">
                {props.price}
            </div>
        </div>
    </div>
    
  )
}

export default Items
