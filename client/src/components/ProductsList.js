import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import Searchbar from "./Searchbar";
import { useParams } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFire } from "@fortawesome/free-solid-svg-icons";
const ProductsList = () => {
  const {id}=useParams
  const [products, setProducts] = useState([]);


  //handling searchbar
  const [searchValue,setSearchValue]=useState("")
  const [filteredProducts, setFilteredProducts] = useState([]);
  
    //search parameter is the title
    const handleSearch = () => {
      console.log("search button clicked")
       const filteredProducts=products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filteredProducts);

      
    }; 
  

  // get all products
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
    <div className="bg-https://images.unsplash.com/photo-1570876050997-2fdefb00c004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      style={{
        backgroundImage:`url('https://images.unsplash.com/photo-1570876050997-2fdefb00c004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`
      }}>
    <div className="w-3/4 m-auto p-4 flex flex-col gap-4 min-h-screen">
      <div className="flex gap-2 text-4xl items-center py-5 mx-auto">
        <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
        <FontAwesomeIcon icon={faFire} className="fa-solid"/>
        </div>
        <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">
          HOTTEST PRODUCTS
        </h1>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="border px-4 py-2 rounded-full flex-1 mr-10 flex justify-between items-center text-white">
          <Searchbar setSearchValue={setSearchValue} handleSearch={handleSearch}/>
          <button onClick={handleSearch}>SEARCH</button>
          
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        </div>
      </div>

      <div className="flex flex-wrap  gap-4 ">
  
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))
          : products.map((product) => <ProductItem key={product.id} {...product} />)}
      </div>
    </div>
    </div>
  );
};
export default ProductsList;