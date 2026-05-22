import { Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';

const links = {
  Navigation: ['Accueil', 'Activités', 'Tarifs', 'Horaires', 'Coaches', 'Contact'],
  Activités: ['CrossFit WOD', 'Brésilien Jiu-Jitsu', 'Haltérophilie', 'Open Gym', 'Nutrition'],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/6">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 border-2 border-[#D4A017] flex items-center justify-center">
                <span className="font-condensed font-900 text-[#D4A017] text-base leading-none tracking-widest">CF</span>
              </div>
              <span className="font-condensed font-800 text-white text-xl tracking-widest uppercase">
                THE <span className="text-[#D4A017]">BOX</span>
              </span>
            </div>
            <p className="text-[#666] text-sm leading-relaxed mb-6">
              Ta salle CrossFit de référence à Paris. Une communauté soudée, des coaches passionnés, des résultats concrets.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-[#666] hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-condensed font-800 text-white text-sm uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                      className="flex items-center gap-2 text-[#666] text-sm hover:text-[#D4A017] transition-colors duration-200 group"
                    >
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-condensed font-800 text-white text-sm uppercase tracking-widest mb-5">
              Newsletter
            </h4>
            <p className="text-[#666] text-sm mb-4 leading-relaxed">
              Recevez nos dernières actualités, WODs et offres exclusives.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-[#1A1A1A] border border-white/10 text-white text-xs px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors placeholder:text-[#444]"
              />
              <button className="bg-[#D4A017] text-black px-4 hover:bg-[#F0C040] transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#444] text-xs">
            © {new Date().getFullYear()} The Box CrossFit — 12 Rue du Sport, 75011 Paris. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {['Mentions légales', 'Politique de confidentialité', 'CGV'].map(item => (
              <a key={item} href="#" className="text-[#444] text-xs hover:text-[#D4A017] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
