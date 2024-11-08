import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <p className="footer-heading">Product</p>
          <p className='footer-item'>Pricing</p>
          <p className='footer-item'>Overview</p>
          <p className='footer-item'>Browse</p>
          <p className='footer-item'>Accessibility</p>
          <p className='footer-item'>Five</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Solutions</p>
          <p className='footer-item'>Brainstorming</p>
          <p className='footer-item'>Ideation</p>
          <p className='footer-item'>Wireframing</p>
          <p className='footer-item'>Research</p>
          <p className='footer-item'>Design</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Support</p>
          <p className='footer-item'>Developers</p>
          <p className='footer-item'>Documentation</p>
          <p className='footer-item'>Integrations</p>
          <p className='footer-item'>Reports</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Get the App</p>
          <img src="/landingPage10/images/footer/iphone.png" alt="app image" className="footer-image" />
          <img src="/landingPage10/images/footer/google.png" alt="app image" className="footer-image" />
          <p className='footer-item'>Follow Us</p>
            <i className="fab fa-youtube footer-icon"></i>
            <i className="fab fa-facebook footer-icon"></i>
            <i className="fab fa-twitter footer-icon"></i>
            <i className="fab fa-instagram footer-icon"></i>
            <i className="fab fa-linkedin footer-icon"></i>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-left">Collers @ 2023. All rights reserved.</p>
        <div className="footer-right">
          <span className="footer-word">Terms</span>
          <span className="footer-word">Privacy</span>
          <span className="footer-word">Contact</span>
          <span className="footer-word">EN</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
