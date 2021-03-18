import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './styles/Navbar.css';

class Navbar extends React.Component {
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img src={logo} alt="Logo" />
                        <span className="font-weight-light">Conference</span>
                        <span className="font-weight-bold">Badges</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;
