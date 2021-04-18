import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const OrderList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://damp-plateau-40551.herokuapp.com/orderedList')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const renderProduct = (products, index) => {
        const { name,product,card, email} = products
        // console.log(_id);
        return (
            <tr key={index}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{product}</td>
                <td>{card}</td>
                <td>Pending</td>
            </tr>
        )
    }
    return (
        <section className='Container-fluid row' style={{ width: '200vh' }}>
            <div className='col-md-2'>
                <AdminSideBar></AdminSideBar>
            </div>
            <div className='container'>
                <div className='mt-3 '>
                    <div className='container mx-2'>
                        < Table hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Service</th>
                                    <th>Pay With</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(renderProduct)
                                }
                            </tbody>
                        </Table >
                    </div >
                </div>
            </div>
        </section>
    );
};

export default OrderList;