import React from "react";

const Features = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12'>
        <div className='relative'>
          <h2 className='w-full text-primary text-3xl font-bold text-center sm:text-4xl md:text-5xl'>
            Features
          </h2>
          <p className='w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl'>
            Add some nice touches to your interface with our latest designs,
            components, and templates. We've crafted a beautiful user experience
            that your visitors will love.{" "}
          </p>
        </div>
        <div className='flex flex-col mb-8 animated fadeIn sm:flex-row'>
          <div className='flex items-center mb-8 sm:w-1/2 md:w-5/12'>
            <img src='images/feature-2.png' alt='Feature 2' />
          </div>
          <div className='flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16'>
            <p className='mb-2 text-sm font-semibold leading-none text-left text-primary uppercase'>
              know your data
            </p>
            <h3 className='mt-2 text-2xl sm:text-left md:text-4xl'>
              Real-time Vitals & Alerts
            </h3>
            <p className='mt-5 text-lg text-gray-700 text md:text-left'>
              Access your heart rate, SpO2 levels, body temperature, galvanic
              skin response and more with our dashboard. Monitor your activity,
              such as steps taken or calories burnt, and also atmospheric
              details like ambient humidity, air pressure, etc.
              <br /> <br />
              Get notified of any personal/general health emergencies, potential
              contact with COVID patients or if you enter a containment zone.
            </p>
          </div>
        </div>
        <div className='flex flex-col mb-8 animated fadeIn sm:flex-row'>
          <div className='flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last'>
            <img src='images/feature-3.png' alt='Feature 3' />
          </div>
          <div className='flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16'>
            <p className='mb-2 text-sm font-semibold leading-none text-left text-primary uppercase'>
              Safety is Priority
            </p>
            <h3 className='mt-2 text-2xl sm:text-left md:text-4xl'>......</h3>
            <p className='mt-5 text-lg text-gray-700 text md:text-left'>
              Check the concentration of COVID-19 cases in your area, and if
              you’ve visited any of the containment zones. This data is taken
              from your Google Maps Timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/*

<!-- Section 1 -->
<section class="py-20 bg-white">
    <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <div class="relative">
            <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl"> Level Up Your Designs</h2>
            <p class="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">Add some nice touches to your interface with our latest designs, components, and templates. We've crafted a beautiful user experience that your visitors will love. </p>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img class="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt="">
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Drag-n-drop design</p>
                <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Design Made Easy</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left">Crafting your user experience has never been easier, with our intuitive drag'n drop interface you will be creating beatiful designs in no time.</p>
            </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                <img class="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="">
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">know your data</p>
                <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Optimized For Conversions</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left">Backed by data, these templates have been crafted for ultimate optimization. Now, converting your visitors into customers is easier than ever before.</p>
            </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img class="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-03.png" alt="">
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Easy to customize</p>
                <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Make It Your Own</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left">All templates and components are fully customizable. You can use these templates to tell your personal story and convey your message.</p>
            </div>
        </div>

    </div>
</section>


*/

export default Features;
