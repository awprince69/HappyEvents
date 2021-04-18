import React from 'react';
import './ReviewDetails.css'
const ReviewDetails = ({ review }) => {
    return (
        <div className='col-md-3' style={{marginRight:'90px'}}>
            <div className='shadow-lg d-flex  align-items-center' style={{ border: '0px', width: '18rem' }}>
                <img style={{ borderRadius: '10px' }} className='mx-3' src={review.ImageURL} alt="" width='60' />
                <div className='mb-2 mt-2'>
                    <h5>{review.name}</h5>
                    <small>{review.from}</small>
                </div>
            </div>
            <div className=' mb-5 reviewText card shadow mr-5 mt-2' style={{ border: '0px', width: '18rem' }}>
                <div className='card-body'>
                    <p className='card-text text-center'>{review.text}</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewDetails;