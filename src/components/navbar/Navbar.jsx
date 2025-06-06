import React from 'react';
import './Navbar.css';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems?.length || 0;

  return (
    <nav className='navbar-container'>
      <div className='navbar-wrapper'>

        {/* Left Section */}
        <div className='navbar-left'>
          <span className='navbar-language'>EN</span>
          <div className='navbar-searchContainer'>
            <input type="text" placeholder='Search' className='navbar-input' />
            <IoSearch className='icon' />
          </div>
        </div>

        {/* Center Section */}
        <Link to="/"><div className='navbar-center'>
          <h1 className='navbar-logo'>Rise of Coding <span>.</span></h1>
        </div></Link>

        {/* Right Section */}
        <div className='navbar-right'>
          <Link to="/register">
            <div className='navbar-menuItem'>Register</div>
          </Link>
          <Link to="/login">
            <div className='navbar-menuItem'>Login</div>
          </Link>

          {/* Cart Section */}
          <Link to="/cart" className="navbar-cart">
            <MdOutlineShoppingCart className="icon" />
            {totalItems > 0 && <span className='cart-badge'>{totalItems}</span>}
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
