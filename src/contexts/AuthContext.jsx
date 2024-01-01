import React, { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('currentUser');
      }
    });

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    return () => {
      unsubscribe();
    };
  }, []);

  const login = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    return signOut(auth);
  };

  return <AuthContext.Provider value={{ user, isLoggedIn, logout, login }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
