import React from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import { Navbar, Footer, HeroSection } from '../components';
import { ApplicationFormProvider } from '../contexts/ApplicationContext';
import { AuthProvider } from '../contexts/AuthContext';
import Loading from '../components/Loading';

const RootLayout = () => {
  const location = useLocation();
  const navigation = useNavigation();

  return (
    <>
      <AuthProvider>
        <ApplicationFormProvider>
          <Navbar />
          <main className='bg-[#f6f9ff] dark:bg-gray-900'>
            {location.pathname === '/basvuru-olustur' && <HeroSection />}
            {navigation.state === 'loading' ? <Loading /> : <Outlet />}
          </main>
          <Footer />
        </ApplicationFormProvider>
      </AuthProvider>
    </>
  );
};

export default RootLayout;
