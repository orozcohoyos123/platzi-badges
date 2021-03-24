import React from 'react';
import './styles/Home.css';
import ConfLogo from '../images/platziconf-logo.svg';
import Astronauts from '../images/astronauts.svg';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="Home__container">
            <div className="Home__detail">
                <img className="Home__detail-logo" src={ConfLogo} alt=""/>
                <h1>PRINT YOUR BADGES</h1>
                <label className="Home__detail-text">La forma más fácil de administrar tus conferencias</label>
                <Link to="/badges" className="btn btn-primary">
                    Empieza ahora
                </Link>
            </div>
            <div className="">
                <img src={Astronauts} alt=""/>
            </div>
        </div>
    )
}

export default Home;