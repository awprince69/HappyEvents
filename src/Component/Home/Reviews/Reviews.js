import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import reviewData from '../../../FakeData/reviewData.json'
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        setReview(reviewData)
    }, [])
    return (
        <section className='my-5 py-5'>
            <div className='container'>
                <div className='d-flex justify-content-center' >
                    <h1>What People Say</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='row mt-5'>
                        {
                            review.map(review => <ReviewDetails key={review._id} review={review} ></ReviewDetails>)
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Reviews;