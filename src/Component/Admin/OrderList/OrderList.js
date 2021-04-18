import React from 'react';
import { Table } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const OrderList = () => {
    return (
        <section className='Container-fluid row'>
            <div className='col-md-2'>
                <AdminSideBar></AdminSideBar>
            </div>
            <div>
                <div className='col-md-10 mt-3'>
                    <div className='container'>
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
                                {/* {
                                    products.map(renderProduct)
                                } */}
                            </tbody>
                        </Table >
                    </div >
                </div>
            </div>
        </section>
    );
};

export default OrderList;