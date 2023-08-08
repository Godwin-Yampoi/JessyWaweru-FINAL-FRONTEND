import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../providers/Auth.provider";
import Table from "./Table";
import { CartContext } from "./CartProvider";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const auth = useAuthContext();
  const {cart}=useContext(CartContext)
 const [isAdmin,setIsAdmin]=useState(false)

  // get all product details
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    if(user && user.admin===true){
      setIsAdmin(true)
    }
  },[])

  const handleDelete = () => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        window.location.reload();
        window.location.href = "/products";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  
  return (
    <div className="bg-https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
      style={{
        backgroundImage:`url('https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80')`
      }}>
        
        <div className="mb-10">
      {/* heading */}
      <div className="bg-gray-700">
        <h1 className="uppercase py-8 text-rose-100 text-4xl font-semibold text-center">
          {product.name}
        </h1>
        <p className="text-white text-center pb-5 italic font-thin">
          {product.about}
        </p>
      </div>
      {/* body */}
      <div className="w-3/4 flex justify-between m-auto mt-8">
        <div className="flex flex-col w-3/4">
          {/* image */}
          <div>
            <img
              src={product.image || "/assets/pexels-luis-quintero-2774556.jpg"}
              alt="productDetails"
              className="h-96 w-3/4 m-auto rounded-lg"
            />
          </div>
          <div>

          </div>

          <div className="flex justify-between w-full border-t py-2">
            { isAdmin &&(
              <>
              <Link to={`/updateProduct/${id}`}>
                <button className="bg-gray-600 rounded-lg w-48 text-white hover:opacity-80 p-2 mr-2">
                  Update
                </button>
              </Link>
              <button
                onClick={handleDelete}
                className="bg-gray-600 rounded-lg w-48 text-white hover:opacity-80 p-2"
              >
                Delete
              </button>
              </>)}
            </div>

          {/* about */}
          <div>
            <div className="flex gap-2 text-3xl items-center py-5">
              <div className="h-16 w-16 rounded-full bg-rose-600 text-white flex items-center justify-center">
              <FontAwesomeIcon icon={faInfoCircle} className="fa-solid"/>
              </div>
              <h3 className="text-gray-700 border-b-2 border-rose-600 font-bold uppercase">
                About the product
              </h3>
            </div>
            <p>{product.description}</p>
          </div>
          
          <div>
            <div className="flex gap-2 text-3xl items-center py-5">
              <div className="h-16 w-16 rounded-full bg-rose-600 text-white flex items-center justify-center">
              <FontAwesomeIcon icon={faTrophy} className="fa-solid"/>
              </div>
              <h3 className="text-gray-700 border-b-2 border-rose-600 font-bold uppercase">
                ECOMMERCE RANKINGS;
              
              </h3>
            </div>
        <div>
          <div className="flex gap-2">
            

          <Table product={product}/>
          </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
)
            }
export default ProductDetails
