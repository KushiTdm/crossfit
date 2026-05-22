import { CheckCircle } from 'lucide-react';

const points = [
  'Équipement professionnel haut de gamme',
  'Coaches certifiés CrossFit Level 2+',
  'Communauté soudée et bienveillante',
  'Suivi personnalisé de ta progression',
  'Vestiaires et douches modernes',
  'Parking gratuit disponible',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="img-overlay-card relative h-72 col-span-2">
              <img
                src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                alt="La Box CrossFit"
                className="w-full h-full object-cover"
              />
              <div className="overlay-content absolute inset-0 flex items-end p-5">
                <span className="font-condensed font-800 text-white text-xl uppercase tracking-widest">La Structure</span>
              </div>
            </div>
            <div className="img-overlay-card relative h-48">
              <img
                src="https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Les Coachs"
                className="w-full h-full object-cover"
              />
              <div className="overlay-content absolute inset-0 flex items-end p-4">
                <span className="font-condensed font-700 text-white text-base uppercase tracking-wider">Les Coaches</span>
              </div>
            </div>
            <div className="img-overlay-card relative h-48">
              <img
                src="https://images.pexels.com/photos/4164512/pexels-photo-4164512.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Performance"
                className="w-full h-full object-cover"
              />
              <div className="overlay-content absolute inset-0 flex items-end p-4">
                <span className="font-condensed font-700 text-white text-base uppercase tracking-wider">Performance</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="font-condensed text-[#D4A017] text-xs tracking-[0.35em] uppercase mb-3">
              Notre histoire
            </p>
            <h2 className="section-title text-white text-5xl md:text-6xl mb-2">
              QUI
            </h2>
            <h2 className="section-title text-[#D4A017] text-5xl md:text-6xl mb-6">
              SOMMES-NOUS ?
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mb-8" />
            <p className="text-[#888] text-base leading-relaxed mb-4">
              Fondée en 2016, <strong className="text-white">The Box</strong> est née d'une passion commune pour le CrossFit et le dépassement de soi. Notre salle de 800 m² est conçue pour t'offrir les meilleures conditions d'entraînement.
            </p>
            <p className="text-[#888] text-base leading-relaxed mb-8">
              Que tu sois débutant ou athlète confirmé, nos coaches t'accueillent avec le même engagement : t'aider à devenir la meilleure version de toi-même.
            </p>

            {/* Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {points.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#D4A017] mt-0.5 flex-shrink-0" />
                  <span className="text-[#CCC] text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold"
            >
              Essai Gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
