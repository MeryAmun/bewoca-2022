import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore} from 'redux'
import {thunk }from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './redux/index'
const store = createStore(reducer, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BrowserRouter>
<Provider store={store}>
<App/>
</Provider>
</BrowserRouter>)