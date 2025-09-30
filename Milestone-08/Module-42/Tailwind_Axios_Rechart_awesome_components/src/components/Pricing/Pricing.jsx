import React, { use } from 'react';
import PricingCard from './PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';


const Pricing = ({promiseData}) => {
    
    const dataes = use(promiseData);
    
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10 '>Pricing Card</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10  '>
                                
                {
                    dataes.map(data => <DaisyPricingCard key={data.id} data={data}></DaisyPricingCard>)
                }

                {/* {
                    dataes.map(data => <PricingCard key={data.id} data={data}></PricingCard>)
                } */}
            </div>
        </div>
    );
};

export default Pricing;