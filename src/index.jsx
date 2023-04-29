import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <router />
      </BrowserRouter>
  </React.StrictMode>
)
