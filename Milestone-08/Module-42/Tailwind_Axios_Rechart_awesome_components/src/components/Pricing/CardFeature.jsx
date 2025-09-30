import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const CardFeature = ({feature}) => {
    return (
        <li className='text-sm mb-1 flex'>
            <CircleCheckBig className='mr-1 w-4'></CircleCheckBig>
            {feature}
        </li>
    );
};

export default CardFeature;