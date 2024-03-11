import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

import AccountLayout from "../layouts/account";
import Signin from "../pages/signin";
import Logout from "../pages/logout";
import { NotFound } from "../pages/Notfound";
import ArticleContainer from "../pages/home/ArticleContainer";
import ArticleContent from "../pages/article/ArticleContent";
import { ArticleProvider } from "../context/article/context";

import { lazy } from "react";
const Signup = lazy(() => import('../pages/signup'));
const PreferenceDialog = lazy(() => import('../pages/preferences/PreferenceDialog'))

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/",
    element: (
      <>
        <AccountLayout />
        <ArticleContainer />
      </>
    ),
    children: [
      { index: true, element: <Navigate to="/" replace /> },
      {
        path: "article/:articleID",
        element: (
          <>
            <ArticleProvider>
              <ArticleContent />
            </ArticleProvider>
          </>
        ),
      },
      {
        path: "preferences",
        element: <PreferenceDialog />,
      },
    ]
  },
]);

export default router;
