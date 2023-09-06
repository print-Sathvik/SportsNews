import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

import AccountLayout from "../layouts/account";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import { NotFound } from "../pages/Notfound";
import ArticleContainer from "../pages/home/ArticleContainer";
import Articles from "../pages/home/Articles";
import ArticlesIndex from "../pages/home";

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
      <><AccountLayout /><ArticleContainer /><ArticlesIndex /></>
    ),
    // children: [
    //   { index: true, element: <Navigate to="/" replace /> },
      // {
      //   path: "article",
      //   children: [
      //     { index: true, element: <Projects /> },
      //     {
      //       path: ":articleID",
      //       element: <ProjectDetails />,
      //       children: [
      //         { index: true, element: <></> },
      //         {
      //           path: "tasks",
      //           children: [
      //             { index: true, element: <Navigate to="../" /> },
      //             {
      //               path: "new",
      //               element: <NewTask />,
      //             },
      //             {
      //               path: ":taskID",
      //               children: [
      //                 { index: true, element: <TaskDetailsContainer /> },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
  //   ],
  },
]);

export default router;
