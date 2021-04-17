import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from '../SplitCardForm/SplitCardForm';
const stripePromise = loadStripe('pk_test_51IeD30JJPqx0nbsmlRiQaUmqHjBKZRcbdFKLHPltreZk0OrlES3KwsL6hXiYWw7lYDpDGpjPejozPjIAYaFn3W7n00igfwDrVu');
const ProcessPayment = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;