import React from "react";

import download2 from "../assets/download.png";
import vans from "../assets/3452001.jpg";
import ar from "../assets/AR 200528_214.jpg";
import kenzo from "../assets/kenzo.webp";
import ripndip from "../assets/RIPNDIP-UNICORN-35X4.png";

export default function HotBrands() {
  return (
    <>
      <h1>HOT BRANDS</h1>
      <div id='hotBrand' class='row'>
        <div class='col'>
          <img class='brands' src={download2} alt='' />
          <h6>NIKE</h6>
        </div>
        <div class='col'>
          <img class='brands' src={vans} alt='' />
          <h6>VANS</h6>
        </div>
        <div class='col'>
          <img class='brands' src={ar} alt='' />
          <h6>AMBLER</h6>
        </div>
        <div class='col'>
          <img class='brands' src={kenzo} alt='' />
          <h6>kenzo</h6>
        </div>
        <div class='col'>
          <img class='brands' src={ripndip} alt='' />
          <h6>RIPNDIP</h6>
        </div>
      </div>
    </>
  );
}
