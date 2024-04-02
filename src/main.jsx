import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
      <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
