import React from 'react';
import carpenter from '../images/services/Carpenter-PNG-Image.png'
import dickrosher from '../images/services/kisspng-dick-rosher-plumbing-inc-plumber-drain-leak-plumber-5abfda3c8ab124 1.png'
import insecticide from '../images/services/kisspng-insecticide-pesticide-herbicide-sprayer-5d0e1b4badf171 (2).png'
import pngegg from '../images/services/pngegg.png'
import plumber from '../images/services/kisspng-technician-plumber-electrician-home-repair-mainten-5ae1b847d030b7 1 (2).png'
const Services = () => {
    return (
        <div className='mt-5 mb-5'>
      <h1 class="text-3xl text-center font-bold">Same day services</h1>
      <p class="mb-5 text-center">
        Premium home services
      </p>
      <div class="grid grid-cols-2 gap-4 lg:flex justify-center">
        <div class="card bg-white shadow-md lg:w-28">
          <figure>
            <img src={carpenter} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Home</h2>
          </div>
        </div>
        <div class="card  bg-white m-2 shadow-md lg:w-28">
          <figure>
            <img src={dickrosher} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Electrician</h2>
          </div>
        </div>
        <div class="card  bg-white m-2 shadow-md lg:w-28">
          <figure>
            <img src={insecticide} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Plumber</h2>
          </div>
        </div>
        <div class="card  bg-white m-2 shadow-md lg:w-28">
          <figure>
            <img src={pngegg} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">CCTV</h2>
          </div>
        </div>
        <div class="card  bg-white m-2 shadow-md lg:w-28">
          <figure>
            <img src={plumber} alt="trending item" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-sm">Cleaning</h2>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Services;