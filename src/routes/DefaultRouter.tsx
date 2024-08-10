import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFound } from '@homework-task/pages/notfound/NotFound';
import { Task1 } from '@homework-task/pages/task1/Task1';
import { Task2 } from '@homework-task/pages/task2/Task2';
import { Task3 } from '@homework-task/pages/task3/Task3';
import { Task4 } from '@homework-task/pages/task4/Task4';

const router = createBrowserRouter([
    { path: '/', element: <Task1 /> },
    { path: '/list-task', element: <Task2 /> },
    { path: '/form-task', element: <Task3 /> },
    { path: '/page-ui-task', element: <Task4 /> },
    { path: '/*', element: <NotFound /> },
]);

export const DefaultRouter = () => {
    return <RouterProvider router={router} />;
};
