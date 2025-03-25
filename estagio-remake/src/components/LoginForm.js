import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importei o useNavigate para poder estabelecer a navegação entre as páginas
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/LoginForm.module.css';


function LoginForm() {

  //nomes de usuário e senha sempre vazios de início
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /*ao dar submit, ele pega os valores de username e password
  e exibe um alerta com o nome do usuário*/

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', { username, password });
    alert(`Bem-vindo, ${username}!`);
    navigate('/dashboard');// Redireciona para a dashboard
  };

  const handlePasswordRecovery = (event) => {
    navigate('/password-recovery'); // Redireciona para a recuperação de senha
  
  };
  
  const handleSignupForm = (event) => {
    navigate('/signup'); // Redireciona para a página de cadastro
  }

  return (
    //Formulário de login
    <div className={`d-flex align-items-center justify-content-center ${styles['custom-bg']}`} >
      <div className={`card p-3 shadow-lg ${styles['custom-card']}`} style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="text-center">Teste Do Estágio - Página Login</h1>
        <form onSubmit={handleSubmit} id="loginForm">
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-start d-block">Usuário</label>
            <input
              /*Esse é o campo de usuário que recebe um texto e quando tem
              alguma mudança, ele chama a função setUsername 
              que atualiza o estado do username*/

              type="text"
              className="form-control"
              id="username"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-start d-block">Senha</label>
            <input
              /*Esse é o campo de senha que recebe uma senha e quando tem
              alguma mudança, ele chama a função setUsername 
              que atualiza o estado do senha*/      
              type="password"
              className="form-control"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label text-start d-block" htmlFor="rememberMe">Lembrar-me</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Acessar</button>
        </form>
        /* Botões para recuperação de senha e cadastro 
        que chamam as funções handlePasswordRecovery e handleSignupForm */
        <p className="text-center mt-3">
        <button onClick={handlePasswordRecovery} className="btn btn-link text-decoration-none">Esqueceu sua senha?</button>
        </p>
        <p className="text-center mt-0">
        <button onClick={handleSignupForm} className="btn btn-link text-decoration-none">Não possui cadastro?</button>
        </p>
      </div>
      <footer className="text-light text-center w-100 position-fixed bottom-0 d-flex justify-content-center align-items-center">
        <p className="mb-0">Feito por Guilherme Almeida</p>
        <a href="https://www.instagram.com/therealguilhermealmeida/" target="_blank" className="ms-2">
          <img src="../images/ig-white.png" className="img-fluid" alt="Instagram" style={{ width: '24px', height: '24px' }} />
        </a>
      </footer>
    </div>
  );
}

export default LoginForm;