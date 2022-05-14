import React, { useState } from "react";
import {
    Row,Col,FormGroup,Input,Label,Form,Button
  } from 'reactstrap'
  
  const SignUp = () => {
    return (
        <>
        <Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="Email">
          Email
        </Label>
        <Input
          id="Email"
          name="email"
          placeholder="abc123@xyz.com"
          type="email"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="Password">
          Password
        </Label>
        <Input
          id="Password"
          name="password"
          placeholder="Enter a password"
          type="password"
        />
      </FormGroup>
      </Col>
      <Col md={6}>
      <FormGroup>
        <Label for="PasswordConfirm">
          Confirm Password
        </Label>
        <Input
          id="PasswordConfirm"
          name="Coonfirm Password"
          placeholder="Confirm password"
          type="password"
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="Address">
      Address
    </Label>
    <Input
      id="Address"
      name="address"
      placeholder="1234 Main St"
    />
  </FormGroup>
  <FormGroup>
    <Label for="Address2">
      Address 2
    </Label>
    <Input
      id="Address2"
      name="address2"
      placeholder="Apartment, studio, or floor"
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="City">
          City
        </Label>
        <Input
          id="City"
          name="city"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="State">
          State
        </Label>
        <Input
          id="State"
          name="state"
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="Zip">
          Zip
        </Label>
        <Input
          id="Zip"
          name="zip"
        />
      </FormGroup>
    </Col>
  </Row>
</Form>
      </>
    );
  };
  
  export default SignUp;
  
  