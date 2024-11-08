import React from 'react';
import './WhyJoinUs.css';

function WhyJoinUs() {
  return (
    <section className="why-join-us-section">
      <div className="why-join-us-container row">
        {/* Sol taraf - Başlık ve metin */}
        <div className="col-md-6 why-join-us-left">
          <h1 className="why-join-us-title mb-4">Why Join Us</h1>
          <ul className="list-unstyled mb-4">
            <li className="d-flex align-items-center mb-2 why-join-us-list why-join-us-list-text ">
              <span className="text-success mr-2"><img src="landingPage10/images/whyJoinUs/check.svg" className='why-join-us-tick' /></span> Est et in pharetra magna adipiscing ornare aliquam.
            </li>
            <li className="d-flex align-items-center mb-2 why-join-us-list why-join-us-list-text ">
              <span className="text-success mr-2"><img src="landingPage10/images/whyJoinUs/check.svg" className='why-join-us-tick' /></span> Tellus arcu sed consequat ac velit ut eu blandit.
            </li>
            <li className="d-flex align-items-center mb-2 why-join-us-list why-join-us-list-text ">
              <span className="text-success mr-2"><img src="landingPage10/images/whyJoinUs/check.svg" className='why-join-us-tick' /></span> Ullamcorper ornare in et egestas dolor orci.
            </li>
          </ul>
          <button className="btn why-join-us-btn">Sign Up Now</button>
        </div>

        {/* Sağ taraf - Bootstrap kart */}
        <div className="col-md-5 d-flex justify-content-center align-items-center why-join-us-right">
          <img src="landingPage10/images/whyJoinUs/rectangle1.png" alt="Rectangle 1" className="why-join-us-image-rectangle-1" />
          <img src="landingPage10/images/whyJoinUs/rectangle2.png" alt="Rectangle 2" className="why-join-us-image-rectangle-2" />
          <img src="landingPage10/images/whyJoinUs/rectangle3.png" alt="Rectangle 3" className="why-join-us-image-rectangle-3" />
          <img src="landingPage10/images/whyJoinUs/rectangle5.png" alt="Rectangle 5" className="why-join-us-image-rectangle-5" />
          <img src="landingPage10/images/whyJoinUs/rectangle6.png" alt="Rectangle 6" className="why-join-us-image-rectangle-6" />
          <div className="card why-join-us-card" >
            <div className="card-img-top position-relative ">
              <img src="landingPage10/images/whyJoinUs/imageUp.png" alt="Image 1" className="why-join-us-image-1" />
              <img src="landingPage10/images/whyJoinUs/mainImage.png" alt="Image 2" className="why-join-us-image-2" />
            </div>
          </div>
          <img src="landingPage10/images/whyJoinUs/rectangle4.png" alt="Rectangle 4" className="why-join-us-image-rectangle-4" />
        </div>



      </div>
    </section>
  );
}

export default WhyJoinUs;
