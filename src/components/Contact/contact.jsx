import React from 'react';
import instaImg from '../../images/insta.png.png'
import fbImg from '../../images/fb.png'
import LinkedInImg from '../../images/LinkedIn.png'
import './contact.css';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const Contact = () => {


return (
<AnimatedOnScroll animationIn="fadeInLeft">
    <section className="container" id="Contact">
      <div className="contact-text">
        <h1> Have Queries? Contact Us</h1>
        <div id = "leftbox">
                <h2>Our Official Address:</h2>
               <h5> Street Address :2688 Kelly Drive <br/>
                City :Summersville <br/>
                State : WV <br/>
                State: Full West Virginia <br/>
                Zipcode:26651 <br/>
                Telephone Number: 304-618-5663 <br/>
                </h5>
            </div> 
              
            <div id = "middlebox">
                <h2>Reach out to us via: </h2>
                <h5> Drop in a mail 📨: abc123@xyz.com <br/>
                 or <br/>
                 Call us 📞: 9X7X54X21X  
                </h5>
                
            </div>
              
            <div id = "rightbox">
                <h2>Find us at:</h2>
               <div className='social-links'>
                <img src={instaImg} 
                style={{background: "transparent"}}
                width="50px"
                height={"50px"}>
                </img>
                <h5>@commerce</h5>
                </div>
                <br/>
                <div className='social-links'>
                <img src={fbImg} 
                style={{background: "transparent"}}
                width="50px"
                height={"50px"}/>
                <h5>Commerce</h5>
                </div>
                
                <br/>
                <div className='social-links'>
                <img src={LinkedInImg} 
                style={{background: "transparent"}}
                width="50px"
                height={"50px"}/>
                <h5>Commerce Platform</h5>
                </div>
            </div>

      </div>
      
    </section>
    
    </AnimatedOnScroll>
  )
}




export default Contact;