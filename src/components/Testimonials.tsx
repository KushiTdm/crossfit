import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Julie M.',
    since: 'Membre depuis 2022',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'The Box a complètement transformé ma condition physique. En 6 mois, j\'ai perdu 12 kg et gagné une force que je ne pensais pas possible. Les coaches sont incroyables.',
    stars: 5,
  },
  {
    name: 'Kevin L.',
    since: 'Membre depuis 2021',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'J\'avais peur de me lancer dans le CrossFit, mais l\'ambiance ici est tellement bienveillante. Thomas m\'a accompagné dès le début et je n\'ai jamais regardé en arrière.',
    stars: 5,
  },
  {
    name: 'Camille R.',
    since: 'Membre depuis 2023',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'La communauté est ce qui fait vraiment la différence. On se pousse mutuellement, on se soutient. J\'ai trouvé bien plus qu\'une salle de sport, j\'ai trouvé une famille.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-condensed text-[#D4A017] text-xs tracking-[0.35em] uppercase mb-3">
            Ils parlent de nous
          </p>
          <h2 className="section-title text-white text-5xl md:text-6xl mb-4">
            TÉMOIGNAGES
          </h2>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-[#141414] p-8 relative"
            >
              <Quote size={32} className="text-[#D4A017]/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} className="text-[#D4A017]" fill="#D4A017" />
                ))}
              </div>

              <p className="text-[#999] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#D4A017]/40"
                />
                <div>
                  <p className="font-condensed font-700 text-white text-base uppercase tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-[#555] text-xs">{t.since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
