import React from "react";
import img1 from "../images/AssuredPeace/gradient-graphic-2 1.png";
import img2 from "../images/AssuredPeace/gradient-graphic-2 2.png";
import img3 from "../images/AssuredPeace/gradient-graphic-3 1.png";
const AssuredPeace = () => {
  return (
    <div className="mt-10 mb-10">
      <h1 class="text-3xl text-center font-bold">Assured Peace of Mind</h1>
      <div class="grid lg:grid-cols-3" style={{marginLeft:'5%',marginRight:'5%'}}>
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row">
            <img src={img1} class="max-w-sm" />
            <div>
              <h1 class="text-2xl font-bold">High Quality Work</h1>
              <p class="py-6">
                Only authorized service express and genuine spare parts and
                equipments.
              </p>
            </div>
          </div>
        </div>
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row">
            <img src={img2} class="max-w-sm" />
            <div>
              <h1 class="text-2xl font-bold">Hassle Free</h1>
              <p class="py-6">Sit back and relax. We do all the work.</p>
            </div>
          </div>
        </div>
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row">
            <img src={img3} class="max-w-sm" />
            <div>
              <h1 class="text-2xl font-bold">Box Office News!</h1>
              <p class="py-6">
                Pay online for Safe & Secure Payment. Many benifits and offers
                available with online payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssuredPeace;
