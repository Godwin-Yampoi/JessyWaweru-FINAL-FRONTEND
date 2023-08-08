import React,{useContext,useEffect,useState} from 'react'
import { CartContext } from './CartProvider'
import ProductItem from './productItem'

const Cart=()=>{
    const {cart}=useContext(CartContext)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/products")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setProducts(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, []);
    

    return(
      <div className="bg-https://images.unsplash.com/photo-1570876050997-2fdefb00c004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      style={{
        backgroundImage:`url('https://images.unsplash.com/photo-1570876050997-2fdefb00c004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`
      }}>
            <h1 className=" text-center uppercase text-3xl font-bold text-white bg-gradient-to-r from-black-500 to-red-500 p-4 rounded-lg shadow-lg  ">SEARCH HISTORY</h1>
             <div  className="flex flex-wrap  gap-4 ">
                {cart.map((product,index)=>(
                   <ProductItem key={product.id} {...product} />
                ))}
             </div>
        </div>
    )
}

export default Cart