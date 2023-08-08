import React, { useState } from "react";


export default function ProductForm({
  isUpdatePage = false,
  productData = undefined,
  errorMsg,
  handleSubmit,
 }) {
  //console.log(eventData);

  const [name, setName] = useState(productData?.name || "");
  const [description, setDescription] = useState(productData?.description || "");
  const [about, setAbout] = useState(productData?.about || "");
 
  const [image, setImage] = useState(productData?.image || "");
 

  const onSubmit = (e) => {
    e.preventDefault();
    const newProduct= {
      name,
      description,
  
      about,
      
      image,
      
    };
    handleSubmit(newProduct);
  };

  return (
    <div className="flex items-center justify-center min-h-screen mb-5">
      <form
        id="Add Product"
        onSubmit={onSubmit}
        className="w-1/2 border rounded-lg shadow-lg p-4 flex flex-col gap-4"
        method="post"
      >
        <h1 className="text-center text-2xl text-rose-600 uppercase">
          {isUpdatePage ? "Update this product" : "Create a new product"}
        </h1>
        {errorMsg && (
          <p className="text-center text-xl text-red-500">{errorMsg}</p>
        )}
        <h3>Name</h3>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg w-full p-3 text-gray-700"
          />
        </div>
        <h3>Image Url</h3>
        <div>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded-lg w-full p-3 text-gray-700"
          />
        </div>
        <h3>Description</h3>
        <div>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg w-full text-gray-700"
          />
        </div>
        <h3>About</h3>
        <div>
          <input
            type="text"
            className="border rounded-lg w-full p-3 text-gray-700"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        
       
        <button
          type="submit"
          className="bg-rose-600 rounded-lg w-48 p-3 mt-2 text-white hover:opacity-80 m-auto"
          
        >
          {isUpdatePage ? "Update" : "Create"} Product
        </button>
      </form>
    </div>
  );
}