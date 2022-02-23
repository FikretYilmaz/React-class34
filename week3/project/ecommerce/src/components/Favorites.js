import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard.js';
import { ProductIdContext } from './ProductIdContext.js';

const Favorites = () => {
  const singleProductURL = 'https://fakestoreapi.com/products/';
  const [arrayOfElements, setArrayOfElements] = useState([]);
  const { favoritesList } = useContext(ProductIdContext);

  useEffect(() => {
    setArrayOfElements([]);
    async function fetchData() {
      try {
        favoritesList.forEach(async (cardId) => {
          const response = await fetch(`${singleProductURL}${cardId}`);
          const productDetail = await response.json();
          setArrayOfElements((previous) => [
            ...previous,
            <ProductCard key={cardId} product={productDetail} />,
          ]);
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [favoritesList]);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        rowGap={2}
        columnGap={2}
        gridRow={4}
      >
        {arrayOfElements}
      </Grid>
    </div>
  );
};

export default Favorites;
