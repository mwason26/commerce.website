import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import MarketPlace from './components/MarketPlace/MarketPlace';
import { Routes, Route, Link } from "react-router-dom";
import SellDesc from './components/Sell/sellDesc';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  

    <Header/>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/sellProduct" element={<SellDesc/>} />
      </Routes>
    </BrowserRouter>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
