import { Grid } from '@mui/material';

import ProductCard from './ProductCard';

function Product({ products, isLoading, hasError, setHasError }) {
  if (hasError) {
    return "Oops, Couldn't get the products";
  }

  if (isLoading) {
    return <p>Products are loading ...</p>;
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      rowGap={2}
      columnGap={2}
      gridRow={4}
    >
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </Grid>
  );
}

export default Product;
