import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BrowserRouter>
<App/></BrowserRouter>)