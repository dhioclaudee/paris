import React from "react";

import seven from "../assets/7.jpg";
import hover1 from "../assets/109014_hover_395x535.jpg";
import hover2 from "../assets/109247_hover_395x535.jpg";

import mobile1 from "../assets/109036_mobile_310x420.jpg";
import mobile2 from "../assets/109196_mobile_310x420.jpg";
import mobile3 from "../assets/102441_mobile_310x420.webp";

export default function MenWomen() {
  return (
    <>
      <div id='manWomen' class='row mb-5'>
        <div class='col'>
          <div
            id='carouselExampleControls'
            class='carousel slide'
            data-ride='carousel'>
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img src={seven} class='d-block w-100' alt='...' />
              </div>
              <div class='carousel-item'>
                <img src={hover1} class='d-block w-100' alt='...' />
              </div>
              <div class='carousel-item'>
                <img src={hover2} class='d-block w-100' alt='...' />
              </div>
              <div class='overlay2'>
                <h1>MEN</h1>
                <a href='/'>Shop Men</a>
              </div>
            </div>
            <a
              class='carousel-control-prev'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'>
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'></span>
              <span class='sr-only'>Previous</span>
            </a>
            <a
              class='carousel-control-next'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'>
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'></span>
              <span class='sr-only'>Next</span>
            </a>
          </div>
        </div>
        <div class='col'>
          <div
            id='carouselExampleControls'
            class='carousel slide'
            data-ride='carousel'>
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img src={mobile1} class='d-block w-100' alt='...' />
              </div>
              <div class='carousel-item'>
                <img src={mobile2} class='d-block w-100' alt='...' />
              </div>
              <div class='carousel-item'>
                <img src={mobile3} class='d-block w-100' alt='...' />
              </div>
              <div class='overlay2'>
                <h1>WOMEN</h1>
                <a href='/'>Shop Women</a>
              </div>
            </div>
            <a
              class='carousel-control-prev'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'>
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'></span>
              <span class='sr-only'>Previous</span>
            </a>
            <a
              class='carousel-control-next'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'>
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'></span>
              <span class='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
