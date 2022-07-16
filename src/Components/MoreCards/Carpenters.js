import React from 'react';
import img1 from "../../images/trending/image 12.png";
import img2 from "../../images/trending/image 13.png";
import img3 from "../../images/trending/Rectangle 19 (1).png";
import img4 from "../../images/trending/Rectangle 19.png";
import img5 from "../../images/trending/Rectangle 20.png";
const Carpenters = () => {
    return (
        <div className='lg:flex flex-row  mt-5 mb-5'>
      <div className='w-full'>
      <h1 class="text-3xl text-center font-bold">Carpenters services</h1>
      <p class="mb-5 text-center">
        Premium home services
      </p>
      </div>
      <div class="grid grid-cols-3 gap-4 lg:flex justify-center">
        <div class="card bg-white ">
          <figure>
            <img src={img1} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Home</h2>
          </div>
        </div>
        <div class="card bg-white ">
          <figure>
            <img src={img1} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Home</h2>
          </div>
        </div>
        <div class="card  bg-white ">
          <figure>
            <img src={img2} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Electrician</h2>
          </div>
        </div>
        <div class="card  bg-white">
          <figure>
            <img src={img3} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Plumber</h2>
          </div>
        </div>
        <div class="card  bg-white">
          <figure>
            <img src={img4} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">CCTV</h2>
          </div>
        </div>
        <div class="card  bg-white">
          <figure>
            <img src={img5} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Cleaning</h2>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Carpenters;