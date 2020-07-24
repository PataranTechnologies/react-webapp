import React from "react";

import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Information from "../../components/Information/Information";
import Testimonials from "../../components/Testimonials/Testimonials";
import Process from "../../components/Process/Process";
import Address from "../../components/Address/Address";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
      <>
      <Header/>
      <Carousel/>
      <Information/>
      <Testimonials/>
      <Process/>
      <Address/>
      <Footer/>
      </>
  );
};

export default Homepage;
