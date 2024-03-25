import React from 'react'
import ReactDOM from 'react-dom/client'

import AOS from 'aos';
import 'aos/dist/aos.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Router from './Router.jsx';

import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <Router />
    </QueryClientProvider>
  </React.StrictMode>,
)
