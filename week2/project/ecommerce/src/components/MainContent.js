import React, { useEffect, useState } from 'react';
import Category from './Category';
import Product from './Product';

import { Grid } from '@mui/material';
const productsURL = 'https://fakestoreapi.com/products/';
const categoryURL = 'https://fakestoreapi.com/products/categories';

function MainContent() {
  const [chosenCategory, setChosenCategory] = useState('');
  const [product, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [updateProducts, setUpdateProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(productsURL);
        const products = await response.json();
        setUpdateProducts(products);
        setProducts(products);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(categoryURL);
      const allCategories = await response.json();
      setCategories(allCategories);
    })();
  }, []);

  if (hasError) {
    return 'Oops, something went wrong. Come back later!';
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  const handleCategory = (categoryName) => {
    if (chosenCategory === categoryName) {
      setProducts(updateProducts);
      setChosenCategory('');
    } else {
      const result = updateProducts.filter(
        (item) => item.category === categoryName,
      );
      setChosenCategory(categoryName);
      setProducts(result);
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
        {categories.map((categoryName, index) => {
          return (
            <Category
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
        {product.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              title={product.title}
              image={product.image}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default MainContent;
