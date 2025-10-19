import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectsPage(){
  return (
    <div className="min-h-screen py-16 container px-6">
      <header className="mb-8">
        <Link to="/" className="text-sm opacity-80">← Powrót</Link>
        <h1 className="text-3xl font-semibold mt-4">Realizacje</h1>
        <p className="mt-2 opacity-80">Wybrane projekty — stan surowy dla budynków mieszkalnych i komercyjnych.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({length:9}).map((_,i)=> (
          <article key={i} className="rounded-2xl overflow-hidden bg-white/4 border border-white/6 shadow-xl">
            <div className="h-48 bg-gradient-to-br from-[#001d3d] to-[#0066ff] flex items-end p-4">
              <div>
                <div className="text-xs opacity-70">Projekt {i+1}</div>
                <div className="font-semibold">Budynek {i%2? 'komercyjny' : 'mieszkalny'}</div>
              </div>
            </div>
            <div className="p-4 text-sm text-neutral-300">Krótki opis realizacji — zakres: stan surowy, czas realizacji: ~12 miesięcy.</div>
          </article>
        ))}
      </div>
    </div>
  )
}