import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";


const Cart = () => {
  const { cart } = useContext(CartContext);
  const [products, setproducts] = useState([]);

  console.log();

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    let str = cart.items;
    let strArr = [];
    for (const i in str) {
      fetch(`https://fakestoreapi.com/products/${i}`)
        .then((res) => res.json())
        .then((product) => {
          strArr.push(product)
          setproducts(strArr);
        });        
    }
  }, [cart]);

  console.log(products);

  return (
    <>
      <div className="container mx-auto lg:w-1/2 w-full pb-24">
        <h1 className="my-12 font-bold">Cart items</h1>
        <ul>  
        <li className="flex items-center justify-between mb-11">
                <div className="flex items-center">
                  <img className="w-28" src="./images/peproni.png" />
                  <span className="font-bold ml-4 w-84">value</span>
                </div>
                <div>
                  <button className="bg-yellow-500 rounded-full px-4 py-2">
                    -
                  </button>
                  <b className="px-3">0</b>
                  <button className="bg-yellow-500 rounded-full px-4 py-2">
                    +
                  </button>
                </div>
                <div>
                  <span className="font-bold">₹ 1000</span>
                </div>
                <div>
                  <button className="bg-yellow-500 rounded-full px-4 py-2">
                    Delete
                  </button>
                </div>
              </li> 
        </ul>
        <hr className="my-4" />

        <div className="my-4 font-bold text-right">Grand Total: ₹ 1000</div>
        <div className="text-right">
          <button className="bg-yellow-500 rounded-full px-4 py-2 font-bold">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
