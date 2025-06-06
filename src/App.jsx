import './App.css'
import Home from './pages/home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/home/register/Register'
import Login from './pages/home/login/Login'
import AllProducts from './pages/home/all products/AllProducts'
import SingleProduct from './pages/home/single product/SingleProduct'
import Cart from './pages/home/cart/Cart'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App
