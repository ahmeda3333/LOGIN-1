import React from 'react';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';

function App() {
  // For demo purposes, showing the Login page by default
  return <Login />;
  
  // Uncomment to see other pages:
  // return <Register />;
  // return <ForgotPassword />;
}

export default App;