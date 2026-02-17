
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
  Award,
  ChevronRight,
  TrendingUp,
  PackageCheck,
  UtensilsCrossed,
  Layers,
  Zap,
  // Fix: Added missing Instagram icon import
  Instagram
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
    window.open(`https://wa.me/5514997939067?text=${encodeURIComponent('Olá! Quero conhecer o cardápio de esfihas fechadas e salgados da Casa da Esfiha.')}`, '_blank');
  };

  const openMap = (unidade: number) => {
    const address = typeof unidade === 'number' && unidade === 1 
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
    <div className="min-h-screen bg-[#0F0F0F] text-zinc-300 overflow-x-hidden">
      {/* Navbar Industrial */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/90 py-3 backdrop-blur-xl border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center text-black">
              <Flame size={24} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-display font-black tracking-tight text-white leading-none">CASA DA ESFIHA</span>
              <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest mt-1">Ourinhos • Est. 1990</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Início', 'Produtos', 'Onde Estamos', 'Tradição'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-[10px] font-black text-zinc-500 hover:text-amber-500 transition-colors uppercase tracking-[0.2em]"
              >
                {item}
              </button>
            ))}
            <button onClick={() => openWhatsApp()} className="px-6 py-2 btn-vault text-[10px]">
              FAZER PEDIDO
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-black/95 transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col items-center justify-center h-full gap-8">
              <X className="absolute top-6 right-6 text-zinc-500" onClick={() => setIsMenuOpen(false)} />
              {['Início', 'Produtos', 'Onde Estamos', 'Tradição'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-2xl font-display font-black text-white uppercase tracking-widest"
                >
                  {item}
                </button>
              ))}
              <button onClick={() => openWhatsApp()} className="px-10 py-4 btn-vault text-xs">
                WHATSAPP AGORA
              </button>
           </div>
        </div>
      </nav>

      {/* Hero: The Secret Inside */}
      <section id="início" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-6">
              <Zap size={14} className="text-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Esfihas Fechadas & Salgados</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-display font-black leading-[0.9] text-white mb-8 tracking-tighter text-balance">
              O SABOR QUE <br/> FICA <span className="text-amber-500">GUARDADO.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-10 font-light leading-relaxed max-w-xl">
              Nossas esfihas são fechadas à mão para lacrar toda a suculência do recheio. Uma massa leve, dourada e um interior que surpreende a cada mordida.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('produtos')} className="px-10 py-5 btn-vault text-[11px] flex items-center gap-3">
                CONHECER CARDÁPIO <ArrowRight size={16} />
              </button>
              <div className="flex items-center gap-4 px-6 py-4 border border-white/10 bg-white/5 rounded-sm">
                 <div className="flex -space-x-3">
                   {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F0F0F] bg-zinc-800 flex items-center justify-center text-[10px] font-bold">U</div>)}
                 </div>
                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">+10k clientes em Ourinhos</span>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-amber-500/20 blur-[120px] rounded-full"></div>
             <div className="relative aspect-square max-w-md mx-auto group">
                <div className="absolute inset-0 border-2 border-amber-500/30 rounded-full scale-110 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800" 
                  className="w-full h-full object-cover rounded-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 glow-amber border-4 border-zinc-900" 
                  alt="Esfiha Fechada Dourada"
                />
             </div>
          </div>
        </div>
      </section>

      {/* The Vault Reveal - Grid de Produtos */}
      <section id="produtos" className="py-32 bg-[#141414] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase">Selecione o seu <span className="text-amber-500">Cofre.</span></h2>
              <p className="text-zinc-500 font-medium">Esfihas fechadas e salgados fritos na hora. O segredo está no recheio.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-zinc-900 border border-white/5 flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                <TrendingUp size={16} className="text-emerald-500" /> Mais Pedidos
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="card-vault p-8 flex flex-col group">
                <div className="mb-8 flex justify-between items-center">
                  <div className="text-amber-500 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{s.tag}</span>
                </div>
                <h3 className="text-2xl font-display font-black text-white mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">{s.description}</p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="font-black text-white">{s.price}</span>
                   <button onClick={openWhatsApp} className="text-zinc-500 hover:text-amber-500 transition-colors">
                     <ChevronRight size={20} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização Tática */}
      <section id="onde-estamos" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase mb-4">Nossos Quartéis Generais.</h2>
             <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((u) => (
              <div key={u} className="relative group overflow-hidden bg-zinc-900 p-1 bg-gradient-to-br from-white/10 to-transparent rounded-sm">
                 <div className="bg-[#0F0F0F] p-10 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-10">
                       <MapPin className="text-amber-500" size={32} />
                       <div className="text-right">
                          <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Unidade Ourinhos</p>
                          <p className="text-xl font-display font-black text-white uppercase">{u === 1 ? 'Centro I' : 'Centro II'}</p>
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {u === 1 ? 'Rua Rio de Janeiro, 186' : 'Rua Antônio Carlos Mori, 337'}
                    </h3>
                    <div className="flex flex-col gap-4 mb-10">
                       <div className="flex items-center gap-3 text-sm text-zinc-500">
                          <Clock size={16} /> 17h às 23:30h
                       </div>
                       <div className="flex items-center gap-3 text-sm text-zinc-500">
                          <Phone size={16} /> (14) 99793-9067
                       </div>
                    </div>
                    <button 
                      onClick={() => openMap(u)}
                      className="mt-auto w-full py-4 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                      TRAÇAR ROTA NO MAPA
                    </button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tradição & Processo */}
      <section id="tradição" className="py-32 bg-[#0F0F0F]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="relative">
                  <div className="absolute -inset-10 bg-amber-500/5 blur-3xl rounded-full"></div>
                  <div className="relative bg-zinc-900 p-12 border border-white/5 rounded-sm">
                     <div className="grid grid-cols-2 gap-8">
                        {BENEFITS.map((b, i) => (
                          <div key={i} className="space-y-4">
                             <div className="w-12 h-12 bg-amber-500/10 text-amber-500 flex items-center justify-center">
                                {b.icon}
                             </div>
                             <h4 className="text-sm font-black uppercase tracking-widest text-white">{b.title}</h4>
                             <p className="text-xs text-zinc-500 leading-relaxed italic">{b.description}</p>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="space-y-10">
                  <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-none uppercase tracking-tighter">
                    O Fogo que <br/> Alimenta a <br/> <span className="text-amber-500">História.</span>
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Nossa tradição começou há mais de 30 anos com uma missão simples: criar a esfiha fechada perfeita. 
                    Massa fina, bordas seladas e o máximo de recheio possível. Sem atalhos, apenas paixão pelo que fazemos.
                  </p>
                  <div className="flex gap-8 items-center border-t border-white/5 pt-10">
                     <div>
                        <p className="text-3xl font-display font-black text-white tracking-widest">30+</p>
                        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">ANOS DE FORNO</p>
                     </div>
                     <div className="w-[1px] h-10 bg-white/10"></div>
                     <div>
                        <p className="text-3xl font-display font-black text-white tracking-widest">100%</p>
                        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">FEITO À MÃO</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer Industrial */}
      <footer className="py-20 bg-black border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-16 mb-20">
               <div>
                  <div className="flex items-center gap-3 mb-8">
                    <Flame className="text-amber-500" size={24} />
                    <span className="text-2xl font-display font-black tracking-tight text-white leading-none uppercase">CASA DA ESFIHA</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed italic max-w-xs">
                    Elevando o padrão das esfihas fechadas e salgados artesanais em Ourinhos desde 1990. Qualidade que se sente.
                  </p>
               </div>
               <div>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-8">Navegação</p>
                  <div className="flex flex-col gap-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                     <button onClick={() => scrollToSection('início')} className="text-left hover:text-amber-500 transition-colors">Início</button>
                     <button onClick={() => scrollToSection('produtos')} className="text-left hover:text-amber-500 transition-colors">Produtos</button>
                     <button onClick={() => scrollToSection('onde-estamos')} className="text-left hover:text-amber-500 transition-colors">Onde Estamos</button>
                  </div>
               </div>
               <div>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-8">Conecte-se</p>
                  <div className="flex gap-6 mb-8">
                    <a href="https://instagram.com/casa.daesfiha" className="text-zinc-400 hover:text-amber-500 transition-colors"><Instagram size={24} /></a>
                    <button onClick={openWhatsApp} className="text-zinc-400 hover:text-emerald-500 transition-colors"><MessageCircle size={24} /></button>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-700">
                     <ShieldCheck size={16} />
                     <span className="text-[8px] font-black uppercase tracking-[0.3em]">Ambiente Seguro & Higienizado</span>
                  </div>
               </div>
            </div>
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
               <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest">© 2026 CASA DA ESFIHA OURINHOS • OPERAÇÃO INDUSTRIAL GOURMET</span>
               <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
               </div>
            </div>
         </div>
      </footer>

      {/* Tactic FAB */}
      <button 
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 bg-amber-500 text-black p-4 rounded-sm shadow-2xl hover:bg-white transition-all z-[120] flex items-center gap-3 group"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-700 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
          CHAMAR NO WHATSAPP
        </span>
      </button>
    </div>
  );
};

export default App;
