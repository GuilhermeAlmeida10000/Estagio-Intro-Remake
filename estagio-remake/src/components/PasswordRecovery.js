import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/PasswordRecovery.module.css';

function PasswordRecovery() {
  //Os campos de email e mensagem sempre vazios de início
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um endereço de email válido.');
      setMessage('');
      return;
    }

    setError('');
    setMessage('Um link de recuperação foi enviado para o seu email.');
    console.log('Email enviado para:', email);
  };

  return (
    //Formulário de recuperação de senha
    <div className={`container-fluid pt-5 ${styles['custom-bg']}`} >
      <div className="card mx-auto shadow-lg" style={{ maxWidth: '500px' }}>
        <div className="card-header text-center">
          <h3>Recuperação de Senha</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            //Email
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Endereço de Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            //Erro
            {error && <div className="alert alert-danger">{error}</div>}

            //Sucesso
            {message && <div className="alert alert-success">{message}</div>}

            //Botão de enviar
            <button type="submit" className="btn btn-primary w-100">Enviar Link de Recuperação</button>
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

export default PasswordRecovery;