import React from 'react';
import Prisingfeture from './Prisingfeture';

const Prisingcard = ({ prising }) => {
    const { name, price, description, features } = prising;
    return (
        <div>
            {/* card header  */}
            <div className=' flex flex-col border bg-gray-500 rounded-2xl p-4'>
                <h2 className='text-7xl'>{name}</h2>
                <h4 className='text-3xl'>{price}</h4>

                {/* card body */}

                <div className=  ' bg-amber-400 rounded-2xl p-4 mt-10 flex-1'>
                    <p>{description}</p>

                    {

                        features.map((feature ,index)=><Prisingfeture
                        key={index} 
                        feature={feature}></Prisingfeture>)
                    }


                </div>

                 <button className='btn  w-full mt-4 ' >Subscribe</button>


            </div>

           

        </div>
    );
};

export default Prisingcard;