import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundLogo from '../assets/animations/NotFound.svg';
import './styles/NotFound.css';

function NotFound(){
    return (
        <div className="NotFound row">
            <div className="NotFound__title col-6">
                <h1 className="font-weight-bold">404</h1>
                <label> Página no encontrada</label>
                <Link to="/" className="btn btn-primary">Regresar al inicio</Link>
            </div>
            <div className="NotFound__logoContainer col-6">
                <object className="NotFound__logo" type="image/svg+xml" data={NotFoundLogo}>svg-animation</object>
            </div>
        </div>
      );
}

export default NotFound;