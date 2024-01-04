import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  CreateApplication,
  ErrorPage,
  ApplicationSuccessful,
  ApplicationQuery,
  AdminPage,
  ApplicationList,
  ApplicationDetail,
  ApplicationUpdate,
  Register,
} from '../pages';
import RootLayout from '../layout/RootLayout';
import { loader as applicationsLoader } from '../pages/admin/ApplicationList';
import { loader as applicationDetailLoader } from '../pages/user/ApplicationDetail';
import { loader as updateApplicationloader, action as updateApplicationAction } from '../pages/admin/ApplicationUpdate';
import ProtectedRoute from '../pages/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to='basvuru-olustur' replace /> },
      { path: 'basvuru-olustur', element: <CreateApplication /> },
      { path: 'basvuru-basarili', element: <ApplicationSuccessful /> },
      { path: 'basvuru-sorgula', element: <ApplicationQuery /> },
      { path: 'basvuru/:basvuruNo', element: <ApplicationDetail />, loader: applicationDetailLoader },
    ],
  },
  {
    path: 'admin',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminPage /> },
      {
        path: 'basvuru-listesi',
        element: (
          <ProtectedRoute>
            <ApplicationList />
          </ProtectedRoute>
        ),
        loader: applicationsLoader,
      },
      {
        path: 'basvuru/:basvuruNo',
        element: (
          <ProtectedRoute>
            <ApplicationUpdate />
          </ProtectedRoute>
        ),
        loader: updateApplicationloader,
        action: updateApplicationAction,
      },
    ],
  },
  {
    path: 'uye-ol',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Register /> }],
  },
]);
