import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    period: '/mois',
    desc: 'Idéal pour découvrir le CrossFit',
    features: [
      '4 séances / semaine',
      'Accès Open Gym',
      'Vestiaires & douches',
      'Application de suivi',
    ],
    cta: 'Commencer',
    highlight: false,
  },
  {
    name: 'Performance',
    price: '49',
    period: '/mois',
    desc: 'Pour les passionnés de CrossFit',
    features: [
      'Séances illimitées',
      'Toutes les disciplines',
      'Suivi coach personnalisé',
      'Accès hors heures de pointe',
      'Bilan mensuel offert',
      'Application de suivi',
    ],
    cta: 'Choisir ce plan',
    highlight: true,
  },
  {
    name: 'Elite',
    price: '69',
    period: '/mois',
    desc: 'Pour les athlètes confirmés',
    features: [
      'Séances illimitées 24/7',
      'Toutes les disciplines',
      'Coaching individuel 2x/sem',
      'Programme sur-mesure',
      'Nutrition tracking',
      'Accès compétitions',
      'Merchandising offert',
    ],
    cta: 'Devenir Elite',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-condensed text-[#D4A017] text-xs tracking-[0.35em] uppercase mb-3">
            Investis en toi
          </p>
          <h2 className="section-title text-white text-5xl md:text-6xl mb-4">
            NOS ABONNEMENTS
          </h2>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mb-6" />
          <p className="text-[#888] text-base max-w-lg mx-auto leading-relaxed">
            Sans engagement, sans frais cachés. Commence ton essai gratuit de 7 jours.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`plan-card relative flex flex-col ${
                plan.highlight
                  ? 'bg-[#D4A017] text-black'
                  : 'bg-[#1A1A1A] border border-white/8 text-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-black text-[#D4A017] font-condensed font-700 text-xs tracking-widest uppercase px-4 py-1.5 flex items-center gap-1.5">
                    <Star size={11} fill="currentColor" /> Recommandé
                  </span>
                </div>
              )}

              <div className={`p-8 ${plan.highlight ? 'pt-10' : ''}`}>
                <h3 className={`font-condensed font-800 text-2xl uppercase tracking-widest mb-1 ${plan.highlight ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-black/70' : 'text-[#666]'}`}>
                  {plan.desc}
                </p>
                <div className="flex items-end gap-1 mb-8">
                  <span className={`font-condensed font-900 text-5xl leading-none ${plan.highlight ? 'text-black' : 'text-[#D4A017]'}`}>
                    {plan.price}€
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-black/60' : 'text-[#555]'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-black' : 'text-[#D4A017]'}`}
                      />
                      <span className={`text-sm ${plan.highlight ? 'text-black/80' : 'text-[#AAA]'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto px-8 pb-8">
                <button
                  className={`w-full py-3.5 font-condensed font-700 text-sm uppercase tracking-widest transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-black text-[#D4A017] hover:bg-[#111]'
                      : 'border-2 border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-black'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#555] text-xs mt-8 tracking-wide">
          Tous les abonnements incluent l'accès à notre application mobile de suivi.
        </p>
      </div>
    </section>
  );
}
