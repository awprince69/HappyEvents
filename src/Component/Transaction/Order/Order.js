import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ServiceSideBar from '../ServiceSideBar/ServiceSideBar';
import { useForm } from 'react-hook-form';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const Order = () => {
    const { id } = useParams()
    const [order, setOrder] = useState([])
    const [shipmentData, setShipmentData] = useState(null)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`https://damp-plateau-40551.herokuapp.com/dmag/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data[0]);
                setOrder(data[0])
            })

    }, [id])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = formData => {
        setShipmentData(formData);

    };
    const handlePaymentSuccessful = (paymentId, card) => {
        const pending = "pending"
        const orderDetails = {
            ...loggedInUser,
            product: order.title,
            image: order.ImageURL,
            description: order.description,
            shipment: shipmentData,
            paymentId,
            card,
            process: pending,
            orderTime: new Date()
        }
        console.log(orderDetails);

        fetch('https://damp-plateau-40551.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Placed order successfully')
                }
            })
    }

    return (
        <section style={{ width: '180vh' }} >
            <div className="row">
                <div className="col-md-2">
                    <ServiceSideBar></ServiceSideBar>
                </div>

                <div className="col-md-8 mt-3 ">
                    <h4 className='mb-3'> Booking for <span className='text-success'>{order.title}</span> </h4>
                    <form className='w-50' onBlur={handleSubmit(onSubmit)}>
                        <input className='form-control mb-3' name='name' {...register("name", { required: true })} placeholder='Enter Your name' />
                        {errors.name && <span>This field is required</span>}
                        <input className='form-control mb-3' name='email' {...register("email", { required: true })} placeholder='Enter your email' />
                        {errors.email && <span>This field is required</span>}
                        <input defaultValue={order.title} className='form-control mb-3' name='service' {...register("service", { required: true })} placeholder='Enter Your Service Name' />
                    </form>
                    <div >
                        <ProcessPayment handlePayment={handlePaymentSuccessful}></ProcessPayment>
                    </div>
                    <h5 className='mt-5 text-primary'>Your Service will charge ${order.price}</h5>
                </div>
            </div>

        </section>
    );
};

export default Order;