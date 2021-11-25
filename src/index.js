import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from '../src/Components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer'


axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.StrictMode>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

