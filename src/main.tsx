import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListUsers from "./pages/users/UsersList.tsx";
import RolesList from "./pages/roles/RolesList.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Login from "./pages/login/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => import("./App.tsx"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <ListUsers />,
      },
      {
        path: "roles",
        element: <RolesList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
