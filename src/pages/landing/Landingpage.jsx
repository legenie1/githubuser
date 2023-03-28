import React from "react";
import Landinglayout from "../../layouts/Landinglayout";
import IMAGES from "../../constant/images";
console.log(`${process.env.REACT_APP_FRONTEND}`);
function Landingpage() {
  return (
    <Landinglayout>
      <img src={IMAGES.HERO_SECTION} width={250} alt="" />
      This is the Home Page
    </Landinglayout>
  );
}

export default Landingpage;
