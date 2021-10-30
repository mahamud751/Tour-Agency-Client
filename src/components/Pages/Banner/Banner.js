import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/martine/img/xbanner_bg.png.pagespeed.ic.wPlBrxd3rO.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{
                        bottom: "20.25rem"
                    }}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{
                        bottom: "20.25rem"
                    }}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{
                        bottom: "20.25rem"
                    }}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;