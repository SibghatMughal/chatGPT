import { useState } from 'react'
// import logo from '/assets/logo.png';
// import appIcon from '/assets/appIcon.svg';
// import Discovery from '/assets/Discovery.svg';
// import warning from '/assets/warning.png';
// import settings from '/assets/settings.png';
// import cardImage from '/assets/cardImage.png';
import { Link } from 'react-router-dom';
import React from 'react';


function Home() {
  return (
    <>
      <div className='w-full p-5 rounded flex items-start gap-3 h-[100vh]'>
        <div className="flex flex-col gap-4 h-full justify-between">
          <div className='flex flex-col grow gap-4'>
            <div className="w-full bg-white px-9 py-5 rounded-xl drop-shadow-lg cursor-pointer ">
              <img src="/assets/logo.png" alt="logo image" />
            </div>
            <div className="w-full bg-white flex flex-col gap-5 p-5 rounded-xl drop-shadow-lg ">
              <div className='flex items-center gap-3 w-full rounded-xl cursor-pointer bg-[#ECF0F9] justify-end p-5 px-7 hover:bg-[#ECF0F9]'>
                <h2 className='text-black mr-2 text-[20px]'>Apps</h2>
                <img src="/assets/appIcon.svg" alt="app-icon" width={40} height={40} />
              </div>
              <div className='flex items-center gap-3 w-full rounded-xl cursor-pointer bg-transparent justify-end p-5 px-7 hover:bg-[#ECF0F9]'>
                <h2 className='text-black mr-2 text-[20px] text-right'>Discovery<br /> Hub</h2>
                <img src="/assets/Discovery.svg" alt="app-icon" width={40} height={40} />
              </div>
            </div>
          </div>

          {/* bottom sidebar  */}
          <div className="w-full bg-white flex grow-0 flex-col gap-5 p-5 rounded-xl drop-shadow-lg ">
            <div className='flex items-center gap-3 w-full rounded-xl cursor-pointer justify-end p-5 px-7 hover-bg-[#ECF0F9]'>
              <h2 className=' mr-2 text-[20px]'>About</h2>
              <img src="/assets/warning.png" alt="app-icon" width={40} height={40} />
            </div>
            <div className='flex items-center gap-3 w-full cursor-pointer rounded-xl bg-transparent justify-end p-5 px-7 hover-bg-[#ECF0F9]'>
              <h2 className='mr-2 text-[20px] text-right'>Settings</h2>
              <img src="/assets/settings.png" alt="app-icon" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col justify-start">
            <p className=' text-[30px] font-normal'>Jump Back In</p>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4 w-full">
              <div className="block  p-6 bg-white border border-gray-200 rounded-lg shadow h-[205px] max-w-[600px] hide-vertical-scrollbar">
                <div className="flex items-center gap-3">
                  <div className=' w-5 h-5 rounded-full bg-[#2C6EEF]'></div>
                  <h2 className='text-[20px] font-semibold'>EdgenChat</h2>
                </div>
                <p className="text-[#cbccd1] text-[24px] font-medium ">Quick Garlic Parmesan Pasta Recipe.</p>
                <p className=' text-[14px] font-normal text-gray-500'>Ingredients:</p>
                <ul className='text-[14px] font-normal text-gray-500'>
                  <li>8 oz (about 2 cups) of pasta (penne, fettuccine, or your choice)</li>
                  <li>2 tablespoons of butter</li>
                  <li>4 cloves of garlic, minced</li>
                </ul>
              </div>

              <div className="block  p-6 bg-white border border-gray-200 rounded-lg shadow h-[205px] max-w-[600px]  hide-vertical-scrollbar">
                <div className="flex items-center gap-3">
                  <div className=' w-5 h-5 rounded-full bg-[#3F3D56]'></div>
                  <h2 className='text-[20px] font-semibold'>EdgenImag’ine</h2>
                </div>
                <img src="/assets/cardImage.png" alt="card image" width='100%' className='mt-2 ' />
              </div>

              <div className="block  p-6 bg-white border border-gray-200 rounded-lg shadow h-[205px] max-w-[600px] hide-vertical-scrollbar">
                <div className="flex items-center gap-3">
                  <div className=' w-5 h-5 rounded-full bg-[#2C6EEF]'></div>
                  <h2 className='text-[20px] font-semibold'>EdgenChat</h2>
                </div>
                <p className="text-[#cbccd1] text-[24px] font-medium ">Quick Garlic Parmesan Pasta Recipe.</p>
                <p className=' text-[14px] font-normal text-gray-500'>Ingredients:</p>
                <ul className='text-[14px] font-normal text-gray-500'>
                  <li>8 oz (about 2 cups) of pasta (penne, fettuccine, or your choice)</li>
                  <li>2 tablespoons of butter</li>
                  <li>4 cloves of garlic, minced</li>
                </ul>
              </div>
            </div>
            <p className='text-[24px] mt-5 mb-6'>Start Using an app</p>
            <div className=' w-full h-full flex items-center justify-center '>
              <Link to="/edgen-chat">
                <div className="block  p-6 bg-white border border-gray-200 cursor-pointer rounded-lg shadow h-auto max-w-[500px] hide-vertical-scrollbar">
                  <div className="flex items-center justify-center w-full gap-3">
                    <div className=' w-7 h-7 rounded-full bg-[#2C6EEF]'></div>
                    <h2 className='text-[40px] text-black font-semibold'>EdgenChat</h2>
                  </div>
                  <p className="text-[#676C79] text-[26px] font-bold text-end">Start a new Chat with <br />EdgenChat!</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

