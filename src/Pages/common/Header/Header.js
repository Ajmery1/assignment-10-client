import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './header.css'
import { useState } from 'react';

const Header = () => {

// change navcolor
const [color, setColor] = useState(false)
const changeColor = () => {
  if (window.scrollY >= 90){
    setColor(true)
  }
  else{
    setColor(false)
  }
}
window.addEventListener('scroll', changeColor)


    return (
        <div className={color? 'header header-bg':'header'}>
            <nav className="navbar">
  <div className="container-fluid">
    <div className='d-flex'>
    <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/7c/43/1b/7c431bc5-3112-2eb5-ebb1-462c9b72565b/source/512x512bb.jpg" alt="" />
    <h3 className='pt-2'>WebEducal</h3>
    </div>
    <form className="d-flex justify-content-between" role="button">
   <Link to='/'>
    <button type="button" class="btn btn-secondary me-2">Courses</button>
    </Link>
   <Link to='/Login'>
    <button type="button" class="btn btn-secondary text-white me-2">Login</button>
    </Link>
      <Link to='/FAQ'>
      <button type="button" class="btn btn-secondary">FAQ</button>  
      </Link>
      </form>
  </div>
</nav>
        </div>
    );
};

export default Header;