import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../../data';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import './SingleProduct.css';
import {useDispatch} from "react-redux"
import { addToCart } from '../../../redux/cartSlice';

function SingleProduct() {


    const dispatch = useDispatch() 
    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }

    const { id } = useParams();
    const product = allProducts.find((product) => product.id === parseInt(id));

    const colors = ["red", "green", "yellow", "blue", "magenta"];
    const [selectedColor, setSelectedColor] = useState(null);
    const handleCircleClick = (color) => {
        setSelectedColor(color);
    };

    const sizes = ["xs", "sm", "md", "lg", "xl"];
    const [selectSize, setSelectSize] = useState(null);
    const handleSizeClick = (size) => {
        setSelectSize(size);
    };

    return (
        <div className='singleProduct-container'>
            <Navbar />
            <div className="singleProduct-wrapper">
                <div className='singleProduct-imageSection'>
                    <img src={product.img} alt={product.title} className='singleProduct-image' />
                </div>

                <div className='singleProduct-infoSection'>
                    <h2 className='singleProduct-title'>{product.title}</h2>
                    <p className='singleProduct-number'>${product.price}</p>
                    <h4 className='description-title'>Description</h4>
                    <p className='singleProduct-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet est autem natus repellat, rem dolore deleniti. Aliquid, animi eius veritatis, quasi reiciendis sit porro a commodi eos repellat atque.
                    </p>
                    
                    <div className='singleProduct-options'>
                        <div className='colors-section'>
                            <h4>Colors</h4>
                            <div className='colors'>
                                {colors.map((color) => (
                                    <div 
                                        key={color} 
                                        className="color-circle" 
                                        style={{ backgroundColor: color, outline: selectedColor === color ? `3px solid ${color}` : "" }} 
                                        onClick={() => handleCircleClick(color)}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className='sizes-section'>
                            <h4>Size</h4>
                            <div className='sizes'>
                                {sizes.map((size) => (
                                    <span 
                                        key={size} 
                                        style={{ border: selectSize === size ? "1px solid #ccc" : "" }} 
                                        onClick={() => handleSizeClick(size)}
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='addToCart'>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SingleProduct;
