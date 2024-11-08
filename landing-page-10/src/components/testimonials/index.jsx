import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

function Testimonials() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [arrayCount, setArrayCount] = useState(windowWidth < 768 ? 1 : 3);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  const cardArray = [
    {
      iconURL: "/images/testimonials/icon1.png",
      title: "Zoomerr",
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      avatarURL: "/images/testimonials/avatar1.png",
      name: "Hellen Jummy",
      position: "Team Lead"
    },
    {
      iconURL: "/images/testimonials/icon1.png",
      title: "Zoomerr",
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      avatarURL: "/images/testimonials/avatar1.png",
      name: "Hellen Jummy",
      position: "Team Lead"
    },
    {
      iconURL: "/images/testimonials/icon2.png",
      title: "SHELLS",
      text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      avatarURL: "/images/testimonials/avatar2.png",
      name: "Hellena John",
      position: "Co-founder"
    },
    {
      iconURL: "/images/testimonials/icon3.png",
      title: "ArtVenue",
      text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      avatarURL: "/images/testimonials/avatar3.png",
      name: "David Oshodi",
      position: "Manager"
    },
    {
      iconURL: "/images/testimonials/icon4.png",
      title: "WAVES",
      text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      avatarURL: "/images/testimonials/avatar4.png",
      name: "Charolette Hanlin",
      position: "CEO"
    },
    {
      iconURL: "/images/testimonials/icon5.png",
      title: "kontrastr",
      text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      avatarURL: "/images/testimonials/avatar2.png",
      name: "Ralph Edwards",
      position: "Product Designer"
    },

  ]
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setArrayCount(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollLeftFunc = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth / arrayCount;
  };

  const scrollRightFunc = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth / arrayCount;
  };

  return (
    <div className="testimonials-section container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="testimonials-title">Because they love us</h2>
        <div className="testimonials-nav">
          <button onClick={scrollLeftFunc} className="testimonials-nav-btn rounded-circle">&#8249;</button>
          <button onClick={scrollRightFunc} className="testimonials-nav-btn rounded-circle">&#8250;</button>
        </div>
      </div>

      <div
        className="testimonials-slider d-flex"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
      >
        {cardArray.map((item, index) => (
          <div className="testimonials-card" key={index}>
            <div className="card shadow-sm p-3">
              <div className="testimonials mb-2">
                <img className="testimonials-icon" src={item.iconURL} alt="Company Icon" />
                <span className="company-name">{item.title}</span>
              </div>
              <p className="testimonials-description">{item.text}</p>
              <div className="testimonials-avatar d-flex align-items-center mt-3">
                <img className="testimonials-avatar-icon" src={item.avatarURL} alt="Avatar" />
                <span>
                  <span className="person-name">{item.name}</span> <br />
                  <span className="person-position">{item.position}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;