import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Packages from '../Packages/Packages';


const Event = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://secret-cliffs-24030.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="m-5">Upcoming Events</h1>
            <Row xs={1} md={3} className="g-4">

                {
                    services.map(service => <Packages
                        service={service}
                    ></Packages>)
                }

            </Row>
        </div>
    );
};

export default Event;