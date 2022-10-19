import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home/Home";
import News from "../../pages/News/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => {
          return fetch(`http://localhost:5000/news`);
        },
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },

      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`);
        },
      },
    ],
  },
]);
