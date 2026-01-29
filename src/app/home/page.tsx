"use client";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "@/components/landingPage/Card-third/Card";
import {
  CardData,
  learnigCardData,
  SlideData,
} from "@/components/landingPage/home/HomeData";
import Learning from "@/components/landingPage/learningComp/Learnig";

import logo1 from "../../../public/assets/logo.png";
import logo2 from "../../../public/assets/logo1.png";
import logo3 from "../../../public/assets/logo2.png";
import logo4 from "../../../public/assets/logo3.png";
import logo5 from "../../../public/assets/logo4.png";
import logo6 from "../../../public/assets/logo4.png";
import EnnImg from "../../../public/home-Page-Images/End.png";
import Main from "../../../public/home-Page-Images/Home.png";
import DotedImg from "../../../public/Icons/doted.png";

export default function Home() {
  const counters = [
    { value: "20+", label: "Courses" },
    { value: "230+", label: "Jobs" },
    { value: "10+", label: "Members" },
    { value: "50+", label: "Teams" },
  ];

  const logos = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 1" },
    { src: logo3, alt: "Logo 1" },
    { src: logo5, alt: "Logo 1" },
    { src: logo6, alt: "Logo 1" },
    { src: logo3, alt: "Logo 1" },
  ];

  return (
    <section className="">
      {/* First Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 mt-2">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-2/5 text-center md:text-left mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="bg-[#ecedf2] text-black text-xs font-medium rounded-full px-3 py-2 flex items-center">
                <Image src={DotedImg} alt="Dot icon" className="mr-2 h-5 w-5" />
                100% Job Opportunity for Newcomers
              </span>
            </div>
            <h1 className="text-2xl  lg:text-5xl font-bold w-[521px] h-[290px] ">
              <p className="mb-4">Elevate Your</p>
              <p className="mb-4">
                Expertise <span className="text-[#0c5fd8]">And</span>
              </p>
              <p className="mb-4">
                <span className="text-[#0c5fd8]">Unlock New</span> Career
              </p>
              <p className="">Opportunities</p>
            </h1>

            <p className=" text-gray-600 font-normal text-[18px] leading-[26.23px] text-left [font-family:'Poppins'] w-[517px] tracking-normal mb-[28px]">
              With Unine, you can access the more than 240 million customers out
              there, as well as offering management tools, options, and payment
              methods.
            </p>

            <button className="bg-[#0c5fd8] text-white font-semibold py-2 px-8 rounded-md shadow-md transition duration-300">
              Join Now
            </button>
          </div>
          <div className="relative w-full md:w-3/5 flex justify-center items-center">
            <Image
              src={Main}
              alt="Laptop Visual"
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-wrap justify-center items-center bg-[#f6f7fe] py-10 sm:py-12 px-2 sm:px-8">
        <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8 text-center">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="flex flex-col items-center border-gray-300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                {counter.value}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section */}
      <div className="container mx-auto sm:px-6 md:px-12 lg:px-20 py-12 ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[85px] space-y-8 md:space-y-0 ">
          {/* Cards Section */}
          <div className="w-full md:w-2/5 flex flex-col space-y-4 ">
            {CardData.map((item, index) => (
              <Card key={index} data={item} staggered={index % 2 !== 0} />
            ))}
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/5 flex flex-col gap-[6px] ">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center md:text-left leading-tight">
              <span className="text-[#1560ae]">Collaborative</span> Knowledge{" "}
              <span className="text-[#1560ae]">For</span> Everyone
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-[26.23px] text-center md:text-left  w-[550px] h-[69px] mb-2 ">
              With Unine, you can access more than 240 million customers out{" "}
              <br /> there, as well as offering management tools, options, and
              payments <br /> methods.
            </p>
            <p className="text-gray-600 text-sm sm:text-base  text-center md:text-left w-[550px] h-[69px] ">
              With a unine you can access the more than 240 million customers
              out there, as well as offering management .
            </p>
            <p className="text-gray-600 text-sm sm:text-base  text-center md:text-left w-[550px] h-[69px] ">
              With a unine you can access the more than 240 million customers
              out there, as well as offering management .
            </p>
            <p className="text-gray-600 text-sm sm:text-base  text-center md:text-left  w-[550px] h-[69px] border-1 border-red-200">
              With a unine you can access the more than 240 million customers
              out there, as well as offering management .
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#0c5fd8] text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-[#0b4db0] transition duration-300">
                See All Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="w-full container max-w-7xl mx-auto py-10">
        <div className=" mb-10 flex flex-col items-center justify-center ">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 ">
            Get <span className="text-black">The Right</span> Talent For{" "}
            <span className="text-blue-500">Your </span> <span className="text-black">Job</span>
          </h2>
          <p className="text-gray-600 text-center mt-[38px] text-[20px]   w-[1140px] leading-[30.76px] ">
            We’re Unlocking Career Opportunities In A New Way. Industry Experts
            Share Their Insights
            <br />
            Directly, Creating A Dynamic And Collaborative Platform To Help You
            Find The Right Job
            <br />
            And Grow Professionally.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {SlideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300 w-[395px] h-[268px]">
                <div className="mb-10">
                  <Image
                    src={slide.icon}
                    alt={slide.title}
                    width={59}
                    height={59}
                    className="w-59 h-49"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {slide.description}
                </p>
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-[#0C5FD81A] text-[#0C5FD8] text-sm rounded-full hover:bg-[#e0f7e7] transition">
                    {slide.text}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center mt-6 mb-5 relative">
  <div className="bottom-0 flex justify-center space-x-4">
    <button className="prev-button w-10 h-10 border-2 border-[#0C5FD8] text-blue-600 rounded-full flex justify-center items-center hover:bg-[#2873B9] hover:text-white transition mx-2 text-lg font-extrabold">
      &larr;
    </button>
    <button className="next-button font-extrabold w-10 h-10 border-2 border-[#0C5FD8] text-blue-600 rounded-full flex justify-center items-center hover:bg-[#2873B9] hover:text-white transition mx-2 text-lg">
      &rarr;
    </button>
  </div>
</div>

      </div>

      {/* Fifth Section */}
      <div className="bg-[#f6f7fe] h-[855.66px] ">
        <div className="container mx-auto flex py-10 flex-col items-center md:items-center md:flex-row flex-wrap justify-center gap-8 px-4 sm:px-6 lg:px-20 ">
          <div className="text-center  max-w-3xl ">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black ">
              Embark On A <span className="text-[#0C5FD8]">Learning</span> 
              <p><span className="text-[#0C5FD8]">Adventure</span> Online</p>
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg  text-[18px] font-normal">
              With Unine, you can access more than 240 million customers, as
              well as management tools, options, and payment methods.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-8xl ">
            {learnigCardData.map((learn, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 w-[392.100px] h-[494px] shadow-md rounded-lg flex flex-col justify-between text-center"
              >
                <Learning data={learn} />
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full mt-4">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition">
              See All Courses
            </button>
          </div>
        </div>
      </div>

      {/* Sixth Section */}
      <div className="container mx-auto text-center my-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
          <span className="text-blue-600">Trusted</span> By
        </h1>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={3000}
          freeMode={true}
          className="mySwiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <Image
                  className="h-[150px] w-[150px] md:w-[120px] lg:w-[150px] object-contain"
                  src={logo.src}
                  alt={logo.alt}
                  width={108}
                  height={48}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Seventh Section */}
      <div className="relative text-center py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={EnnImg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
            priority
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg mx-auto">
            Stay updated with the latest news, updates, and exclusive content
            every week.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center  sm:max-w-md md:max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden sm:p-3 space-y-3 sm:space-y-0  w-[610px] h-[71px] pl-[30px] pr-[30px]">
            <div className="flex items-center">
              <FaEnvelope className="text-gray-400 text-xl" />
            </div>
            <input  
              type="email"
              placeholder="Enter your email here"
              className=" flex-1 w-[610px]  py-2 sm:py-3 px-4 text-[#627193] outline-none rounded-lg placeholder-gray-500 border border-gray-300  sm:border-none"
            />
            <button className="bg-[#0C5FD8] rounded-[10px] w-[140px] pb-[10px] text-white pt-[10px] h-[40px] text-center hover:bg-blue-700 transition-all duration-300 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
