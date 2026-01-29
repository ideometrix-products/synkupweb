import React from 'react';

const Page = () => {
  return (
    <div className='px-2 sm:px-10 lg:px-[100px] '>
      <div className='subscription-plan font-semibold mt-10 sm:mt-16 lg:mt-[40px] '>
        <h1 className='text-[24px] sm:text-[28px] lg:text-[32px] font-semibold'>
          Subscription Plans
        </h1>
        <p className='text-[14px] sm:text-[16px] font-normal leading-6 sm:leading-8 text-[#1F1F1F] mt-2 max-w-full lg:max-w-[1240px]'>
          Digihunar offers flexible subscription plans to suit your learning and
          earning needs: Enjoy unlimited course access, exclusive expert
          sessions, priority support, and enhanced earning options through the
          marketplace.
        </p>
      </div>

      <div className='pricing-cards mt-10 lg:mt-[84.58px] flex flex-col lg:flex-row gap-6 lg:gap-[101px] items-center lg:items-stretch mb-10 '>
        <div className='card w-full lg:w-[548.7px] max-w-[95%] lg:max-w-none h-auto lg:h-[396.6px] border-2 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg p-6 lg:p-8'>
          <h1 className='text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-[#0C5FD8] pb-4 pt-2'>
            Basic Feature
          </h1>
          <p className='text-[28px] sm:text-[32px] lg:text-[34px] font-medium text-[#0C5FD8] pb-6'>
            $10
          </p>
          <ul className='list-disc list-inside space-y-4'>
            <li className='font-normal text-[12px] sm:text-[14px] text-[#666666]'>
              Get Premium feature to create your own team.
            </li>
            <li className='font-normal text-[12px] sm:text-[14px] text-[#666666]'>
              Get Premium feature to create your own team.
            </li>
            <li className='font-normal text-[12px] sm:text-[14px] text-[#666666]'>
              You Can Add More Than 2 members.
            </li>
          </ul>

          <div className='mt-6'>
            <button className='border-2 border-[#0C5FD8] rounded-lg bg-[#0C5FD8] text-[12px] h-[38px] w-full max-w-[214.49px] text-[#FFFFFF] font-medium hover:bg-transparent hover:text-[#0C5FD8] hover:border-[#0C5FD8]'>
              Purchase Now
            </button>
          </div>
        </div>

        <div className='card w-full lg:w-[548.7px] max-w-[95%] lg:max-w-none h-auto lg:h-[396.6px] border-2 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg p-6 lg:p-8'>
          <h1 className='text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-[#0C5FD8] pb-4 pt-2'>
            Premium
          </h1>
          <p className='text-[28px] sm:text-[32px] lg:text-[34px] font-medium text-[#0C5FD8] pb-6'>
            $50
          </p>
          <ul className='list-disc list-inside space-y-4'>
            <li className='font-normal text-[12px] sm:text-[14px] text-[#666666]'>
              Get Premium feature to create your own team.
            </li>
            <li className='font-normal text-[12px] sm:text-[14px] text-[#666666]'>
              Get Premium feature to create your own team.
            </li>
            <li className='font-normal text-[12px] sm:text-[14px] text-[#666666]'>
              You Can Add More Than 2 members.
            </li>
          </ul>

          <div className='mt-6'>
            <button className='border-2 border-[#0C5FD8] rounded-lg bg-[#0C5FD8] text-[12px] h-[38px] w-full max-w-[214.49px] text-[#FFFFFF] font-medium hover:bg-transparent hover:text-[#0C5FD8] hover:border-[#0C5FD8]'>
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
