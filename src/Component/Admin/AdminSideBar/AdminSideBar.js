import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css'
import order from '../../../images/icon/order.png'
import service from '../../../images/icon/add.png'
import admin from '../../../images/icon/admin.png'
import mange from '../../../images/icon/manage.png'
import logo from '../../../images/logo.png'
import checkList from '../../../images/icon/checklist.png'
import review from '../../../images/icon/comment.png'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const AdminSideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsaAdmin] = useState(false);

    useEffect(() => {
        fetch('https://damp-plateau-40551.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsaAdmin(data));
    }, [])

    return (
        <div className="sidebar px-4" style={{ height: "100vh", width: '240px' }}>
            <Link className="navbar-brand  mb-3" to="/"><img src={logo} alt="" width='180' /></Link>
            <Link className="navbar-brand text-white mb-3" to='/admin'><h5><img src={review} alt="" width='30' /> <span>Review</span></h5> </Link>
            {
                !isAdmin && <div>
                    <Link className="navbar-brand text-white mb-3" to='/checkList'><h5><img src={checkList} alt="" width='30' /> <span>CheckList</span></h5> </Link>
                </div>
            }

            {
                isAdmin && <div>
                    <Link className="navbar-brand text-white mb-3" to='/orderList'><h5><img src={order} alt="" width='30' /> <span> Order List</span></h5> </Link>
                    <Link className="navbar-brand text-white mb-3" to='/addService'><h5><img src={service} alt="" width='30' /> <span>Add Service</span></h5></Link>
                    <Link className="navbar-brand text-white mb-3" to='/addAdmin'><h5><img src={admin} alt="" width='30' /> <span>Make Admin</span></h5> </Link>
                    <Link className="navbar-brand text-white mb-3" to='/manageService'><h5><img src={mange} alt="" width='30' /> <span>Manage Services</span></h5> </Link>
                </div>
            }
        </div>
    );
};

export default AdminSideBar;