import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css'

const Review = () => {
    return (
        <div className="review">
            <div className="row my-5">
                <div className="col-lg-5 col-md-5 col-12 mt-5">
                    <img className="img-fluid" src="https://i.ibb.co/0cc9Y5z/Happy-customer-scaled-removebg-preview.png" alt="" style={{
                        width: "400px", height: "400px", padding: "10px"
                    }} />
                </div>
                <div className="col-lg-7 col-md-7 col-12">
                    <Card style={{ width: '24rem' }}>
                        <Card.Header className="text-center text-white fs-1 bg-dark">Customer Review</Card.Header>
                        <ListGroup variant="flush">

                            <ListGroup.Item>
                                <div>
                                    <img className="sImg" src="https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" alt="" />

                                </div>
                                <blockquote>Fastest Service</blockquote>
                                <Rating
                                    initialRating={4}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                            </ListGroup.Item>
                            <br />
                            <ListGroup.Item>
                                <div>
                                    <img className="sImg" src="https://images.unsplash.com/photo-1610476650745-58700c3defa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />
                                </div>
                                <p>Great and real good tonne able to doughnut last minute. I'm happy but hope I can get them via email as soon as possible. Thank you</p>
                                <Rating
                                    initialRating={3}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                            </ListGroup.Item>
                            <br />
                            <ListGroup.Item>
                                <div>
                                    <img className="sImg" src="https://images.unsplash.com/photo-1614273867161-22da2cd8ab39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                </div>
                                <p> So far my experience with you service went very well. You cannot tell these days because of the level of fraud it is refreshing to see a well thought out secure site. Thank you..</p>
                                <Rating
                                    initialRating={5}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Review;