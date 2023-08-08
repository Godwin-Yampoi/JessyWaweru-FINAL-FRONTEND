import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
function ProductsHome() {
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


  
  return (
      <div className="w-full bg-gray-100 p-4 flex flex-col gap-4 items-center bg-https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
      style={{
        backgroundImage:`url('https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80')`
      }}>
      <div className="flex gap-2 text-4xl items-center py-5">
        <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
        <FontAwesomeIcon icon={faStar} className="fa-solid"/>
        </div>
        <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">
          OUR BEST SELECTIONS
        </h1>
      </div>
      <div className="flex w-3/5 justify-evenly flex-wrap items-center m-auto gap-4">
        {/* {Array(6)
          .fill(0)
          .map((e) => (
            <EventItem key={Math.random()} />
          ))} */}
        {products.slice(0, 6).map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      <Link to="/products">
        <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
          <i className="fa-solid fa-calendar-days mr-2"></i>See all Products
          <i className="fa-solid fa-arrow-right ml-1"></i>
        </button>
      </Link>
    </div>
  );
}

export default ProductsHome;