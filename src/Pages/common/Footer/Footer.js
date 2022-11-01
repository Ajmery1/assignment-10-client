import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='d-flex align-items-center '>
            <div className='footer-logo'>
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/7c/43/1b/7c431bc5-3112-2eb5-ebb1-462c9b72565b/source/512x512bb.jpg" alt="" />
    <h3 className='pt-2 text-white'>WebEducal</h3>
            </div>
            <div className='text-white ps-5 pt-4'>
                <h4>Contact Us</h4>
                <p><strong>Address: </strong>Narayanganj</p>
                <p><strong>Phone:</strong> 017988*****</p>
                <p><strong>Email: </strong>Webeducal@gmail.com</p>
            </div>
           </div>
            <hr />
            <p>Copyright @ 2022 Webeducal: All right reserve.</p>
            <input type="email" placeholder='Enter your email address'/>
        </div>
        
    );
};

export default Footer;