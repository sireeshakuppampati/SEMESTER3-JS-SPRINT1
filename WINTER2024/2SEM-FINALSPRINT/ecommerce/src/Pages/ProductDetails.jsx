import React, { useContext } from 'react';
import './CSS/ProductDetails.css';
import { ShopContext } from '../Context/ShopContext';
import Items from '../Components/Items/Items';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

const ProductDetails = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img
        style={{ height: '400px', width: '800px' }}
        className='shopCategory-banner'
        src={props.banner}
        alt=""
      />
      <div className='shopcategory-index'>
        <p>
          <span>Showing 1-12</span> Out of 24 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.length === 0 ? (
          <p>No products available</p>
        ) : (
          all_product
            .filter(item => props.category === item.category)
            .map((item, i) => (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
