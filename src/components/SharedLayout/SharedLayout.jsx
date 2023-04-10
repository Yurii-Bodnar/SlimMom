import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const SharedLayout = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader />}>
      {location.pathname === '/' ? null : <Header />}
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
