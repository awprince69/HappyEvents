import React from 'react';
import { Link } from 'react-router-dom';
import shopping from '../../../images/icon/shopping-cart.png'
import checkList from '../../../images/icon/checklist.png'
import review from '../../../images/icon/comment.png'
import './ServiceSideBar.css'
import logo from '../../../images/logo.png'

const ServiceSideBar = () => {
    return (
        <div className="sidebar px-4" style={{ height: "100vh", width: '220px' }}>
            <Link className="navbar-brand  mb-3" to="/"><img src={logo} alt="" width='180' /></Link>
            <Link className="navbar-brand text-white mb-3" to='#'><h5><img src={shopping} alt="" width='30' /> <span> Order</span></h5> </Link>
            <Link className="navbar-brand text-white mb-3" to='/checkList'><h5><img src={checkList} alt="" width='30' /> <span>CheckList</span></h5> </Link>
            <Link className="navbar-brand text-white mb-3" to='/review'><h5><img src={review} alt="" width='30' /> <span>Review</span></h5> </Link>

        </div>
    );
};

export default ServiceSideBar;