import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    img: '/images/hero-forge.png',
    tagline: 'FORGE',
    tagline2: 'TON CORPS',
    sub: 'Des entraînements CrossFit intenses pour dépasser tes limites chaque jour.',
    cta: 'Découvrir les activités',
    ctaHref: '#activities',
  },
  {
    img: '/images/hero-community.png',
    tagline: 'BEST YOU',
    tagline2: 'CAN',
    sub: 'Rejoins une communauté soudée et bienveillante qui te pousse à aller plus loin.',
    cta: 'Voir les tarifs',
    ctaHref: '#pricing',
  },
  {
    img: '/images/hero-coaches.png',
    tagline: 'PLUS FORT',
    tagline2: 'CHAQUE JOUR',
    sub: 'Des coaches certifiés et des équipements premium pour atteindre tes objectifs.',
    cta: 'Nos coaches',
    ctaHref: '#coaches',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setAnimKey(k => k + 1);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const t = setTimeout(next, 6000);
    return () => clearTimeout(t);
  }, [current]);

  const slide = slides[current];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.img}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Duotone/dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>
      ))}

      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D4A017] z-10" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 w-full">
          <div key={animKey} className="max-w-2xl">
            <p
              className="font-condensed text-[#D4A017] text-sm tracking-[0.3em] uppercase mb-4 animate-fadeInUp"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              CrossFit — Fitness Fonctionnel
            </p>
            <h1
              className="font-condensed font-900 uppercase leading-none mb-2 animate-heroReveal"
              style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', animationDelay: '0.2s', opacity: 0 }}
            >
              {slide.tagline}
            </h1>
            <h1
              className="font-condensed font-900 uppercase leading-none text-[#D4A017] mb-6 animate-heroReveal"
              style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', animationDelay: '0.35s', opacity: 0 }}
            >
              {slide.tagline2}
            </h1>
            <p
              className="text-[#CCCCCC] text-base font-300 leading-relaxed max-w-md mb-10 animate-fadeInUp"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              {slide.sub}
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fadeInUp"
              style={{ animationDelay: '0.65s', opacity: 0 }}
            >
              <button onClick={() => scrollTo(slide.ctaHref)} className="btn-gold">
                {slide.cta}
                <ChevronRight size={16} />
              </button>
              <button onClick={() => scrollTo('#contact')} className="btn-outline">
                Essai Gratuit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-4">
        <button onClick={prev} aria-label="Précédent" className="text-white/60 hover:text-[#D4A017] transition-colors p-3">
          <ChevronLeft size={20} />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`slide-dot ${i === current ? 'active' : ''}`}
          />
        ))}
        <button onClick={next} aria-label="Suivant" className="text-white/60 hover:text-[#D4A017] transition-colors p-3">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="font-condensed text-xs md:text-[10px] tracking-[0.3em] text-white/40 uppercase rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#D4A017] to-transparent" />
      </div>
    </section>
  );
}
