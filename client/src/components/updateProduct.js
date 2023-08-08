import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "./ProductForm";

export default function UpdateProduct() {
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `http://localhost:3000/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);

  const handleUpdateProduct = async (productDetails) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productDetails),
        }
      );
      if (response.ok) {
        // handle success case
        navigate(`/products`);
        console.log("Product updated successfully!");
      } else {
        // handle error case
        setErrorMsg("Failed to update product.");
      }
    } catch (error) {
      console.error("An error occurred while updating the product:", error);
    }
  };

  return (
    <>
      {product && (
        <ProductForm
          isUpdatePage={true}
          productData={product}
          errorMsg={errorMsg}
          handleSubmit={handleUpdateProduct}
        />
      )}
    </>
  );
}