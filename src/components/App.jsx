import { lazy } from 'react';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import SharedLayout from './SharedLayout/SharedLayout';

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
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/diary" element={<DiaryPage />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  );
};
