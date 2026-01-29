import { SlideDataType } from '../home/type';
import Image from 'next/image';

type SlideDataProps = {
    data: SlideDataType;
};

const CustomSlider: React.FC<SlideDataProps> = ({ data }) => {
    return (
        <div>
            <Image src={data.icon} alt="image cannot be loaded" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.text}</p>
        </div>
    );
};

export default CustomSlider;
