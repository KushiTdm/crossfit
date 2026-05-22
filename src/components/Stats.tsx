import { useEffect, useRef, useState } from 'react';
import { Users, Trophy, Calendar, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: 450, suffix: '+', label: 'Membres Actifs' },
  { icon: Trophy, value: 12, suffix: '', label: 'Coaches Certifiés' },
  { icon: Calendar, value: 8, suffix: '', label: 'Ans d\'Expérience' },
  { icon: Star, value: 98, suffix: '%', label: 'Satisfaction Client' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(current);
            if (current >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number text-5xl md:text-6xl">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#D4A017] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <Icon size={28} className="text-black/60 mb-1" />
              <Counter target={value} suffix={suffix} />
              <p className="font-condensed text-black/75 text-sm uppercase tracking-widest font-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
