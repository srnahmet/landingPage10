import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg p-4">
        <a className="navbar-brand p-1" href="#main">Coller</a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''} justify-content-end`}>
          <ul className="navbar-nav">
            <li className="nav-item p-4">
              <a className="nav-link"  onClick={() => scrollToSection('main')}>Product</a>
            </li>
            <li className="nav-item p-4">
              <a className="nav-link"  onClick={() => scrollToSection('buy-exhibit')}>Solutions</a>
            </li>
            <li className="nav-item p-4">
              <a className="nav-link"  onClick={() => scrollToSection('why-join-us')}>Pricing</a>
            </li>
            <li className="nav-item p-4">
              <a className="nav-link"  onClick={() => scrollToSection('testimonials')}>Resources</a>
            </li>
            <li className="nav-item p-4">
              <a className="nav-link"  onClick={() => scrollToSection('info-section')}>Log In</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" style={{color: "#78350f"}} onClick={() => scrollToSection('image-popups')}>Pop-up Resim</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: "#78350f"}} onClick={() => scrollToSection('footer')}>Footer</a>
            </li> */}
            <li className="nav-item p-4 px-5">
              <a className="btn ml-3 sign-up" href="#sign-up">Sign Up Now</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
