import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import CommunityDesc from "./communityDesc";

const CommunityDescMain = () => {
    return(
        <AnimatedOnScroll animationIn="slideInDown">
             <br/>
    <br/>
    <h2 style={{marginTop:"5%", textAlign:"center"}}>Watch this video to understand how COMMERCE helps you in building Community</h2>
<section>
    <CommunityDesc/>   
</section>
</AnimatedOnScroll>
    )
}

export default CommunityDescMain