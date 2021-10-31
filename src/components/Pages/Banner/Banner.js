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
                        <h3>Let's Make Your Best Trip Ever</h3>
                        <p>Book your perfect trip with travel tips, destination information and inspiration from us.</p>
                        <button className="BannerBtn">Discover Now</button>
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
                        <h3>Let's Make Your Best Trip Ever</h3>
                        <p>Book your perfect trip with travel tips, destination information and inspiration from us.</p>
                        <button className="BannerBtn">Discover Now</button>
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
                        <h3>Let's Make Your Best Trip Ever</h3>
                        <p>Book your perfect trip with travel tips, destination information and inspiration from us.</p>
                        <button className="BannerBtn">Discover Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;