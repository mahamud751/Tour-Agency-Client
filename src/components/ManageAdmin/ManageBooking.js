import React, { useEffect, useState } from 'react';
import './ManageBooking.css'

const ManageBooking = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('https://floating-wave-05722.herokuapp.com/bookingPackage')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    const handleDlt = id => {
        const confirmation = window.confirm('Are you Sure?')
        if (confirmation) {
            const url = `https://floating-wave-05722.herokuapp.com/bookingPackage${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('success')
                        const remaining = events.filter(event => event._id !== id)
                        setEvents(remaining)
                    }
                })
        }


    }


    return (
        <div>
            <h1 className="m-5">Booking Event</h1>
            <div className="regUsers">
                <p>Name</p>
                <p>Email</p>
                <p>Phone No</p>
                {/* <p>Booking Date</p> */}
                <p>Address</p>
                <p>Status</p>
                <p>Action</p>
            </div>

            {/* <Row xs={1} md={6} className="g-4"> */}
            {
                events.map(event =>
                    <div className="regUsers border border-bottom-2 border-danger">
                        <p>{event.name}</p>

                        <p>{event.email}</p>
                        <p>{event.number}</p>
                        {/* <p>{event.date}</p> */}
                        <p>{event.address}</p>
                        <p>{event.status}</p>
                        <p onClick={() => handleDlt(event._id)} style={{ cursor: "pointer" }}>Remove</p>


                    </div>)
            }
            {/* </Row> */}
        </div >
    );
};

export default ManageBooking;