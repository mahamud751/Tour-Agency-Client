import React from 'react';
import { Link } from 'react-router-dom';
import './ManageAdmin.css'


const ManageAdmin = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-2 gx-4 mt-5 p-5">
                <div class="col bg-dark">
                    <div className="manage" style={{
                        height: "600px"
                    }}>
                        <div>
                            <img className="img-fluid" src="https://i.ibb.co/XVNvRjm/3946557-removebg-preview.png" alt="" style={{
                                width: "350px"

                            }} />
                            <div>
                                <Link to={"/manageEvent"}>
                                    <button className="inp">Manage Events</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col bg-danger">

                    <div className="manage" style={{
                        height: "600px"
                    }}>
                        <div>
                            <img className="img-fluid" src="https://www.inexture.com/wp-content/uploads/2020/07/1-1.svg" alt="" style={{
                                width: "350px"

                            }} />
                            <div>
                                <Link to={"/manageBooking"}>
                                    <button className="inp">Manage Booking Events</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageAdmin;