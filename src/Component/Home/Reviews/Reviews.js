import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://damp-plateau-40551.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section className='my-5 py-5'>
            <div className='container'>
                <div className='d-flex justify-content-center' >
                    <h1 className='review-header'>What People Say</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='review-container row mt-5'>
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