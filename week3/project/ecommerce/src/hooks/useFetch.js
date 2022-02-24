import { useContext, useEffect, useState } from 'react';
import { ProductIdContext } from '../context/ProductIdContext.js';

function useFetch() {
  const singleProductURL = 'https://fakestoreapi.com/products/';
  const [arrayOfProductDetails, setArrayOfProductDetails] = useState([]);
  const { favoritesList } = useContext(ProductIdContext);

  useEffect(() => {
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
    setArrayOfProductDetails([]);
    fetchData();
  }, [favoritesList]);

  return { arrayOfProductDetails };
}

export default useFetch;
