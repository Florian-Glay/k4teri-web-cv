import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider, redirect} from "react-router-dom";
import "./styles.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectMarioKart from "./pages/ProjectMarioKart.jsx";
import ProjectSFML from "./pages/ProjectSFML.jsx";
import ProjectUnity from "./pages/ProjectUnity.jsx";
import Music from "./pages/Music.jsx";
import Running from "./pages/Running.jsx";
import CV from "./pages/CV.jsx";
import { LangProvider } from "./lib/lang.jsx";

/*
// --- Lazy imports des pages
const Home             = lazy(() => import("./pages/Home.jsx"));
const Projects         = lazy(() => import("./pages/Projects.jsx"));
const ProjectMarioKart = lazy(() => import("./pages/ProjectMarioKart.jsx"));
const ProjectSFML      = lazy(() => import("./pages/ProjectSFML.jsx"));
const ProjectUnity     = lazy(() => import("./pages/ProjectUnity.jsx"));
const Music            = lazy(() => import("./pages/Music.jsx"));
const Running          = lazy(() => import("./pages/Running.jsx"));
const CV               = lazy(() => import("./pages/CV.jsx"));*/

// --- Fallback de chargement (tu peux le styliser comme tu veux)

/*
const routes = [
  { path: "/", element: <Navigate to="/fr" replace /> },
  {
    path: "/:lang(en|fr)",
    element: <LangLayout />,
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
  { path: "*", element: <Navigate to="/fr" replace /> },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL, // "/" en dev, "/<repo>/" sur GH Pages
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);*/

const router = createBrowserRouter([
  // redirection racine vers /fr
  { path: "/", loader: () => redirect("/fr") },
  // toutes les pages sont sous /:lang
  {
    path: "/:lang",
    element: (
      <Suspense fallback={
        <div className="fixed inset-0 grid place-items-center text-neutral-300">
          Chargement…
        </div>
      }>
        {/* LangProvider est ICI, donc dans le Router => useParams OK */}
        <LangProvider>
          <App />
        </LangProvider>
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/mariokart", element: <ProjectMarioKart /> },
      { path: "projects/sfml", element: <ProjectSFML /> },
      { path: "projects/unity", element: <ProjectUnity /> },
      { path: "music", element: <Music /> },
      { path: "running", element: <Running /> },
      { path: "cv", element: <CV /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);