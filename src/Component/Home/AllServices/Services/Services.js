import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useState } from 'react';
import { useEffect } from 'react';
import './Service.css'
const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://damp-plateau-40551.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    return (
        <section className='mt-5'>
            <div className='text-center pt-5'>
                <h2 className='text-success serviceText'>OUR SERVICES</h2>
            </div>
            <div className='services-container d-flex justify-content-center'>
                <div className='w-75 row mt-2 pt-5 '>
                    {
                        serviceData.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;