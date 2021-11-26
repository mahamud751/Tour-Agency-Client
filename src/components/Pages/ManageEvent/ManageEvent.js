import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './MangeEvent.css'


const ManageEvent = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://secret-cliffs-24030.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDlt = id => {
        const confirmation = window.confirm('Are you Sure?')
        if (confirmation) {
            console.log('yes')
            const url = `https://secret-cliffs-24030.herokuapp.com/packages/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("success")
                        const remaining = products.filter(service => service._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h1>Manage All Event</h1>
            <div className="regUser">
                <p>Package</p>
                <p>Description</p>
                <p>Registration Date</p>
                <p>Action</p>
            </div>
            <div>
                {
                    products.map(service =>
                        <div className="regUser">
                            <p>{service.name}</p>
                            <img className="p-5 img-fluid" src={service.img} alt="" style={{
                            }} />
                            <p>{service.description}</p>
                            <button onClick={() => handleDlt(service._id)}>Remove</button>
                        </div>)
                }

            </div>

        </div>
    );
};

export default ManageEvent;