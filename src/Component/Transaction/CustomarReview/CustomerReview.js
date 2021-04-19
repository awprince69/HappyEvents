import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import upload from '../../../images/icon/photo.png'
import AdminSideBar from '../../Admin/AdminSideBar/AdminSideBar';

const CustomerReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [fileName, setFileName] = useState('Upload Image');

    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            from: data.from,
            text: data.textArea,
            ImageURL: imageURL
        }
        console.log(eventData);
        const url = 'https://damp-plateau-40551.herokuapp.com/addReview'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('Review Added');
                alert("Review added Successfully")
            })
    };
    const handleImageUpload = event => {
        setFileName(event.target.files[0].name)
        const imageData = new FormData()
        imageData.set('key', '09a340c7c9b12e1220052ecb173f33a4')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section className='Container-fluid row' style={{ width: '200vh' }}>
            <div className='col-md-2'>
                <AdminSideBar></AdminSideBar>
            </div>
            <div className='col-md-10 d-flex mt-3' >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control mb-3' {...register("name", { required: true })} placeholder='Enter Your Name' />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className='form-control mb-3' {...register("from", { required: true })} placeholder='Your location' />
                    {errors.form && <span>This field is required</span>}
                    <textarea className='form-control' {...register("textArea")} name="textArea" rows="4" cols="50">
                    </textarea>
                    <div className="form-group">
                        <label htmlFor="myInput"> <br />
                            <img src={upload} alt="" width='40' /> {fileName}
                        </label>
                        <input name="addPhoto" id='myInput' type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
                    </div>
                    <button disabled={imageURL ? '' : "true"} className='btn btn-info' type="submit"> Submit </button>
                </form>
            </div>
        </section>
    );
};

export default CustomerReview;