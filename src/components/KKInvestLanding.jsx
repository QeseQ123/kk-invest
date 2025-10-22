// src/components/KKInvestLanding.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Building,
  Home,
  Factory,
  Menu,
  X,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";
import "@fontsource/inter";
import "@fontsource/orbitron";
import LogoImage from "../assets/logo.png";

// 🔹 placeholdery realizacji (podmień na swoje)
import Real1 from "../assets/realizacje/real1.jpg";
import Real2 from "../assets/realizacje/real2.jpg";
import Real3 from "../assets/realizacje/real3.jpg";
import Real4 from "../assets/realizacje/real4.jpg";
import Real5 from "../assets/realizacje/real5.jpg";

export default function KKInvestLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const realizacje = [
    { img: Real1, title: "Osiedle Gdańsk – Morena" },
    { img: Real2, title: "Hala przemysłowa – Puck" },
    { img: Real3, title: "Budynek usługowy – Gdynia" },
    { img: Real4, title: "Zabudowa bliźniacza – Rumia" },
    { img: Real5, title: "Magazyn logistyczny – Reda" },
  ];

  // autoplay co 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % realizacje.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-inter text-white bg-[#0A0D1A]">
      {/* ---------------- HEADER ---------------- */}
      <header className="fixed w-full z-50 bg-[#0A0D1A]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3 select-none">
            <img
              src={LogoImage}
              alt="K&K Invest Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-orbitron text-lg font-bold tracking-wide">
              K&K Invest
            </span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/o-nas" className="hover:text-[#00A8FF] transition">
              O nas
            </Link>
            <Link to="/realizacje" className="hover:text-[#00A8FF] transition">
              Realizacje
            </Link>
            <Link to="/kontakt" className="hover:text-[#00A8FF] transition">
              Kontakt
            </Link>
            <Link
              to="/wycena"
              className="ml-4 px-4 py-2 rounded-lg bg-[#00A8FF] text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Zamów wycenę
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="md:hidden bg-[#0A0D1A]/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col items-center py-4 space-y-4 text-sm">
              <Link to="/o-nas" onClick={() => setMenuOpen(false)}>
                O nas
              </Link>
              <Link to="/realizacje" onClick={() => setMenuOpen(false)}>
                Realizacje
              </Link>
              <Link to="/kontakt" onClick={() => setMenuOpen(false)}>
                Kontakt
              </Link>
              <Link
                to="/wycena"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#00A8FF] text-white font-semibold shadow-md"
              >
                Zamów wycenę
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex flex-col justify-center items-center min-h-screen text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a66] via-[#0033FF] to-[#000a33] animate-gradient bg-[length:200%_200%]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <img
            src={LogoImage}
            alt="K&K Logo"
            className="mx-auto w-24 h-24 mb-6"
          />
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold leading-tight">
            Budujemy solidne fundamenty Twojej przyszłości
          </h1>
          <p className="mt-6 text-lg text-blue-100 leading-loose">
            Realizujemy inwestycje budowlane w stanie surowym — mieszkaniowe,
            przemysłowe i użyteczności publicznej.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/realizacje"
              className="px-6 py-3 rounded-xl bg-white text-[#0033FF] font-semibold hover:bg-blue-100 transition"
            >
              Nasze realizacje
            </Link>
            <Link
              to="/kontakt"
              className="px-6 py-3 rounded-xl border border-white/40 font-semibold hover:bg-white/10 transition"
            >
              Skontaktuj się
            </Link>
            <Link
              to="/wycena"
              className="px-6 py-3 rounded-xl bg-[#00A8FF] text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Bezpłatna wycena
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="py-20 bg-[#0B0F1E] text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6"
        >
          O firmie
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-loose">
          K&K Invest to zespół doświadczonych specjalistów z branży budowlanej,
          którzy od lat realizują inwestycje o różnej skali — od budynków
          mieszkalnych po obiekty przemysłowe i użyteczności publicznej.
          Wyróżnia nas terminowość, transparentność i najwyższa jakość wykonania.
        </p>
      </section>

      {/* ---------------- REALIZACJE / CAROUSEL ---------------- */}
      <section className="py-20 bg-[#001133] text-center px-6 overflow-hidden">
        <h2 className="text-3xl font-semibold mb-10">Nasze realizacje</h2>

        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl">
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -300 * realizacje.length, right: 0 }}
            animate={{ x: -index * 300 }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
          >
            {realizacje.map((item, i) => (
              <motion.div
                key={i}
                className="min-w-[300px] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg hover:shadow-blue-500/10 transition relative"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover opacity-90 hover:opacity-100 transition"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/50 py-3 text-sm font-semibold">
                  {item.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="py-20 bg-[#0B0F1E] text-center px-6">
        <h2 className="text-3xl font-semibold mb-10">Dlaczego my?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <ShieldCheck size={36} />,
              title: "Bezpieczeństwo i jakość",
              desc: "Stosujemy sprawdzone technologie i materiały, zapewniające trwałość i bezpieczeństwo.",
            },
            {
              icon: <Clock size={36} />,
              title: "Terminowość",
              desc: "Każdy etap inwestycji realizujemy zgodnie z ustalonym harmonogramem.",
            },
            {
              icon: <Star size={36} />,
              title: "Zaufanie klientów",
              desc: "Z dumą współpracujemy z inwestorami prywatnymi i instytucjonalnymi w całym kraju.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl shadow-lg"
            >
              <div className="text-[#00A8FF] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section className="py-20 bg-[#0A0D1A] px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-300 mb-6">
              Skontaktuj się z nami, aby omówić swoją inwestycję.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={18} /> +48 600 000 000
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} /> biuro@kk-invest.net
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} /> ul. Batorego 23 lok. 6, Gdynia
              </div>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              title="K&K Invest Gdynia"
              src="https://www.google.com/maps?q=K%26K%20Invest%20Batorego%2023%20Gdynia&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
              <a
                href="https://goo.gl/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#00A8FF] rounded-lg font-semibold"
              >
                Otwórz w Mapach Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-8 text-center text-sm text-gray-400 border-t border-white/10 bg-[#0A0D1A]">
        © {new Date().getFullYear()} K&K Invest — Wszystkie prawa zastrzeżone
      </footer>
    </div>
  );
}

/* Tailwind animation (add in your global.css or tailwind.css)
-------------------------------------------------------------
@keyframes gradient {
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}
.animate-gradient {
  animation: gradient 15s linear infinite;
}
-------------------------------------------------------------
*/
