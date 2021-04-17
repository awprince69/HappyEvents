import React from 'react';
import {useHistory } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const { title, img, description, time, person, _id } = service
    // console.log(title);
    const history = useHistory()
    const handleClick = () => {
        const url=`/service/${_id}`
        history.push(url)
    }
    return (
        <div className="col-md-4 mb-4">
            <div className="card detailsContainer" style={{ width: "20rem", border: '0px' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className='d-flex justify-content-between'>
                        <p ><small style={{ fontWeight: '600' }}>{time}</small></p>
                        <p><small style={{ fontWeight: '600' }}>{person}</small></p>
                    </div>
                    <div className='text-center btnEffect'>
                        <button onClick={handleClick} className="btn btn-outline-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetail;