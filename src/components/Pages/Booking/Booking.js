import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Booking.css'

const Booking = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://floating-wave-05722.herokuapp.com/bookingPackage', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('success')
                    reset()
                }
            })
    };
    return (
        <div className="addUser">
            <h1>Pleaser Registration first</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Full Name</label>
                <input {...register("name", { required: true, maxLength: 20 })} />
                <label htmlFor="userName/email">UserName or Email</label>
                <input {...register("email")} />
                <label htmlFor="date">Date</label>
                <input {...register("date")} />
                {/* <select {...register("person")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="2+">2+</option>
                </select> */}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Booking;