import React from 'react';
import { useForm } from "react-hook-form";
import AdminSideBar from '../AdminSideBar/AdminSideBar';
const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <section className='row'>
            <div className='col-md-2'>
                <AdminSideBar></AdminSideBar>
            </div>
            <div className='col-md-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row spaceInput">
                        <div className="form-group col-md-5 mt-5">
                            <label><h6>Add Email</h6></label>
                            <input name="email" className="form-control" placeholder="Email address" {...register("email")} />
                        </div>
                    </div>
                    <button className='btn btn-success' type="submit">Submit</button>
                </form>
            </div>
        </section>

    );
};

export default MakeAdmin;