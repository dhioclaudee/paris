import React from "react";

import logo from "../assets/logo.png";
import iconSearch from "../assets/icon-search.png";
import toggle from "../assets/toggle.png";
// import MenWomen from "./MenWomen";
// import HotBrands from "./HotBrands";
import Hero from "./Hero";

export default function Header() {
  return (
    <div className='container-fluid header'>
      <div className='wrap-main'>
        <div className='tool'>
          <div className='container-fluid px-5 py-3 bg-main '>
            <div className='navbar'>
              <img className='logo' src={logo} alt='' />
              <div className='wrap-search'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search'
                />
                <img className='icon-search' src={iconSearch} alt='' />
              </div>
              <img src={toggle} alt='' />

              <div className='modul'>
                <div className='row d-flex justify-content-center'>
                  <div className='col mr-5'>
                    <a href='Home'>Home</a>
                  </div>
                  <div className='col mr-5'>
                    <a href='#manWomen'>Woman</a>
                  </div>
                  <div className='col mr-5'>
                    <a href='#manWomen'>Man</a>
                  </div>
                  <div className='col mr-5'>
                    <a href='#hotBrand'>Brand</a>
                  </div>
                  <div className='col mr-5'>
                    <a href='Sale'>Sale</a>
                  </div>
                  <div className='col mr-5'>
                    <a href='History'>History</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
}
