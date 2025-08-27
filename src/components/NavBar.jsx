import { NavLink } from "react-router-dom";


const NavBar = () => (
<header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
<nav className="px-4 sm:px-6 lg:px-8 h-[var(--nav-h)] flex items-center justify-between">
<NavLink to="/" className="font-black tracking-wider text-xl">K4TERI</NavLink>
<div className="flex items-center gap-6 text-sm">
<NavLink to="/projects" className={({isActive})=>isActive?"text-accent":"hover:text-accent-soft"}>Projets</NavLink>
<NavLink to="/music" className={({isActive})=>isActive?"text-accent":"hover:text-accent-soft"}>Musique</NavLink>
<NavLink to="/running" className={({isActive})=>isActive?"text-accent":"hover:text-accent-soft"}>Course</NavLink>
</div>
</nav>
</header>
);


export default NavBar;