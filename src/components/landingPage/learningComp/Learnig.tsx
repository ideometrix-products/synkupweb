import Image from 'next/image';
import { LearningCardType } from '../home/type';

type LearningDataProps = {
    data: LearningCardType;
};

const Learning: React.FC<LearningDataProps> = ({ data }) => {
    return (
        <div className=' w-[391px] h-[508px]'>
            <div className="container overflow-hidden rounded-lg w-[391px] h-[310px] ">
                <Image
                    src={data.Image}
                    alt="Course Image"
                    className="  object-cover h-[316px] w-[391px]"
                />
            </div>
            <div className='py-[38px] px-2 pl-[26px] pr-[26px]'>
                <div className=" flex justify-space-around text-start ">
                    <h1 className="font-semibold text-xl">{data.title}</h1>
                    <p className="text-[#0C5FD8] font-semibold mt-1 text-[15px]">${data.price}</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-[15px]">⭐ 4.8</span>
                        <span className="text-gray-500 text-[15px]">(125 reviews)</span>
                    </div>
                    <button className="text-[12px] w-[90px] h-[32px] bg-[#0C5FD81A] text-blue-600 rounded-lg hover:bg-[#0C5FD8] hover:text-white">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>

    );


};

export default Learning;
