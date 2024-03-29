import { Route, Routes, Navigate } from 'react-router-dom';
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../pages';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-4">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
