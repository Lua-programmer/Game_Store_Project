import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      nickname: nickname,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    axios.post("user/register", user)
    .then((response) => console.log(response))
    .then(window.alert('Perfil Criado com Sucesso!'))
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Crie sua Conta Xbox</h2>
      <form className="mb-3 form" onSubmit={handleSubmit}>

        <label for="formGroupExampleInput" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Maria"
          onChange={(event) => setName(event.target.value)}
        ></input>

        <label for="formGroupExampleInput" className="form-label">
          Nickname
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Jedai"
          onChange={(event) => setNickname(event.target.value)}
        ></input>

        <label for="formGroupExampleInput" className="form-label">
          E-mail
        </label>
        <input
          type="email"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="xxxxxxx@xxx.com"
          onChange={(event) => setEmail(event.target.value)}
        ></input>

        <label for="formGroupExampleInput2" className="form-label">
          Senha
        </label>
        <input
          type="password"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="********"
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <label for="formGroupExampleInput2" className="form-label">
          Confirme sua Senha
        </label>
        <input
          type="password"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="********"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        ></input>

        <div className='terms'>
            <input type='checkbox' placeholder='wedewdwed' required></input>
            <label>Eu concordo com os termos do <a href='https://www.xbox.com/pt-BR/legal/xboxapptou'>Acordo de usuário da conta Xbox</a> e confirmo que li a <a href='https://privacy.microsoft.com/pt-br/privacystatement#:~:text=Se%20voc%C3%AA%20for%20usu%C3%A1rio%20da,compartilhamento%20de%20dados%20acessando%20Meu'>Política de privacidade da Xbox</a>.</label>
            </div>

            <div className='register-btn'>
            <input type='submit' value='Continuar'></input>
        </div>


      </form>

     
    </div>
  );
}

export default Register;
