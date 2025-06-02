import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter  } from "react-router-dom";
import React from "react";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter >
      <App />
    </HashRouter >
  </React.StrictMode>
)
