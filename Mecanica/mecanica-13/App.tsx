import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  MessageCircle,
  Phone,
  Clock,
  Zap,
  MapPin,
  CheckCircle2,
  Instagram,
  Settings,
  Star,
  Gauge,
  Flame,
  Activity,
  Trophy
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQ, BENEFITS, PROCESS, BRANDS } from './constants';

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
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para performance.', '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-[#FFB800] selection:text-black">
      {/* Navbar */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-[#FFB800] p-2 rounded-sm rotate-3">
              <Gauge className="text-black" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-black tracking-tighter text-white uppercase italic leading-none">Carbon</span>
              <span className="text-[10px] font-bold text-[#FFB800] uppercase tracking-[0.2em]">Performance Hub</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Serviços', 'Pipeline', 'Reviews', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-[11px] font-extrabold tracking-widest uppercase text-slate-400 hover:text-[#FFB800] transition-all"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={openWhatsApp}
              className="bg-[#FFB800] text-black px-8 py-3 rounded-none font-black text-[10px] uppercase tracking-[0.2em] btn-performance"
            >
              Consultar Setup
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#0A0A0A] z-[110] flex flex-col p-8 animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-heading font-black italic text-[#FFB800]">CARBON</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} className="text-white"/></button>
            </div>
            <div className="flex flex-col gap-6">
              {['Serviços', 'Pipeline', 'Reviews', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-3xl font-black text-left border-l-4 border-white/5 pl-6 text-white hover:border-[#FFB800]"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={openWhatsApp}
                className="bg-[#FFB800] text-black py-6 rounded-none font-black mt-6 uppercase tracking-widest text-sm flex justify-center items-center gap-3 shadow-xl"
              >
                Orçamento WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFB800]/5 -skew-x-12 translate-x-1/4 pointer-events-none z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Container - Forced to be ABOVE image on all screen sizes */}
          <div className="relative z-[60] order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/5 px-4 py-1.5 rounded-none border-l-4 border-[#FFB800]">
              <Flame size={14} className="text-[#FFB800]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Engineered for Extremes</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 leading-[0.9] uppercase italic tracking-tighter relative z-[70]">
              Performance <br />
              <span className="text-[#FFB800] relative inline-block z-[70]">
                Sem Limites.
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FFB800]/30 -z-10"></div>
              </span>
            </h1>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-lg font-medium relative z-[70]">
              Transformamos máquinas em lendas. Do diagnóstico 4K ao tuning de pista, entregamos a engenharia necessária para quem não aceita o comum.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 relative z-[70]">
              <button 
                onClick={openWhatsApp}
                className="bg-[#FFB800] text-black px-12 py-6 rounded-none font-black text-xs tracking-[0.2em] uppercase btn-performance flex items-center justify-center gap-3 shadow-2xl"
              >
                Upgrade meu Carro <ArrowRight size={18} />
              </button>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-white font-black text-sm uppercase italic">
                  <Activity size={16} className="text-[#FFB800]" /> +45% HP Real
                </div>
                <span className="text-slate-500 text-[9px] uppercase font-bold tracking-[0.2em]">Resultados comprovados em Dinamômetro</span>
              </div>
            </div>
          </div>

          {/* Image Container - Forced Z-index 10 to stay BEHIND text */}
          <div className="relative hidden lg:block z-10 order-1 lg:order-2">
            <div className="relative p-4 border border-white/5 bg-[#111111]">
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=1200&q=80" 
                alt="High Performance Engine" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-[#0A0A0A]/90 border-l-8 border-[#FFB800] backdrop-blur-md">
                <div className="flex justify-between items-end">
                   <div>
                     <p className="text-[9px] text-[#FFB800] font-black uppercase tracking-widest mb-1">Status do Setup</p>
                     <p className="text-white text-xl font-heading font-bold italic uppercase">Ready for Track</p>
                   </div>
                   <Trophy className="text-white/20" size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <div className="bg-[#050505] py-12 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-20 grayscale hover:grayscale-0 transition-all duration-500">
             {BRANDS.map(brand => (
               <span key={brand} className="text-2xl font-heading font-black italic text-white tracking-tighter uppercase">{brand}</span>
             ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section id="diferenciais" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="group border-t border-white/5 pt-12 hover:border-[#FFB800] transition-all">
                <div className="text-[#FFB800] mb-8 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-white font-heading font-bold uppercase tracking-tight text-lg mb-4">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#FFB800] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Engineered Excellence</span>
              <h2 className="text-5xl font-heading font-black text-white italic uppercase leading-none">Power & <br />Precision Units.</h2>
            </div>
            <button className="text-white/40 hover:text-[#FFB800] font-black text-[10px] uppercase tracking-widest transition-all">Ver todos os estágios</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-[#111111] p-10 border-l-2 border-white/5 hover:border-[#FFB800] transition-all group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-all"></div>
                <div className="flex justify-between items-start mb-12">
                  <div className="text-[#FFB800] group-hover:animate-pulse">
                    {s.icon}
                  </div>
                  {s.tag && <span className="text-[9px] font-black uppercase text-[#FFB800] tracking-widest px-3 py-1 bg-[#FFB800]/10">{s.tag}</span>}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-6 leading-tight">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">{s.description}</p>
                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <span className="text-white font-black text-xs uppercase tracking-widest">{s.price}</span>
                  <button onClick={openWhatsApp} className="bg-[#FFB800] p-3 text-black group-hover:px-6 transition-all">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Process */}
      <section id="pipeline" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-heading font-black text-white uppercase italic">Modus Operandi</h2>
            <div className="w-24 h-1 bg-[#FFB800] mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS.map((p, idx) => (
              <div key={idx} className="relative p-8 bg-[#111111] group">
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#FFB800] transition-all duration-500"></div>
                <div className="text-white/10 font-heading font-black text-7xl mb-8">0{idx + 1}</div>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="reviews" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#0A0A0A] p-12 border border-white/5 relative">
                <div className="flex gap-1 text-[#FFB800] mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-12 text-lg font-medium leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-none grayscale" />
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-[11px] tracking-tight">{t.name}</h4>
                    <p className="text-[#FFB800] text-[9px] font-black uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-black text-white text-center uppercase italic mb-20">Engine Data FAQ</h2>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-[#111111] border-l-4 border-white/5 hover:border-[#FFB800] transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex justify-between items-center"
                >
                  <span className="text-white font-black uppercase tracking-widest text-xs">{item.question}</span>
                  <ChevronDown className={`text-[#FFB800] transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} size={20} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeFaq === idx ? 'max-h-96 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-48 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
          <Gauge size={800} className="text-[#FFB800]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-50 text-center">
          <h2 className="text-7xl md:text-9xl font-heading font-black text-white mb-16 leading-none uppercase italic tracking-tighter">Peak <br /> <span className="text-[#FFB800]">Power.</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-50">
            <button 
              onClick={openWhatsApp}
              className="bg-[#FFB800] text-black px-16 py-7 rounded-none font-black text-sm tracking-[0.3em] uppercase btn-performance shadow-2xl flex items-center justify-center gap-4"
            >
              Consultar Especialista
            </button>
            <button 
              onClick={() => scrollToSection('home')}
              className="bg-transparent border-2 border-white/20 text-white px-16 py-7 rounded-none font-black text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
            >
              Nossa Garagem
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-[#FFB800] p-2 rotate-3">
                  <Gauge size={24} className="text-black" />
                </div>
                <span className="text-2xl font-heading font-black italic uppercase text-white tracking-tighter">CARBON</span>
              </div>
              <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed mb-12">
                A única autoridade em performance esportiva de São Paulo.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white/20 hover:text-[#FFB800] transition-all"><Instagram size={24} /></a>
                <a href="#" className="text-white/20 hover:text-[#FFB800] transition-all"><MessageCircle size={24} /></a>
              </div>
            </div>

            {[
              { title: 'Tuning Stage', links: ['Reprogramação ECU', 'Filtros de Fluxo', 'Escape em Titânio', 'Injeção Direta'] },
              { title: 'Chassis Hub', links: ['Coilovers M', 'Freios Brembo', 'Buchas PU', 'Geometria 3D'] },
              { title: 'Carbon Support', links: ['Dinamômetro', 'Assistência 24h', 'Garantia de Pista', 'Contato'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-white mb-10 text-[11px] font-black uppercase tracking-[0.4em] border-l-2 border-[#FFB800] pl-4">{col.title}</h4>
                <ul className="space-y-5 text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-white transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-800">© 2024 Carbon Performance Hub. No Limits, Only Apex.</p>
            <div className="flex gap-12 text-[8px] font-black uppercase tracking-widest text-white/5 italic">
              <span>Race Validated</span>
              <span>45% Power Gain</span>
              <span>Obsidian Engineering</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-10 right-10 bg-[#FFB800] text-black p-5 rounded-none shadow-2xl hover:scale-110 active:scale-95 transition-all z-[120] group flex items-center gap-4"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black uppercase text-xs tracking-widest whitespace-nowrap">Consultar Setup</span>
        <MessageCircle size={30} />
      </button>
    </div>
  );
};

export default App;