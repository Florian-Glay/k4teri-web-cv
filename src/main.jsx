// src/main.jsx
import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// --- Lazy imports des pages
const Home             = lazy(() => import("./pages/Home.jsx"));
const Projects         = lazy(() => import("./pages/Projects.jsx"));
const ProjectMarioKart = lazy(() => import("./pages/ProjectMarioKart.jsx"));
const ProjectSFML      = lazy(() => import("./pages/ProjectSFML.jsx"));
const ProjectUnity     = lazy(() => import("./pages/ProjectUnity.jsx"));
const Music            = lazy(() => import("./pages/Music.jsx"));
const Running          = lazy(() => import("./pages/Running.jsx"));
const CV               = lazy(() => import("./pages/CV.jsx"));

// --- Fallback de chargement (tu peux le styliser comme tu veux)
function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-950">
      <p className="text-2xl font-bold text-neutral-300 animate-pulse">
        Chargement…
      </p>
    </div>
  );
}

const withSuspense = (node) => (
  <Suspense fallback={<PageLoader />}>{node}</Suspense>
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: withSuspense(<Home />) },
        { path: "projects", element: withSuspense(<Projects />) },
        { path: "projects/mariokart", element: withSuspense(<ProjectMarioKart />) },
        { path: "projects/sfml", element: withSuspense(<ProjectSFML />) },
        { path: "projects/unity", element: withSuspense(<ProjectUnity />) },
        { path: "music", element: withSuspense(<Music />) },
        { path: "running", element: withSuspense(<Running />) },
        { path: "cv", element: withSuspense(<CV />) },
      ],
    },
  ],
  {
    // Important pour GitHub Pages (réécrit les chemins /k4teri-web-cv/…)
    basename: import.meta.env.BASE_URL,
  }
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
