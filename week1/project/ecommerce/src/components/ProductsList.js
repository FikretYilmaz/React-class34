import React, { useState } from 'react';
import Categories from './Categories';
import Product from './Product';
import { allProduct } from '../fake-data/all-products';
import { allCategories } from '../fake-data/all-categories';
import { Grid } from '@mui/material';

function ProductsList() {
  const [products, setProducts] = useState(allProduct);
  const [category, setCategory] = useState(allCategories);
  const [alignment, setAlignment] = useState(allProduct);
  const [chosenCategory, setChosenCategory] = useState('');

  const sliceCategory = category.map((item) => item.slice(6));

  const handleCategory = (categoryName) => {
    if (chosenCategory) {
      setAlignment(products);
      setChosenCategory('');
    } else {
      let result = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i].category === categoryName) {
          result.push(products[i]);
        }
      }
      setChosenCategory(categoryName);
      setAlignment(result);
    }
  };

  return (
    <React.Fragment>
      <h1>Products</h1>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        rowGap={1}
        columnGap={1}
        marginBottom={5}
      >
        {sliceCategory.map((categoryName, index, result, setProducts) => {
          return (
            <Categories
              result={result}
              setProducts={setProducts}
              categoryName={categoryName}
              key={index}
              handleCategory={handleCategory}
              chosenCategory={chosenCategory}
            />
          );
        })}
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
        {alignment.map((product) => {
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
