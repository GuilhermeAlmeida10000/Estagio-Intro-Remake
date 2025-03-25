import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="d-flex">
      {/* Barra Lateral */}
      <div className="bg-danger text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
        <div>
            <img src="../images/pax-nippon.png" alt="Pax Nippon" className="img-fluid rounded-circle" />
        </div>
        <h3 className="mb-4">Pax Nippon</h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Início</a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Eventos</a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Doações</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">Contato</a>
          </li>
        </ul>
      </div>

      {/* Parte Principal */}
      <div className="flex-grow-1 p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Bem-vindo à Pax Nippon</h1>
          <div>
            <span className="me-3">Usuário</span>
            <button className="btn btn-outline-primary btn-sm">Sair</button>
          </div>
        </div>

        {/* Cartões */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Próximo Evento</h5>
                <p className="card-text">Festival Cultural - 20 de Abril</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Total de Doações</h5>
                <p className="card-text">R$ 12.500,00</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Voluntários Ativos</h5>
                <p className="card-text">45</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de Eventos Recentes */}
        <h3 className="mb-3">Eventos Recentes</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Data</th>
              <th>Evento</th>
              <th>Local</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/03/2025</td>
              <td>Oficina de Origami</td>
              <td>Centro Cultural Nippon</td>
              <td><button className="btn btn-primary btn-sm">Ver</button></td>
            </tr>
            <tr>
              <td>15/02/2025</td>
              <td>Palestra sobre História Japonesa</td>
              <td>Auditório Nippon</td>
              <td><button className="btn btn-primary btn-sm">Ver</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="text-dark text-center w-100 position-fixed bottom-0 d-flex justify-content-center align-items-center">
        <p className="mb-0">Feito por Guilherme Almeida</p>
        <a href="https://www.instagram.com/therealguilhermealmeida/" target="_blank" className="ms-2">
          <img src="../images/ig-white.png" className="img-fluid" alt="Instagram" style={{ width: '24px', height: '24px' }} />
        </a>
      </footer>
    </div>
  );
}

export default Dashboard;