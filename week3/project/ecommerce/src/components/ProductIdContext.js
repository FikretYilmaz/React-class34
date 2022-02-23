import React, { createContext, useState } from 'react';

export const ProductIdContext = createContext();
export const ProductIdProvider = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState([]);

  // const favoritesList = [1, 2, 3, 4, 5, 6, 7];
  const sharedValues = { favoritesList, setFavoritesList };
  return (
    <ProductIdContext.Provider value={sharedValues}>
      {children}
    </ProductIdContext.Provider>
  );
};
