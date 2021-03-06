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
import MarketDesc from './components/MarketPlace/marketPlaceDesc';
import Develop from './components/Develop/Develop';
import CommunityDesc from './components/Community/communityDesc';
import CommunityDescMain from './components/Community/CommunityDescMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
<React.StrictMode>
    <Header/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route  path="/sellProduct" element={<SellDesc/>} />
        <Route  path="/marketplace" element={<MarketDesc/>} />
        <Route  path="/develop" element={<Develop/>} />
        <Route  path="/community" element={<CommunityDescMain/>} />
        <Route  path="/resources" element={<Develop/>} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
