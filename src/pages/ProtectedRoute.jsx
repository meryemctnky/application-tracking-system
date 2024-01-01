import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute(children) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to={'/admin'} replace />;
}

export default ProtectedRoute;
