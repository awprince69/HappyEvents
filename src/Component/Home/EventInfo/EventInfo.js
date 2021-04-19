import React from 'react';
import { Link } from 'react-router-dom';

const EventInfo = ({ info }) => {
    const { icon, title, description, button } = info
    return (
        <div className='col-md-3 '>
            <div className={'info-card'}>
                <div className='mt-5 d-flex justify-content-center mb-5'>
                    <img src={icon} alt="" width='60' />
                </div>
                <div>
                    <h4 className='text-center'>{title}</h4>
                    <p className='text-secondary text-center'>{description}</p>
                    <Link to='#' className='navbar-brand d-flex justify-content-center text-danger'><h6>{button}</h6></Link>
                </div>
            </div>
        </div>
    );
};

export default EventInfo;