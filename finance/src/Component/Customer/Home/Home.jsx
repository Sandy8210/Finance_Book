import React from "react";
import Images from "../../../assets/Image";

const Home = () => {
  return (
    <div className='relative'>
      <img
        src={Images.logo1}
        className='object-cover height w-full blur-5'
        alt=''
      />
      <div className='absolute inset-0 flex flex-col my-20 mx-auto px-20 '>
        <p className='text-orange-500 text-2xl text-center font-bold'>
          Beware of little expenses. A small leak will sink a great ship
        </p>

        <p className='my-10 text-black font-extrabold text-center'>
          Those little expenses add up – and no one says it better than inventor
          Benjamin Franklin. While it’s easy to keep your larger expenses in
          check, <br /> it’s not so easy to count all the small, every day
          expenses.
        </p>

        <div class='bg-white lg:mt-10 mx-auto items-center w-fit opacity-75 shadow-md rounded-lg p-6'>
          <h2 class='text-xl font-semibold mb-4'>
            Billing & Accounting for all businesses
          </h2>

          <div className='flex mx-10'>
            <p class='text-gray-600'>Sales and purchase accounting</p>
            <span class='h-auto w-1 bg-red-400 mx-4'></span>

            <p class='text-gray-600'>GST/Non-GST bill creation</p>
            <span class='h-auto w-1 bg-red-400 mx-4'></span>

            <p class='text-gray-600'>Stock management with profit tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
