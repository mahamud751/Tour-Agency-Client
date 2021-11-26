import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const BookingEvent = () => {
    const { id } = useParams()
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('https://secret-cliffs-24030.herokuapp.com/bookingPackage')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const handleBook = e => {

        const url = `https://secret-cliffs-24030.herokuapp.com/bookingPackage${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(events)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('yes')
                    setEvents()
                }
            })

    }
    return (
        <div>
            <h1 className="m-5">Booking Event List</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    events.map(event =>
                        <div>
                            <h1>{event.name}</h1>
                            <div>
                                <p>Email:{event.email}</p>
                                <p>Phone No:{event.number}</p>
                                <p>Booking Date:{event.date}</p>
                                <p>Address:{event.address}</p>
                                <p>Status:{event.status}</p>
                                <button onClick={handleBook}>Confirm</button>
                            </div>
                        </div>)
                }
            </Row>
        </div>
    );
};

export default BookingEvent;