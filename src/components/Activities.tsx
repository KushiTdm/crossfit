import { Dumbbell, Zap, Activity, Shield } from 'lucide-react';

const activities = [
  {
    icon: Zap,
    title: 'CrossFit',
    img: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    price: '39€',
    period: '/mois',
    desc: 'Entraînements fonctionnels à haute intensité combinant haltérophilie, gymnastique et cardio. Adapté à tous les niveaux.',
    tag: 'Le plus populaire',
  },
  {
    icon: Shield,
    title: 'Brésilien Jiu-Jitsu',
    img: 'https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    price: '39€',
    period: '/mois',
    desc: 'Art martial de sol axé sur les techniques de soumission. Idéal pour la self-défense et le développement mental.',
    tag: null,
  },
  {
    icon: Dumbbell,
    title: 'Open Gym',
    img: 'https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    price: '29€',
    period: '/mois',
    desc: 'Accès libre à tous nos équipements premium. Entraîne-toi à ton rythme avec l\'aide de nos coaches disponibles.',
    tag: null,
  },
  {
    icon: Activity,
    title: 'Haltérophilie',
    img: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    price: '44€',
    period: '/mois',
    desc: 'Maîtrise l\'arraché et l\'épaulé-jeté. Un programme structuré pour développer force, explosivité et technique.',
    tag: null,
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-condensed text-[#D4A017] text-xs tracking-[0.35em] uppercase mb-3">
            Ce que nous proposons
          </p>
          <h2 className="section-title text-white text-5xl md:text-6xl mb-4">
            NOS ACTIVITÉS
          </h2>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mb-6" />
          <p className="text-[#888] text-base max-w-xl mx-auto leading-relaxed">
            Des disciplines variées pour un entraînement complet. Rejoins la Box et choisis ton parcours.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map(({ icon: Icon, title, img, price, period, desc, tag }) => (
            <div
              key={title}
              className="plan-card bg-[#1A1A1A] border border-white/5 group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50" />
                {tag && (
                  <span className="absolute top-3 right-3 bg-[#D4A017] text-black font-condensed font-700 text-xs tracking-widest uppercase px-3 py-1">
                    {tag}
                  </span>
                )}
                <div className="absolute bottom-4 left-4">
                  <Icon size={28} className="text-[#D4A017]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-condensed font-800 text-white text-2xl uppercase tracking-wide mb-2">
                  {title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex items-end gap-1 mb-5">
                  <span className="font-condensed font-900 text-[#D4A017] text-3xl">{price}</span>
                  <span className="text-[#666] text-sm mb-1">{period}</span>
                </div>
                <button className="btn-outline w-full justify-center text-xs">
                  S'inscrire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#pricing" className="btn-gold inline-flex">
            Voir tous les abonnements
          </a>
        </div>
      </div>
    </section>
  );
}
