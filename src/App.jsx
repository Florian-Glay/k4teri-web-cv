import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
return (
<div className="min-h-screen flex flex-col">
<NavBar />
<main className="flex-1">
<Outlet />
</main>
<Footer />
</div>
);
}