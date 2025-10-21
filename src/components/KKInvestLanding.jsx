// src/components/KKInvestLanding.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Home, Building, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import '@fontsource/inter';
import '@fontsource/orbitron';
import OfficeHours from './OfficeHours';


// ---------- Logo ----------
import LogoImage from '../assets/logo.png'; // ścieżka do Twojego logo

const Logo = () => (
  <div className="flex items-center gap-3 select-none">
    <img 
      src={LogoImage} 
      alt="K&K Invest Logo" 
      className="w-12 h-12 object-contain rounded-2xl shadow-xl" 
    />
    <div>
      <div className="text-sm font-semibold">K&K Invest</div>
      <div className="text-[11px] uppercase tracking-wide opacity-70">
        Construction · Commercial · Residential
      </div>
    </div>
  </div>
);


// ---------- Navigation ----------
const Nav = () => (
  <nav className="hidden md:flex gap-8 items-center text-sm">
    <Link to="/o-nas" className="nav-link">O nas</Link>
    <Link to="/realizacje" className="nav-link">Realizacje</Link>
    <Link to="/kontakt" className="nav-link">Kontakt</Link>
    <a className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ffd166] to-[#ff6b6b] text-black font-semibold shadow-lg">
      Zamów wycenę
    </a>
  </nav>
);

// ---------- Floating Grid ----------
const FloatingGrid = () => (
  <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -left-20 -top-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#001d3d]/30 via-[#00ffc2]/10 to-transparent blur-3xl transform-gpu animate-blob" />
    <div className="absolute -right-40 bottom-0 w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-[#ff6b6b]/20 via-[#ffd166]/10 to-transparent blur-2xl transform-gpu animate-blob animation-delay-2000" />
  </div>
);

