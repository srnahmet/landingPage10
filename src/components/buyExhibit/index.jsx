import React from 'react';
import './BuyExhibit.css';

function BuyExhibit() {
  return (
    <section id="buy-exhibit">
      
      <div className="container buy-exhibit-container">
        <div className="row buy-exhibit-row-1">
          <div className='col-md-10 mb-4 buy-exhibit-row-1-title'>The best of the best</div>
          <div className='col-md-2 mb-4'><a className="btn ml-3 buy-exhibit-sign-up" href="#sign-up">Sign up Now</a></div>
        </div>
        <div className="row buy-exhibit-row-2">
          {/* Column 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="box">
              <img src="%PUBLIC_URL%/images/buyExhibit/image1.png" alt="Exhibit 1" className="box-img" />
              <div className='title-box'>
                <h3 className="box-title">Title</h3>
                <p className="box-description">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                <button className="btn btn-primary buy-btn"><img className='buy-btn-icon' src='/images/buyExhibit/buyIcon.png' />Buy Now</button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="box">
              <img src="%PUBLIC_URL%/images/buyExhibit/image2.png" alt="Exhibit 2" className="box-img" />
              <div className='title-box'>
                <h3 className="box-title">Title</h3>
                <p className="box-description">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                <button className="btn btn-primary buy-btn"><img className='buy-btn-icon' src='/images/buyExhibit/buyIcon.png' />Buy Now</button>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="box">
              <img src="%PUBLIC_URL%/images/buyExhibit/image3.png" alt="Exhibit 3" className="box-img" />
              <div className='title-box'>
                <h3 className="box-title">Title</h3>
                <p className="box-description">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                <button className="btn btn-primary buy-btn"><img className='buy-btn-icon' src='/images/buyExhibit/buyIcon.png' />Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Arka plan şekilleri */}
      <img src="%PUBLIC_URL%/images/buyExhibit/rectangle1.png" className="shape buy-exhibit-shape-1" alt="Shape 1" />
      <img src="%PUBLIC_URL%/images/buyExhibit/rectangle2.png" className="shape buy-exhibit-shape-2" alt="Shape 2" />
      <img src="%PUBLIC_URL%/images/buyExhibit/rectangle3.png" className="shape buy-exhibit-shape-3" alt="Shape 3" />
      <img src="%PUBLIC_URL%/images/buyExhibit/rectangle4.png" className="shape buy-exhibit-shape-4" alt="Shape 4" />
      <img src="%PUBLIC_URL%/images/buyExhibit/rectangle5.png" className="shape buy-exhibit-shape-5" alt="Shape 5" />
      
    </section>
  );
}

export default BuyExhibit;
