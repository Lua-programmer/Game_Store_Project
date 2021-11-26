import React from 'react';
import './Header.css';
import Logo from './img/logo.png';
import { BiBookmarkHeart, BiLogIn, BiUserPin, BiUserPlus, BiInfoCircle} from 'react-icons/bi';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link txt" href="https://support.xbox.com/pt-BR/">
                <BiInfoCircle />
                <span>Suporte</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link txt" href="/List">
                <BiBookmarkHeart />
                <span>Lista de Desejos</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link txt" href="/login">
                <BiLogIn />
                <span>Login</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link txt" href="/register">
                <BiUserPlus />
                <span>Registrar-se</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link txt" href="/profile">
                <BiUserPin />
                <span>Perfil</span>
                </a>
              </li>
              
            </ul>
            <a href="/"> 
              <img src={Logo} alt="logo" href="/" className="image" ></img>
            </a>

          </div>
        </div>
      </nav>
    )
}

export default Header
