import React, { useState, useEffect } from "react";
import ReactMapGl from "react-map-gl"; // Correct import statement
import { Token } from "@mui/icons-material";

function Hotels() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 2 }}>{/* Контент слева */}</div>
      <div style={{ flex: 1 }}>
        <iframe
          width="759"
          height="846"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=759&amp;height=746&amp;hl=en&amp;q=%20Timi%C8%99oara+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <div className="cardApi"></div>
      </div>
    </div>
  );
}

export default Hotels;
