import React from 'react';
import marketImg from '../../images/market.jpg'
import './market.css';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const MarketPlace = () => {


return (
<AnimatedOnScroll animationIn="fadeInLeft">
    <section className="container" id="marketPlace">
      <div className="market-text">
        <h1> Build an online store</h1>
        <p>
        The number one channel you should be making use of to market online, is your own website. It’s the only way you will be able to establish a brand that stays on top of a consumer’s mind, making a place for itself instead of continually competing with other businesses that market the same or similar products.  

    Starting an online store may seem like a challenging task. But with COMMERCE, you will be able to take your business online in no time using an easy-to-use editor and features to build an online storefront. 

    Another benefit of starting your online store is that you will have complete control over the revenue you make. You will not have to part with the profits in terms of the commission fees you will otherwise have to give online marketplaces. 
       
       </p>
       <button className='button-style' onClick={()=> window.open("/marketPlace","_self")}>Get Started ➡️</button>
      </div>
      <div className="market-img">
        <img src={marketImg}></img>
      </div>
      
    </section>
    
    </AnimatedOnScroll>
  )
}




export default MarketPlace;