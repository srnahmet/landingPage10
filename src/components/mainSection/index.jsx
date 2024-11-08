import React from 'react';
import './MainSection.css';

function MainSection() {
  return (
    <section id="main-section">
      <div id="main-section-first">
        <div className="">
          <div className='row'>
            <div className="main-section-col-1 col-md-6">
              <h1 className='main-section-h1'>Collectible Sneakers</h1>
              <p className='main-section-typography'>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
              <div className='main-section-buttons'>
                <a className="btn ml-3 main-section-sign-up" href="#sign-up">Sign Up Now</a>
                <a className="btn ml-3 main-section-run-video" href="#run-video">
                  {/* <i className="bi bi-play-circle"></i> */}
                  <img className="main-section-watch-demo" src="/landingPage10/images/mainSection/watch-demo.png"></img>
                  &nbsp; Watch Demo
                </a>
              </div>
            </div>
            <div className="main-section-col-2 col-md-6">
              <div className='main-section-col-2-box'>
                <img className='main-section-image' src="/landingPage10/images/mainSection/shoe.png" alt="Shoe" />
              </div>
            </div>
          </div>
          <div className="row main-section-row-2">
            <div className="col-md-4">
              <img className='main-section-row2-image' src="/landingPage10/images/mainSection/row2col1.1.png" alt="Shoe" />
              <h3>Nibh vierra</h3>
              <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
            </div>
            <div className="col-md-4">
              <img className='main-section-row2-image' src="/landingPage10/images/mainSection/row2col2.1.png" alt="Shoe" />
              <h3>Cursus amet</h3>
              <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
            </div>
            <div className="col-md-4">
              <img className='main-section-row2-image' src="/landingPage10/images/mainSection/row2col3.1.png" alt="Shoe" />
              <h3>Ipsum fermentum</h3>
              <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
