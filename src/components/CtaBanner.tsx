import { ChevronRight } from 'lucide-react';

export default function CtaBanner() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
        alt=""
        className="w-full h-80 md:h-96 object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/20 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#D4A017]" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 w-full">
          <div className="max-w-2xl">
            <p className="font-condensed text-[#D4A017] text-xs tracking-[0.35em] uppercase mb-4">
              Commence aujourd'hui
            </p>
            <h2 className="section-title text-white text-5xl md:text-7xl leading-none mb-6">
              TON PREMIER<br />
              <span className="text-[#D4A017]">COURS GRATUIT</span>
            </h2>
            <p className="text-[#CCC] text-base mb-8 max-w-md leading-relaxed">
              Viens essayer The Box sans engagement. Un coach sera disponible pour t'accueillir et t'initier au CrossFit.
            </p>
            <button onClick={() => scrollTo('#contact')} className="btn-gold text-sm">
              Réserver mon essai
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
