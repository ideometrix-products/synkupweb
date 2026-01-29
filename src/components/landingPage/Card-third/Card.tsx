import React from 'react';
import Image from 'next/image';
import { CardDataTypes } from '../home/type';

type cardProps = {
    data: CardDataTypes;
    staggered?: boolean;
};
const Card: React.FC<cardProps> = ({ data, staggered }) => {
    return (
      <div
        className={`flex items-center p-4 sm:p-6 bg-white shadow-lg rounded-xl transition-all duration-300 space-x-5 w-[341px] 
        ${staggered ? 'sm:ml-16 lg:ml-32' : 'sm:mr-4 lg:mr-12'}`} 
        style={{ maxWidth: '311px' }}
      >
        <Image
          alt={data.title}
          src={data.icon}
          width={40}
          height={40}
          className="shadow-lg"
        />
        <div>
          <h3 className="text-sm sm:text-lg font-bold text-gray-800">{data.title}</h3>
          <p className="text-xs sm:text-sm text-gray-500">{data.description}</p>
        </div>
      </div>
    );
  };
  
  

export default Card;
