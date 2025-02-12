// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.jsx'
import Inside from './components/Inside.jsx';
// import Nav_wrp from './components/Nav_wrp.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/inside/:id" element={<Inside />} />

  </Routes>
</BrowserRouter>
)
