import { BrowserRouter, Routes, Route, json} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navigation from "./compoment/Navigation";
import Single from "./compoment/Single";
import { CartContext } from "./pages/CartContext";
import { useEffect, useState } from "react";



function App() {
    const [cart, setCart] = useState({});
    useEffect(() =>{
        const cart = window.localStorage.getItem('cart')
        setCart(JSON.parse(cart))        
    
    },[])
    useEffect(()=>{
        window.localStorage.setItem('cart',JSON.stringify(cart))

    },[cart])
    return(
        <>            
            <BrowserRouter>
                <CartContext.Provider value ={{cart,setCart}}>
                <Navigation />
                <Routes>
                    <Route path="/" Component={Home} ></Route>
                    <Route path="/Product" Component={Product}></Route>
                    <Route path="/Product/:id" Component={Single}></Route>
                    <Route path="/Cart" Component={Cart}></Route>
                </Routes>
                </CartContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default App;