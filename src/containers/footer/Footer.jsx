import React from 'react';
import siteLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="site__footer section__padding">
    <div className="site__footer-heading">
      <h1 className="gradient__text">Would you like to embrace the future ahead of the crowd?</h1>
    </div>

    <div className="site__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="site__footer-links">
      <div className="site__footer-links_logo">
        <img src={siteLogo} alt="site_logo" />
        <p>Morada/Address, <br /> All Rights Reserved</p>
      </div>
      <div className="site__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="site__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="site__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@gmail.net</p>
      </div>
    </div>

    <div className="site__footer-copyright">
      <p>@2023 FHSV. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;