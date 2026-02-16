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
  Activity,
  Box,
  Layers
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
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para o protocolo Obsidian Stealth.', '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      {/* Header Brutalista */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-[#050505]/95 py-4 border-b border-white/5' : 'bg-transparent py-12'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 border-2 border-white flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500">
              <Box className="-rotate-45 group-hover:rotate-0 transition-all duration-500" size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-heading font-black tracking-tighter text-white uppercase leading-none">Carbon</span>
              <span className="text-[8px] font-bold text-white/40 uppercase tracking-[0.5em] mt-1">Stealth Detail Hub</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-16">
            {['Serviços', 'Processo', 'Reviews', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 hover:text-white transition-all"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={openWhatsApp}
              className="px-10 py-4 rounded-none btn-stealth shadow-2xl"
            >
              Orçamento
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Fullscreen Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#050505] z-[110] flex flex-col justify-center p-12 animate-in fade-in duration-500">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 text-white"><X size={40}/></button>
            <div className="flex flex-col gap-12">
              {['Serviços', 'Processo', 'Reviews', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-6xl font-heading font-black text-left text-white/10 hover:text-white transition-all uppercase"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Minimalist / High Contrast */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-8">
            <div className="w-20 h-[2px] bg-white mb-12"></div>
            <h1 className="text-6xl sm:text-8xl xl:text-[130px] font-heading font-black text-white leading-[0.8] uppercase tracking-tighter mb-16">
              Stealth <br />
              <span className="text-outline">Perfection.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <p className="text-lg text-white/40 leading-relaxed font-light uppercase tracking-wide">
                Estética automotiva levada ao nível de engenharia. Sem distrações, apenas resultados impecáveis e proteção invisível.
              </p>
              <div className="flex flex-col gap-8">
                <button 
                  onClick={openWhatsApp}
                  className="bg-white text-black px-16 py-8 rounded-none font-black text-sm tracking-[0.4em] uppercase btn-stealth flex items-center justify-between group"
                >
                  Solicitar Protocolo <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex gap-12 pt-4">
                  <div>
                    <span className="block text-3xl font-heading font-bold text-white mb-1">9H+</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/30 font-black">Certificação</span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10"></div>
                  <div>
                    <span className="block text-3xl font-heading font-bold text-white mb-1">100%</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/30 font-black">Privacidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Absolute Image Background for Hero */}
        <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block grayscale opacity-40 brightness-50">
           <img 
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200" 
            className="w-full h-full object-cover" 
            alt="Stealth Detail" 
           />
           <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-transparent to-[#050505]"></div>
        </div>
      </section>

      {/* Brands Bar */}
      <div className="bg-[#050505] py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-between items-center gap-16 opacity-10">
            {BRANDS.map(brand => (
              <span key={brand} className="text-2xl font-heading font-black italic uppercase tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Services - Grid Layout with Heavy Borders */}
      <section id="servicos" className="py-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-32">
            <h2 className="text-5xl lg:text-8xl font-heading font-black text-white uppercase leading-none tracking-tighter italic">
              Elite <br /> Services
            </h2>
            <div className="hidden lg:block text-right pb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Protocolo Obsidian v4.0</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {SERVICES.map((s) => (
              <div key={s.id} className="group flex flex-col h-full border-t border-white/10 pt-12">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-white/20 font-heading font-bold text-sm italic">0{s.id}</span>
                  <div className="p-4 bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-heading font-bold text-white uppercase italic mb-6 group-hover:translate-x-4 transition-transform duration-500">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-12 flex-grow font-light uppercase tracking-widest">{s.description}</p>
                <div className="flex items-center justify-between border-b border-white/10 pb-8 group-hover:border-white transition-colors duration-500">
                  <span className="text-white/30 font-black text-[10px] uppercase tracking-widest">{s.price}</span>
                  <button onClick={openWhatsApp} className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Vertical Timeline */}
      <section id="processo" className="py-40 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <span className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase mb-8 block">Metodologia</span>
            <h2 className="text-5xl font-heading font-black text-white italic uppercase tracking-tighter mb-12">O Padrão <br /> de Showroom</h2>
            <p className="text-white/40 leading-relaxed uppercase tracking-widest text-sm font-light">
              Nosso processo é dividido em quatro fases críticas de engenharia estética, garantindo que nenhum detalhe seja ignorado.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-24">
            {PROCESS.map((p, idx) => (
              <div key={idx} className="flex gap-12 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border border-white/20 flex items-center justify-center font-heading font-bold text-xl group-hover:bg-white group-hover:text-black transition-all duration-500">
                    0{idx + 1}
                  </div>
                  <div className="flex-grow w-[1px] bg-white/5 mt-6"></div>
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-bold text-white uppercase mb-4">{p.title}</h4>
                  <p className="text-white/30 text-sm leading-relaxed uppercase tracking-widest">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews - Industrial Look */}
      <section id="reviews" className="py-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#050505] p-16 group hover:bg-[#111111] transition-colors duration-700">
                <div className="flex gap-1 mb-12 text-white/20 group-hover:text-white transition-colors">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <p className="text-xl text-white italic mb-16 leading-relaxed font-light">"{t.content}"</p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 border border-white/10 grayscale">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-[10px] tracking-tighter">{t.name}</h4>
                    <p className="text-white/30 text-[8px] font-black uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Minimalist Accordion */}
      <section id="faq" className="py-40 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-32">
            <h2 className="text-4xl font-heading font-black text-white uppercase italic tracking-tighter">Inquérito Técnico</h2>
          </div>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="border-b border-white/5">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-10 text-left flex justify-between items-center group"
                >
                  <span className="text-white/40 group-hover:text-white transition-colors font-black uppercase tracking-widest text-xs">{item.question}</span>
                  <ChevronDown className={`text-white transition-transform duration-500 ${activeFaq === idx ? 'rotate-180' : ''}`} size={16} />
                </button>
                <div className={`overflow-hidden transition-all duration-700 ${activeFaq === idx ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/20 text-sm leading-relaxed uppercase tracking-widest font-light">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-60 bg-[#050505] relative text-center border-t border-white/5">
        <div className="max-w-5xl mx-auto px-8 relative z-50">
          <span className="text-white/20 text-[10px] font-black tracking-[0.8em] uppercase mb-12 block">Vagas Limitadas</span>
          <h2 className="text-6xl md:text-[120px] font-heading font-black text-white mb-20 leading-[0.8] uppercase italic tracking-tighter">Obsidian <br /> Stealth.</h2>
          <button 
            onClick={openWhatsApp}
            className="px-24 py-10 rounded-none btn-stealth shadow-2xl"
          >
            Agendar Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-white/10">
            <div className="flex items-center gap-4">
               <span className="text-3xl font-heading font-black uppercase tracking-tighter">CARBON</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em]">© 2024 Carbon Detail Studio. Stealth Division.</p>
            <div className="flex gap-12 text-[9px] font-black uppercase tracking-widest">
              <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
              <span className="hover:text-white cursor-pointer transition-colors">WhatsApp</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Minimalist WhatsApp Float */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-12 right-12 bg-white text-black p-6 rounded-none shadow-2xl hover:-translate-y-2 transition-all z-[120]"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default App;