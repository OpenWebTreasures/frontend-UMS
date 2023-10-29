import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Landing";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,

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
