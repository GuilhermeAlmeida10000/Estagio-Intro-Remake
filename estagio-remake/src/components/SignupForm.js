import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/SignupForm.module.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação de senha
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }

    setError('');
    console.log('Form Data:', formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className={` container-fluid pt-5 align-items-center justify-content-center ${styles['custom-bg']}`} >
      <div className="card mx-auto shadow-lg" style={{ maxWidth: '500px' }}>
        <div className="card-header text-center">
          <h3>Cadastro de Usuário</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            //Nome
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome Completo</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Digite seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            //Email
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Endereço de Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            //Senha
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            //Confirmação de Senha
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirme sua Senha</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            //Erro
            {error && <div className="alert alert-danger">{error}</div>}

            //Botão de enviar
            <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
          </form>
        </div>
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

export default SignupForm;