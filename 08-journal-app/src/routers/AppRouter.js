import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<JournalScreen />} />
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="*" element={<Navigate replace to="/auth/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
