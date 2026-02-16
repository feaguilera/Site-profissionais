import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  MessageCircle,
  Instagram,
  Star,
  Gauge,
  Flame,
  Activity,
  Trophy,
  Zap,
  Target
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
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para o modelo Stealth.', '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-[#E60000] selection:text-white">
      {/* Navbar Minimalista */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="bg-[#E60000] p-2 rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <Gauge className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-black tracking-tighter text-white uppercase leading-none">Carbon</span>
              <span className="text-[9px] font-bold text-[#E60000] uppercase tracking-[0.3em] mt-1">Stealth Ops</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            {['Serviços', 'Processo', 'Reviews', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-[10px] font-black tracking-[0.2em] uppercase text-white/50 hover:text-[#E60000] transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E60000] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button 
              onClick={openWhatsApp}
              className="px-8 py-3 rounded-none font-black text-[10px] uppercase tracking-[0.2em] btn-crimson shadow-lg"
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
          <div className="lg:hidden fixed inset-0 bg-[#0A0A0A] z-[110] flex flex-col p-10 animate-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-heading font-black italic text-[#E60000]">CARBON</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} className="text-white"/></button>
            </div>
            <div className="flex flex-col gap-10">
              {['Serviços', 'Processo', 'Reviews', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-4xl font-black text-left text-white/20 hover:text-[#E60000] transition-all"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={openWhatsApp}
                className="bg-[#E60000] text-white py-6 rounded-none font-black mt-10 uppercase tracking-widest text-sm shadow-2xl"
              >
                Orçamento Direto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section V3 - Stealth & Crimson */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E60000]/10 to-transparent pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
          {/* Main Text Content */}
          <div className="lg:col-span-8 z-50">
            <div className="inline-flex items-center gap-3 mb-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <Zap size={16} className="text-[#E60000] fill-[#E60000]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Beyond Performance Limit</span>
            </div>
            
            <h1 className="text-6xl md:text-[120px] font-heading font-black text-white leading-[0.85] uppercase italic tracking-tighter mb-10 relative">
              <span className="relative z-50 block">Extreme</span>
              <span className="text-[#E60000] relative z-50 block filter drop-shadow-[0_10px_10px_rgba(230,0,0,0.2)]">Performance</span>
              <span className="absolute -top-10 -left-10 text-[200px] text-outline opacity-5 font-black pointer-events-none hidden lg:block">CARBON</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <p className="text-lg text-white/50 leading-relaxed font-medium">
                Engenharia de pista aplicada ao seu veículo de rua. Reprogramação, telemetria e upgrades de elite com precisão cirúrgica.
              </p>
              <div className="flex flex-col gap-6">
                <button 
                  onClick={openWhatsApp}
                  className="bg-[#E60000] text-white px-12 py-7 rounded-none font-black text-xs tracking-[0.3em] uppercase btn-crimson shadow-2xl flex items-center justify-center gap-4"
                >
                  Get Your Upgrade <ArrowRight size={18} />
                </button>
                <div className="flex items-center gap-8 px-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-heading font-bold text-white leading-none">580+</span>
                    <span className="text-[9px] text-white/30 uppercase font-black tracking-widest mt-1">HP Mastered</span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-heading font-bold text-white leading-none">02.4s</span>
                    <span className="text-[9px] text-white/30 uppercase font-black tracking-widest mt-1">Fastest 0-100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Element / Visual */}
          <div className="lg:col-span-4 hidden lg:flex justify-end relative z-10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#E60000]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative border border-white/10 bg-[#111111] p-4 rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80" 
                  alt="Performance Brake" 
                  className="w-[300px] h-[450px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <Trophy className="text-[#E60000] mb-4" size={32} />
                  <p className="text-white font-heading text-lg font-bold uppercase leading-none italic">Circuit <br />Validated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Brands Bar */}
      <div className="bg-[#050505] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex justify-between items-center gap-12 flex-wrap opacity-30">
             {BRANDS.map(brand => (
               <span key={brand} className="text-xl font-heading font-black italic text-white tracking-tighter uppercase grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">{brand}</span>
             ))}
          </div>
        </div>
      </div>

      {/* Services Section V3 */}
      <section id="servicos" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col mb-24">
            <span className="text-[#E60000] text-[10px] font-black tracking-[0.5em] uppercase mb-4">The Selection</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white italic uppercase leading-[0.9] tracking-tighter">Stealth <br />Programs.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-[#111111] p-12 hover:bg-[#161616] transition-all border border-white/5 group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-[#E60000] transition-all duration-500"></div>
                <div className="mb-12 flex justify-between items-start">
                  <div className="text-[#E60000] group-hover:scale-110 transition-transform duration-500">
                    {s.icon}
                  </div>
                  {s.tag && <span className="text-[8px] font-black uppercase text-white bg-[#E60000] px-3 py-1 tracking-widest">{s.tag}</span>}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-6 leading-tight group-hover:text-[#E60000] transition-colors">{s.title}</h3>
                <p className="text-white/40 text-sm mb-12 leading-relaxed font-medium">{s.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest opacity-40">{s.price}</span>
                  <button onClick={openWhatsApp} className="text-[#E60000] hover:translate-x-2 transition-transform">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process "Pipeline" */}
      <section id="processo" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#E60000] text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">The Pipeline</span>
              <h2 className="text-5xl font-heading font-black text-white italic uppercase leading-none mb-10">Obsidian <br />Engineering.</h2>
              <p className="text-white/40 mb-16 max-w-md">Nosso processo é rigoroso. Cada veículo passa por uma bateria de testes antes e depois de qualquer intervenção.</p>
              
              <div className="space-y-12">
                {PROCESS.map((p, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="text-4xl font-heading font-black text-white/5 group-hover:text-[#E60000]/20 transition-colors duration-500">0{idx + 1}</div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{p.title}</h4>
                      <p className="text-white/30 text-xs leading-relaxed max-w-sm">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#E60000]/5 animate-pulse rounded-full blur-[120px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000&q=80" 
                alt="Engine Tuning" 
                className="relative z-10 w-full h-[700px] object-cover grayscale"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#E60000] p-12 z-20 hidden md:block">
                 <Target className="text-white mb-4" size={40} />
                 <p className="text-white font-heading font-black text-xl italic uppercase">Precision <br />Only.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-1">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#111111] p-16 border border-white/5 group hover:border-[#E60000]/30 transition-all duration-700">
                <div className="flex gap-1 text-[#E60000] mb-10">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-white/70 italic mb-16 text-xl font-medium leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-[10px] tracking-tight">{t.name}</h4>
                    <p className="text-[#E60000] text-[8px] font-black uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - "Final Drive" */}
      <section className="py-48 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(230,0,0,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-50 text-center">
          <h2 className="text-7xl md:text-[140px] font-heading font-black text-white mb-16 leading-[0.8] uppercase italic tracking-tighter">Final <br /> <span className="text-[#E60000]">Drive.</span></h2>
          <p className="text-white/40 mb-16 text-xl max-w-xl mx-auto">Sua busca pela perfeição mecânica termina aqui. Entre no radar da Carbon Performance.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-[#E60000] text-white px-16 py-8 rounded-none font-black text-sm tracking-[0.4em] uppercase btn-crimson shadow-2xl"
            >
              Start Setup Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="bg-[#0A0A0A] pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-[#E60000] p-2 rotate-45">
                  <Gauge size={20} className="text-white -rotate-45" />
                </div>
                <span className="text-2xl font-heading font-black italic uppercase text-white">CARBON</span>
              </div>
              <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
                Elite performance hub. Engineered in São Paulo. Racing validated worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
              <div>
                <h4 className="text-white mb-8 text-[11px] font-black uppercase tracking-[0.3em]">Services</h4>
                <ul className="space-y-4 text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase">
                  <li>Tuning</li>
                  <li>Exhaust</li>
                  <li>ECU Mapping</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-8 text-[11px] font-black uppercase tracking-[0.3em]">Connect</h4>
                <ul className="space-y-4 text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase">
                  <li>Instagram</li>
                  <li>WhatsApp</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8 opacity-20">
            <p className="text-[8px] font-black uppercase tracking-[0.5em] text-white">© 2024 Carbon Performance Hub. Stealth Ops Div.</p>
            <div className="flex gap-8 text-[8px] font-black uppercase tracking-widest text-white italic">
              <span>Race Validated</span>
              <span>Obsidian Core</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float V3 */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-10 right-10 bg-[#E60000] text-white p-6 rounded-none shadow-2xl hover:scale-110 active:scale-95 transition-all z-[120] group animate-bounce"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Request Setup
        </span>
      </button>
    </div>
  );
};

export default App;