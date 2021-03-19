import React from 'react';
import './styles/Error.css';
import ErrorLogo from '../assets/animations/Error.svg';
import { Link } from 'react-router-dom';

function Error(){
    return (
        <div className="Error">
            <div className="Error__logo-container">
                <object className="Error__logo" type="image/svg+xml" data={ErrorLogo}>svg-animation</object>
            </div>
            <Link to="/" className="btn btn-primary">Regresar al inicio</Link>
        </div>
      );
}

export default Error;