import React from 'react';
import Swal from 'sweetalert2';

const AddProducts = () => {
    
    const handleAddProducts = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const model = form.model.value
        const capacity = form.capacity.value
        const technology = form.technology.value
        const category = form.category.value
        const price = form.price.value
        const img = form.img.value
        
        const newGadget = {name, brand, model, capacity, technology, category, price, img }
        console.log(newGadget)


        //send data to server
        fetch('http://localhost:5000/gadget', {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGadget)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                form.reset()
            })
    }

    return (
        <div className='md:m-28'>
            <h1 className='text-4xl my-6 font-serif'>Add <span className=''>Gadget</span> Here</h1>
            <form onSubmit={handleAddProducts} className='w-full'>
                <div className='md:flex my-4'>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text w-1/3">Gadget</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' placeholder="Gadget name" className="input w-3/4 input-bordered" />
                    </label>
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text w-1/3">Brand</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='brand' placeholder="brand name" className="input w-3/4 input-bordered" />
                    </label>
                </div>
                </div>
                <div className='md:flex my-4'>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text w-1/3">Model</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='model' placeholder="model no" className="input w-3/4 input-bordered" />
                    </label>
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text w-1/3">Capacity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='capacity' placeholder="memory capacity" className="input w-3/4 input-bordered" />
                    </label>
                </div>
                </div>
                <div className='md:flex my-4'>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text w-1/3">Technology</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='technology' placeholder="technology" className="input w-3/4 input-bordered" />
                    </label>
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text w-1/3">Origin</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='origin' placeholder="origin" className="input w-3/4 input-bordered" />
                    </label>
                </div>
                </div>
                <div className='md:flex my-4'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text w-1/3">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='category' placeholder="category" className="input w-3/4 input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text w-1/3">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='price' placeholder="price" className="input w-3/4 input-bordered" />
                    </label>
                </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <label className="label">
                        <span className="label-text w-1/3">Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='img' placeholder="image url" className="input w-3/4 input-bordered" />
                    </label>
                </div>
                

                {/* button */}
                <div className="items-center my-12">
                <button className="btn btn-outline w-2/5 btn-success">Success</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddProducts;