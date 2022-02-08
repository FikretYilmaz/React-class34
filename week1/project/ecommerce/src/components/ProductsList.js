import React, { useState } from 'react';
import Categories from './Categories';
import Product from './Product';
import { allProduct } from '../fake-data/all-products';
import { allCategories } from '../fake-data/all-categories';
import { Grid } from '@mui/material';

function ProductsList() {
  const [products, setProducts] = useState(allProduct);
  const [category, setCategory] = useState(allCategories);

  const sliceCategory = category.map((item) => {
    return item.slice(6);
  });

  const handleCategory = (categoryName) => {
    const result = products.filter(
      (product) => product.category === categoryName,
    );
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        rowGap={1}
        columnGap={1}
        marginBottom={5}
      >
        <Categories
          sliceCategory={sliceCategory}
          handleCategory={handleCategory}
          //categoryName={categoryName}
        ></Categories>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        rowGap={2}
        columnGap={2}
        gridRow={4}
      >
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              rating={product.rating}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default ProductsList;
