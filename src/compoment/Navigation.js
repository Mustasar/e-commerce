import { Link } from "react-router-dom";
import {useContext,useState} from "react";
import { CartContext} from "../pages/CartContext";


const Navigation = () => {
  let {cart} = useContext(CartContext);
  let _cart = {...cart}
  

  const cartStyle= {
    background: "#FF9800",
    padding: "8px 16px",
    borderRadius: "50px",
    display:"flex",
  }

  return (
    <>
     <nav className="container m-auto flex items-center justify-between py-2">
         <Link to="/"><img style={{height:45}} src="../images/logo.png" alt="logo"/></Link>
         <ul className="flex items-center justify-between">
            <li>
                 <Link to="/"> Home</Link>
            </li>
            <li className="ml-6">
                <Link to="/Product">Product</Link>
            </li>
            <li className="ml-6">
                <Link to="./cart">
                <div style={cartStyle}>
                   <span className="text-white">{(!_cart.totaleItems) ? 0: _cart.totaleItems}</span>
                   <img className="ml-2" src="../images/cart.png"/>
                </div>
                </Link>               
            </li>
         </ul>

     </nav>
        


        
    </>
  )
}

export default Navigation;