import React from 'react';

const CheckListItem = ({ ordered }) => {
    return (
        <div className='col-md-4 mb-4' >
            <div className='card' style={{ width: '19rem'}}>
                <div className=' d-flex justify-content-between px-2 py-2'>
                    <img style={{borderRadius:'5px'}} src={ordered.image} alt="" width='80' />
                    <div>
                        <button className='btn btn-success'>status</button>
                    </div>
                </div>
                <div className='card-body'>
                    <h4>{ordered.product}</h4>
                    <p className='card-text'>{ordered.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckListItem;