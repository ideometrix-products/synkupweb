import Image from 'next/image';
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';

import logo from '../../../../public/assets/logo.png';

import dugihunar from '../../../../public/assets/digihunar.webp'

const Footer = () => {
  return (
    <div className='h-auto w-full mt-9 bg-[#F3F9FF]'>
      <div className='footer-inner px-4 md:px-8 lg:px-[100px] py-8 w-full flex flex-col'>
        <div className='footer-upper flex flex-col md:flex-row justify-between items-center w-full mt-8 gap-6 md:gap-0'>
          <div className='logo'>
            <Image src={dugihunar} width={108} height={48} alt='logo' />
          </div>

          <div className='categories text-center md:w-1/3 w-full'>
            <h1 className='text-[#2E2E2E] font-bold text-lg'>Categories</h1>
          </div>

          <div className='icons flex justify-center items-center gap-3 text-[#31A0FA]'>
            <div className='border-[1px] border-[#31A0FA] h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#31A0FA] hover:text-white'>
              <Facebook size={15} />
            </div>
            <div className='border-[1px] border-[#31A0FA] h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#31A0FA] hover:text-white'>
              <Instagram size={15} />
            </div>
            <div className='border-[1px] border-[#31A0FA] h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#31A0FA] hover:text-white'>
              <Twitter size={15} />
            </div>
            <div className='border-[1px] border-[#31A0FA] h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#31A0FA] hover:text-white'>
              <Linkedin size={15} />
            </div>
          </div>
        </div>

        <div className='footer-lower flex flex-start flex-col md:flex-row  mt-8 mb-8 gap-[6rem] '>
          <div className='para text-[#979797] text-center md:text-left w-[385px] h-[104px] md:w-1/3 leading-6 '>
            With a unine you can access the more than 240 million customers out
            there, as well as offering  management tools, options, and payments <br />
            methods.
          </div>

          <div className='flex  flex-col md:flex-row justify-center w-[404px] gap-[16px] md:gap-16 mr-20 text-[#979797] '>
            <div className='category-1 leading-[44px] text-center md:text-left w-full md:w-auto '>
              <p>Job</p>
              <p>Learning</p>
              <p>Find talent</p>
              <p>Contact Us</p>
            </div>
            <div className='category-2 leading-[44px] text-center md:text-left w-full md:w-auto '>
              <p>Help Center</p>
              <p>About Us</p>
              <p>Reviews</p>
              <p>Trust, safety & security</p>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-bottom bg-[#0C5FD8] text-white text-center h-10 flex justify-center items-center text-[12px]'>
        Copyright © 2024 all rights reserved by Step Up Edtech
      </div>
    </div>
  );
};

export default Footer;
