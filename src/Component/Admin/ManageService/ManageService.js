import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageService = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        // fetch('https://still-sierra-25000.herokuapp.com/products')
        //     .then(res => res.json())
        //     .then(data => {
        //         setProducts(data)
        //     })
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        // fetch(`https://still-sierra-25000.herokuapp.com/delete/${id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         alert("Delete Successfully");
        //     })
    }

    const renderProduct = (product, index) => {
        const { name, weight, price, _id } = product
        // console.log(_id);
        return (
            <tr key={index}>
                <td>{name}</td>
                <td>${price}</td>
                <td><span className='text-danger' onClick={() => handleDelete(_id)}> <FontAwesomeIcon icon={faTrashAlt} /></span></td>
            </tr>
        )
    }
    return (
        <section className='row'>
            <div className='col-md-2'>
                <AdminSideBar></AdminSideBar>
            </div>
            <div className='col-md-8'>
                <div className='container'>

                    < Table hover>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Action</th>
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

        </section>
    );
};

export default ManageService;