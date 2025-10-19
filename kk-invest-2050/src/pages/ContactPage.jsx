import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage(){
  return (
    <div className="min-h-screen py-16 container px-6">
      <Link to="/" className="text-sm opacity-80">← Powrót</Link>
      <h1 className="text-3xl font-semibold mt-4">Kontakt</h1>
      <p className="mt-4 opacity-80">Masz pytania? Napisz lub zadzwoń — przygotujemy darmową wycenę wstępną.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white/4 border border-white/6">
          <h3 className="font-semibold">Dane kontaktowe</h3>
          <div className="mt-4 space-y-3">
            <div>Telefon: +48 600 000 000</div>
            <div>Email: kontakt@kk-invest.pl</div>
            <div>Adres: Warszawa, Polska</div>
          </div>
        </div>

        <form className="p-6 rounded-2xl bg-white/4 border border-white/6">
          <input className="w-full p-3 rounded-lg mb-3 bg-transparent border border-white/8" placeholder="Imię i nazwisko" />
          <input className="w-full p-3 rounded-lg mb-3 bg-transparent border border-white/8" placeholder="Email" />
          <textarea className="w-full p-3 rounded-lg mb-3 bg-transparent border border-white/8" rows={5} placeholder="Opis inwestycji" />
          <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#00ffe1] to-[#0066ff] font-semibold">Wyślij</button>
        </form>
      </div>
    </div>
  )
}