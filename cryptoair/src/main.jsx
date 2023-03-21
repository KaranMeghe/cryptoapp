import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import {
  HomePage,
  CryptoCurrencies,
  CryptoDetails,
  News,
  Exchanges,
  Error,
} from "./components";
import "antd/dist/reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cryptocurrencies",
        element: <CryptoCurrencies />,
      },

      {
        path: "/exchanges",
        element: <Exchanges />,
      },
      {
        path: "/crypto/:coinId",
        element: <CryptoDetails />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);
