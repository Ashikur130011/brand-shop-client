import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ gadget }) => {
    const { _id, name, brand, model, capacity, technology, price, img } = gadget
    return (
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
                <Link to={`/details/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;