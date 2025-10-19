import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage(){
  return (
    <div className="min-h-screen py-16 container px-6">
      <Link to="/" className="text-sm opacity-80">← Powrót</Link>
      <h1 className="text-3xl font-semibold mt-4">O nas</h1>
      <p className="mt-6 text-neutral-300 max-w-3xl">K&K Invest to firma budowlana specjalizująca się w wykonawstwie stanu surowego dla budynków komercyjnych i mieszkalnych. Nasze podejście łączy tradycyjną rzemieślniczą dbałość o szczegóły z nowoczesnymi metodami zarządzania projektem i cyfrową kontrolą jakości.</p>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/4 rounded-2xl">Doświadczony zespół</div>
        <div className="p-6 bg-white/4 rounded-2xl">Transparentne harmonogramy</div>
        <div className="p-6 bg-white/4 rounded-2xl">Materiały certyfikowane</div>
      </section>
    </div>
  )
}