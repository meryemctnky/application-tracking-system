import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ErrorPage from './Error';

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <ErrorPage />;
}

export default ProtectedRoute;
