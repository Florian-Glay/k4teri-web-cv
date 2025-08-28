import { NavLink } from "react-router-dom";


const NavBar = () => (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
        <nav className="px-4 sm:px-6 lg:px-8 h-[var(--nav-h)] flex items-center justify-between">
            <NavLink to="/" className="font-black tracking-wider text-xl">GLAY Florian</NavLink>
            <div className="flex items-center gap-6 text-sm">
                <NavLink to="/projects" className={({isActive})=>isActive?"text-accent":"hover:text-accent-soft"}>Projets</NavLink>
                <NavLink to="/music" className={({isActive})=>isActive?"text-accent":"hover:text-accent-soft"}>Musique</NavLink>
                <NavLink to="/running" className={({isActive})=>isActive?"text-accent":"hover:text-accent-soft"}>Course</NavLink>
                <NavLink to="/cv" className="px-3 py-2 text-sm text-neutral-200 hover:text-white">CV</NavLink>
            </div>
        </nav>
    </header>
);


export default NavBar;