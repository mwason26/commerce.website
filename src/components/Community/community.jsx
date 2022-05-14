import React from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import communityImg from '../../images/community.jpg'
import './community.css';

const Community = () => {
  
return (
<>
<AnimatedOnScroll animationIn="fadeInLeft">
    <section className="container" id="community">
    <section>
      <div className="community-text">
        <h1> Creating Community </h1>
        <p>
        Building a community begins its mission when its members decide to start collaborating towards a common purpose. The real challenge is to then create the means for engaging the members in a way that brings new possibilities into being. The purpose must have a sense of urgency, which in turn makes people more likely to step up. The topic or challenge needs to be meaningful enough to lend itself to a real commitment, and has to have a bias to the future – a better world to create together, for instance.

        This purpose, this raison d’être to protect or pursue a collective intention, also needs to be aligned with individual self-interest, while at the same time the added value of collaborating needs to be clear for everyone. When this goal is a shared soul-feeding passion, this joint caring becomes a bond of identity.
        </p>
      </div>
      </section>
      <section>
      <div className="community-img">
        <img src={communityImg}></img>
      </div>
      </section>
    </section>
    </AnimatedOnScroll>
  </>
  )
}




export default Community;