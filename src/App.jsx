import {
  BrowserRouter as Router,Route,Routes,
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home"
import AllProducts from "./pages/allProducts/AllProducts";
import Cart from "./pages/cart/Cart"
import NoPage from "./pages/noPage/NoPage"
import Order from "./pages/order/Order"  
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from "./pages/ProductDetail/ProductDetail"

import SignIn from "./pages/SighIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";


function App() {


  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allProducts" element={<AllProducts/>}/>
        <Route path="/ProductDetail" element={<ProductDetail/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/*" element={<NoPage/>} /> 
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        
        
      </Routes>
      <ToastContainer/>
    </Router>
    
  )
}

export default App
