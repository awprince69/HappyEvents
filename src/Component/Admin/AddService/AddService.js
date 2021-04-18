import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import upload from '../../../images/icon/photo.png'

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [fileName, setFileName] = useState('Upload Image');
    const onSubmit = (data) => {
        // console.log(data);
        const eventData = {
            title: data.title,
            time: data.time,
            price: data.price,
            person: data.person,
            description: data.textArea,
            ImageURL: imageURL
        }
        console.log(eventData);
        // const url = 'https://still-sierra-25000.herokuapp.com/addProduct'
        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(eventData),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         alert("Product added Successfully")
        //     })
    };
    const handleImageUpload = event => {
        setFileName(event.target.files[0].name)
        const imageData = new FormData()
        imageData.set('key', '09a340c7c9b12e1220052ecb173f33a4')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section className='row' style={{width:'200vh'}}>
            <div className='col-md-2'>
                <AdminSideBar></AdminSideBar>
            </div>
            <div className='col-md-10 '>
                <div className='products'>
                    <h2 style={{ paddingLeft: '10px' }}>Add Services </h2>
                    <div className='formContainer'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row spaceInput">
                                <div className="form-group col-md-5 spaceBetween">
                                    <label><h6>Service Name</h6></label>
                                    <input name="title" className="form-control" placeholder="service name" {...register("title")} />
                                </div>
                                <div className="form-group col-md-5">
                                    <label><h6>Time</h6></label>
                                    <input name="time" className="form-control" placeholder="Service Hour" {...register("time")} />
                                </div>
                            </div>
                            <div className="form-row spaceInput">
                                <div className="form-group col-md-5 spaceBetween">
                                    <label> <h6>Service Price</h6></label>
                                    <input className="form-control" name="price" placeholder="Service Price" {...register("price")} />
                                </div>
                                <div className="form-group col-md-5 spaceBetween">
                                    <label> <h6>Total Person</h6></label>
                                    <input className="form-control" name="person" placeholder="Estimated person" {...register("person")} />
                                </div>
                            </div>
                            <div className="form-row spaceInput">
                                <div className="form-group col-md-5 spaceBetween">
                                    <textarea className='form-control' name="textArea" {...register("textArea")}  rows="4" cols="50">
                                    </textarea>
                                </div>
                                <div className="form-group col-md-1 mx-2 ">
                                    <label htmlFor="myInput"> <br />
                                        <img src={upload} alt="" width='50' /> {fileName}
                                    </label>
                                    <input name="addPhoto" id='myInput' type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
                                </div>
                            </div>
                            <Button disabled={imageURL ? '' : "true"} className='submitButton' variant='outline-success' type="submit">Save</Button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AddService;