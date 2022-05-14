import React, { useState } from "react";
import {
    Form, FormGroup,Label,Input, ModalBody, ModalFooter,Button, Modal,ModalHeader
  } from 'reactstrap'
import SignUp from "./signup";
  
  const Login = () => {
      const [showNestedModal, setshowNestedModal] = useState(false)
    return (
        <>
        <ModalBody>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="abc123@xyz.com"
            type="email"
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Enter password"
            type="password"
          />
        <a href="/forgotPassword">Forgot Password?</a>
        </FormGroup>
        </Form>
        
        </ModalBody>
        <ModalFooter>
        <Button
          color="primary"
          
        >
          Login
        </Button>
        
        {' '}
        <Button onClick={()=> setshowNestedModal(true)}>
          Sign Up
        </Button>
        <Modal isOpen={showNestedModal}>
        <ModalHeader>
         Sign up here 
        </ModalHeader>
        <ModalBody>
          <SignUp/>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={function noRefCheck(){}}
          >
            Sign In
          </Button>
          {' '}
          <Button onClick={()=>setshowNestedModal(false)}>
         Cancel
          </Button>
        </ModalFooter>
      </Modal>
      </ModalFooter>
      </>
    );
  };
  
  export default Login;
  
  