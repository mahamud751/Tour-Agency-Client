import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://secret-cliffs-24030.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('success')
                    reset()
                }
            })
    };
    return (
        <div className="addUser">
            <h1 className="m-5 text-uppercase">Add a new event</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Event Name</label>
                <input {...register("name", { required: true, maxLength: 20 })} />
                <label htmlFor="price">Price</label>
                <input {...register("price")} />
                <label htmlFor="description">Description</label>
                <input {...register("description")} />
                <label htmlFor="description">Img Url</label>
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