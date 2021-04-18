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
        fetch('https://damp-plateau-40551.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`https://damp-plateau-40551.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert("Delete Successfully");
            })
    }

    const renderProduct = (product, index) => {
        const { title, price, _id } = product
        return (
            <tr key={index}>
                <td>{title}</td>
                <td>${price}</td>
                <td><span className='text-danger' onClick={() => handleDelete(_id)}> <FontAwesomeIcon icon={faTrashAlt} /></span></td>
            </tr>
        )
    }
    return (
        <section className='row' style={{ width: '200vh' }}>
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