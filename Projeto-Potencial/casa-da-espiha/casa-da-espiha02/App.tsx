
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle,
  Utensils,
  MapPin,
  Clock,
  Phone,
  Star,
  Plus,
  Check,
  Instagram,
  Heart,
  Navigation,
  ChevronRight,
  ShieldCheck,
  Award,
  BookOpen,
  Map,
  Compass
} from 'lucide-react';
import { SERVICES, FAQ, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5514997939067?text=${encodeURIComponent('Olá! Gostaria de receber o cardápio atualizado da Casa da Esfiha.')}`, '_blank');
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
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-stone-200 overflow-x-hidden">
      {/* Navbar Minimalista */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-white/95 py-3 shadow-sm backdrop-blur-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="flex flex-col text-center">
              <span className="text-lg sm:text-2xl font-serif font-bold tracking-[0.1em] text-stone-900 leading-none">CASA DA ESFIHA</span>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="h-[1px] w-3 sm:w-4 bg-amber-500"></div>
                <span className="text-[7px] sm:text-[8px] font-bold text-stone-400 uppercase tracking-[0.3em]">Tradição Ourinhos</span>
                <div className="h-[1px] w-3 sm:w-4 bg-amber-500"></div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            {['Início', 'Vitrine', 'Destinos', 'História'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[10px] font-bold text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-[0.3em]"
              >
                {item}
              </button>
            ))}
            <button onClick={() => openWhatsApp()} className="px-8 py-3 btn-heritage flex items-center gap-3">
               RESERVAR <MessageCircle size={14} />
            </button>
          </div>

          <button className="lg:hidden text-stone-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 border-t border-stone-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-8 space-y-6">
            {['Início', 'Vitrine', 'Destinos', 'História'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-xs font-bold text-stone-600 uppercase tracking-[0.3em]"
              >
                {item}
              </button>
            ))}
            <button onClick={() => openWhatsApp()} className="w-full py-4 btn-heritage flex items-center justify-center gap-3">
               RESERVAR AGORA <MessageCircle size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Corrigido para Mobile */}
      <section id="início" className="relative min-h-screen flex items-center pt-32 pb-20 bg-[#F9F6F0]">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1500" 
            className="w-full h-full object-cover opacity-10 grayscale-[100%] scale-110"
            alt="Textura de Farinha"
           />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
           <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block mb-6 text-stone-400 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.5em] animate-pulse">
                Patrimônio Gastronômico Ourinhense
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-serif font-light text-stone-950 leading-[1.1] lg:leading-[0.9] mb-8 lg:mb-12">
                Onde o Sabor <br className="hidden sm:block" /> encontra a <span className="italic font-normal text-stone-700">Tradição.</span>
              </h1>
              <div className="line-accent w-32 sm:w-48 mx-auto mb-8 lg:mb-12"></div>
              <p className="text-base sm:text-xl text-stone-500 mb-12 lg:mb-16 font-light leading-relaxed max-w-2xl mx-auto px-4">
                Desde 1990, elevamos o conceito de esfiha artesanal através de ingredientes nobres e um processo que respeita o tempo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 px-4">
                <button onClick={() => scrollToSection('destinos')} className="px-10 py-5 btn-heritage flex items-center justify-center gap-4 w-full sm:w-auto">
                  VISITAR LOJAS <MapPin size={16} />
                </button>
                <button onClick={() => scrollToSection('vitrine')} className="px-10 py-5 border border-stone-200 bg-white/50 backdrop-blur-sm hover:border-stone-900 transition-all text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-stone-800 w-full sm:w-auto">
                  VER VITRINE
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* Vitrine Digital - Editorial Layout */}
      <section id="vitrine" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-7xl font-serif text-stone-950 mb-6">Nossas Especialidades</h2>
            <p className="text-stone-400 font-light max-w-lg uppercase text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em]">Curadoria artesanal de sabores mediterrâneos</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-y-16">
            {SERVICES.map((s) => (
              <div key={s.id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-6 lg:mb-8 bg-stone-100 relative shadow-inner">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-300 group-hover:scale-125 transition-transform duration-1000 opacity-20">
                    {s.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 lg:bottom-6 lg:left-6 lg:right-6 lg:p-6 bg-white/95 backdrop-blur-sm border border-stone-50 translate-y-4 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                     <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">Detalhes</p>
                     <p className="text-[10px] lg:text-[11px] font-medium leading-relaxed text-stone-600">"{s.description}"</p>
                  </div>
                  {/* Info visível no mobile */}
                  <div className="lg:hidden absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/20 to-transparent">
                     <p className="text-[10px] text-white font-bold uppercase tracking-widest">{s.tag}</p>
                  </div>
                </div>
                <div className="text-center">
                  <span className="hidden lg:block text-[9px] font-black text-stone-300 uppercase tracking-[0.3em] mb-3">{s.tag}</span>
                  <h3 className="text-xl lg:text-2xl font-serif font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">{s.title}</h3>
                  <p className="text-sm font-bold text-stone-800 tracking-tighter">{s.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinos - Ajustado para Responsividade */}
      <section id="destinos" className="py-20 lg:py-32 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16 lg:mb-32">
             <div className="relative order-2 lg:order-1">
                <div className="aspect-square bg-white shadow-2xl p-8 lg:p-12 relative overflow-hidden group min-h-[350px] flex items-center justify-center text-center lg:text-left">
                   <div className="absolute inset-0 bg-stone-50 opacity-0 lg:group-hover:opacity-100 transition-opacity"></div>
                   <Compass size={250} className="absolute -bottom-10 -right-10 text-stone-100 lg:size-[300px] lg:-bottom-20 lg:-right-20" />
                   <div className="relative z-10 flex flex-col h-full justify-center lg:justify-between">
                      <div>
                        <span className="text-amber-600 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.5em] mb-6 lg:mb-8 block">Presença Ourinhos</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-stone-950 mb-6 lg:mb-8 leading-tight">Nossas Casas Estão Abertas.</h2>
                      </div>
                      <p className="text-stone-500 font-light text-base sm:text-lg italic leading-relaxed max-w-sm mx-auto lg:mx-0">
                        Seja para uma refeição rápida ou um momento em família, escolha a unidade mais conveniente para você.
                      </p>
                   </div>
                </div>
             </div>

             <div className="space-y-8 lg:space-y-12 order-1 lg:order-2">
                {/* Unidade 1 */}
                <div className="heritage-card p-8 lg:p-10 group cursor-pointer" onClick={() => openMap(1)}>
                  <div className="flex items-center justify-between mb-6 lg:mb-8">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 border border-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-all">
                      <MapPin size={20} />
                    </div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-stone-300 uppercase tracking-widest">Unidade Histórica</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-stone-900 mb-4 tracking-tight">Rua Rio de Janeiro, 186</h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 lg:mb-8 italic">No coração do centro comercial, um refúgio de sabor para sua pausa diária.</p>
                  <button className="flex items-center gap-3 text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-amber-700 group-hover:gap-5 transition-all">
                    VER NO MAPA <ArrowRight size={14} />
                  </button>
                </div>

                {/* Unidade 2 */}
                <div className="heritage-card p-8 lg:p-10 group cursor-pointer" onClick={() => openMap(2)}>
                  <div className="flex items-center justify-between mb-6 lg:mb-8">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 border border-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-all">
                      <MapPin size={20} />
                    </div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-stone-300 uppercase tracking-widest">Unidade Expansão</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-stone-900 mb-4 tracking-tight">Rua Antônio Carlos Mori, 337</h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 lg:mb-8 italic">Ambiente moderno e espaçoso, ideal para grupos e celebrações familiares.</p>
                  <button className="flex items-center gap-3 text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-amber-700 group-hover:gap-5 transition-all">
                    VER NO MAPA <ArrowRight size={14} />
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* História & Diferenciais */}
      <section id="história" className="py-20 lg:py-32 bg-stone-900 text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-4xl md:text-7xl font-serif mb-6 italic">Excelência no Detalhe</h2>
              <div className="h-[1px] w-16 sm:w-24 bg-amber-500 mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
               {BENEFITS.map((b, i) => (
                 <div key={i} className="text-center group">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 lg:mb-10 group-hover:border-amber-500 group-hover:text-amber-500 transition-all duration-700">
                       {b.icon}
                    </div>
                    <h4 className="text-lg lg:text-xl font-serif font-bold mb-4 lg:mb-6 tracking-wider uppercase">{b.title}</h4>
                    <p className="text-stone-400 text-sm font-light leading-loose italic px-2">{b.description}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer Estilo Boutique */}
      <footer className="py-16 lg:py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <div className="flex flex-col items-center mb-16 lg:mb-20">
              <div className="flex flex-col text-center mb-10 lg:mb-12">
                <span className="text-2xl lg:text-3xl font-serif font-bold tracking-[0.2em] text-stone-950 uppercase leading-none">CASA DA ESFIHA</span>
                <span className="text-[9px] lg:text-[10px] font-bold text-amber-600 uppercase tracking-[0.4em] mt-2 sm:mt-3">Ourinhos • Brasil</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-stone-400">
                <button onClick={() => scrollToSection('vitrine')} className="hover:text-stone-900 transition-colors">A Vitrine</button>
                <button onClick={() => scrollToSection('destinos')} className="hover:text-stone-900 transition-colors">As Casas</button>
                <a href="https://instagram.com/casa.daesfiha" className="hover:text-stone-900 transition-colors">Instagram</a>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-12 border-t border-stone-50 items-center">
              <div className="text-center md:text-left">
                 <p className="text-stone-300 text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Desde 1990 • Ourinhos/SP</p>
                 <div className="flex items-center justify-center md:justify-start gap-3 text-stone-500">
                    <ShieldCheck size={16} className="text-amber-600" />
                    <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em]">Qualidade Garantida</span>
                 </div>
              </div>
              <div className="text-center md:text-right mt-4 md:mt-0">
                 <p className="text-stone-950 font-serif text-xl lg:text-2xl italic leading-none mb-2">Fornos Aquecidos Diariamente</p>
                 <p className="text-[9px] lg:text-[10px] font-bold text-stone-400 uppercase tracking-widest flex items-center justify-center md:justify-end gap-2">
                   <Clock size={12} /> 17h às 23:30h
                 </p>
              </div>
           </div>
           <div className="mt-12 text-[8px] text-stone-300 uppercase tracking-widest">
             © {new Date().getFullYear()} Casa da Esfiha - Todos os direitos reservados
           </div>
        </div>
      </footer>

      {/* FAB - Elegant WhatsApp */}
      <button 
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-stone-950 text-white p-5 lg:p-6 rounded-full shadow-2xl hover:bg-amber-700 transition-all z-[120] border border-white/10 flex items-center gap-4 group"
      >
        <MessageCircle size={20} className="lg:size-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-700 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
          SOLICITAR MENU
        </span>
      </button>
    </div>
  );
};

export default App;
