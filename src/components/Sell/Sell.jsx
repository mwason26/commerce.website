import React from 'react';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

// import { SubHeading } from '../../components';
 import sellImg from '../../images/sell.jpg'
import './sell.css';

const Sell = () => {

return (
<>
<br/>
<AnimatedOnScroll animationIn="fadeInRight">
    <section className="container" id="sell">
      <div className="sell-text">
        <h1> Sell Your Products</h1>
        <p>
        Selling a product doesn't have to be complicated. At its most basic level, 
        a sales program is defined principally by what you sell, 
        who you sell it to and how you sell it. Beyond that, sales involves staying focused on the details of your product and customers. As a sales program continues you will want to keep paying attention to changing trends and the needs or desires of your customers.
        By observing these changes you will be able to adjust your program and keep your sales strong.
        </p>
        <button className='button-style' onClick={()=> window.open("/sellProduct","_blank")}>Sell your first Product💲</button>
      </div>
      <div className="sell-img">
        <img src={sellImg}></img>
      </div>
    </section>
    </AnimatedOnScroll>
  </>
  )
}




export default Sell;