import React from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart} from '../../redux/cartSlice';

function Products({ items, heading }) {


  const dispatch = useDispatch()

  const handleAddCart = (item) => {
    dispatch(addToCart(item))
  }

  const navigate = useNavigate()
  const handleViewDetails = (id) =>{
    navigate(`/product/${id}`)
  }
  return (
    <div className="products-section">
      <h1 className="heading">{heading}</h1>
      <div className="products-container">
        {items.map((item) => (
          <div key={item.id} className="product-container">
            <img src={item.img} alt={item.title} className="product-image" />
            <div className="product-desc">
              <h3>{item.title}</h3>
              <span>${item.price.toFixed(2)}</span>
            </div>
            <div className="product-info">
              <button className="icon" onClick={() => handleAddCart(item)}>
                <CiShoppingCart /> Add to Cart
              </button>
              <button className="icon" onClick={() => handleViewDetails(item.id)}>
                <CiSearch /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
