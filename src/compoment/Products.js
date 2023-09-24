import { useState,useEffect, useContext } from "react";
import Product from "./Product";
import { CartContext } from "../pages/CartContext";

const Products = () => {
  const [products, setproducts] = useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data =>{
        setproducts(data)
      })
      
    },[])
   
    console.log(products);

  return (
    <div className="container mx-auto pb-24">
        <h2 className="text-lg font-bold my-8">Product </h2>
        <div className="grid gap-8 grid-cols-5 my-8">
        {
          products.map(product => <Product key={product.id} product={product}/>)
        }          
        </div>
    </div>
  )
}



export default Products;