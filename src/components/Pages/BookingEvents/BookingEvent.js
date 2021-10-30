import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

const BookingEvent = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookingPackage')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <h1 className="m-5">Booking Event</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    events.map(event =>
                        <div>
                            <h1>{event.name}</h1>
                            <p>Booking Date:{event.date}</p>
                        </div>)
                }
            </Row>
        </div>
    );
};

export default BookingEvent;