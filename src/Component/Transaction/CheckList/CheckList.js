import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceSideBar from '../ServiceSideBar/ServiceSideBar';
import CheckListItem from '../CheckListItem/CheckListItem';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import AdminSideBar from '../../Admin/AdminSideBar/AdminSideBar';

const CheckList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderedItem, setOrderedItem] = useState([])
    useEffect(() => {
        const url = `https://damp-plateau-40551.herokuapp.com/allOrdered?email=${loggedInUser.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log('data', data);
                setOrderedItem(data)
            })
    }, [])
    return (
        <section>
            <AdminSideBar></AdminSideBar>
            <div className=' container d-flex justify-content-center' style={{ marginLeft: '33vh' }}>
                <div className=' row mt-2 pt-1'>
                    {
                        orderedItem.map(ordered => <CheckListItem key={ordered._id} ordered={ordered}></CheckListItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CheckList;