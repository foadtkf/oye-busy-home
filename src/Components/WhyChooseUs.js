import React from 'react';
import img1 from '../images/WhyChooseUs.png'
const WhyChooseUs = () => {
    return (
        <div style={{background: "#E5E4E9"}} className='mt-16 mb-20  flex flex-row-reverse lg:flex-row'>
           <div className='lg:ml-20'>
            <img src={img1} alt="" srcset="" />
           </div>
           <div class="hero ml-5 lg:-ml-10 w-full sm:bg-white">
  <div class="hero-content text-center">
    <div>
      <h1 class="text-xl lg:text-3xl font-bold">Why People Choose Us</h1>
      <ul style={{listStyleType:'circle'}}>
        <li>Affordable</li>
        <li>Rates</li>
        <li>On Time</li>
        <li>Service Verified</li>
        <li>Professionals</li>
        <li>Excellent Service</li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default WhyChooseUs;