import React, { useContext } from 'react';
import Header from './Header/Header';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    

    
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
            
        </div>
    );
};

export default Home;