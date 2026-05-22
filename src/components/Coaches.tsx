import { Instagram, Award } from 'lucide-react';

const coaches = [
  {
    name: 'Thomas Renard',
    role: 'Head Coach CrossFit',
    img: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    certif: 'CF Level 3 | 8 ans d\'expérience',
    bio: 'Ancien athlète de haut niveau, Thomas a fondé The Box avec la passion de transmettre son amour du CrossFit.',
    instagram: '#',
  },
  {
    name: 'Sarah Morel',
    role: 'Coach CrossFit & Nutrition',
    img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    certif: 'CF Level 2 | Nutritionniste certifiée',
    bio: 'Spécialiste du mouvement fonctionnel et de la nutrition sportive, Sarah t\'aide à optimiser tes performances.',
    instagram: '#',
  },
  {
    name: 'Marc Dubois',
    role: 'Coach Haltérophilie',
    img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    certif: 'CF Level 2 | Champion régional WL',
    bio: 'Champion régional d\'haltérophilie, Marc apporte son expertise technique pour peaufiner chaque mouvement.',
    instagram: '#',
  },
  {
    name: 'Carlos Silva',
    role: 'Coach Jiu-Jitsu',
    img: 'https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    certif: 'Ceinture noire BJJ | 12 ans',
    bio: 'Ceinture noire de Brazilian Jiu-Jitsu, Carlos partage son expertise des arts martiaux avec passion.',
    instagram: '#',
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-condensed text-[#D4A017] text-xs tracking-[0.35em] uppercase mb-3">
            Notre équipe
          </p>
          <h2 className="section-title text-white text-5xl md:text-6xl mb-4">
            LES COACHES
          </h2>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mb-6" />
          <p className="text-[#888] text-base max-w-xl mx-auto leading-relaxed">
            Une équipe de passionnés certifiés, dédiés à ton évolution et à ta réussite.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map(coach => (
            <div key={coach.name} className="group relative overflow-hidden bg-[#1A1A1A]">
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#D4A017]/0 group-hover:bg-[#D4A017]/15 transition-all duration-300" />

                {/* Instagram */}
                <a
                  href={coach.instagram}
                  className="absolute top-4 right-4 w-9 h-9 bg-black/60 flex items-center justify-center text-white hover:bg-[#D4A017] hover:text-black transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                >
                  <Instagram size={15} />
                </a>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-condensed font-800 text-white text-xl uppercase tracking-wide">
                    {coach.name}
                  </h3>
                  <p className="text-[#D4A017] font-condensed text-sm uppercase tracking-widest">
                    {coach.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <Award size={13} className="text-[#D4A017] mt-0.5 flex-shrink-0" />
                  <span className="text-[#777] text-xs">{coach.certif}</span>
                </div>
                <p className="text-[#888] text-sm leading-relaxed">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
