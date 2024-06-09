import {
  BrowserRouter as Router,Route,Routes,
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home"

import Cart from "./pages/cart/Cart"
import NoPage from "./pages/noPage/NoPage"
import Order from "./pages/order/Order"

function App() {


  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/*" element={<NoPage/>} /> 
      </Routes>
    </Router>
    
  )
}

export default App
