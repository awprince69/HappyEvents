import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import fakeData from '../../../FakeData/fakeData.json'
import { useState } from 'react';
import { useEffect } from 'react';
const Services = () => {
    const [serviceData,setServiceData]=useState([])
    useEffect(()=>{
        setServiceData(fakeData)
    },[])
    return (
        <section className='services-container mt-5'>
            <div className='text-center pt-5'>
                <h2 className='text-success'>OUR SERVICES</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-2 pt-5'>
                    {
                        serviceData.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;