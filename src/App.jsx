import Hero from './components/Hero';
import Features from './components/Features';
import Flavors from './components/Flavors';
import Reviews from './components/Reviews';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top nav substitute with brand mark */}
      <header className="relative z-20">
        <div className="container mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-red-500 shadow-[0_0_30px_rgba(59,130,246,0.45)]" />
            <span className="text-xl font-extrabold tracking-tight">PEPSI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/90">
            <a href="#features" className="hover:text-white/90 transition-colors">Features</a>
            <a href="#flavors" className="hover:text-white/90 transition-colors">Flavors</a>
            <a href="#reviews" className="hover:text-white/90 transition-colors">Reviews</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <div id="flavors"><Flavors /></div>
        <div id="reviews"><Reviews /></div>
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-200/80">
          <p className="text-sm">© {new Date().getFullYear()} PepsiCo. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white/90">Privacy</a>
            <a href="#" className="hover:text-white/90">Terms</a>
            <a href="#" className="hover:text-white/90">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
