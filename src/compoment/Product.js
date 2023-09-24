import { Link } from "react-router-dom";
import { useContext,useState } from "react";
import { CartContext } from "../pages/CartContext";

export const Product = (props) => {
  const data= props.product;
  const strstyle ={
    height:'300px', 
    maxWidth:"300px",
    width:"100%",
  }
 
  const [isClicked, setIsClicked] = useState(false);  
  const {cart, setCart} = useContext(CartContext);

  const addcart = (event , data) =>{
    event.preventDefault ();
    let _cart = {...cart};

    if (!_cart.items) {
        _cart.items = {}
    }

    if (_cart.items[data.id]) {
      _cart.items[data.id] += 1;
    } else{
      _cart.items[data.id] = 1;
    }

    if (!_cart.totaleItems) {
      _cart.totaleItems = 1;
      }else{
        _cart.totaleItems += 1;
      }

  setCart(_cart)   
  setIsClicked(true)

  setTimeout(()=>{
    setIsClicked(false)
  },1000)

  }
  return (
    <Link to={`/product/${data.id}`}>
        <div style={{background: '#eee',padding:10,borderRadius:5}}>
            <img style={strstyle} src={data.image}/>
            <div className="text-center">
              <h2 className="font-bold my-2">{data.category}</h2>
              <button className="rounded-full bg-gray-200 py-1 px-4 text-sm">Small</button>
            </div>
            <div className="flex items-center justify-between my-2">
              <span>₹ {data.price}</span>
              <button onClick={ (e) => addcart(e,data)} className={`${isClicked ? 'bg-green-500':'bg-yellow-500' } rounded-full py-1 px-4  font-bold`}>ADD{isClicked ? 'ED':''}</button>
            </div>
          </div>
    </Link>
  )
}


export default Product;
