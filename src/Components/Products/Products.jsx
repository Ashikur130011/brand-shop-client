import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const gadgets = useLoaderData()
    return (
        <div className='bg-slate-100 text-black'>
            <h1>Products will available here {gadgets.length}</h1>
           <div className='grid md:grid-cols-2 md:gap-4 gap-2 md:p-24'>
           {
                gadgets.map(gadget => <Product 
                    key={gadget._id}
                    gadget={gadget}
                    ></Product>)
            }
           </div>
        </div>
    );
};

export default Products;