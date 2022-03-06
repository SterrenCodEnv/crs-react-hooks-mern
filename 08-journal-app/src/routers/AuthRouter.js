import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<Navigate replace to="/auth/login" />} />
        </Routes>
      </div>
    </div>
  );
};
