import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://floating-wave-05722.herokuapp.com/packages', data)
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
            <Link to={"/manageEvent"}>
                <button>Manage Events</button>
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Full Name</label>
                <input {...register("name", { required: true, maxLength: 20 })} />
                <label htmlFor="price">Price</label>
                <input {...register("price")} />
                <label htmlFor="description">Description</label>
                <input {...register("description")} />
                <input {...register("img")} />

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

export default AddEvent;