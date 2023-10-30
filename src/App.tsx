import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

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
      path: '*',
      element: <Navigate to='/' />,
    },
  ]);

  return (
    <RouterProvider router={router} />

  );
}

export default App;
