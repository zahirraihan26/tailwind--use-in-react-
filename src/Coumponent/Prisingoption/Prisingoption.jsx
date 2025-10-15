import React, { use } from 'react';
import Prisingcard from '../Prisingcard/Prisingcard';
import Daisycard from '../Daisycard/Daisycard';

const Prisingoption = ({prisingPromise}) => {

    const prisingData = use(prisingPromise)

    // console.log(prisingData)



    return (
        
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {/* {
                    prisingData.map(prising =><Prisingcard 
                        key={prising.id}
                        prising={prising}> </Prisingcard>)
                } */}

                {
                    prisingData.map(prising => <Daisycard
                         key={prising.id}
                        prising={prising}></Daisycard>)
                }
            </div>
        </div>
    );
};

export default Prisingoption;