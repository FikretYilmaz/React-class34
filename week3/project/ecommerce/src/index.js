import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Favorites from './components/Favorites';
import ShowProductDetails from './components/ShowProductDetails';
import Navigation from './components/Navigation';
import { ProductIdProvider } from './components/ProductIdContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductIdProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="product/:id" element={<ShowProductDetails />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
        </Routes>
      </Router>
    </ProductIdProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
