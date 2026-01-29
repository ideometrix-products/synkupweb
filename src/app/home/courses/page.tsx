'use client';

import React, { useState } from 'react';

import { Card } from '@/components/ui-components/card/Card';
import Tag from '@/components/ui-components/tags/Tag';

import { CoursesData } from './CoursesData';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = CoursesData.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.headline
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='container mx-auto px-4 sm:px-8 lg:px-16  mb-[1.5rem]'>
      <div className='courses-upper flex flex-wrap items-center justify-between gap-4 mt-[20px]'>
        <div className='text-[#000000] font-bold text-xl sm:text-2xl'>
          Courses
        </div>
        <div className='courses-upper-right w-full sm:w-auto'>
          <div className='relative w-full sm:max-w-md'>
            <input
              type='search'
              placeholder='Search for Courses'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full sm:w-[400px] py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='courses-para mt-[14.5px] text-[#666666] text-sm sm:text-base font-normal leading-6'>
        Synkup provides a diverse range of courses designed to meet the needs of
        learners at all levels, from beginners to advanced professionals.
        Covering fields like technology, design, business, and more, these
        courses are crafted to be practical, engaging, and up-to-date with
        industry trends
      </div>
      <div className='categories flex flex-wrap gap-3 mt-8 cursor-pointer'>
        {[
          'All',
          'UI/UX',
          'Web Design',
          'Web Development',
          'Graphic Designing',
        ].map((category) => (
          <Tag
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-[40px] border transition ${
              selectedCategory === category
                ? 'bg-[#0C5FD8] text-white'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
            }`}
          >
            {category}
          </Tag>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((card) => (
            <div key={card.id} className='flex justify-center'>
              <Card data={card} />
            </div>
          ))
        ) : (
          <div className='text-center text-gray-500 col-span-full'>
            No courses found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
