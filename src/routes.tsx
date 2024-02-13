import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/_layouts/auth";
import { WelcomePage } from "./pages/auth/welcome/welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <></>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      // Route welcome select with login
      {
        path: "/welcome",
        element: <WelcomePage />,
      },
      // Business auth routes
      {
        path: "/business/login",
        element: <></>,
      },
      {
        path: "/business/register",
        element: <></>,
      },
      // Developer auth routes
      {
        path: "/developer/login",
        element: <></>,
      },
      {
        path: "/developer/register",
        element: <></>,
      },
    ],
  },
]);
