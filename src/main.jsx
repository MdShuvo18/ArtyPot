import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProviderContext from './AuthProviderContext/AuthProviderContext.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderContext>
      <RouterProvider router={router} />
    </AuthProviderContext>
  </React.StrictMode>,
)
