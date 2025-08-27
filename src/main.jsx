import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectMarioKart from "./pages/ProjectMarioKart.jsx";
import ProjectSFML from "./pages/ProjectSFML.jsx";
import ProjectUnity from "./pages/ProjectUnity.jsx";
import Music from "./pages/Music.jsx";
import Running from "./pages/Running.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/mariokart", element: <ProjectMarioKart /> },
      { path: "projects/sfml", element: <ProjectSFML /> },
      { path: "projects/unity", element: <ProjectUnity /> },
      { path: "music", element: <Music /> },
      { path: "running", element: <Running /> },
      { path: "*", element: <Home /> }, // fallback
    ],
  },
];

const router = createBrowserRouter(routes, {
  // "/" en dev, "/k4teri-web-cv/" en prod
  basename: import.meta.env.BASE_URL,
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
