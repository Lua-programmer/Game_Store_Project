import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from '../src/Components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import ViewGame from './pages/ViewGame/ViewGame';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Perfil from './pages/Perfil/Perfil'


axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={< Register/>} />
        <Route path="/profile" element={< Perfil/>} />
        <Route path="/viewgame" element={<ViewGame />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </React.StrictMode>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

