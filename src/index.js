import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
// import axios from 'axios';
import Header from '../src/Components/Header/Header'


// axios.default.baseURL = 'https://nintendo-shop.herokuapp.com/';
// axios.default.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <React.StrictMode>
      
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

