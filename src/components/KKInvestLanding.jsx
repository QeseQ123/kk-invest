// src/components/KKInvestLanding.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Building, Home, Factory } from "lucide-react";
import "@fontsource/inter";
import "@fontsource/orbitron";
import LogoImage from "../assets/logo.png";

export default function KKInvestLanding() {
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
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex flex-col justify-center items-center min-h-screen text-center px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#001a66] via-[#0033FF] to-[#000a33]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        ></motion.div>

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
          <p className="mt-6 text-lg text-blue-100">
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
          </div>
        </motion.div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="py-20 bg-[#0B0F1E] text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold mb-6"
        >
          O firmie
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          K&K Invest to zespół doświadczonych specjalistów z branży budowlanej,
          którzy od lat realizują inwestycje o różnej skali — od budynków
          mieszkalnych po obiekty przemysłowe i użyteczności publicznej.
          Wyróżnia nas terminowość, transparentność i najwyższa jakość wykonania.
        </p>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-20 bg-[#001133] text-center px-6">
        <h2 className="text-3xl font-semibold mb-10">Nasze usługi</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Building size={36} />,
              title: "Stany surowe",
              desc: "Kompleksowe wykonanie konstrukcji budynków mieszkalnych i przemysłowych.",
            },
            {
              icon: <Factory size={36} />,
              title: "Generalne wykonawstwo",
              desc: "Prowadzenie inwestycji od projektu do oddania obiektu.",
            },
            {
              icon: <Home size={36} />,
              title: "Doradztwo techniczne",
              desc: "Pomoc w doborze technologii, materiałów i harmonogramów realizacji.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl shadow-lg"
            >
              <div className="text-[#00A8FF] mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- MAP + CONTACT ---------------- */}
      <section className="py-20 bg-[#0B0F1E] px-6">
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
                <Mail size={18} /> kontakt@kk-invest.pl
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} /> ul. Batorego 23 lok. 6, Gdynia
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              title="K&K Invest Gdynia"
              src="https://www.google.com/maps?q=K%26K%20Invest%20Batorego%2023%20Gdynia&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
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
