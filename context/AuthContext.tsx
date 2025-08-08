import React, { createContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

const [isUser, setUser] = useState(false)

const login = () =>  setUser(true)

const logout = () =>  setUser(false)


  return (
    <AuthContext.Provider value={{ isUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
}

// export { AuthProvider, useAuth };
