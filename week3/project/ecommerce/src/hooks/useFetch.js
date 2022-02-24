import { useContext, useEffect, useState } from 'react';
import { ProductIdContext } from '../context/ProductIdContext.js';

function useFetch() {
  const singleProductURL = 'https://fakestoreapi.com/products/';

  const { favoritesList, setArrayOfProductDetails } =
    useContext(ProductIdContext);

  useEffect(() => {
    setArrayOfProductDetails([]);
    console.log('render');
    async function fetchData() {
      try {
        favoritesList.forEach(async (cardId) => {
          const response = await fetch(`${singleProductURL}${cardId}`);
          const productDetail = await response.json();
          setArrayOfProductDetails((previous) => [...previous, productDetail]);
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return {};
}

export default useFetch;
