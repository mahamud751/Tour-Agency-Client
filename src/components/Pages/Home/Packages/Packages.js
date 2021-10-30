import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Packages = (props) => {
    const { _id, name, img, price, description } = props.service
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} style={{
                        height: "600px"
                    }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>From ${price}</p>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            < button> Booking Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col >
        </div >
    );
};

export default Packages;