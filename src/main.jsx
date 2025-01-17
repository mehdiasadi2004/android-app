import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { NotFound } from './components/NotFound/NotFound.jsx'
import { Error } from './component/Error/Error.jsx'
import { Root } from './component/Root/Root.jsx'
import { Cars } from './component/Brands/Cars.jsx'
import { Detail } from './component/detail/detail.jsx'
import { NotFound } from './component/Notfound/Notfound.jsx'


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker ثبت شد:", registration);
      })
      .catch((error) => {
        console.log("ثبت Service Worker شکست خورد:", error);
      });
  });
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Cars/>,
        errorElement: <Error />,
      },
      {
        path: "/detail/:id",
        element: <Detail/>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
