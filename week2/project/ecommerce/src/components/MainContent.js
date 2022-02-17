import React, { useState } from 'react';
import Category from './Category';
import Product from './Product';

function MainContent() {
  const [chosenCategory, setChosenCategory] = useState('');
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <React.Fragment>
      <h1>Products</h1>
      <Category
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setProducts={setProducts}
        filteredProducts={filteredProducts}
        setChosenCategory={setChosenCategory}
        chosenCategory={chosenCategory}
      />
      <Product
        products={products}
        setFilteredProducts={setFilteredProducts}
        setProducts={setProducts}
        setIsLoading={setIsLoading}
        setHasError={setHasError}
        hasError={hasError}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
}

export default MainContent;
