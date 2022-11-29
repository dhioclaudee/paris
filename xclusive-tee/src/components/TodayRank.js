import React from 'react';

import NK from '../assets/NK211119_119.jpg';
import pants from '../assets/pants.jpg';
import fiftyTwo from '../assets/52.jpg';
import ADLV from '../assets/ADLV200619_018.jpg';
import eightyOne from '../assets/81.jpg';
import kz from '../assets/KZ210313_143.jpg';

export default function TodayRank() {
  return (
    <>
      <h1 class="today-rank"> TODAY RANK</h1>
      <div class="row">
        <div class="col">
          <img class="rank-baju mt-3" src={NK} alt="" />
          <div class="harga">
            <h4>Nike</h4>
            <p>Rp. 459,000</p>
          </div>
        </div>
        <div class="col">
          <img class="rank-baju mt-3" src={pants} alt="" />
          <div class="harga">
            <h4>Acme de la vie </h4>
            <p>Rp. 999,000</p>
          </div>
        </div>
        <div class="col">
          <img class="rank-baju mt-3" src={fiftyTwo} alt="" />
          <div class="harga">
            <h4>Ambler</h4>
            <p>Rp. 599,000</p>
          </div>
        </div>
        <div class="col">
          <img class="rank-baju mt-3" src={ADLV} alt="" />
          <div class="harga">
            <h4>Acme de la vie </h4>
            <p>Rp. 979,000</p>
          </div>
        </div>
        <div class="col">
          <img class="rank-baju mt-3" src={eightyOne} alt="" />
          <div class="harga">
            <h4>MLB</h4>
            <p>Rp. 1,290,000</p>
          </div>
        </div>
        <div class="col">
          <img class="rank-baju mt-3" src={kz} alt="" />
          <div class="harga">
            <h4>Kenzo</h4>
            <p>Rp. 3,459,000</p>
          </div>
        </div>
      </div>
    </>
  );
}
