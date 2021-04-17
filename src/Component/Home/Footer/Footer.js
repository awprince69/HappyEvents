import React from 'react';
import './Footer.css'
import bottomLogo from '../../../images/bottom-logo.png'
import location from '../../../images/icon/location.svg'
import gmail from '../../../images/icon/gmail.png'
import phone from '../../../images/icon/phone.png'
const Footer = () => {
    return (
        <footer className='footer-area '>
            <div className='container'>
                <div className='row py-5 '>
                    <div className='col-md-4'>
                        <img src={bottomLogo} alt="" />
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, unde.</p>
                    </div>
                    <div className='col-md-4 text-white'>
                        <h4 className='mb-4'>Useful Links</h4>
                        <div className='list-unstyled listDesign'>
                            <li >Prices & Policies</li>
                            <li >Customers Review</li>
                            <li >Photo Gallery</li>
                        </div>
                    </div>
                    <div className='col-md-4 text-white'>
                        <h4 className='mb-4'>Contacts</h4>
                        <div className='list-unstyled listDesign'>
                            <li ><img  src={location} alt="" width='30'/> San Francisco, CA 94102, US</li>
                            <li><img  src={gmail} alt="" width='30'/> gobaby@example.com</li>
                            <li ><img  src={phone} alt="" width='30'/>+86 155 123 1234</li>
                        </div>

                    </div>
                </div>
                <div className="text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
