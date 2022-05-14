import React, { useEffect } from 'react';
import {
   Card,CardGroup,CardImg,CardTitle,CardSubtitle, Button,CardText, CardBody, Col, Row
  } from 'reactstrap'

const MarketDesc = () =>{
const [image,setImage] = React.useState()

const preview = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
}

return(
<section>   
<div className='sellForm'>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>  
    <br/>
   
    <h1 style={{textAlign:"center"}}> See your listings</h1>
    <CardGroup>
    
        <Col lg={3}>
    <Card style={{margin:"40px"}}>
    <CardImg
      alt="Nike Shoes"
      src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/53716222-2341-477c-b508-80909e3b0d67/waffle-debut-shoes-JRWJk7.png"
      top
      width="100px"
      height={'400px'}
    />
    <CardBody>
      <CardTitle tag="h5">
        Nike Shoes
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Men's Shoes Price : ${100}
      </CardSubtitle>
      <CardText>
      Retro gets modernised in the Nike Waffle Debut. Remember that smooth suede and nylon trend? It's back, along with the modernised 'wedge' midsole that feels incredibly plush. And to top it off, we've kept the classic on the bottom—the tried, 
      true and trusted Waffle outsole—that adds traction, durability and heritage style to your step.
      </CardText>
      
    </CardBody>
  </Card>
  </Col>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Col lg={3} style={{margin:"40px"}}>
  <Card>
    <CardImg
      alt="wooden table"
      src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvDmJ9ou8ZHuWAQq8ekq5N8PPMm8ASyD9V70FluxlCVQkRuldFiiybMkr7vxGuXPMa7umBqozMwB6FtsjvcXHCWjbSZpBOkCe02OEdCF_D_Rf3IVbh9cMQmg&usqp=CAE"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Wooden Table
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       Price : $ 50 
      </CardSubtitle>
      <CardText>
      Beautifully finished in old style milk paint and hand rubbed satin clear coat finish for many many years of maintenance free use. This finish can also be "Distressed" to give the feel and look of an old cottage heirloom piece.(display pictures show distressed white) The drawer is hand made out of solid 3/4" maple hardwood, with hand made dovetail construction. The drawer is clear coat finished and smooth to the touch. All drawers use European softclose full extension drawer slides. These are the same slides found in high end custom kitchens (no cheap wooden tracks here) Materials: Poplar Hardwood Maple Hardwood Baltic Birch Hardwood Ply (USA made) 
      </CardText>
    </CardBody>
  </Card>
  </Col>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Col lg={3}>
  <Card style={{margin:"40px"}}>
    <CardImg
      alt="Andorid phone"
      src="data:image/jpeg;base64,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"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Android Phone
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Price: $ 1000
      </CardSubtitle>
      <CardText>
      Ultra 5g full specifications launch 2020, august 05 status available . released 2020, august 21 display dynamic amoled 2x capacitive touchscreen,16m colours size 6.9 inches resolution 1440 x 3088 pixels multi-touch body dimension 164.8 × 72.2 × 8.1 (6.49 × 3.04 × 0.32 in) weight 208 g (7.34 oz) sim dual sim memory ram 8gb / 12gb storage 256gb card slot microsdxc,( uses shared sim slot) main camera resolution features led flash, auto-hdr, panorama video 2160p@60fps, 1080p@240fps, 720p@960fps,hdr10+ stereo sound rec. gyro-is $ ois
      </CardText>

    </CardBody>
  </Card>
  </Col>
</CardGroup>
</div>
</section>
    )
}

export default MarketDesc