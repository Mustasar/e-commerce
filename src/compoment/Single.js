import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

const Single = () => {
const [products,setproducts] = useState([]);
const params = useParams();
useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => res.json())
    .then(product =>{
        setproducts(product)
    })
},[])

// const history = useHistory();
// const goBack = () => {
//   history.goBack();
// };
    
  return (
    <div className="container mx-auto py-24">
    {/* <button className="mb-12 font-bold" onClick={goBack}>Back</button> */}
        <div className="flex justify-center">
            <img src={products.image}/>
            <div className="px-4">
                <h2 className="text-3xl md: text-6xl font-bold pb-6">{products.category}</h2>
                <p className="text-lg pb-4">{products.description}</p>
                <h6 className="text-lg"><em>{products.title}</em></h6>                
                <h2 className="text-lg font-bold py-2">₹ {products.price}</h2>
                <button className="rounded-full py-2 px-6 bg-yellow-500 font-bold">Order Now</button>
               

            </div>
        </div>
    </div>
  )
}

export default Single;