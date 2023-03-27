import React from "react";
import Landingfooter from "../landing/footer/Landingfooter";
import Landingnavbar from "../landing/navbar/Landingnavbar";

function Landinglayout({ children, title }) {
  return (
    <div title={title ? title : ""}>
      <Landingnavbar />
      {children}
      <Landingfooter />
    </div>
  );
}

export default Landinglayout;
