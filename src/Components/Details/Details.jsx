import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const { _id, name, brand, model, capacity, technology, price, img } = useLoaderData()
    return (
        <div className='p-12'>
            <div className="card md:card-side bg-white shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Movie" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">{model}</h2>
                <p>Barnd: {brand}</p>
                <div className="card-actions justify-end">
                <Link to={`/details/${_id}`}><button className="btn btn-primary">Purchase</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Details;