const Footer = () => (
<footer className="border-t border-neutral-800 text-xs text-neutral-400">
<div className="px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
<p>© {new Date().getFullYear()} K4TERI — Built with React & Vite</p>
<div className="flex gap-4">
<a href="https://www.youtube.com/@K4TERI4music" target="_blank" className="hover:text-accent-soft">YouTube</a>
<a href="https://instagram.com/k4teri.music" target="_blank" className="hover:text-accent-soft">Instagram</a>
</div>
</div>
</footer>
);
export default Footer;