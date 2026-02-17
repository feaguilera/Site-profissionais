
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  ChevronRight,
  Star,
  Instagram,
  Award,
  Check,
  Smartphone
} from 'lucide-react';
import { SERVICES, FAQ, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Previne scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5514997939067?text=${encodeURIComponent('Olá Casa da Esfiha! Gostaria de fazer um pedido.')}`, '_blank');
  };

  const openMap = (unidade: number) => {
    const address = unidade === 1 
      ? "Rua Rio de Janeiro, 186 - Ourinhos" 
      : "Rua Antônio Carlos Mori, 337 - Ourinhos";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar - Mobile Friendly Visibility */}
      <div className="bg-brand-red text-white py-2 px-4 text-center text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase z-[110] relative">
        Tradição em Ourinhos desde 1990 • <span className="hidden sm:inline">Peça agora:</span> (14) 99793-9067
      </div>

      {/* Navigation - Fixed with improved mobile logic */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2 top-0' : 'bg-white/90 backdrop-blur-md py-4 top-0 sm:top-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 mascot-seal flex-shrink-0">
               <div className="absolute inset-0 bg-brand-red rounded-full border-2 border-brand-blue flex items-center justify-center overflow-hidden">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-brand-yellow"></div>
               </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-serif font-black tracking-tight text-brand-red leading-none uppercase">CASA DA ESFIHA</span>
              <span className="text-[8px] sm:text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Ourinhos - SP</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Início', 'Cardápio', 'Unidades', 'Sobre'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-'))}
                className="text-[10px] font-black text-zinc-800 hover:text-brand-red transition-all uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <button onClick={openWhatsApp} className="px-5 py-2.5 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest rounded shadow-lg shadow-brand-red/20 active:scale-95 transition-all">
              PEDIR AGORA
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-red active:bg-zinc-50 rounded-lg transition-colors" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay - Full Screen Recursivity */}
      <div className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-brand-yellow"></div>
                </div>
                <span className="font-serif font-black text-brand-red uppercase text-sm">CASA DA ESFIHA</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-zinc-400 hover:text-brand-red"><X size={32} /></button>
            </div>
            
            <div className="flex flex-col gap-6 mb-auto">
              {['Início', 'Cardápio', 'Unidades', 'Sobre'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-'))}
                  className="text-2xl font-serif font-black text-zinc-900 text-left uppercase border-b border-zinc-100 pb-4 active:text-brand-red"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <button onClick={openWhatsApp} className="w-full py-5 btn-elegant flex items-center justify-center gap-3">
                WHATSAPP <MessageCircle size={20} />
              </button>
              <div className="text-center">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">(14) 99793-9067</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Better scaling for mobile */}
      <section id="inicio" className="relative pt-32 sm:pt-48 lg:pt-64 pb-16 lg:pb-32 overflow-hidden bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-brand-red/5 rounded-full">
                <span className="text-[10px] font-black text-brand-red uppercase tracking-widest">Desde 1990 em Ourinhos</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black text-zinc-900 leading-tight lg:leading-[0.9] mb-6 sm:mb-8">
                A <span className="text-brand-red">Esfiha</span> <br className="hidden sm:block"/> 
                que você <br className="sm:hidden"/> <span className="italic underline decoration-brand-yellow underline-offset-4">Merece.</span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-500 mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light px-4 sm:px-0">
                Massa leve, fechamento artesanal e o recheio mais suculento de Ourinhos. Descubra por que somos tradição há mais de 30 anos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 sm:px-0">
                <button onClick={() => scrollToSection('cardapio')} className="w-full sm:w-auto px-8 py-5 btn-elegant text-sm">
                  VER CARDÁPIO
                </button>
                <button onClick={openWhatsApp} className="w-full sm:w-auto px-8 py-5 border-2 border-zinc-100 bg-white rounded-lg text-sm font-bold text-zinc-600 flex items-center justify-center gap-3">
                  PEDIR AGORA <ArrowRight size={18} className="text-brand-red" />
                </button>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0 px-4 sm:px-0">
               <div className="aspect-square sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800" 
                    className="w-full h-full object-cover" 
                    alt="Esfihas Fechadas da Casa"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white text-left">
                     <p className="text-[10px] font-black uppercase tracking-widest text-brand-yellow mb-1">Massa Artesanal</p>
                     <p className="text-xl sm:text-2xl font-serif font-black leading-tight uppercase">Assada na hora,<br/>sempre fresca.</p>
                  </div>
               </div>
               {/* Mascot Badge Mobile Adjusted */}
               <div className="absolute -top-6 -right-2 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-36 sm:h-36 mascot-seal bg-white rounded-full p-1.5 shadow-xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-brand-blue flex flex-col items-center justify-center text-center">
                     <span className="text-[6px] sm:text-[8px] font-black text-zinc-400 uppercase tracking-widest leading-none">Qualidade</span>
                     <span className="text-[10px] sm:text-sm font-serif font-black text-brand-red uppercase">100% Top</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Responsive Grid */}
      <section className="py-12 sm:py-20 bg-white border-y border-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {BENEFITS.map((b, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-red/5 text-brand-red rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                  {b.icon}
                </div>
                <h3 className="text-lg font-black text-zinc-900 uppercase tracking-tight mb-3">{b.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cardápio - Stacked Mobile Friendly */}
      <section id="cardapio" className="py-16 sm:py-32 bg-[#fff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-16 sm:mb-24 px-4">
            <span className="text-brand-red font-black text-[10px] uppercase tracking-[0.3em] mb-4">O que servimos</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-zinc-900 uppercase leading-tight">Escolhas de <span className="text-brand-blue">Elite</span></h2>
            <div className="w-16 h-1 bg-brand-yellow mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-12">
            {SERVICES.map((s) => (
              <div key={s.id} className="group bg-slate-50 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-8 card-shadow hover:bg-white transition-all border border-transparent hover:border-brand-red/10">
                <div className="w-16 h-16 flex-shrink-0 bg-white rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                  {s.icon}
                </div>
                <div className="flex-grow w-full">
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-serif font-black text-zinc-900 uppercase">{s.title}</h3>
                    <span className="text-lg font-black text-brand-red">{s.price}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 italic opacity-80">"{s.description}"</p>
                  <div className="flex flex-wrap gap-3">
                     {s.features?.slice(0, 3).map((f, i) => (
                       <span key={i} className="flex items-center gap-1.5 text-[9px] font-black uppercase text-zinc-400">
                         <Check size={12} className="text-emerald-500" /> {f}
                       </span>
                     ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button onClick={openWhatsApp} className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-brand-red hover:gap-5 transition-all">
              VER CARDÁPIO COMPLETO <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Unidades - Interactive & Mobile Optimized */}
      <section id="unidades" className="py-16 sm:py-32 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase tracking-tight">Onde estamos em <span className="text-brand-yellow">Ourinhos?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {[1, 2].map((u) => (
              <div key={u} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 hover:bg-white/10 transition-all group">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-brand-red/20 text-brand-red rounded-xl flex items-center justify-center">
                       <MapPin size={28} />
                    </div>
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Ponto Central</span>
                 </div>
                 <h3 className="text-xl sm:text-3xl font-serif font-black mb-6 uppercase leading-tight">
                   {u === 1 ? 'Rua Rio de Janeiro, 186' : 'Rua Antônio Carlos Mori, 337'}
                 </h3>
                 <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-zinc-400">
                       <Clock size={16} className="text-brand-yellow" />
                       <span className="text-sm font-bold uppercase tracking-widest">17:00h às 23:30h</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400">
                       <Smartphone size={16} className="text-brand-blue" />
                       <span className="text-sm font-bold uppercase tracking-widest">(14) 99793-9067</span>
                    </div>
                 </div>
                 <button 
                   onClick={() => openMap(u)}
                   className="w-full py-4 bg-white text-zinc-900 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-brand-yellow transition-all flex items-center justify-center gap-3"
                 >
                   VER NO MAPA <ArrowRight size={16} />
                 </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Footer - Professional Conclusion */}
      <footer className="bg-white border-t border-zinc-100 pt-16 sm:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 gap-12 sm:gap-16 mb-20">
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                 <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center border-2 border-brand-blue">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-brand-yellow"></div>
                 </div>
                 <span className="text-xl font-serif font-black text-brand-red uppercase">CASA DA ESFIHA</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0 font-light mb-8">
                Comprometidos com a qualidade artesanal e o atendimento de excelência. A esfiha fechada original de Ourinhos que você já conhece e ama.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                 <a href="https://instagram.com/casa.daesfiha" className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"><Instagram size={20} /></a>
                 <button onClick={openWhatsApp} className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"><MessageCircle size={20} /></button>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-8">Links Rápidos</h4>
              <nav className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-zinc-700">
                 <button onClick={() => scrollToSection('inicio')} className="hover:text-brand-red text-left mx-auto lg:mx-0">Home</button>
                 <button onClick={() => scrollToSection('cardapio')} className="hover:text-brand-red text-left mx-auto lg:mx-0">Menu</button>
                 <button onClick={() => scrollToSection('unidades')} className="hover:text-brand-red text-left mx-auto lg:mx-0">Lojas</button>
              </nav>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-8">Qualidade</h4>
              <div className="space-y-4">
                 <div className="flex items-center justify-center lg:justify-start gap-2 text-zinc-400">
                    <Award size={16} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Assado 100% Fresco</span>
                 </div>
                 <div className="flex items-center justify-center lg:justify-start gap-2 text-zinc-400">
                    <ShieldCheck size={16} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Higiene Ourinhos OK</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[8px] sm:text-[9px] font-bold text-zinc-300 uppercase tracking-[0.3em] text-center">
              © 2026 CASA DA ESFIHA OURINHOS • TRADICIONALMENTE ARTESANAL
            </p>
            <div className="flex gap-4">
               <div className="w-6 h-1 bg-brand-red"></div>
               <div className="w-6 h-1 bg-brand-yellow"></div>
               <div className="w-6 h-1 bg-brand-blue"></div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button - Optimized for Mobile Thumb Reach */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-brand-red text-white p-4 sm:p-5 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all z-[90] group overflow-hidden"
        aria-label="Pedir via WhatsApp"
      >
        <div className="relative z-10 flex items-center gap-3">
          <MessageCircle size={28} />
          <span className="hidden group-hover:block text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Peça Agora</span>
        </div>
        <div className="absolute inset-0 bg-brand-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>
    </div>
  );
};

export default App;
