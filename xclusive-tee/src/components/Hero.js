import React from 'react';

import gambarHp from '../assets/gambarhp.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import whatsapp from '../assets/whatsapp.png';

export default function Hero() {
  return (
    <>
      <div className="container" style={{ paddingTop: '65px' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="wrap-text">
            <h2>Selamat datang di</h2>
            <h1>XCLUSIVE.TEE</h1>
          </div>
          <img className="gambar" src={gambarHp} alt="" />
        </div>
      </div>

      <div className="d-flex">
        <a href="/">
          <img className="mr-5 ml-5" src={instagram} alt="" />
        </a>
        <a href="/">
          <img className="mr-5" src={facebook} alt="" />
        </a>
        <a
          href="https://chat.whatsapp.com/CUoaZAeHWRE4BBSgzwcdwj"
          target="_blank"
          rel="noreferrer"
        >
          <img className="mr-5" src={whatsapp} alt="" />
        </a>
      </div>
    </>
  );
}
