
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  Instagram,
  Timer,
  ShoppingBag,
  Award,
  Check,
  Flame,
  ChefHat,
  Heart,
  Smartphone,
  Quote
} from 'lucide-react';
import { SERVICES, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5514997939067?text=${encodeURIComponent('Olá Casa da Esfiha! Quero fazer um pedido pelo cardápio do site.')}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      window.scrollTo({ top: element.offsetTop - offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      {/* Heavy Impact Header */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white shadow-2xl py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="flex flex-col">
              <span className={`text-3xl sm:text-4xl font-display leading-none ${scrolled ? 'text-brand-red' : 'text-zinc-900'}`}>CASA DA ESFIHA</span>
              <div className="flex items-center gap-2">
                 <span className="h-[1px] w-4 bg-brand-yellow"></span>
                 <span className={`text-[9px] font-bold uppercase tracking-[0.3em] ${scrolled ? 'text-zinc-400' : 'text-zinc-500'}`}>Ourinhos desde 1990</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Menu', 'Processo', 'Unidades', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-800 hover:text-brand-red transition-all"
              >
                {item}
              </button>
            ))}
            <button onClick={openWhatsApp} className="px-8 py-4 btn-sensory text-xs flex items-center gap-3">
              PEDIR AGORA <MessageCircle size={16} />
            </button>
          </div>

          <button className={`lg:hidden p-3 transition-colors ${scrolled ? 'text-brand-red' : 'text-zinc-900'}`} onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Industrial Mobile Menu */}
      <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
         <div className="absolute inset-0 bg-zinc-900/95" onClick={() => setIsMenuOpen(false)}></div>
         <div className={`absolute right-0 top-0 bottom-0 w-[85%] bg-brand-red transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full p-10">
               <button onClick={() => setIsMenuOpen(false)} className="self-end text-white/50 mb-12"><X size={40} /></button>
               <div className="flex flex-col gap-8">
                  {['Menu', 'Processo', 'Unidades', 'Contato'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-5xl font-display text-white text-left uppercase hover:text-brand-yellow transition-colors"
                    >
                      {item}
                    </button>
                  ))}
               </div>
               <div className="mt-auto space-y-6">
                  <p className="text-white/60 font-bold uppercase text-[10px] tracking-widest">Unidade Ourinhos - SP</p>
                  <button onClick={openWhatsApp} className="w-full py-6 bg-white text-brand-red font-black uppercase text-sm flex items-center justify-center gap-4">
                     WHATSAPP <MessageCircle size={20} />
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Hero: The Sensory Entrance */}
      <section className="relative pt-40 lg:pt-64 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[80%] bg-[#f4f4f4] -z-10 rounded-bl-[100px] lg:rounded-bl-[200px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
               <span className="px-3 py-1 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest">Original</span>
               <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Ourinhos • 34 Anos</span>
            </div>
            <h1 className="text-7xl sm:text-8xl lg:text-[110px] font-display text-zinc-900 leading-[0.85] mb-10 uppercase tracking-tighter">
              A Massa <br/>
              <span className="text-brand-red">Artesanal</span> <br/>
              dos Sonhos.
            </h1>
            <p className="text-lg text-zinc-500 max-w-lg mb-12 leading-relaxed font-light">
              Não economizamos no recheio, não apressamos a massa. O sabor de Ourinhos que atravessa gerações com a mesma paixão.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <button onClick={() => scrollToSection('menu')} className="px-12 py-6 btn-sensory text-sm">
                 QUERO EXPERIMENTAR
               </button>
               <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollToSection('unidades')}>
                  <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-brand-yellow transition-all">
                     <MapPin size={20} className="text-zinc-400 group-hover:text-zinc-900" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Ver Lojas</span>
               </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800" 
                  className="w-full h-full object-cover parallax-img hover:scale-105 duration-1000" 
                  alt="Esfiha Fechada Especial"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-8 right-8 bg-brand-yellow px-4 py-2 text-zinc-900 font-display text-2xl -rotate-12 shadow-xl">
                   ASSADA AGORA!
                </div>
             </div>
             {/* Text Backdrop Overlay */}
             <div className="absolute -bottom-10 -left-10 text-[180px] font-display text-zinc-100 -z-10 hidden lg:block select-none">
                DELICIOUS
             </div>
          </div>
        </div>
      </section>

      {/* Categorias Mobile Sticky Simulado */}
      <div className="sticky top-20 z-50 lg:hidden menu-sticky-mobile py-4 px-6 border-y border-zinc-100 flex gap-4 overflow-x-auto no-scrollbar">
         {['Esfihas', 'Salgados', 'Doces', 'Bebidas'].map((cat, i) => (
           <button key={i} className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'bg-brand-red text-white' : 'bg-white border border-zinc-200 text-zinc-400'}`}>
             {cat}
           </button>
         ))}
      </div>

      {/* Menu Grid - Industrial Cards */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-6xl font-display text-zinc-900 leading-none uppercase mb-6">Nosso <span className="text-brand-red">Cardápio.</span></h2>
              <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest">Ingredientes Premium selecionados diariamente em Ourinhos.</p>
            </div>
            <div className="hidden lg:flex gap-4">
               <div className="px-6 py-3 border-2 border-zinc-900 text-zinc-900 font-black uppercase text-[10px] tracking-widest">
                  Disponível para Delivery
               </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="group relative bg-[#f9f9f9] border border-transparent hover:border-brand-red/20 transition-all p-8 flex flex-col h-full">
                <div className="mb-10 text-brand-red group-hover:scale-110 transition-transform duration-500">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-display text-zinc-900 mb-4 uppercase leading-none">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-10 flex-grow font-light">"{s.description}"</p>
                <div className="mt-auto">
                   <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300 mb-2">A partir de</p>
                   <p className="text-2xl font-black text-zinc-900">{s.price}</p>
                   <button onClick={openWhatsApp} className="mt-6 w-full py-4 border-2 border-zinc-200 text-zinc-400 group-hover:border-brand-red group-hover:text-brand-red text-[10px] font-black uppercase tracking-widest transition-all">
                      ADICIONAR AO PEDIDO
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process - Artisanal Visuals */}
      <section id="processo" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-2 gap-6 relative">
               <div className="space-y-6">
                  <div className="aspect-[3/4] rounded-2xl bg-zinc-800 overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1512839103048-797219bb0a93?q=80&w=600" className="w-full h-full object-cover opacity-60" alt="Massa artesanal" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-brand-red p-8 flex flex-col justify-end">
                     <p className="text-4xl font-display leading-none mb-2">34 ANOS</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">De Segredos de Forno</p>
                  </div>
               </div>
               <div className="space-y-6 pt-12">
                  <div className="aspect-square rounded-2xl bg-brand-yellow p-8 flex flex-col justify-end text-zinc-900">
                     <ChefHat size={32} className="mb-4" />
                     <p className="text-xl font-black uppercase tracking-tight">Manual & Humano</p>
                  </div>
                  <div className="aspect-[3/4] rounded-2xl bg-zinc-800 overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1541014741259-df529411b96a?q=80&w=600" className="w-full h-full object-cover opacity-60" alt="Temperos" />
                  </div>
               </div>
            </div>
            
            <div>
              <h2 className="text-6xl font-display text-white mb-10 leading-none uppercase">O Segredo está na <span className="text-brand-yellow">Leveza.</span></h2>
              <div className="space-y-10">
                 {BENEFITS.map((b, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="w-14 h-14 bg-white/5 text-brand-yellow flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:text-white transition-all">
                        {b.icon}
                      </div>
                      <div>
                         <h4 className="text-xl font-display text-white uppercase tracking-wider mb-2">{b.title}</h4>
                         <p className="text-zinc-500 text-sm leading-relaxed font-light">{b.description}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unidades & Social Proof */}
      <section id="unidades" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
               <div className="mb-16">
                  <h2 className="text-5xl font-display text-zinc-900 uppercase mb-8 leading-none">Estamos em <br/> <span className="text-brand-blue">Ourinhos.</span></h2>
                  <div className="grid sm:grid-cols-2 gap-8">
                     {[1, 2].map(u => (
                       <div key={u} className="p-10 border border-zinc-100 hover:shadow-xl transition-all group">
                          <MapPin className="text-brand-red mb-6" size={28} />
                          <h4 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-red transition-colors">
                             {u === 1 ? 'Rua Rio de Janeiro, 186' : 'Rua Antônio C. Mori, 337'}
                          </h4>
                          <p className="text-zinc-400 text-sm mb-10 font-light">Atendimento presencial e retirada em balcão até as 23:30h.</p>
                          <button onClick={() => window.open('https://maps.google.com')} className="flex items-center gap-3 text-[10px] font-black text-brand-blue uppercase tracking-widest">
                             COMO CHEGAR <ArrowRight size={14} />
                          </button>
                       </div>
                     ))}
                  </div>
               </div>
               
               {/* Mini Depoimento Social */}
               <div className="p-10 bg-zinc-50 border-l-8 border-brand-yellow">
                  <Quote className="text-zinc-200 mb-6" size={48} />
                  <p className="text-xl font-medium italic text-zinc-700 leading-relaxed mb-6">
                    "A esfiha fechada de carne é insuperável. Moro em Ourinhos há 20 anos e nunca encontrei uma massa tão leve e temperada quanto a da Casa da Esfiha."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
                     <div>
                        <p className="text-sm font-black uppercase tracking-tight">Ricardo Silva</p>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Cliente Fiel desde 2005</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-4">
               <div className="bg-brand-red p-12 text-white h-full flex flex-col justify-between">
                  <div>
                     <Award size={48} className="text-brand-yellow mb-8" />
                     <h3 className="text-4xl font-display uppercase leading-tight mb-8">Tradição que se <br/> sente no paladar.</h3>
                     <p className="text-white/70 text-sm leading-relaxed font-light mb-12">
                        Utilizamos processos de fermentação lenta que garantem que nossas esfihas não causem aquela sensação de peso. É o prazer do sabor sem arrependimentos.
                     </p>
                  </div>
                  <div className="space-y-6">
                     <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                        <Clock size={20} className="text-brand-yellow" />
                        <div>
                           <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Aberto Hoje</p>
                           <p className="text-sm font-bold">17h - 23:30h</p>
                        </div>
                     </div>
                     <button onClick={openWhatsApp} className="w-full py-5 bg-white text-brand-red font-black uppercase text-xs tracking-widest shadow-2xl active:scale-95 transition-all">
                        PEDIR VIA WHATSAPP
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Industrial */}
      <footer className="py-20 bg-zinc-900 border-t-8 border-brand-red">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
               <div>
                  <h4 className="text-5xl font-display text-white uppercase leading-none mb-2">CASA DA ESFIHA</h4>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Orgulho Ourinhense • Est. 1990</p>
               </div>
               <div className="flex gap-10">
                  <a href="#" className="text-white/20 hover:text-brand-red transition-all"><Instagram size={28} /></a>
                  <button onClick={openWhatsApp} className="text-white/20 hover:text-emerald-500 transition-all"><MessageCircle size={28} /></button>
               </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-20">
               <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-8">Navegação</h5>
                  <nav className="flex flex-col gap-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                     <button onClick={() => scrollToSection('inicio')} className="text-left hover:text-white transition-colors">Home</button>
                     <button onClick={() => scrollToSection('menu')} className="text-left hover:text-white transition-colors">Cardápio</button>
                     <button onClick={() => scrollToSection('processo')} className="text-left hover:text-white transition-colors">Processo</button>
                  </nav>
               </div>
               <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-8">Unidades</h5>
                  <nav className="flex flex-col gap-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                     <span className="text-zinc-600 italic font-medium lowercase">@ Rio de Janeiro, 186</span>
                     <span className="text-zinc-600 italic font-medium lowercase">@ Antônio C. Mori, 337</span>
                  </nav>
               </div>
               <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-center">
                  <p className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.4em] mb-6">© 2026 Casa da Esfiha Ourinhos. Todos os direitos reservados.</p>
                  <div className="flex gap-4">
                     <div className="w-12 h-1 bg-brand-red"></div>
                     <div className="w-12 h-1 bg-brand-yellow"></div>
                     <div className="w-12 h-1 bg-brand-blue"></div>
                  </div>
               </div>
            </div>
         </div>
      </footer>

      {/* Floating Action Button - Optimized for One-Hand Usage */}
      <div className="fixed bottom-6 right-6 z-[150]">
         <button 
           onClick={openWhatsApp}
           className="bg-brand-red text-white p-5 rounded-full shadow-2xl animate-float group relative overflow-hidden"
         >
           <MessageCircle size={32} />
           <div className="absolute inset-0 bg-brand-yellow -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10"></div>
         </button>
      </div>
    </div>
  );
};

export default App;
