import React, { useState } from 'react';
import './InfoSection.css';

function InfoSection() {
  const [activeTab, setActiveTab] = useState("v-pills-tab1"); // Başlangıçta 1. tab seçili

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container my-5 info-section">

      {/* <img src="%PUBLIC_URL%/images/infoSection/background3.png" alt="Background 3" className="background-image background-image3" />
      <img src="%PUBLIC_URL%/images/infoSection/background2.png" alt="Background 2" className="background-image background-image2" />
      <img src="%PUBLIC_URL%/images/infoSection/background1.png" alt="Background 1" className="background-image background-image1" /> */}

      <div className='info-section-container'>
        <div className="text-center mb-4">
          <h2 className="section-title">Grow your collection</h2>
          <p className="section-subtitle">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
            Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>

        <div className="row">

          <div className="col-md-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a
                className={`nav-link ${activeTab === "v-pills-tab1" ? "active" : ""}`}
                id="v-pills-tab1-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab1"
                role="tab"
                aria-controls="v-pills-tab1"
                aria-selected={activeTab === "v-pills-tab1"}
                onClick={() => handleTabClick("v-pills-tab1")}
              >
                <img src="%PUBLIC_URL%/images/infoSection/tab1.png" className='info-section-tab-icon' />Bibendum tellus {activeTab === "v-pills-tab1" && <span className={"info-section-arrow"}>&#8250;</span>}
              </a>
              <a
                className={`nav-link ${activeTab === "v-pills-tab2" ? "active" : ""}`}
                id="v-pills-tab2-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab2"
                role="tab"
                aria-controls="v-pills-tab2"
                aria-selected={activeTab === "v-pills-tab2"}
                onClick={() => handleTabClick("v-pills-tab2")}
              >
                <img src="%PUBLIC_URL%/images/infoSection/tab2.png" className='info-section-tab-icon' />
                Cras eget {activeTab === "v-pills-tab2" && <span className={"info-section-arrow"}>&#8250;</span>}
              </a>
              <a
                className={`nav-link ${activeTab === "v-pills-tab3" ? "active" : ""}`}
                id="v-pills-tab3-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab3"
                role="tab"
                aria-controls="v-pills-tab3"
                aria-selected={activeTab === "v-pills-tab3"}
                onClick={() => handleTabClick("v-pills-tab3")}
              >
                <img src="%PUBLIC_URL%/images/infoSection/tab3.png" className='info-section-tab-icon' />
                Dolor pharetra {activeTab === "v-pills-tab3" && <span className={"info-section-arrow"}>&#8250;</span>}
              </a>
              <a
                className={`nav-link ${activeTab === "v-pills-tab4" ? "active" : ""}`}
                id="v-pills-tab4-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab4"
                role="tab"
                aria-controls="v-pills-tab4"
                aria-selected={activeTab === "v-pills-tab4"}
                onClick={() => handleTabClick("v-pills-tab4")}
              >
                <img src="%PUBLIC_URL%/images/infoSection/tab4.png" className='info-section-tab-icon' />
                Amet, fringilla {activeTab === "v-pills-tab4" && <span className={"info-section-arrow"}>&#8250;</span>}
              </a>
              <a
                className={`nav-link ${activeTab === "v-pills-tab5" ? "active" : ""}`}
                id="v-pills-tab5-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab5"
                role="tab"
                aria-controls="v-pills-tab5"
                aria-selected={activeTab === "v-pills-tab5"}
                onClick={() => handleTabClick("v-pills-tab5")}
              >
                <img src="%PUBLIC_URL%/images/infoSection/tab5.png" className='info-section-tab-icon' />
                Amet nibh {activeTab === "v-pills-tab5" && <span className={"info-section-arrow"}>&#8250;</span>}
              </a>
              <a
                className={`nav-link ${activeTab === "v-pills-tab6" ? "active" : ""}`}
                id="v-pills-tab6-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab6"
                role="tab"
                aria-controls="v-pills-tab6"
                aria-selected={activeTab === "v-pills-tab6"}
                onClick={() => handleTabClick("v-pills-tab6")}
              >
                <img src="%PUBLIC_URL%/images/infoSection/tab6.png" className='info-section-tab-icon' />
                Sed velit {activeTab === "v-pills-tab6" && <span className={"info-section-arrow"}>&#8250;</span>}
              </a>
            </div>
          </div>

          <div className="col-md-9">
            <div className="tab-content" id="v-pills-tabContent">
              {activeTab === 'v-pills-tab1' && <div className="tab-pane fade show active" id="v-pills-tab1" role="tabpanel" aria-labelledby="v-pills-tab1-tab">
                <img className="info-section-image2" src='/images/infoSection/image2.png' />
                <img className="info-section-image1" src='/images/infoSection/image1.png' />
                <img className="info-section-image3" src='/images/infoSection/image3.png' />
              </div>}
              {activeTab === 'v-pills-tab2' && <div className="tab-pane fade show active" id="v-pills-tab2" role="tabpanel" aria-labelledby="v-pills-tab2-tab">
                <img className="info-section-image2" src='/images/infoSection/image1.png' />
                <img className="info-section-image1" src='/images/infoSection/image2.png' />
                <img className="info-section-image3" src='/images/infoSection/image3.png' />
              </div>}
              {activeTab === 'v-pills-tab3' && <div className="tab-pane fade show active" id="v-pills-tab3" role="tabpanel" aria-labelledby="v-pills-tab3-tab">
                <img className="info-section-image2" src='/images/infoSection/image2.png' />
                <img className="info-section-image1" src='/images/infoSection/image1.png' />
                <img className="info-section-image3" src='/images/infoSection/image3.png' />
              </div>}
              {activeTab === 'v-pills-tab4' && <div className="tab-pane fade show active" id="v-pills-tab4" role="tabpanel" aria-labelledby="v-pills-tab4-tab">
                <img className="info-section-image2" src='/images/infoSection/image1.png' />
                <img className="info-section-image1" src='/images/infoSection/image2.png' />
                <img className="info-section-image3" src='/images/infoSection/image3.png' />
              </div>}
              {activeTab === 'v-pills-tab5' && <div className="tab-pane fade show active" id="v-pills-tab5" role="tabpanel" aria-labelledby="v-pills-tab5-tab">
                <img className="info-section-image2" src='/images/infoSection/image1.png' />
                <img className="info-section-image1" src='/images/infoSection/image2.png' />
                <img className="info-section-image3" src='/images/infoSection/image3.png' />
              </div>}
              {activeTab === 'v-pills-tab6' && <div className="tab-pane fade show active" id="v-pills-tab6" role="tabpanel" aria-labelledby="v-pills-tab6-tab">
                <img className="info-section-image2" src='/images/infoSection/image2.png' />
                <img className="info-section-image1" src='/images/infoSection/image1.png' />
                <img className="info-section-image3" src='/images/infoSection/image3.png' />
              </div>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InfoSection;
