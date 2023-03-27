import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Landinglayout from "../layouts/Landinglayout";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Landingpage() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <Landinglayout>
      This is the Home Page
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Landinglayout>
  );
}

export default Landingpage;
