import React from 'react';
import logo from '../images/COMMERCE-logos_white.png';
import './Header.css';
import {
  Button
} from 'reactstrap';
import {
  Modal,ModalBody,ModalFooter,ModalHeader
} from 'reactstrap'
import Login from './Login/login';


const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [showModal, setShowModal] =  React.useState(false)
    const home = ()=>{
      window.open("/", "_self")
    }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" onClick={()=> home()}/>
      </div>
      <ul className="navbar-links">
        <li className="nav-links"><a href="/sellProduct">Sell</a></li>
        <li className="nav-links"><a href="/marketPlace">MarketPlace</a></li>
        <li className="nav-links"><a href="/community">Community</a></li>
        <li className="nav-links"><a href="/develop">Develop</a></li>
        <li className="nav-links"><a href="/resources">Resources</a></li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="danger"onClick={()=>{
              setShowModal(true)
            }}>
               Log In
       </Button>


        <Modal isOpen={showModal}>
          <ModalHeader tag={'h3'} 
          close={<button className="close" onClick={()=> {setShowModal(false)}}>×</button>} >
           Log In or Sign up ⬇️
          </ModalHeader>
          <ModalBody>
            <Login/>
          </ModalBody>
        </Modal> 

      </ul>
      
      <div className="navbar-small nav-links">
        <a onClick={() => setToggleMenu(true)} >Get Started ⬇️ </a>
        
        {toggleMenu && (
            
          <div className="navbar-small_overlay flex__center slide-bottom">
              <div className="navbar-logo" >
                <img src={logo} alt="logo" onClick={home()}/>
              </div>  
            <ul className="navbar-small_links">
              <li><a href="/sell" onClick={() => setToggleMenu(false)}>Sell</a></li>
              <li><a href="/marketPlace" onClick={() => setToggleMenu(false)}>MarketPlace</a></li>
              <li><a href="/community" onClick={() => setToggleMenu(false)}>Community</a></li>
              <li><a href="/develop" onClick={() => setToggleMenu(false)}>Develop</a></li>
              <li><a href="/resources" onClick={() => setToggleMenu(false)}>Resources</a></li>
              <li className="nav-links"><a href="/login">Log In</a></li>
              <li><a onClick={() => setToggleMenu(false)} >Close🚫</a></li>
              
            </ul>
          </div>
        )}
        </div>
    </nav>
  );
};

export default Header;

