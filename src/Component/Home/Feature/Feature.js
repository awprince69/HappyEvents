import React from 'react';
import './Feature.css'
const Feature = () => {
    return (
        <section className='featureContainer'>
            <div style={{ height: '550px', width: '100%' }} className='row d-flex align-items-center'>
                <div className="col-md-6 offset-md-3 text-center ">
                    <h1 className='text-white mb-5' style={{ fontSize: '4rem' }}>Celebrate With Us</h1>
                    <p className='text-white mb-5 featureText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque commodi quas voluptates iusto impedit illum accusantium consectetur voluptate architecto optio!</p>
                    <div className="start-button">
                        <button className="btn text-white" >Let's Get Started</button>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Feature;