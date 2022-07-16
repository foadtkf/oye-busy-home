import React from "react";
import toast from "../images/toast.png";
import salon from "../images/looking/Category_Salon.png";
import ac from "../images/looking/Category_AC.png";
import carpenter from "../images/looking/Category_Carpenter.png";
import cctv from "../images/looking/Category_CCTV.png";
import cleaning from "../images/looking/Category_Cleaning.png";
import electrician from "../images/looking/Category_Electrician.png";
import homeapp from "../images/looking/Category_Home_Appliance.png";
import packer from "../images/looking/Category_Packer&Mover.png";
import painter from "../images/looking/Category_Painter.png";
import pest from "../images/looking/Category_Pest_control.png";
import plumber from "../images/looking/Category_Plumber.png";
import disinfection from "../images/looking/Disinfection.png";
import pic1 from '../images/frames/1.png'
import pic2 from '../images/frames/2.png'
import pic3 from '../images/frames/5.png'
const Banner = () => {
  return (
    <div class="grid lg:grid-cols-2">
      <div className="hidden lg:block h-max">
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: " url(https://placeimg.com/1000/800/arch)",
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Home services, on demand</h1>
              <input
                type="text"
                placeholder="Search"
                class="input w-full max-w-xs"
              />
              <p class="mb-5 mt-3 text-sm">
                Examples: Salon, Women's hair, Men's grooming & Many more..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 class="mb-5 text-3xl text-center font-bold">
          What are you looking for?
        </h1>
        <a style={{ display: "flex", justifyContent: "end" }}>
          <img
            src={toast}
            className="w-44"
            style={{ marginTop: "3%" }}
            alt=""
          />
        </a>
        <div class="grid grid-cols-4 mt-3">
          <div class="card bg-base-100 ">
            <figure>
              <img src={salon} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Salon at home</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={electrician} alt="Salon" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Electrician</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={plumber} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Plumber</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={cctv} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">CCTV</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={cleaning} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Cleaning</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={homeapp} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Home appliance</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={packer} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Packer & Mover</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={painter} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Painter</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={pest} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Pest Control</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={plumber} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Plumber</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={disinfection} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Disinfection</h2>
            </div>
          </div>
          <div class="card bg-base-100 ">
            <figure>
              <img src={carpenter} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="text-sm">Carpenter</h2>
            </div>
          </div>
        </div>
        <div class="carousel rounded-box">
  <div class="carousel-item">
    <img src={pic1} alt="Burger" />
  </div> 
  <div class="carousel-item">
    <img src={pic3} alt="Burger" />
  </div> 
  <div class="carousel-item">
    <img src={pic2} alt="Burger" />
  </div> 
  </div>
      </div>
    </div>
  );
};

export default Banner;
