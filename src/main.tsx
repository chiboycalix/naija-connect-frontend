import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListUsers from './pages/users/UsersList.tsx';
import RolesList from './pages/roles/RolesList.tsx';
import ErrorPage from './pages/error/ErrorPage.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';

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
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
