import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css'
import order from '../../../images/icon/order.png'
import service from '../../../images/icon/add.png'
import admin from '../../../images/icon/admin.png'
import mange from '../../../images/icon/manage.png'
import logo from '../../../images/logo.png'
const AdminSideBar = () => {
    return (
        <div className="sidebar px-4" style={{ height: "100vh", width: '240px' }}>
            <Link className="navbar-brand  mb-3" to="/"><img src={logo} alt="" width='180' /></Link>
            <Link className="navbar-brand text-white mb-3" to='/admin'><h5><img src={order} alt="" width='30' /> <span> Order List</span></h5> </Link>
            <Link className="navbar-brand text-white mb-3" to='/addService'><h5><img src={service} alt="" width='30' /> <span>Add Service</span></h5></Link>
            <Link className="navbar-brand text-white mb-3" to='/addAdmin'><h5><img src={admin} alt="" width='30' /> <span>Make Admin</span></h5> </Link>
            <Link className="navbar-brand text-white mb-3" to='/manageService'><h5><img src={mange} alt="" width='30' /> <span>Manage Services</span></h5> </Link>
        </div>
    );
};

export default AdminSideBar;