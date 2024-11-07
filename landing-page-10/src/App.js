import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import BuyExhibit from "./components/BuyExhibit";
import WhyJoinUs from "./components/WhyJoinUs";
import Testimonials from "./components/Testimonials";
import InfoSection from "./components/InfoSection";
import ImageWithPopups from "./components/ImageWithPopups";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <BuyExhibit />
      <WhyJoinUs />
      <Testimonials />
      <InfoSection />
      <ImageWithPopups />
      <Footer />
    </div>
  );
}

export default App;
