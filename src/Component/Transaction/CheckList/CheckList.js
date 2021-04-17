import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceSideBar from '../ServiceSideBar/ServiceSideBar';
import fakeData from '../../../FakeData/fakeData.json'
import CheckListItem from '../CheckListItem/CheckListItem';

const CheckList = () => {
    const [orderedItem, setOrderedItem] = useState([])
    useEffect(() => {
        setOrderedItem(fakeData)
    }, [])
    return (
        <section className='Container-fluid row'>
            <div className='col-md-2'>
                <ServiceSideBar></ServiceSideBar>
            </div>
            <div>
                <h3>Check List</h3>
                <div className='col-md-10 d-flex mt-3'>
                    {
                        orderedItem.map(ordered => <CheckListItem key={ordered._id} ordered={ordered}></CheckListItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CheckList;