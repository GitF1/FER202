import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Reducer from "../pages/Reducer";
import Contact from "../pages/Contact";
import Counter from "../store/test/Counter";
import Applicant from "../pages/Applicant";
import UserList from "../pages/User/User";
import UserForm from "../pages/User/UserForm";
import Hotel from "../pages/Hotel/Hotel";
import ListProject from "../pages/Project/ListProject";
import UpdateProject from "../pages/Project/UpdateProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reducer",
    element: <Reducer />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/applicant",
    element: <Applicant />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/users/new",
    element: <UserForm />,
  },
  {
    path: "/users/:id",
    element: <UserForm />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/projects",
    element: <ListProject />,
  },
  {
    path: "/projects/:id",
    element: <UpdateProject />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
