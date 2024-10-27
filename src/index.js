import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import './style/style.css'
import './style/header/header.css'
import './style/hero/hero.css'
import './style/footer/footer.css'
import 'react-icons/bs'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
