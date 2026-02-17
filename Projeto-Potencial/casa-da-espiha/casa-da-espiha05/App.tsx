
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle,
  Flame,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Layers,
  Zap,
  Star,
  Instagram,
  Timer,
  ShoppingBag,
  Info,
  Utensils
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
    window.open(`https://wa.me/5514997939067?text=${encodeURIComponent('Olá! Quero fazer um pedido de esfihas e salgados.')}`, '_blank');
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
    <div className="min-h-screen">
      {/* Dynamic Navbar */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 shadow-sm py-3 backdrop-blur-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-12 h-12 flex-shrink-0 logo-container bg-brand-red flex items-center justify-center overflow-hidden">
               {/* Simulação do Mascote */}
               <Flame size={24} className="text-brand-yellow animate-float" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-lexend font-black tracking-tighter text-brand-red leading-none uppercase">CASA DA ESFIHA</span>
              <span className="text-[9px] font-bold text-sky-400 uppercase tracking-widest mt-1">Sabor que Conecta Ourinhos</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Início', 'Produtos', 'Unidades', 'Sobre'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[11px] font-black text-zinc-500 hover:text-brand-red transition-all uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <button onClick={() => openWhatsApp()} className="px-8 py-3 btn-primary text-xs flex items-center gap-2">
              PEDIR AGORA <ShoppingBag size={14} />
            </button>
          </div>

          <button className="lg:hidden text-brand-red" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white z-[110] transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
           <div className="flex flex-col items-center justify-center h-full gap-8">
              <X className="absolute top-6 right-6 text-brand-red" onClick={() => setIsMenuOpen(false)} />
              {['Início', 'Produtos', 'Unidades', 'Sobre'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-3xl font-lexend font-black text-brand-red uppercase"
                >
                  {item}
                </button>
              ))}
              <button onClick={() => openWhatsApp()} className="px-12 py-5 btn-primary text-sm">
                FALR COM ATENDENTE
              </button>
           </div>
        </div>
      </nav>

      {/* Kinetic Hero */}
      <section id="início" className="relative pt-32 lg:pt-56 pb-20 lg:pb-40 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-[-5%] w-[300px] h-[300px] bg-brand-yellow/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white shadow-sm border border-zinc-50 rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Forno Ativo agora em Ourinhos</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-lexend font-black leading-[0.9] text-zinc-900 mb-8 tracking-tighter">
              A ESFIHA <span className="text-brand-red">FECHADA</span> <br/> 
              MAIS AMADA.
            </h1>
            <p className="text-lg lg:text-xl text-zinc-500 mb-12 leading-relaxed max-w-lg">
              Feitas à mão, seladas com perfeição. Onde o recheio suculento encontra uma massa leve e dourada. Desde 1990, o segredo mais gostoso de Ourinhos.
            </p>
            <div className="flex flex-wrap gap-5">
              <button onClick={() => scrollToSection('produtos')} className="px-10 py-5 btn-primary text-sm flex items-center gap-4">
                EXPLORAR CARDÁPIO <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('unidades')} className="px-10 py-5 bg-white border border-zinc-100 rounded-full text-sm font-bold text-zinc-600 hover:bg-zinc-50 transition-all flex items-center gap-3">
                <MapPin size={18} className="text-brand-blue" /> VER LOJAS
              </button>
            </div>
          </div>
          
          <div className="relative">
             <div className="glass-card p-4 relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000" 
                  className="w-full h-auto rounded-[18px] object-cover aspect-square lg:aspect-video" 
                  alt="Esfiha Fechada Dourada"
                />
                <div className="absolute -bottom-8 -right-8 bg-brand-yellow px-8 py-4 rounded-2xl shadow-xl rotate-3">
                   <p className="text-[10px] font-black uppercase text-zinc-800 tracking-widest mb-1">Massa Levíssima</p>
                   <p className="text-2xl font-lexend font-black text-brand-red">100% ARTESANAL</p>
                </div>
             </div>
             {/* Decorative element using mascot concept */}
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-100 rounded-full flex items-center justify-center -rotate-12 border-4 border-white shadow-lg">
                <Utensils className="text-sky-400" size={40} />
             </div>
          </div>
        </div>
      </section>

      {/* Grid de Experiência */}
      <section id="produtos" className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-brand-red font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Seleção do Mascote</span>
              <h2 className="text-4xl lg:text-6xl font-lexend font-black text-zinc-900 tracking-tight leading-none uppercase">Favoritos da <br className="hidden lg:block"/> <span className="text-brand-blue">Galera.</span></h2>
            </div>
            <div className="flex bg-white p-2 rounded-full border border-zinc-100 shadow-sm">
               <button className="px-6 py-3 bg-brand-red text-white rounded-full text-[10px] font-black uppercase">Esfihas</button>
               <button className="px-6 py-3 text-zinc-400 text-[10px] font-black uppercase">Salgados</button>
               <button className="px-6 py-3 text-zinc-400 text-[10px] font-black uppercase">Doces</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group relative">
                <div className="glass-card p-10 h-full flex flex-col group-hover:border-brand-red group-hover:bg-white transition-all duration-500">
                  <div className="mb-10 flex justify-between items-center">
                    <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue group-hover:bg-brand-red group-hover:text-white transition-colors">
                      {s.icon}
                    </div>
                    {s.isPromo && <span className="px-3 py-1 badge-yellow text-[9px] rounded-full">POPULAR</span>}
                  </div>
                  <h3 className="text-2xl font-lexend font-black text-zinc-900 mb-4 group-hover:text-brand-red transition-colors">{s.title}</h3>
                  <p className="text-zinc-500 text-sm mb-10 flex-grow leading-relaxed italic">"{s.description}"</p>
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-zinc-50">
                    <span className="text-2xl font-lexend font-black text-zinc-900">{s.price}</span>
                    <button onClick={openWhatsApp} className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-brand-red hover:text-white transition-all">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização & Info */}
      <section id="unidades" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <div className="grid sm:grid-cols-2 gap-8">
                  {[1, 2].map((u) => (
                    <div key={u} className="glass-card p-10 border-2 border-transparent hover:border-brand-yellow shadow-lg shadow-zinc-100 transition-all">
                       <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-red mb-8">
                          <MapPin size={24} />
                       </div>
                       <h4 className="text-xl font-lexend font-black text-zinc-900 mb-4 uppercase">Unidade {u === 1 ? 'Centro I' : 'Centro II'}</h4>
                       <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
                        {u === 1 ? 'Rua Rio de Janeiro, 186' : 'Rua Antônio Carlos Mori, 337'}
                       </p>
                       <button onClick={() => openMap(u)} className="text-[10px] font-black uppercase text-brand-blue tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all">
                          COMO CHEGAR <ArrowRight size={14} />
                       </button>
                    </div>
                  ))}
                </div>
             </div>
             <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 bg-sky-50 text-sky-500 text-[10px] font-black uppercase tracking-widest rounded-full">Proximidade & Tradição</span>
                <h2 className="text-4xl lg:text-6xl font-lexend font-black text-zinc-900 uppercase leading-none tracking-tighter">
                  Estamos no <br/> Coração de <br/> <span className="text-brand-yellow">Ourinhos.</span>
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  Duas casas prontas para servir a esfiha fechada mais suculenta da região. Atendimento ágil e ambiente higienizado.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start pt-6 border-t border-zinc-50">
                   <div className="flex items-center gap-4">
                      <Clock className="text-brand-red" />
                      <div className="text-left">
                         <p className="text-[9px] font-black text-zinc-400 uppercase">Horário</p>
                         <p className="text-sm font-bold">17h às 23:30h</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <Phone className="text-brand-blue" />
                      <div className="text-left">
                         <p className="text-[9px] font-black text-zinc-400 uppercase">Contato</p>
                         <p className="text-sm font-bold">(14) 99793-9067</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pilares de Qualidade */}
      <section id="sobre" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-brand-red/5 mix-blend-overlay"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
               <h2 className="text-4xl lg:text-7xl font-lexend font-black tracking-tighter uppercase mb-6">Por que somos <br/> <span className="text-brand-red italic underline decoration-brand-yellow underline-offset-8">Diferentes?</span></h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
               {BENEFITS.map((b, i) => (
                 <div key={i} className="group p-10 border border-white/10 rounded-[32px] hover:bg-white hover:text-zinc-900 transition-all duration-700">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-yellow mb-10 group-hover:bg-brand-red group-hover:text-white transition-all">
                       {b.icon}
                    </div>
                    <h4 className="text-2xl font-lexend font-black mb-6 uppercase tracking-tight">{b.title}</h4>
                    <p className="text-zinc-400 text-sm leading-loose font-light italic group-hover:text-zinc-600">
                      {b.description}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer Minimalist */}
      <footer className="py-20 bg-white border-t border-zinc-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 logo-container bg-brand-red flex items-center justify-center text-brand-yellow">
                    <Flame size={20} fill="currentColor" />
                  </div>
                  <span className="text-xl font-lexend font-black text-brand-red uppercase">Casa da Esfiha</span>
               </div>
               
               <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  <button onClick={() => scrollToSection('início')} className="hover:text-brand-red transition-colors">Home</button>
                  <button onClick={() => scrollToSection('produtos')} className="hover:text-brand-red transition-colors">Cardápio</button>
                  <button onClick={() => scrollToSection('unidades')} className="hover:text-brand-red transition-colors">Lojas</button>
                  <a href="https://instagram.com/casa.daesfiha" className="hover:text-brand-red transition-colors flex items-center gap-2"><Instagram size={14} /> Instagram</a>
               </div>
            </div>

            <div className="pt-10 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest">© {new Date().getFullYear()} CASA DA ESFIHA OURINHOS. QUALIDADE QUE É TRADIÇÃO.</p>
               <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-brand-blue" />
                  <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Alimentos Certificados Ourinhos Vigilância</span>
               </div>
            </div>
         </div>
      </footer>

      {/* Kinetic FAB */}
      <button 
        onClick={() => openWhatsApp()}
        className="fixed bottom-8 right-8 bg-brand-red text-white w-16 h-16 lg:w-20 lg:h-20 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[150] flex items-center justify-center group overflow-hidden"
      >
        <MessageCircle size={32} className="relative z-10" />
        <div className="absolute inset-0 bg-brand-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </button>
    </div>
  );
};

export default App;
