import Image from 'next/image';
import React from 'react';

import { cardData } from '@/app/home/courses/type';

interface cardProps {
  data: cardData;
}

export const Card: React.FC<cardProps> = ({ data }) => {
  return (
    <>
      <div className='w-[400px] h-[381px] shadow-sm rounded-[12px] border-2 pt-3 pl-3 pr-3'>
        <Image src={data.image} alt='banner' />
        <div className='card-content flex justify-between '>
          <div className='logo-border h-[49.33px] w-[99.33px] border-2 border-[#E5E7E8] mt-[18.17px] rounded-lg flex gap-6'>
            <Image
              src={data.icon}
              alt='logo'
              className=' pl-[15px] pr-[3px] pt-[12px] pb-[12px] '
            />
            <p className='mt-[9.5px] text-[#636363] text-sm font-normal ml-[15px]'>
              digiHunar
            </p>
          </div>
          <div className='price mt-[21.33px]'>$30</div>
        </div>
        <div className='headline text-[18px] font-medium mt-[12.5px]'>
          {data.headline}
        </div>
        <div className='course-type flex justify-between mt-[17.5px]'>
          <p className='font-normal text-[15px]'>{data.courseType}</p>
          <button className='border-none rounded-lg  bg-[#04C7751A] text-[12px] h-[30px] w-[84px] text-[#0C5FD8] font-medium'>
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};
