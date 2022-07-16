import React from 'react';
import img1 from '../images/HomeApplianceServices/Rectangle 1916.png'
import img2 from '../images/HomeApplianceServices/Rectangle 1917.png'
import img3 from '../images/HomeApplianceServices/Rectangle 1918.png'
import img4 from '../images/HomeApplianceServices/Rectangle 1919.png'
import img5 from '../images/HomeApplianceServices/Rectangle 1922.png'
import img6 from '../images/HomeApplianceServices/split-ac-2-removebg-preview 1.png'
const HomeApplianes = () => {
    return (
        <div>
      <h1 class="text-3xl text-center font-bold">Home Appliances services</h1>
      <p class="mb-5 text-center">
        Premium home services
      </p>
      <div class="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:flex justify-center">
        <div class="card bg-white ">
          <figure>
            <img src={img1} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Home</h2>
          </div>
        </div>
        <div class="card  bg-white m-2 shadow-md ">
          <figure>
            <img src={img2} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Electrician</h2>
          </div>
        </div>
        <div class="card  bg-white m-2 shadow-md ">
          <figure>
            <img src={img3} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Plumber</h2>
          </div>
        </div>
        <div class="card  bg-white m-2 shadow-md ">
          <figure>
            <img src={img4} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">CCTV</h2>
          </div>
        </div>
        <div class="card  bg-white m-2 shadow-md ">
          <figure>
            <img src={img5} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Cleaning</h2>
          </div>
        </div>
        <div class="card  bg-white m-2 shadow-md ">
          <figure>
            <img src={img6} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Cleaning</h2>
          </div>
        </div>
      </div>
    </div>
    );
};

export default HomeApplianes;