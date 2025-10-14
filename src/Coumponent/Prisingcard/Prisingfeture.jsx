import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Prisingfeture = ({feature}) => {
    return (
       <p className='flex p-2 gap-1 text-gray-600'>
         <CircleCheckBig></CircleCheckBig>{feature}
       </p>
    );
};

export default Prisingfeture;