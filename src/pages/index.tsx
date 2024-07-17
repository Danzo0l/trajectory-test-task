import { lazy } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Edit = lazy(() => import('./Edit'));
const Detail = lazy(() => import('./Detail'));
const Error = lazy(() => import('./Error'));

export const Routing = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="*"
          element={<Error code={404} message="Такой страницы не существует" />}
        />
      </Routes>
    </div>
  );
};
