import "./i18n/i18n";
import React, { Suspense, lazy, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate, Outlet, useParams, useLocation } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";
import i18n from "i18next";


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

/*
function LangGuard() {
  const { lang } = useParams();            // "fr" ou "en"
  const { pathname } = useLocation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  // Petite sécurité : si l’URL contient un autre code de langue, redirige vers fr
  if (!/^(fr|en)$/.test(lang)) return <Navigate to="/fr" replace />;

  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 grid place-items-center text-neutral-300 text-xl">
          Chargement…
        </div>
      }
    >
      <App>
        <Outlet />
      </App>
    </Suspense>
  );
}

const routes = [
  // Accueil « racine » -> redirige vers langue préférée
  {
    path: "/",
    element: <Navigate to={`/${localStorage.getItem("lang") || "fr"}`} replace />
  },

  // Arbre localisé
  {
    path: "/:lang(en|fr)",
    element: <LangGuard />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/mariokart", element: <ProjectMarioKart /> },
      { path: "projects/sfml", element: <ProjectSFML /> },
      { path: "projects/unity", element: <ProjectUnity /> },
      { path: "music", element: <Music /> },
      { path: "running", element: <Running /> },
      { path: "cv", element: <CV /> }
    ]
  },

  // Tout le reste -> vers la langue préférée
  { path: "*", element: <Navigate to={`/${localStorage.getItem("lang") || "fr"}`} replace /> }
];


const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,  // <- ton sous-dossier GitHub Pages
});
*/


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);