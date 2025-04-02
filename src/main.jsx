import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Supports weights 400-800
import '@fontsource-variable/syne';
import * as bootstrap from 'bootstrap'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
