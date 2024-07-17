import { lazy } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Edit = lazy(() => import('./Edit'));
const Detail = lazy(() => import('./Detail'));
const Error = lazy(() => import('./Error'));
const Map = lazy(() => import('./Map'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map/" element={<Map />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route
        path="*"
        element={<Error code={404} message="Такой страницы не существует" />}
      />
    </Routes>
  );
};
