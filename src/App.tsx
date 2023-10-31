import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DashboardLayout from "./components/layout";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
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
    },
    {
      path: '*',
      element: <Navigate to='/' />,
    },
  ]);

  return (
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>

  );
}

export default App;
