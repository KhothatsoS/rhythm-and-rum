"use client"

import { createBrowserRouter } from 'react-router';
import { Home } from './app/page';
import { About } from './about/page';
import { Services } from './services/page';
import { Gallery } from './pages/Gallery';
import { Booking } from './booking/page';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'booking', element: <Booking /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);