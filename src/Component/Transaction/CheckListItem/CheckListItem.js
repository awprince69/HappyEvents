import React from 'react';

const CheckListItem = ({ ordered }) => {
    return (
        <div className='card' style={{ width: '20rem', marginRight: '20px' }}>
            <div className=' d-flex justify-content-between px-2 py-2'>
                <img src={ordered.img} alt="" width='80' />
                <div>
                    <button className='btn btn-success'>status</button>
                </div>
            </div>
            <div className='card-body'>
                <h4>{ordered.title}</h4>
                <p className='card-text'>{ordered.description}</p>
            </div>
        </div>
    );
};

export default CheckListItem;