// ---------- Hero Section ----------
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center">
    <FloatingGrid />
    <div className="container px-6 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="font-orbitron text-5xl md:text-6xl leading-tight">K&K Invest — budujemy przyszłość</h1>
          <p className="mt-4 text-lg max-w-xl opacity-80">
            Specjalizujemy się w realizacjach komercyjnych i mieszkalnych — dostarczamy stan surowy z precyzją, efektywnością i myśleniem przyszłościowym.
          </p>

          <div className="mt-8 flex gap-4">
            <Link to="/realizacje" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00ffe1] to-[#0066ff] text-black font-semibold shadow-lg">
              Zobacz realizacje
            </Link>
            <Link to="/kontakt" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-700/40">
              Kontakt
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs opacity-80">
            <div className="p-3 bg-white/6 rounded-xl flex items-center gap-2"><Building size={16} /> Komercyjne</div>
            <div className="p-3 bg-white/6 rounded-xl flex items-center gap-2"><Home size={16} /> Mieszkalne</div>
            <div className="p-3 bg-white/6 rounded-xl flex items-center gap-2"><Factory size={16} /> Stan surowy</div>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }} className="relative">
          <div className="h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-white/3 to-black/5">
            <div className="w-full h-full grid grid-cols-2 grid-rows-2">
              {['Komercja','Mieszkania','Inwestorzy','Stan surowy'].map((t, i) => (
                <div key={i} className={`p-6 ${i % 2 ? 'bg-[url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"400\\" height=\\"400\\"><rect width=\\"100%\\" height=\\"100%\\" fill=\\"%23000000%22 opacity=0.05/></svg>")]' : ''}`}>
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="text-sm opacity-70">{t}</div>
                      <div className="mt-2 font-semibold text-lg">Projekt #{i + 1}</div>
                    </div>
                    <div className="text-xs opacity-60">Powierzchnia: {Math.floor(5000 + i * 1200)} m²</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ---------- Services Section ----------
const Services = () => (
  <section className="py-20">
    <div className="container px-6">
      <motion.h2 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-semibold">Nasza oferta</motion.h2>
      <p className="mt-3 text-neutral-300 max-w-2xl">
        Kompleksowe wykonawstwo stanu surowego — od fundamentów po konstrukcję dachu.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Stan surowy otwarty & zamknięty', desc: 'Szybkie tempo i kontrola jakości.' },
          { title: 'Zarządzanie projektem', desc: 'Koordynacja podwykonawców, harmonogram.' },
          { title: 'Konsultacje techniczne', desc: 'Wsparcie od projektu do wykonania.' },
        ].map((s, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="p-6 bg-white/3 rounded-2xl border border-white/6 shadow-lg">
            <div className="text-sm opacity-80">{s.title}</div>
            <div className="mt-3 text-neutral-300">{s.desc}</div>
            <div className="mt-4 text-xs opacity-60">Dowiedz się więcej →</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Projects Section ----------
const Projects = () => (
  <section className="py-20 bg-gradient-to-b from-transparent to-black/5">
    <div className="container px-6">
      <h3 className="text-2xl font-semibold">Wybrane realizacje</h3>
      <p className="mt-2 opacity-80">Kompaktowa galeria naszych najnowszych projektów — surowo, precyzyjnie, przyszłościowo.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden bg-white/4 border border-white/6 shadow-xl">
            <div className="h-48 bg-[linear-gradient(135deg,#001d3d,rgba(0,199,255,0.18))] flex items-end p-4">
              <div>
                <div className="text-xs opacity-70">Projekt {i + 1}</div>
                <div className="font-semibold">Budynek mieszkalny</div>
              </div>
            </div>
            <div className="p-4 text-sm text-neutral-300">
              Krótkie streszczenie: realizacja stanu surowego dla inwestycji wielorodzinnej. Terminy: 12 miesięcy
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Contact Section ----------
const Contact = () => (
  <section className="py-20">
    <div className="container px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-xl font-semibold">Skontaktuj się</h4>
        <p className="mt-3 text-neutral-400">
          Chcesz wycenę lub więcej informacji? Napisz lub zadzwoń — odpowiadamy szybko i rzeczowo.
        </p>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3"><Phone size={18} /><div className="text-sm">+48 600 000 000</div></div>
          <div className="flex items-center gap-3"><Mail size={18} /><div className="text-sm">kontakt@kk-invest.pl</div></div>
          <div className="flex items-center gap-3"><MapPin size={18} /><div className="text-sm">Warszawa, Polska</div></div>
        </div>
      </div>
      <form className="p-6 rounded-2xl bg-white/4 border border-white/6 shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <input className="p-3 rounded-lg bg-transparent border border-white/8 outline-none" placeholder="Imię i nazwisko" />
          <input className="p-3 rounded-lg bg-transparent border border-white/8 outline-none" placeholder="Email" />
          <textarea className="p-3 rounded-lg bg-transparent border border-white/8 outline-none" rows={5} placeholder="Krótki opis inwestycji" />
          <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#00ffe1] to-[#0066ff] font-semibold">Wyślij wiadomość</button>
        </div>
      </form>
    </div>
  </section>
);

// ---------- Footer ----------
import { Clock } from 'lucide-react';

const Footer = () => (
  <footer className="py-8 border-t border-white/6 mt-12">
    <div className="container px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <Logo />
      
      <div className="flex flex-col md:flex-row md:gap-12 text-sm opacity-70">
        <div>© {new Date().getFullYear()} K&K Invest — Wszystkie prawa zastrzeżone</div>
        
        <div className="flex items-start md:items-center gap-2">
          <Clock size={18} className="mt-[2px]" />
          <div className="flex flex-col text-sm leading-tight">
            <span className="font-semibold">Godziny otwarcia:</span>
            <span>Pon-Pt: 08:00 – 17:00</span>
            <span>Sob-Nd: Zamknięte</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// ---------- Main Component ----------
export default function KKInvestLanding() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <OfficeHours />


      <style>{`
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-inter { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        .animate-blob { animation: blob 9s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .nav-link { position: relative; padding-bottom: 4px; }
        .nav-link::after { content: ''; position: absolute; left: 0; bottom: 0; width: 0%; height: 2px; background: linear-gradient(90deg,#00ffe1,#0066ff); transition: width .3s; }
        .nav-link:hover::after { width: 100%; }
      `}</style>
    </>
  );
}
