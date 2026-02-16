
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  MessageCircle,
  Clock,
  MapPin,
  Check,
  Instagram,
  ShieldCheck,
  Users,
  Award,
  Sparkles
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQ, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-[#E2B6A3] selection:text-white">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-premium py-4' : 'bg-transparent py-7'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-2xl font-serif font-bold tracking-tight text-[#633B48]">Lumière</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E2B6A3] mt-2"></div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {['Expertise', 'Protocolos', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#633B48]/70 hover:text-[#E2B6A3] transition-all"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#633B48] text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#E2B6A3] transition-all shadow-md"
            >
              Agendar Consulta
            </button>
          </div>

          <button className="md:hidden text-[#633B48]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#FFF8F6] z-50 flex flex-col p-10 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-serif font-bold">Lumière</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {['Expertise', 'Protocolos', 'Resultados', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-3xl font-serif text-left border-b border-[#F7EDEA] pb-4"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#633B48] text-white py-5 rounded-full font-bold mt-10 uppercase tracking-widest text-sm"
              >
                WhatsApp Boutique
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-3 mb-8 bg-[#F7EDEA] px-5 py-2 rounded-full border border-[#E2B6A3]/20">
              <Sparkles size={16} className="text-[#E2B6A3]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#633B48]">Sua Beleza em Harmonia</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-[#633B48] mb-8 leading-[1.05] font-normal">
              Sua essência <br />
              <span className="italic text-[#E2B6A3]">iluminada.</span>
            </h1>
            <p className="text-lg text-[#633B48]/60 mb-12 leading-relaxed max-w-xl font-light">
              Protocolos personalizados que unem a delicadeza do toque ao rigor da ciência. Na Lumière, acreditamos que a estética deve ser uma celebração da sua individualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#633B48] text-white px-12 py-5 rounded-full font-bold text-[12px] tracking-[0.3em] uppercase hover:bg-[#E2B6A3] transition-all shadow-xl shadow-[#633B48]/10"
              >
                Agendar Avaliação
              </button>
              <button 
                onClick={() => scrollToSection('protocolos')}
                className="flex items-center gap-4 px-10 py-5 border border-[#633B48]/10 rounded-full font-bold text-[12px] tracking-[0.3em] uppercase hover:bg-white hover:border-[#E2B6A3] transition-all"
              >
                Ver Tratamentos <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] border-[16px] border-white shadow-premium">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Clinic Soft" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#E2B6A3]/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#633B48]/5 rounded-full blur-2xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 bg-[#F7EDEA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <span className="text-[#E2B6A3] text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">Nossa Expertise</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#633B48] leading-tight italic">O cuidado que você merece.</h2>
            </div>
            <p className="text-[#633B48]/60 text-xl font-light leading-relaxed">
              Dedicamos tempo exclusivo para entender suas necessidades e desenhar um plano que respeite sua anatomia e seus desejos.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-premium transition-all duration-500 border border-[#E2B6A3]/10">
                <div className="mb-10 text-[#E2B6A3]">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-[#633B48] uppercase tracking-[0.2em] text-[11px] mb-4">{benefit.title}</h4>
                <p className="text-[#633B48]/50 text-sm font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section id="protocolos" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-[#633B48] mb-6">Tratamentos Exclusivos</h2>
            <div className="w-16 h-[1px] bg-[#E2B6A3] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-8 relative rounded-[2.5rem]">
                  <img src={`https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${service.id}`} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-[#633B48]/10 group-hover:bg-transparent transition-all"></div>
                  {service.tag && (
                    <div className="absolute top-6 left-6 bg-[#E2B6A3] text-white px-4 py-1.5 text-[9px] font-bold tracking-[0.3em] uppercase rounded-full">
                      {service.tag}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-serif text-[#633B48] mb-3">{service.title}</h3>
                <p className="text-[#633B48]/50 text-sm font-light leading-relaxed mb-6 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between border-t border-[#F7EDEA] pt-6">
                  <span className="text-[#E2B6A3] font-bold text-xs tracking-widest uppercase">{service.price}</span>
                  <button className="text-[#633B48] text-[10px] font-bold uppercase tracking-widest border-b border-[#633B48]/10 hover:border-[#E2B6A3] transition-all">Detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-32 bg-[#F7EDEA]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#633B48] mb-20 italic">Experiências Lumière</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-10 border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <p className="text-[#633B48]/70 italic text-lg leading-relaxed mb-10 font-light max-w-xs">"{t.content}"</p>
                <h4 className="font-bold text-[#633B48] text-xs tracking-[0.3em] uppercase">{t.name}</h4>
                <p className="text-[#E2B6A3] text-[9px] font-bold uppercase tracking-widest mt-2">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#633B48] mb-16 text-center italic">Esclarecendo dúvidas</h2>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="border-b border-[#F7EDEA]">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-8 text-left flex justify-between items-center group"
                >
                  <span className="text-[#633B48]/80 font-bold tracking-wide group-hover:text-[#E2B6A3] transition-colors">{item.question}</span>
                  <div className={`text-[#E2B6A3] transition-transform duration-500 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {activeFaq === idx && (
                  <div className="pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-[#633B48]/50 text-sm font-light leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#633B48] text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E2B6A3] to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-tight">Sua beleza merece <br /> <span className="italic text-[#E2B6A3]">ser celebrada.</span></h2>
          <p className="text-white/60 text-xl mb-16 font-light">Agende seu horário e sinta a experiência Lumière.</p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-[#E2B6A3] text-white px-16 py-6 rounded-full font-bold text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-[#633B48] transition-all shadow-2xl"
          >
            Falar via WhatsApp VIP
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-16 border-t border-[#F7EDEA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-serif font-bold tracking-tight text-[#633B48] uppercase mb-10 block">Lumière</span>
              <p className="text-[#633B48]/40 text-[10px] leading-relaxed uppercase tracking-[0.3em] font-bold mb-10">
                Excelência em Harmonização e Rejuvenescimento. <br />São Paulo, Brasil.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-[#633B48]/30 hover:text-[#E2B6A3] transition-all"><Instagram size={20} /></a>
                <a href="#" className="text-[#633B48]/30 hover:text-[#E2B6A3] transition-all"><MessageCircle size={20} /></a>
              </div>
            </div>

            {[
              { title: 'Navegação', links: ['Início', 'A Clínica', 'Protocolos', 'FAQ'] },
              { title: 'Contato', links: ['+55 11 99999.9999', 'contato@lumiere.com', 'São Paulo, SP'] },
              { title: 'Legal', links: ['Privacidade', 'Termos de Uso', 'Compliance'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-[#E2B6A3] mb-10 text-[10px] font-bold uppercase tracking-[0.4em]">{col.title}</h4>
                <ul className="space-y-6 text-[#633B48]/60 text-[11px] font-bold tracking-widest uppercase">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-[#E2B6A3] transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F7EDEA] pt-12 text-center text-[9px] font-bold uppercase tracking-[0.4em] text-[#633B48]/30">
            <p>© 2024 Lumière Boutique Estética. RT: Dra. Especialista CRM/SP.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-10 right-10 bg-[#633B48] text-white p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-[#E2B6A3] transition-all z-50 flex items-center gap-3"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default App;
