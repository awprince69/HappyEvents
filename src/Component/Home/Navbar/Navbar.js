import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png'

const style = {
    fontWeight: '700',
    fontSize: '18px'
}
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg  navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 text-white" style={style} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-white" style={style} to="#about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-white" style={style} to="#projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-white" style={style} to="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-white" style={style} to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            {
                                !loggedInUser.email && <Link className="nav-link mr-5 text-white" style={style} to="/login">Login</Link>
                            }
                            <Link className="nav-link mr-5 text-white" style={style} to="/home">{loggedInUser.name}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;