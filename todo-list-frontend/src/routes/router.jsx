import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

const AuthLayout = lazy(() => import("../views/layouts/AuthLayout"));
const RegisterPage = lazy(() => import("../views/pages/auth/RegisterPage"));
const LoginPage = lazy(() => import("../views/pages/auth/LoginPage"));
const MainPage = lazy(() => import("../views/pages/MainPage"));
const ProfilePage = lazy(() => import("../views/pages/ProfilePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<></>}>
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<></>}>
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/main",
    element: (
      <Suspense fallback={<></>}>
        <ProtectedRoute>
          <MainPage />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<></>}>
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      </Suspense>
    ),
  },
]);
