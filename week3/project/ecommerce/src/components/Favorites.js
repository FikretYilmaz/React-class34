import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import { ProductIdContext } from '../context/ProductIdContext.js';

import useFetch from '../hooks/useFetch.js';
import ProductCard from './ProductCard.js';

const Favorites = () => {
  const { arrayOfProductDetails } = useContext(ProductIdContext);

  const {} = useFetch();

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
        {arrayOfProductDetails.length > 0 ? (
          arrayOfProductDetails.map((productDetail) => (
            <ProductCard key={productDetail.id} product={productDetail} />
          ))
        ) : (
          <span>There is no Category</span>
        )}
      </Grid>
    </div>
  );
};

export default Favorites;
