import { useState } from 'react';
import { Clock } from 'lucide-react';

const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

const schedule: Record<string, { time: string; class: string; coach: string; level: string }[]> = {
  Lun: [
    { time: '06:00', class: 'CrossFit WOD', coach: 'Thomas', level: 'Tous niveaux' },
    { time: '09:30', class: 'Open Gym', coach: '', level: 'Libre' },
    { time: '12:00', class: 'CrossFit WOD', coach: 'Sarah', level: 'Intermédiaire' },
    { time: '17:30', class: 'Haltérophilie', coach: 'Marc', level: 'Avancé' },
    { time: '19:00', class: 'CrossFit WOD', coach: 'Thomas', level: 'Tous niveaux' },
  ],
  Mar: [
    { time: '06:00', class: 'CrossFit WOD', coach: 'Sarah', level: 'Tous niveaux' },
    { time: '09:30', class: 'Jiu-Jitsu', coach: 'Carlos', level: 'Débutant' },
    { time: '12:00', class: 'Open Gym', coach: '', level: 'Libre' },
    { time: '18:00', class: 'CrossFit WOD', coach: 'Marc', level: 'Tous niveaux' },
    { time: '19:30', class: 'Jiu-Jitsu', coach: 'Carlos', level: 'Avancé' },
  ],
  Mer: [
    { time: '06:00', class: 'CrossFit WOD', coach: 'Thomas', level: 'Tous niveaux' },
    { time: '09:30', class: 'Haltérophilie', coach: 'Marc', level: 'Intermédiaire' },
    { time: '12:00', class: 'CrossFit WOD', coach: 'Sarah', level: 'Tous niveaux' },
    { time: '17:30', class: 'Open Gym', coach: '', level: 'Libre' },
    { time: '19:00', class: 'CrossFit WOD', coach: 'Thomas', level: 'Avancé' },
  ],
  Jeu: [
    { time: '06:00', class: 'CrossFit WOD', coach: 'Sarah', level: 'Tous niveaux' },
    { time: '09:30', class: 'Jiu-Jitsu', coach: 'Carlos', level: 'Tous niveaux' },
    { time: '12:00', class: 'Open Gym', coach: '', level: 'Libre' },
    { time: '18:00', class: 'CrossFit WOD', coach: 'Marc', level: 'Tous niveaux' },
    { time: '19:30', class: 'Haltérophilie', coach: 'Marc', level: 'Intermédiaire' },
  ],
  Ven: [
    { time: '06:00', class: 'CrossFit WOD', coach: 'Thomas', level: 'Tous niveaux' },
    { time: '09:30', class: 'Open Gym', coach: '', level: 'Libre' },
    { time: '12:00', class: 'CrossFit WOD', coach: 'Sarah', level: 'Tous niveaux' },
    { time: '17:30', class: 'Jiu-Jitsu', coach: 'Carlos', level: 'Débutant' },
    { time: '19:00', class: 'CrossFit WOD', coach: 'Marc', level: 'Avancé' },
  ],
  Sam: [
    { time: '08:00', class: 'CrossFit WOD', coach: 'Thomas', level: 'Tous niveaux' },
    { time: '09:30', class: 'CrossFit WOD', coach: 'Sarah', level: 'Débutant' },
    { time: '11:00', class: 'Haltérophilie', coach: 'Marc', level: 'Tous niveaux' },
    { time: '12:30', class: 'Open Gym', coach: '', level: 'Libre' },
  ],
  Dim: [
    { time: '09:00', class: 'CrossFit WOD', coach: 'Thomas', level: 'Tous niveaux' },
    { time: '10:30', class: 'Open Gym', coach: '', level: 'Libre' },
  ],
};

const levelColors: Record<string, string> = {
  'Tous niveaux': 'bg-green-900/40 text-green-400',
  Débutant: 'bg-blue-900/40 text-blue-400',
  Intermédiaire: 'bg-yellow-900/40 text-yellow-400',
  Avancé: 'bg-red-900/40 text-red-400',
  Libre: 'bg-white/10 text-white/50',
};

export default function Schedule() {
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'short' });
  const todayShort = today.charAt(0).toUpperCase() + today.slice(1, 3);
  const defaultDay = days.includes(todayShort) ? todayShort : 'Lun';
  const [activeDay, setActiveDay] = useState(defaultDay);

  return (
    <section id="schedule" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-condensed text-[#D4A017] text-xs tracking-[0.35em] uppercase mb-3">
            Planning hebdomadaire
          </p>
          <h2 className="section-title text-white text-5xl md:text-6xl mb-4">
            HORAIRES
          </h2>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto" />
        </div>

        {/* Day tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`font-condensed font-700 text-sm uppercase tracking-widest px-5 py-2.5 transition-all duration-200 ${
                activeDay === day
                  ? 'bg-[#D4A017] text-black'
                  : 'border border-white/15 text-[#888] hover:border-[#D4A017]/50 hover:text-white'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule table */}
        <div className="border border-white/8">
          <div className="grid grid-cols-4 bg-[#1A1A1A] border-b border-white/8 px-5 py-3">
            {['Heure', 'Cours', 'Coach', 'Niveau'].map(h => (
              <span key={h} className="font-condensed text-[#D4A017] text-xs uppercase tracking-widest">{h}</span>
            ))}
          </div>
          {schedule[activeDay].map((row, i) => (
            <div
              key={i}
              className="schedule-row grid grid-cols-4 px-5 py-4 border-b border-white/5 last:border-0 transition-colors duration-150"
            >
              <span className="flex items-center gap-2 text-white text-sm font-500">
                <Clock size={12} className="text-[#D4A017]" />
                {row.time}
              </span>
              <span className="text-white text-sm font-condensed font-700 uppercase tracking-wide">{row.class}</span>
              <span className="text-[#888] text-sm">{row.coach || '—'}</span>
              <span>
                <span className={`text-xs px-2 py-0.5 font-condensed font-600 uppercase tracking-wide ${levelColors[row.level] || 'text-white/50'}`}>
                  {row.level}
                </span>
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[#444] text-xs mt-6 tracking-wide">
          Planning susceptible de modifications. Consultez l'application pour les dernières mises à jour.
        </p>
      </div>
    </section>
  );
}
