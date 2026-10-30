import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const infos = [
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['12 Rue du Sport', '75011 Paris'],
  },
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['+33 1 23 45 67 89'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@thebox-crossfit.fr'],
  },
  {
    icon: Clock,
    title: 'Horaires d\'ouverture',
    lines: ['Lun–Ven : 06:00–22:00', 'Sam : 08:00–18:00', 'Dim : 09:00–13:00'],
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', interest: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-condensed text-[#D4A017] text-xs tracking-[0.35em] uppercase mb-3">
            Prenons contact
          </p>
          <h2 className="section-title text-white text-5xl md:text-6xl mb-4">
            CONTACTEZ-NOUS
          </h2>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {infos.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 bg-[#D4A017]/10 border border-[#D4A017]/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#D4A017]" />
                </div>
                <div>
                  <p className="font-condensed font-700 text-white text-sm uppercase tracking-widest mb-1">
                    {title}
                  </p>
                  {lines.map(l => (
                    <p key={l} className="text-[#888] text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="relative mt-4 overflow-hidden h-48">
              <img
                src="https://images.pexels.com/photos/417023/pexels-photo-417023.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Localisation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-[#D4A017] mx-auto mb-2" />
                  <span className="font-condensed text-white text-sm uppercase tracking-widest">Voir sur la carte</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-[#1A1A1A] border border-white/6 p-8 md:p-10">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-6">
                <CheckCircle size={52} className="text-[#D4A017]" />
                <div>
                  <h3 className="font-condensed font-800 text-white text-3xl uppercase mb-3">Message envoyé !</h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Merci pour votre intérêt. Notre équipe vous répondra dans les 24h pour organiser votre essai gratuit.
                  </p>
                </div>
                <button onClick={() => setSent(false)} className="btn-outline text-xs mt-2">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-condensed font-800 text-white text-2xl uppercase tracking-wide mb-8">
                  Essai Gratuit — 0 Engagement
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-condensed text-xs uppercase tracking-widest text-[#666] mb-2">
                        Nom complet *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors duration-200 placeholder:text-[#444]"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block font-condensed text-xs uppercase tracking-widest text-[#666] mb-2">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors duration-200 placeholder:text-[#444]"
                        placeholder="jean@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block font-condensed text-xs uppercase tracking-widest text-[#999] mb-2">
                      Je suis intéressé(e) par
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors duration-200 appearance-none"
                    >
                      <option value="">Choisir une activité</option>
                      <option>CrossFit</option>
                      <option>Brésilien Jiu-Jitsu</option>
                      <option>Haltérophilie</option>
                      <option>Open Gym</option>
                      <option>Plusieurs activités</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-condensed text-xs uppercase tracking-widest text-[#666] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-[#111] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors duration-200 placeholder:text-[#444] resize-none"
                      placeholder="Dis-nous en plus sur toi et tes objectifs..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold justify-center mt-2 disabled:opacity-70"
                  >
                    {loading ? 'Envoi en cours...' : (
                      <>
                        Envoyer ma demande
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
