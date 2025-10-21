// src/components/OfficeHours.jsx
import React from 'react';
import { Clock } from 'lucide-react';

export default function OfficeHours() {
  return (
    <div className="fixed right-4 bottom-20 md:bottom-24 z-50 bg-black/70 text-white rounded-xl shadow-lg p-4 w-48 md:w-52 font-inter">
      <div className="flex items-center gap-2 mb-2">
        <Clock size={20} />
        <span className="font-semibold text-sm">Godziny otwarcia</span>
      </div>
      <div className="text-xs leading-snug opacity-90">
        <div>Poniedziałek – Piątek: 08:00 – 17:00</div>
        <div>Sobota – Niedziela: Zamknięte</div>
      </div>
    </div>
  );
}
