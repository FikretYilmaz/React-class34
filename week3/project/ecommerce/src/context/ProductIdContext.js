import React, { createContext, useState } from 'react';

export const ProductIdContext = createContext();

export const ProductIdProvider = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState([]);
  const sharedValues = { favoritesList, setFavoritesList };

  return (
    <ProductIdContext.Provider value={sharedValues}>
      {children}
    </ProductIdContext.Provider>
  );
};
