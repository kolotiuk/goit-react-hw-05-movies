import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const Movies = lazy(() => import('../page/Movies/Movies'));
const HomeDetailed = lazy(() => import('../page/HomeDetailed/HomeDetailed'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
