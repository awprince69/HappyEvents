import React from 'react';
import { Button } from 'react-bootstrap';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{ height: '650px', width: '100%' }} className='row d-flex align-items-center'>
            <div className="col-md-6 offset-md-3">
                <h1 className='text-white eventText' style={{ fontSize: '5rem' }}>One-Stop<br />Event Planner</h1>
                <Button className='btn mt-5 aboutButton' style={{ backgroundColor: 'white', border: '0px', color: '#C28C23', borderRadius: '20px', width: '100px' }}> About Us </Button>
                <Button variant='danger' style={{ border: '0px', borderRadius: '20px', width: '110px', marginLeft: '100px' }}> Our Service</Button>
            </div>
        </main>
    );
};

export default HeaderMain;