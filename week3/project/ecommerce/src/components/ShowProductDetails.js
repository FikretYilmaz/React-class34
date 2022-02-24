import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetails from './ProductDetails';
const ShowProductDetails = () => {
  const [isProductLoading, setIsProductLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const singleProductURL = 'https://fakestoreapi.com/products/';
  const { id } = useParams();
  const [productObject, setProductObject] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        setIsProductLoading(true);
        const response = await fetch(`${singleProductURL}${id}`);
        const productDetail = await response.json();
        setProductObject(productDetail);
        setIsProductLoading(false);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    }
    fetchData();
  }, [id]);

  if (hasError) {
    return "Oops, Couldn't get the product";
  }

  if (isProductLoading) {
    return <p>Product is loading ...</p>;
  }
  return (
    <div>
      <ProductDetails product={productObject} />
    </div>
  );
};

export default ShowProductDetails;
