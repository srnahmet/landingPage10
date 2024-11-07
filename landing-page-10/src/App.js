import React from "react";
import Header from "./components/header";
import MainSection from "./components/mainSection";
import BuyExhibit from "./components/buyExhibit";
import WhyJoinUs from "./components/whyJoinUs";
import Testimonials from "./components/testimonials";
import InfoSection from "./components/infoSection";
import ImageWithPopups from "./components/imageWithPopups";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Header/>
      <MainSection/>
      <BuyExhibit/>
      <WhyJoinUs/>
      <Testimonials/>
      <InfoSection/>
      <ImageWithPopups/>
      <Footer/>
    </div>
  );
}

export default App;
