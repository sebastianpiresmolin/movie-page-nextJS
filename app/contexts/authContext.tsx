// authContext.tsx
'use client';
import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};