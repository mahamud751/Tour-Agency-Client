import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './MangeEvent.css'


const ManageEvent = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://floating-wave-05722.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDlt = id => {
        console.log('yes')
        const url = `https://floating-wave-05722.herokuapp.com/packages/${id}`
        console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("success")
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
            })
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
                    services.map(service =>
                        <div className="regUser">
                            <p>{service.name}</p>
                            <img className="p-5 img-fluid" src={service.img} alt="" style={{
                            }} />
                            <p>{service.description}</p>
                            <button onClick={() => handleDlt(service._id)}>Remove</button>
                        </div>)
                }

            </div>
            );
        </div>
    );
};

export default ManageEvent;