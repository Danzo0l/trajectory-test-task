import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<p>Loading</p>}>{component()}</Suspense>
  </BrowserRouter>
);
