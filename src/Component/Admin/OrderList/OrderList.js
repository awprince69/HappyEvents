import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const OrderList = () => {
    const { register, handleSubmit } = useForm();
    const [optionValue, SetOptionValue] = useState(null);
    const [products, setProducts] = useState([])
    const [dependency, setDependency] = useState(false);

    useEffect(() => {
        fetch('https://damp-plateau-40551.herokuapp.com/orderedList')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleSelectValue = (e, id) => {
        SetOptionValue(e.target.value);
        fetch(`https://damp-plateau-40551.herokuapp.com/updateStatus/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ optionValue }),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Updated Successfully')
            });
    };
    const renderProduct = (products, index) => {
        const { name, _id, product, process, card, email } = products
        return (
            <tr key={index}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{product}</td>
                <td>{card}</td>
                <td><form>
                    <select onChange={(e) => handleSelectValue(e, _id)}>
                        <option defaultValue={process}>{process}</option>
                        <option defaultValue="Pending">Pending</option>
                        <option defaultValue="OnGoing">OnGoing</option>
                        <option defaultValue="Arrived">Arrived</option>
                    </select>
                </form>
                </td>
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