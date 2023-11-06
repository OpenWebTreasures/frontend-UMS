import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import LandingPage from './pages/Landing/index.tsx';
import Login from './pages/auth/Login.tsx';
import Register from './pages/auth/Register.tsx';
import DashboardLayout from './components/layout/index.tsx';
import { Provider } from 'react-redux';
import store from './store/store.tsx';
import UsersPage from './pages/userslist/index.tsx';
import RolesPage from './pages/roleslist/index.tsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: '/dashboard/users', element: <UsersPage /> },
      { path: '/dashboard/roles', element: <RolesPage /> }
    ]
  },
  {
    path: '/',
    element: <LandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);