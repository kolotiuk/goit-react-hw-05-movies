import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomeDetailed from '../page/HomeDetailed/HomeDetailed';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const Movies = lazy(() => import('../page/Movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={'home'} />} />
        <Route path="home" element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:homeId" element={<HomeDetailed />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={'home'} />} />
    </Routes>
  );
};
