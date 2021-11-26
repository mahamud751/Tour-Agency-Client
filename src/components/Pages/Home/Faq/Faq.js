import React from 'react';
import { Accordion } from 'react-bootstrap';
const Faq = () => {
    return (
        <div>
            <div className="mt-5 p-5">
                <h1 className="bg-danger text-white p-3"> Do You Have Questions About Us?
                </h1>
                <div className="row p-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className=" mt-5">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Why Choose Us?</Accordion.Header>
                                    <Accordion.Body>
                                        Fastest and safety services always
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What are some service in here?</Accordion.Header>
                                    <Accordion.Body>
                                        An online booking system acts as a bridge between your business offers and sales channels, and your current resources. With a booking system, you can manage these business processes all in one place.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How much support?</Accordion.Header>
                                    <Accordion.Body>
                                        We try to only advertise products available on site at that time, however sometimes this isn’t always possible – if there is something you see advertised and it isn’t in stock yet please feel free to email us for more information! We’ll always try and help.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <img className="img-fluid" src='https://preview.colorlib.com/theme/tralive/assets/img/gallery/xabout2.png.pagespeed.ic.FKuxbsbrrT.webp' alt="" style={{
                            height: "450px",
                            width: "450px"
                        }} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;