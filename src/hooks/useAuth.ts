import { useState } from 'react';

interface LoginData {
  email?: string;
  phone?: string;
  password: string;
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (data: LoginData) => {
    // In a real app, this would make an API call
    // For now, we'll just simulate a successful login
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsAuthenticated(true);
        setUser({ id: 1, email: data.email });
        resolve(true);
      }, 1000);
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout
  };
}