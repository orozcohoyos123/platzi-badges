import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BagdeNews from './pages/BadgeNews';
import Badges from './pages/Badges';

const container = document.getElementById('app');

ReactDOM.render(<Badges/>, container);
