import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Suspense } from "react";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950">
      <p className="text-2xl font-bold text-neutral-300 animate-pulse">
        Chargement…
      </p>
    </div>
  );
}

export default function App() {
    const location = useLocation();

    // Revenir en haut à chaque navigation
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location.pathname]);
    return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <NavBar />
        <main className="container-px py-8">
            <Suspense fallback={<PageLoader />}>
                {/* Remonte entièrement la page à chaque changement d’URL */}
                <Outlet key={location.pathname} />
            </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
    </div>
    );
}