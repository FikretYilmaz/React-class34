import React, { createContext, useState } from 'react';

export const ProductIdContext = createContext();

export const ProductIdProvider = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState([]);
  const [arrayOfProductDetails, setArrayOfProductDetails] = useState([]);
  const sharedValues = {
    favoritesList,
    setFavoritesList,
    arrayOfProductDetails,
    setArrayOfProductDetails,
  };

  return (
    <ProductIdContext.Provider value={sharedValues}>
      {children}
    </ProductIdContext.Provider>
  );
};
