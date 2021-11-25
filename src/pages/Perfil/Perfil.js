import React from 'react';
import './Perfil.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Perfil(props) {

    const [user, setUser] = useState({});
    const [mounted, setMounted] = useState(false);
    const [notLogged, setNotLogged] = useState(true);
  
    useEffect(() => {
      setMounted(true)
  
      if(localStorage.token) {
        const token = localStorage.token;
  
        const config = {
          headers: { Authorization: `Bearer ${token}`}
        }
  
        axios.get('/auth/me', config)
        .then(response => {
          setNotLogged(false)
          setUser(response.data)
        })
      }
  
    }, [mounted])


    return (
        <div className='profile'>
        <div className='profile-img'>
          <img src='http://4.bp.blogspot.com/-8dd_4357ZxA/TlOe0rYY42I/AAAAAAAACFo/mMr2SwizalU/s1600/konata_point.png' alt='Mario' />
        </div>
        {
          !notLogged ? (
            <>
              <h2>{user.name}</h2>
              <span>Email: {user.email}</span>
              <span>Membro desde: {user.createdAt}</span>
            </>
          ) : (
            <h2>Sem dados do perfil, faça login</h2>
          )
        }
      </div>
    )
}

export default Perfil
