import React from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import { Navbar, Footer, HeroSection } from '../components';
import { ApplicationFormProvider } from '../contexts/ApplicationContext';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from '../pages/ProtectedRoute';

const AdminLayout = () => {
  const navigation = useNavigation();

  return (
    <ProtectedRoute>
      <AuthProvider>
        <ApplicationFormProvider>
          <Navbar />
          <main className='bg-[#f6f9ff] dark:bg-gray-900'>{navigation.state === 'loading' ? <p>Loading...</p> : <Outlet />}</main>
          <Footer />
        </ApplicationFormProvider>
      </AuthProvider>
    </ProtectedRoute>
  );
};

export default AdminLayout;
