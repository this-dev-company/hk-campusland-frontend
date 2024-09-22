import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Header from '../components/Header/Header.jsx';
import OrganizationPage from '../pages/OrganizationPage/OrganizationPage.jsx';

const Auth = lazy(() => import('../components/Auth/Auth.jsx'));
const Unauthorized = lazy(() => import('../components/Auth/Unauthorized.jsx'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard.jsx'));
const Proyects = lazy(() => import('../pages/Proyects.jsx'));
const Calendar = lazy(() => import('../pages/Calendar.jsx'));
const Board = lazy(() => import('../pages/Board.jsx'));
const Organizations = lazy(() => import('../pages/Organizations.jsx'));
const Profile = lazy(() => import('../pages/Profile.jsx'));
const History = lazy(() => import('../pages/History.jsx'));
const Configuration = lazy(() => import('../pages/Configuration.jsx'));

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: '/unauthorized',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Unauthorized /> 
      </Suspense>
    ),
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: '/:alias',
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
            <Suspense fallback={<div>Loading...</div>}>
              <OrganizationPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'proyects',
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
            <Suspense fallback={<div>Loading...</div>}>
              <Proyects />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'calendar',
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
            <Suspense fallback={<div>Loading...</div>}>
              <Calendar />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'board',
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
            <Suspense fallback={<div>Loading...</div>}>
              <Board />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'organizations',
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
            <Suspense fallback={<div>Loading...</div>}>
              <Organizations />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
            <Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'history',
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
            <Suspense fallback={<div>Loading...</div>}>
              <History />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'configuration',
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
            <Suspense fallback={<div>Loading...</div>}>
              <Configuration />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default Router;
