import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from '../src/main/Calculadora'

ReactDOM.render(
  <React.StrictMode>
  <h1>Calculadora</h1>
    <Calculadora />
  </React.StrictMode>,
  document.getElementById('root')
);

