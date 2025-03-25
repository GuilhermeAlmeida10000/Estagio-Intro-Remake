import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Importei as páginas para usar no router
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import PasswordRecovery from './components/PasswordRecovery';
import SignupForm from './components/SignupForm';


//Criei o router com as rotas das páginas
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
