import React, { useEffect } from 'react';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import {
    Row,Col,FormGroup,Input,Label,Form,Button, FormText
  } from 'reactstrap'

const SellDesc = () =>{
const [image,setImage] = React.useState()

const preview = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
}

return(
<AnimatedOnScroll animationIn="fadeInLeft">
<section>   
<div className='sellForm'>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>  
    <br/>
            <h1 style={{textAlign:"center"}}> Add your Product Details</h1>
            <Form>
            <FormGroup row>
            &nbsp;<Label
                for="Name"
                sm={2}
                >
                Name of the Product
                </Label>
                <Col sm={10}>
                <Input
                    id="name"
                    name="name"
                    placeholder="Product Name"
                    type="name"
                />
                </Col>
            </FormGroup>
            <FormGroup row>
            &nbsp;<Label
                for="description"
                sm={2}
                >
                Description
                </Label>
                <Col sm={10}>
                <Input
                    id="description"
                    name="Description"
                    placeholder="Add Description"
                    type="Description"
                />
                </Col>
            </FormGroup>
            <FormGroup row>
            &nbsp;<Label
                for="Price"
                sm={2}
                >
                Quantity
                </Label>
                <Col sm={1}>
                <Input
                    min={0}
                    id="Quantity"
                    name="Description"
                    placeholder="Quantity"
                    type="number"
                />
                </Col>
            </FormGroup>
            <FormGroup row>
            &nbsp; <Label
                for="price"
                sm={2}
                >
                Price in $
                </Label>
                <Col sm={1}>
                <Input
                    min={0}
                    id="price"
                    name="price"
                    placeholder="price"
                    type="number"
                />
                </Col>
            </FormGroup>
            <Col sm={5}>
            <FormGroup>
            &nbsp;<Label for="File">
                File
                </Label>
            </FormGroup>
            </Col>
            <input type="file" id="img" name="img" accept="image/*" className="w-100" onChange={(e)=>preview(e)}/>

            {image?<img style={{float:"right", marginRight:"200px"}}src={image} alt="img"  width={"400"} height={"400"}/>:<></>}
            <br/>
            <br/>
            <Button color="primary">Add Product ✅</Button>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <Button color="danger">Cancel </Button>
            </Form>
</div>
</section>
</AnimatedOnScroll>
    )
}

export default SellDesc