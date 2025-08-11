import React, { StrictMode } from 'react'; // Add React import
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import  { ClerkProvider } from '@clerk/clerk-react'
import 'leaflet/dist/leaflet.css';

const Clerk_Key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!Clerk_Key) throw new Error("Clerk Key Required")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={Clerk_Key}>
      <Router>
        <App />
      </Router>
    </ClerkProvider>
  </StrictMode>,
);