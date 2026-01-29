import React from 'react';

const Page = () => {
  const features = [
    { title: 'Learn and Earn', icon: '/Icons/Frame.png' },
    { title: 'Expert-Led Courses', icon: '/Icons/Group.png' },
    { title: 'Certifications', icon: '/Icons/Frame (1).png' },
    { title: 'Freelancing Opportunities', icon: '  /Icons/Frame (2).png' },
    { title: 'Marketplace', icon: '/Icons/Group (1).png' },
    { title: 'Networking', icon: '/Icons/Frame (3).png' },
  ];

  return (
    <div className='container mx-auto min-h-screen py-12 px-2 '>
      <div className='w-[90%] mx-auto'>
        <h2 className='text-3xl font-semibold mb-8'>What You Will Get</h2>
        <p className='mb-12 text-black'>
          Digihunar is a dynamic platform where you can learn new skills and earn
          through opportunities that showcase your expertise. It offers access
          to expert-led courses, certifications, and resources to help you grow
          personally and professionally.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='p-10 border 
              border-[#D2DFEC] 
              rounded-lg hover:shadow-lg 
              hover:border-transparent 
              hover:bg-white 
              transition min-h-[350px] 
              flex flex-col justify-between'
            >
              <div>
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className='w-15 h-15 mb-10'
                />
                <h3 className='font-semibold text-[#473964] text-lg mb-2'>
                  {feature.title}
                </h3>
                <p className='text-[#646670] font-normal text-base'>
                  Digihunar empowers you to grow by combining learning and earning
                  opportunities in a single platform. Master new skills through
                  expert-led courses and gain certifications.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
