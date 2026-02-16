import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  MessageCircle,
  Star,
  Sparkles,
  Droplets,
  ShieldCheck,
  Target,
  Trophy,
  Activity
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQ, PROCESS, BRANDS } from './constants';

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
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para estética automotiva Violet Precision.', '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-[#A855F7] selection:text-white">
      {/* Navbar Minimalista */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="bg-[#A855F7] p-2 rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <Sparkles className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-black tracking-tighter text-white uppercase leading-none">Carbon</span>
              <span className="text-[9px] font-bold text-[#A855F7] uppercase tracking-[0.3em] mt-1">Detail Studio</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            {['Serviços', 'Processo', 'Reviews', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-[10px] font-black tracking-[0.2em] uppercase text-white/50 hover:text-[#A855F7] transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#A855F7] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button 
              onClick={openWhatsApp}
              className="px-8 py-3 rounded-none font-black text-[10px] uppercase tracking-[0.2em] btn-violet shadow-lg"
            >
              Consultoria VIP
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#0A0A0A] z-[110] flex flex-col p-10 animate-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-heading font-black italic text-[#A855F7]">CARBON</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} className="text-white"/></button>
            </div>
            <div className="flex flex-col gap-10">
              {['Serviços', 'Processo', 'Reviews', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-4xl font-black text-left text-white/20 hover:text-[#A855F7] transition-all"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={openWhatsApp}
                className="bg-[#A855F7] text-white py-6 rounded-none font-black mt-10 uppercase tracking-widest text-sm shadow-2xl"
              >
                Orçamento WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#A855F7]/5 to-transparent pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10 w-full">
          <div className="lg:col-span-7 z-50 lg:pr-10">
            <div className="inline-flex items-center gap-3 mb-8 bg-white/5 px-6 py-2 rounded-none border-l-2 border-[#A855F7] backdrop-blur-md">
              <Sparkles size={16} className="text-[#A855F7]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Luxury Detailing Authority</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[95px] font-heading font-black text-white leading-[0.85] uppercase italic tracking-tighter mb-10 relative">
              <span className="relative z-50 block">Profundidade</span>
              <span className="text-[#A855F7] relative z-50 block filter drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Absoluta</span>
              <span className="absolute -top-10 -left-10 text-[180px] text-outline opacity-5 font-black pointer-events-none hidden lg:block">ROYAL</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium">
                Sinta a aura de um veículo verdadeiramente protegido. Tecnologia Violet Precision para vitrificação de alto luxo e restauração de pintura ultra-exclusiva.
              </p>
              <div className="flex flex-col gap-6">
                <button 
                  onClick={openWhatsApp}
                  className="bg-[#A855F7] text-white px-12 py-7 rounded-none font-black text-xs tracking-[0.3em] uppercase btn-violet shadow-2xl flex items-center justify-center gap-4"
                >
                  Iniciar Transformação <ArrowRight size={18} />
                </button>
                <div className="flex items-center gap-8 px-4">
                  <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-heading font-bold text-white leading-none">UV+</span>
                    <span className="text-[9px] text-white/30 uppercase font-black tracking-widest mt-1">Cura Assistida</span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10"></div>
                  <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-heading font-bold text-white leading-none">Premium</span>
                    <span className="text-[9px] text-white/30 uppercase font-black tracking-widest mt-1">Violet Shield</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex justify-end relative z-10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#A855F7]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative border border-white/10 bg-[#111111] p-3 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80" 
                  alt="Detailing Violet Studio" 
                  className="w-full h-[450px] xl:h-[550px] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <Activity className="text-[#A855F7] mb-4" size={32} />
                  <p className="text-white font-heading text-base font-bold uppercase leading-none italic">Violet <br />Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Brands Bar */}
      <div className="bg-[#050505] py-16 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex justify-between items-center gap-12 flex-wrap opacity-20">
             {BRANDS.map(brand => (
               <span key={brand} className="text-xl font-heading font-black italic text-white tracking-tighter uppercase grayscale hover:text-[#A855F7] hover:opacity-100 transition-all cursor-default">{brand}</span>
             ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="servicos" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col mb-24">
            <span className="text-[#A855F7] text-[10px] font-black tracking-[0.5em] uppercase mb-4">Master Selection</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white italic uppercase leading-[0.9] tracking-tighter">Serviços <br />De Luxo.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-[#0A0A0A] p-12 hover:bg-[#111111] transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#A855F7] group-hover:w-full transition-all duration-500"></div>
                <div className="mb-12 flex justify-between items-start">
                  <div className="text-[#A855F7] group-hover:animate-pulse">
                    {s.icon}
                  </div>
                  {s.tag && <span className="text-[8px] font-black uppercase text-white bg-[#A855F7] px-3 py-1 tracking-widest">{s.tag}</span>}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-6 leading-tight group-hover:text-[#A855F7] transition-colors">{s.title}</h3>
                <p className="text-white/40 text-sm mb-12 leading-relaxed font-medium">{s.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest opacity-40">{s.price}</span>
                  <button onClick={openWhatsApp} className="text-[#A855F7] hover:translate-x-2 transition-transform">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pipeline */}
      <section id="processo" className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-[#A855F7] text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Precision Workflow</span>
             <h2 className="text-4xl font-heading font-black text-white italic uppercase">Protocolo Violet</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {PROCESS.map((p, idx) => (
              <div key={idx} className="relative group">
                <div className="text-[#A855F7]/10 font-heading font-black text-8xl absolute -top-10 -left-6 group-hover:text-[#A855F7]/20 transition-all">0{idx + 1}</div>
                <div className="relative z-10">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 pt-12">{p.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed">{p.description}</p>
                  <div className="w-8 h-[1px] bg-[#A855F7] mt-8 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#111111] p-12 border border-white/5 relative">
                <div className="flex gap-1 text-[#A855F7] mb-10">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <p className="text-white/70 italic mb-12 text-lg font-medium leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                  <img src={t.image} alt={t.name} className="w-10 h-10 grayscale rounded-none border border-white/10" />
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-[9px] tracking-tight">{t.name}</h4>
                    <p className="text-[#A855F7] text-[8px] font-black uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-black text-white text-center uppercase italic mb-20">Inquérito Violet</h2>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-[#111111] border border-white/5 hover:border-[#A855F7]/30 transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex justify-between items-center"
                >
                  <span className="text-white font-black uppercase tracking-widest text-xs">{item.question}</span>
                  <ChevronDown className={`text-[#A855F7] transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} size={20} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeFaq === idx ? 'max-h-96 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/40 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-48 bg-[#0A0A0A] relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-50">
          <h2 className="text-7xl md:text-9xl font-heading font-black text-white mb-16 leading-[0.8] uppercase italic tracking-tighter">Violet <br /> <span className="text-[#A855F7]">Precision.</span></h2>
          <button 
            onClick={openWhatsApp}
            className="bg-[#A855F7] text-white px-16 py-8 rounded-none font-black text-sm tracking-[0.4em] uppercase btn-violet shadow-2xl"
          >
            Reservar Protocolo VIP
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8 opacity-30">
            <div className="flex items-center gap-2">
              <div className="bg-[#A855F7] p-1 rotate-45">
                <Sparkles size={16} className="text-white -rotate-45" />
              </div>
              <span className="text-xl font-heading font-black italic uppercase text-white">CARBON</span>
            </div>
            <p className="text-[8px] font-black uppercase tracking-[0.5em] text-white">© 2024 Carbon Detail Hub. Violet Div.</p>
            <div className="flex gap-8 text-[8px] font-black uppercase tracking-widest text-white italic">
              <span>Violet Shield Coated</span>
              <span>Exclusive Royal Detailing</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-10 right-10 bg-[#A855F7] text-white p-6 rounded-none shadow-2xl hover:scale-110 transition-all z-[120] group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#A855F7] text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Protocolo VIP
        </span>
      </button>
    </div>
  );
};

export default App;