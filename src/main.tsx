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
import { DASHBOARD, LOGIN, PROFILE, REGISTER, ROLES, ROLE_DETAILS, USERS, USER_DETAILS } from './routes.tsx';
import UserDetails from './pages/userdetails/index.tsx';
import RoleDetails from './pages/roledetails/index.tsx';
import ProfilePage from './pages/profile/index.tsx';

const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: REGISTER,
    element: <Register />,
  },
  {
    path: DASHBOARD,
    element: <DashboardLayout />,
    children: [
      { path: PROFILE, element: <ProfilePage /> },
      { path: USERS, element: <UsersPage /> },
      { path: USER_DETAILS, element: <UserDetails /> },
      { path: ROLES, element: <RolesPage /> },
      { path: ROLE_DETAILS, element: <RoleDetails /> },

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