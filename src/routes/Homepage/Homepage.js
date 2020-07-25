import React from "react";

import Carousel from "../../components/Carousel/Carousel";
import Information from "../../components/Information/Information";
import Testimonials from "../../components/Testimonials/Testimonials";
import Process from "../../components/Process/Process";
import Address from "../../components/Address/Address";

const Homepage = () => {
  return (
      <>
      <Carousel/>
      <Information/>
      <Testimonials/>
      <Process/>
      <Address/>
      </>
  );
};

export default Homepage;
