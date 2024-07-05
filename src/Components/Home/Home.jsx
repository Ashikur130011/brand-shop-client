import React, { useContext } from 'react';
import Header from './Header/Header';
import { AuthContext } from '../providers/AuthProvider';
import Products from '../Products/Products';
import AddProducts from '../AddProducts/AddProducts';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    const gadgets = useLoaderData()
    
    return (
        <div>
            <Header />
            <div className='bg-blue-300'>
            <div className="collapse collapse-plus text-black border-base-300 border mb-2">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus text-black border-base-300 border mb-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus text-black border-base-300 border mb-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus text-black border-base-300 border">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            </div>
            <div className=' pt-16 bg-slate-50'>
            <h1 className='text-blue-950 font-serif text-5xl'>Our Featured Products</h1>
            <div className='grid md:grid-cols-2 bg-slate-50 md:gap-6 gap-2 p-2 md:p-20'>
           {
                gadgets.map(gadget => <Product 
                    key={gadget._id}
                    gadget={gadget}
                    ></Product>)
            }
           </div>
            </div>
        </div>
    );
};

export default Home;