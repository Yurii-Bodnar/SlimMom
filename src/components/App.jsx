import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import SharedLayout from './SharedLayout/SharedLayout';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectSid, selectToken } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperation';
import bgForDesc from '../assets/images/background-desc.png';
import bgForTablet from '../assets/images/background-tabl.png';
import { useIsDesktop, useIsMobile, useIsTablet } from 'hooks/mediaQuery';

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));
const RegisterPage = lazy(() =>
  import('../Pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const CalculatorPage = lazy(() =>
  import('../Pages/CalculatorPage/CalculatorPage')
);
const DiaryPage = lazy(() => import('../Pages/DiaryPage/DiaryPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isSignInUser = useSelector(selectToken);
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const sid = useSelector(selectSid);

  useEffect(() => {
    !isSignInUser && dispatch(refreshUser(sid));
  }, [dispatch, sid, isSignInUser]);

  useEffect(() => {
    if (!isSignInUser && isDesktop) {
      document.body.style.background = `url(${bgForDesc}) no-repeat 108% 0px `;
      document.body.style.height = '880px';
    }
    if (!isSignInUser && isTablet) {
      document.body.style.background = `url(${bgForTablet}) no-repeat 100% 70% `;
      document.body.style.height = '1024px';
    }
    if (isSignInUser) {
      document.body.style = 'none';
    }
    if (isMobile) {
      document.body.style = 'none';
    }
  }, [isDesktop, isMobile, isSignInUser, isTablet]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/"
            // element={
            //   <PublicRoute redirectTo="/calculator" component={<MainPage />} />
            // }
            element={<MainPage />}
          />
          <Route
            path="/registration"
            element={
              <PublicRoute
                redirectTo="/calculator"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/calculator" component={<LoginPage />} />
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<CalculatorPage />}
              />
            }
          />
          <Route
            path="/diary"
            element={<PrivateRoute redirectTo="/" component={<DiaryPage />} />}
          />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  );
};
