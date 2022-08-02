import { Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { HomePage, AboutPage, LoginPage } from './pages';
import { UserProvider } from './context/UserProvider';

export const Main = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to={'/login'} />} />
      </Routes>
    </UserProvider>
  );
};
