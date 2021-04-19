import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const { title, ImageURL, description, time, person, _id } = service
    const history = useHistory()
    const handleClick = () => {
        const url = `/service/${_id}`
        history.push(url)
    }
    return (
        <div className="col-md-4 mb-4" >
            <div className="card detailsContainer" style={{ width: "20rem", border: '0px' }}>
                <img src={ImageURL} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className='d-flex justify-content-between'>
                        <p ><small style={{ fontWeight: '600' }}>{time} Hours</small></p>
                        <p><small style={{ fontWeight: '600' }}>Up to {person} person</small></p>
                    </div>
                    <div className='text-center btnEffect'>
                        <button onClick={handleClick} className="btn btn-outline-success buyButton">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetail;