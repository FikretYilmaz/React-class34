import React, { useEffect, useState } from 'react';
import Category from './Category';
import Product from './Product';

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
  return (
    <React.Fragment>
      <h1>Products</h1>
      <Category
        setProducts={setProducts}
        updateProducts={updateProducts}
        setChosenCategory={setChosenCategory}
        categories={categories}
        chosenCategory={chosenCategory}
      />
      <Product product={product} />
    </React.Fragment>
  );
}

export default MainContent;
