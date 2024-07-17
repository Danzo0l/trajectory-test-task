import { lazy } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Edit = lazy(() => import('./Edit'));
const Error = lazy(() => import('./Error'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route
        path="*"
        element={<Error code={404} message="Такой страницы не существует" />}
      />
    </Routes>
  );
};
