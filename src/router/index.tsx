import YuiDiscover from '@/pages/discover';
import Album from '@/pages/discover/c-pages/album';
import Artist from '@/pages/discover/c-pages/artist';
import DJRadio from '@/pages/discover/c-pages/djradio';
import Ranking from '@/pages/discover/c-pages/ranking';
import Recommend from '@/pages/discover/c-pages/recommend';
import Songs from '@/pages/discover/c-pages/songs';
import YuiFriend from '@/pages/friend';
import YuiMine from '@/pages/mine';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const YuiRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Navigate replace to="/discover" />,
    },
    {
      path: '/discover',
      element: <YuiDiscover />,
      children: [
        {
          path: 'recommend',
          element: <Recommend />,
        },
        {
          path: 'ranking',
          element: <Ranking />,
        },
        {
          path: 'songs',
          element: <Songs />,
        },
        {
          path: 'djradio',
          element: <DJRadio />,
        },
        {
          path: 'artist',
          element: <Artist />,
        },
        {
          path: 'album',
          element: <Album />,
        },
      ],
    },
    {
      path: '/mine',
      element: <YuiMine />,
    },
    {
      path: '/friend',
      element: <YuiFriend />,
    },
  ];

  return useRoutes(routes);
};

export default YuiRoutes;
