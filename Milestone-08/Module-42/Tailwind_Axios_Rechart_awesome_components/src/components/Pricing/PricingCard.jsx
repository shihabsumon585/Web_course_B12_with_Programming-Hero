import React from 'react';
import CardFeature from './CardFeature';

const PricingCard = ({ data }) => {

    const { name, price, description, features } = data;

    return (
        <div className='flex flex-col p-3 border-2 space-y-4 rounded-2xl'>
            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='text-sm px-2 py-1 bg-amber-100 text-black rounded-3xl'>{price}</p>
            </div>
            <div className='bg-amber-100 text-black p-2 rounded-2xl flex-1 space-y-3'>
                <p className='font-semibold'>{description}</p>
                <ul>
                    {
                        features.map((feature, index) => <CardFeature key={index} feature={feature}></CardFeature>)
                    }
                </ul>
            </div>
            <button className='btn w-full btn-primary text-lg'>Subscribe</button>
        </div>
    );
};

export default PricingCard;