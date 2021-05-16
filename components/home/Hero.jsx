import React, { useState } from "react";
import SocialSignIn from "./SocialSignIn";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='container max-w-lg px-4 py-12 mx-auto text-left md:max-w-none md:text-center'>
      <div className='max-w-screen-lg mx-auto md:space-x-12 flex md:flex-row flex-col items-center'>
        <div className='w-full md:w-1/2 pt-24'>
          <h1 className='font-extrabold leading-10 tracking-tight text-left text-gray-900 sm:leading-none text-4xl'>
            <span className='relative mt-2 text-primary md:inline-block'>
              How it works
            </span>
          </h1>
          <div className='mt-2 text-gray-500 md:max-w-lg text-left lg:text-sm'>
            Our detection system will utilize blood glucose levels as the
            biomarker to measure changes in patients glycemic index and the
            Galvanic Skin Response (GSR) sensor will detect changes in pain
            perception. When glucose levels are critically below the recommended
            range, the system will alert the insulin pump to cease delivery of
            insulin. When glucose levels are high, the prescribed insulin dose
            will be administered. Pain medication will be administered when the
            system detects critically abnormal GSR activity.
          </div>
          <div className='flex flex-row justify-center items-center mt-6'>
            <span className='relative inline-flex w-full'>
              <button
                onClick={() => setOpen(true)}
                type='button'
                className='inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-primary border border-transparent rounded-full md:w-auto hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'>
                Get Started
              </button>
            </span>
          </div>
        </div>
        <div className='w-full md:w-1/2 mt-24'>
          <img
            className='rounded-md shadow'
            src='/images/how-it-works.jpg'
            alt=''
          />
        </div>
      </div>
      {open && <SocialSignIn setOpen={setOpen} />}
    </div>
  );
};

export default Hero;
