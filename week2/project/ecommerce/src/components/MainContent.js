import React, { useState, useEffect } from 'react';
import Category from './Category';
import Product from './Product';

const productByCategories = 'https://fakestoreapi.com/products/category/';
const productsURL = 'https://fakestoreapi.com/products/';

function MainContent() {
  const [chosenCategory, setChosenCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    if (chosenCategory !== '') {
      const fetchProductByCategories = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(
            `${productByCategories}${chosenCategory}`,
          );
          const productsCategory = await response.json();
          setProducts(productsCategory);
          setSelectedCategory(productsCategory);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setHasError(true);
        }
      };
      fetchProductByCategories();
    } else {
      const fetchAllProduct = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(productsURL);
          const product = await response.json();
          setFilteredProducts(product);
          setProducts(product);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setHasError(true);
        }
      };
      fetchAllProduct();
    }
  }, [chosenCategory]);

  return (
    <React.Fragment>
      <h1>Products</h1>
      <Category
        setProducts={setProducts}
        filteredProducts={filteredProducts}
        setChosenCategory={setChosenCategory}
        chosenCategory={chosenCategory}
        selectedCategory={selectedCategory}
      />

      <Product products={products} isLoading={isLoading} hasError={hasError} />
    </React.Fragment>
  );
}

export default MainContent;
