import React from 'react';
import img1 from '../images/astonished-unshaven-man-gazes-through-hole-yellow-paper 3.png'
const TryOurTrend = () => {
    return (
        <div style={{background: "linear-gradient(180deg, #FBD268 0%, #F1BA29 100%)"}} className='mt-16 mb-20 grid grid-cols-2'>
           <div className='lg:ml-20'>
            <img src={img1} alt="" srcset="" />
           </div>
           <div class="hero -ml-10 lg:ml-0 w-full">
  <div class="hero-content text-center">
    <div>
      <h1 class="text-xl lg:text-5xl font-bold">TRY OUR TRENDING SERVICES WITH UPTO 50% OFF!</h1>
      <div class="lg:divider text-sm">On any service you book</div>
      <button class="btn btn-outline btn-error">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TryOurTrend;