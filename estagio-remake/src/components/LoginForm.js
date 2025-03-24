import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert(`Bem-vindo, ${data.username}!`);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 custom-bg">
      <div className="card p-3 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>

        <h1 className="text-center">Teste Do Estágio - Página Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuário</label>
            <input
              {...register('username')}
              type="text"
              className="form-control"
              id="username"
              placeholder="Digite seu usuário"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input
              {...register('password')}
              type="password"
              className="form-control"
              id="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              {...register('rememberMe')}
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">Lembrar-me</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Acessar</button>
        </form>
        <p className="text-center mt-3">
          <a href="password-recovery.html" className="text-decoration-none">Esqueceu sua senha?</a>
        </p>
        <p className="text-center mt-0">
          <a href="sign-up.html" className="text-decoration-none">Não possui cadastro?</a>
        </p>
      </div>
      <footer className="text-dark text-center w-100 position-fixed bottom-0 d-flex justify-content-center align-items-center">
        <p className="mb-0">Feito por Guilherme Almeida</p>
        <a href="https://www.instagram.com/therealguilhermealmeida/" target="_blank" className="ms-2">
          <img src="images/ig-white.png" className="img-fluid" alt="Instagram" style={{ width: '24px', height: '24px' }} />
        </a>
      </footer>
    </div>
  );
}

export default LoginForm;