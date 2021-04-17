import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ServiceSideBar from '../ServiceSideBar/ServiceSideBar';
import fakeData from '../../../FakeData/fakeData.json'
import { useForm } from 'react-hook-form';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useRef } from 'react';

const Order = () => {
    const { id } = useParams()
    const [order, setOrder] = useState([])
    const [shipmentData, setShipmentData] = useState(null)
    const portalRef = useRef(null);
    useEffect(() => {
        const newOrder = fakeData.find(book => book._id === id)
        setOrder(newOrder)
    }, [id])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setShipmentData(data);
        console.log(data);
    };
    const handlePaymentSuccessful = (paymentId, card) => {
        // ...loggedInUser
        const orderDetails = {
            product: order,
            shipment: shipmentData,
            paymentId,
            card,
            orderTime: new Date()
        }
        console.log(orderDetails);

        // fetch('https://hgj/addOrder', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(orderDetails)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data) {
        //             alert('Placed order successfully')
        //         }
        //     })
    }

    return (
        <section >
            {/* style={{backgroundColor:'red'}} */}
            <div className="row"  >
                <div className="col-md-2">
                    <ServiceSideBar></ServiceSideBar>
                </div>

                <div className="col-md-8">
                    <h1>Order for {order.title}</h1>
                    <p>{order.price}</p>
                    <form className='w-50' onBlurCapture={handleSubmit(onSubmit)}>
                        <input className='form-control mb-3' name='name' {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                        <input className='form-control mb-3' name='email' {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input defaultValue={order.title} className='form-control mb-3' name='service' {...register("service", { required: true })} placeholder='Enter Your Service Name' />
                        {/* <input defaultValue={order.title} className='form-control mb-3' name='service' {...register("service")} placeholder='Enter Your Service Name' /> */}
                        {/* <input type="submit" /> */}
                    </form>
                    <div >
                        <ProcessPayment handlePayment={handlePaymentSuccessful}></ProcessPayment>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Order;