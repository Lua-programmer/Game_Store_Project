import React from 'react';
import './Login.css'
import { useState } from 'react';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = event => {
      event.preventDefault();
  
      const login = {
        email: email,
        password: password
      }
  
      axios.post('/auth/login', login)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token)
      })
      .then(window.alert('Bem-vindo'))
    }

    return (
      <div className="login-container">
        <h2 className="login-title">Acesse sua Conta Xbox</h2>
        <form className="mb-3 form" onSubmit={handleSubmit}>
          <label for="formGroupExampleInput" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="xxxxxxx@xxx.com"
            onChange={event => setEmail(event.target.value)}
          ></input>

          <label for="formGroupExampleInput2" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="********"
            onChange={event => setPassword(event.target.value)}
          ></input>

          <div className="login-ok">
            <a href="!#">
              <span>Esqueceu sua senha?</span>
            </a>
          </div>

          <input className="fazer-login" type="submit" value="Fazer login" />

        </form>

        <div className='login-create'>
          <span>Ainda não possui uma conta?</span>
          <a className='btn-create' href='/register'>Criar uma conta Xbox</a>
        </div>
      </div>
    );
}

export default Login
