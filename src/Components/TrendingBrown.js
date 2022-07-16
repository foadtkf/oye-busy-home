import React from 'react';
import img1 from "../images/Rectangle 1589.png";
const TrendingBrown = () => {
    return (
        <div className="mt-10">
      <h1 class="text-3xl text-center font-bold">Trending Services</h1>
      <p class="mb-5 text-center">Premium home services</p>
      <div class="grid grid-cols-2 lg:flex justify-center">
        <div class="card  m-2 shadow-md ">
          <figure>
            <img src={img1} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Professional Deep cleaning</h2>
            <p>for spring clean for end of lease clean</p>
          </div>
        </div>
        <div class="card  m-2 shadow-md ">
          <figure>
            <img src={img1} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Professional Deep cleaning</h2>
            <p>for spring clean for end of lease clean</p>
          </div>
        </div>
        <div class="card  m-2 shadow-md ">
          <figure>
            <img src={img1} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Professional Deep cleaning</h2>
            <p>for spring clean for end of lease clean</p>
          </div>
        </div>
        <div class="card  m-2 shadow-md ">
          <figure>
            <img src={img1} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Professional Deep cleaning</h2>
            <p>for spring clean for end of lease clean</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TrendingBrown;