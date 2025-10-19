const Projects = () => (
  <section className="py-20 bg-gradient-to-b from-transparent to-black/5">
    <div className="container px-6">
      <h3 className="text-2xl font-semibold">Wybrane realizacje</h3>
      <p className="mt-2 opacity-80">Kompaktowa galeria naszych najnowszych projektów — surowo, precyzyjnie, przyszłościowo.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({length:6}).map((_,i)=> (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden bg-white/4 border border-white/6 shadow-xl">
            <div className="h-48 bg-[linear-gradient(135deg,#001d3d,rgba(0,199,255,0.18))] flex items-end p-4">
              <div>
                <div className="text-xs opacity-70">Projekt {i+1}</div>
                <div className="font-semibold">Budynek mieszkalny</div>
              </div>
            </div>
            <div className="p-4 text-sm text-neutral-300">Krótkie streszczenie: realizacja stanu surowego dla inwestycji wielorodzinnej. Terminy: 12 miesiąc</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section className="py-20">
    <div className="container px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-xl font-semibold">Skontaktuj się</h4>
        <p className="mt-3 text-neutral-400">Chcesz wycenę lub więcej informacji? Napisz lub zadzwoń — odpowiadamy szybko i rzeczowo.</p>

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
)

const Footer = () => (
  <footer className="py-8 border-t border-white/6 mt-12">
    <div className="container px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <Logo />
      </div>
      <div className="text-sm opacity-70">© {new Date().getFullYear()} K&K Invest — Wszystkie prawa zastrzeżone</div>
    </div>
  </footer>
)

export default function KKInvestLanding(){
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="py-6">
        <div className="container px-6 flex justify-between items-center">
          <Logo />
          <Nav />
          <div className="md:hidden">
            <button aria-label="menu" className="p-2 rounded-lg bg-white/5"><Menu /></button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <style>{`
        .font-orbitron{ font-family: 'Orbitron', sans-serif; }
        .font-inter{ font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        .animate-blob{ animation: blob 9s ease-in-out infinite; }
        .animation-delay-2000{ animation-delay: 2s; }
        .nav-link{ position: relative; padding-bottom: 4px; }
        .nav-link::after{ content: ''; position: absolute; left: 0; bottom: 0; width: 0%; height: 2px; background: linear-gradient(90deg,#00ffe1,#0066ff); transition: width .3s; }
        .nav-link:hover::after{ width: 100%; }
      `}</style>
    </div>
  )
}