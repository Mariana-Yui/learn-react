import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import About from '@/pages/about';
import Login from '@/pages/About/Login';
import Them from '@/pages/About/them';
import Us from '@/pages/About/us';
import Home from '@/pages/home';
import NoMatch from '@/pages/noMatch';
import Profile from '@/pages/profile';

const GetRoutes = () => {
  const routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    {
      path: '/about',
      element: <About />,
      children: [
        { path: 'us/:id', element: <Us /> },
        { path: 'login', element: <Login /> },
        { path: 'them', element: <Them /> },
      ],
    },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <NoMatch /> },
  ];

  return useRoutes(routes);
};

export default GetRoutes;
