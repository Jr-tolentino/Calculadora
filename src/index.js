import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Calculadora from './components/Calculadora'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Calculadora/>
  </React.StrictMode>
);

