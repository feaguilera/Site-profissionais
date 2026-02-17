
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
  UtensilsCrossed,
  Layers,
  Zap,
  Star,
  CheckCircle2,
  Instagram,
  Timer
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
    window.open(`https://wa.me/5514997939067?text=${encodeURIComponent('Olá! Gostaria de pedir as esfihas fechadas e salgados da Casa da Esfiha.')}`, '_blank');
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
    <div className="min-h-screen bg-white text-zinc-800 overflow-x-hidden">
      {/* Navbar Profissional */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            {/* Logo Placeholder (Representando o mascote enviado) */}
            <div className="relative w-12 h-12 flex-shrink-0">
               <div className="absolute inset-0 bg-brand-red rounded-full logo-ring flex items-center justify-center">
                  <span className="text-brand-yellow font-black text-[8px] text-center leading-none">CASA DA<br/>ESFIHA</span>
               </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-black tracking-tighter text-brand-red leading-none uppercase">CASA DA ESFIHA</span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">A Melhor de Ourinhos</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {['Início', 'Cardápio', 'Lojas', 'Nossa História'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-[11px] font-extrabold text-zinc-600 hover:text-brand-red transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <button onClick={() => openWhatsApp()} className="px-6 py-2.5 btn-brand text-xs">
              PEDIR AGORA
            </button>
          </div>

          <button className="lg:hidden text-brand-red" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed inset-0 bg-white z-[110] transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
              <X className="absolute top-6 right-6 text-brand-red" size={32} onClick={() => setIsMenuOpen(false)} />
              {['Início', 'Cardápio', 'Lojas', 'Nossa História'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-2xl font-heading font-black text-brand-red uppercase tracking-tighter"
                >
                  {item}
                </button>
              ))}
              <button onClick={() => openWhatsApp()} className="w-full py-5 btn-brand text-sm flex items-center justify-center gap-4">
                WHATSAPP <MessageCircle size={20} />
              </button>
           </div>
        </div>
      </nav>

      {/* Hero Section: Profissional & Apetitoso */}
      <section id="início" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 skew-x-12 transform origin-top pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/10 rounded-full mb-8">
              <Star size={16} className="text-brand-red fill-brand-red" />
              <span className="text-xs font-black uppercase tracking-widest text-brand-red">Referência em Ourinhos desde 1990</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black leading-[1] text-zinc-900 mb-8 tracking-tight">
              A Arte da Esfiha <br/> <span className="text-brand-red italic">Fechada</span> Perfeita.
            </h1>
            <p className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-xl">
              Diferente de tudo que você já provou. Nossas esfihas são fechadas à mão para lacrar o sabor e manter a suculência absoluta. Massa fininha e recheio de verdade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('cardápio')} className="px-10 py-5 btn-brand flex items-center justify-center gap-3">
                VER CARDÁPIO COMPLETO <ChevronRight size={18} />
              </button>
              <div className="flex items-center gap-4 px-6 py-4 bg-white border border-zinc-100 rounded-lg shadow-sm">
                 <Timer size={24} className="text-brand-yellow" />
                 <div>
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Tempo Médio</p>
                    <p className="text-sm font-bold text-zinc-800">Quentinho em Minutos</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-brand-yellow/20 blur-3xl rounded-full"></div>
             <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-zinc-50 transform lg:rotate-2 hover:rotate-0 transition-all duration-700 group">
                <img 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800" 
                  className="w-full h-auto rounded-xl grayscale-[10%] group-hover:grayscale-0 transition-all" 
                  alt="Esfihas Fechadas Ourinhos"
                />
                <div className="absolute -bottom-6 -left-6 bg-brand-red text-white p-6 rounded-xl shadow-xl flex flex-col items-center">
                   <span className="text-4xl font-black font-heading">34</span>
                   <span className="text-[9px] font-bold uppercase tracking-widest text-center">Anos de<br/>Tradição</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Seção de Cardápio - Esfihas e Salgados */}
      <section id="cardápio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 mb-6 uppercase tracking-tight">Nosso Tesouro <span className="text-brand-red">Artesanal</span></h2>
             <p className="text-zinc-500 max-w-2xl text-lg">Produtos preparados diariamente, com ingredientes frescos e a técnica que só a Casa da Esfiha possui.</p>
             <div className="w-24 h-1.5 bg-brand-yellow mt-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="card-premium p-8 rounded-2xl flex flex-col group">
                <div className="w-14 h-14 bg-brand-red/5 text-brand-red rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.2em] mb-3">{s.tag}</span>
                <h3 className="text-2xl font-heading font-black text-zinc-900 mb-4">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">{s.description}</p>
                <div className="pt-6 border-t border-zinc-50 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase">A partir de</span>
                      <span className="text-xl font-black text-zinc-900">{s.price}</span>
                   </div>
                   <button onClick={openWhatsApp} className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 hover:bg-brand-red hover:text-white transition-all">
                     <ChevronRight size={20} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onde Estamos - Lojas Físicas */}
      <section id="lojas" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div>
               <h2 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 mb-8 leading-tight">Venha Sentir o <br/> <span className="text-brand-red">Aroma</span> do Forno.</h2>
               <p className="text-zinc-500 mb-10 leading-relaxed text-lg">Duas unidades modernas e prontas para receber você e sua família em Ourinhos.</p>
               <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-red"><Clock size={20} /></div>
                     <span className="font-bold text-zinc-700 uppercase text-xs tracking-widest">Aberto todos os dias: 17h às 23:30h</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-red"><Phone size={20} /></div>
                     <span className="font-bold text-zinc-700 uppercase text-xs tracking-widest">(14) 99793-9067</span>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
               {[1, 2].map((u) => (
                 <div key={u} className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 group hover:border-brand-blue transition-all">
                    <div className="flex justify-between items-start mb-10">
                       <MapPin className="text-brand-red" size={32} />
                       <span className="bg-brand-blue/10 text-brand-blue text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Unidade {u === 1 ? 'Centro I' : 'Centro II'}</span>
                    </div>
                    <h3 className="text-xl font-black text-zinc-900 mb-4 uppercase tracking-tighter">
                      {u === 1 ? 'Rua Rio de Janeiro, 186' : 'Rua Antônio Carlos Mori, 337'}
                    </h3>
                    <p className="text-zinc-500 text-sm mb-10 leading-relaxed">Localização privilegiada com fácil estacionamento e atendimento ágil.</p>
                    <button 
                      onClick={() => openMap(u)}
                      className="w-full py-4 border-2 border-zinc-100 rounded-xl text-xs font-black text-zinc-500 hover:border-brand-red hover:text-brand-red transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
                    >
                      ABRIR NO GOOGLE MAPS <ArrowRight size={16} />
                    </button>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História & Mascote */}
      <section id="nossa-história" className="py-24 bg-brand-red text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-10 gap-10">
               {[...Array(50)].map((_, i) => <Flame key={i} size={40} />)}
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <h2 className="text-5xl font-heading font-black uppercase tracking-tighter leading-none">O Mascote que <br/> <span className="text-brand-yellow">Ourinhos Ama.</span></h2>
                  <p className="text-white/80 text-lg leading-relaxed font-light">
                    Nossa logo é o símbolo de alegria e qualidade que atravessa gerações. Na Casa da Esfiha, cada pedido é tratado com a responsabilidade de manter vivo um legado de sabor que começou no centro da nossa cidade.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-8 pt-8">
                     {BENEFITS.map((b, i) => (
                       <div key={i} className="flex gap-4">
                          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-yellow">
                             {b.icon}
                          </div>
                          <div>
                             <h4 className="font-black text-sm uppercase tracking-widest mb-2">{b.title}</h4>
                             <p className="text-white/60 text-xs leading-relaxed">{b.description}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="flex justify-center">
                  <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                     <div className="absolute inset-0 bg-brand-yellow rounded-full animate-ping opacity-10"></div>
                     <div className="absolute inset-4 border-8 border-brand-blue rounded-full"></div>
                     <div className="absolute inset-10 bg-white rounded-full flex items-center justify-center shadow-2xl p-12">
                        {/* Representação visual do mascote do logo */}
                        <div className="text-center">
                           <Flame size={120} className="text-brand-red mx-auto mb-4" />
                           <p className="text-brand-red font-heading font-black text-2xl uppercase leading-none">A ORIGINAL</p>
                           <p className="text-zinc-400 font-bold text-[10px] tracking-widest mt-2 uppercase">Ourinhos - SP</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Profissional */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-black text-center mb-16 uppercase tracking-tight">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl p-6 border border-transparent hover:border-brand-blue/20 transition-all cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-zinc-900 list-none text-lg">
                  {item.question}
                  <ChevronRight size={20} className="text-brand-red group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-zinc-500 leading-relaxed pl-2 border-l-2 border-brand-yellow">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Estilo Corporativo */}
      <footer className="bg-zinc-900 text-white py-20 border-t-8 border-brand-red">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-12 mb-20">
               <div className="col-span-1 lg:col-span-2">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center logo-ring">
                        <span className="text-[6px] font-black text-brand-yellow text-center leading-none">CASA DA<br/>ESFIHA</span>
                     </div>
                     <span className="text-2xl font-heading font-black tracking-tighter uppercase">CASA DA ESFIHA</span>
                  </div>
                  <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
                    Mais que uma lanchonete, um ponto de encontro tradicional em Ourinhos. Especialistas em satisfazer o seu paladar com o melhor em esfihas fechadas e salgados fritos na hora.
                  </p>
               </div>
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-yellow mb-8">Menu Rápido</h4>
                  <nav className="flex flex-col gap-4 text-zinc-400 text-sm font-bold uppercase tracking-widest">
                    <button onClick={() => scrollToSection('início')} className="text-left hover:text-white transition-colors">Início</button>
                    <button onClick={() => scrollToSection('cardápio')} className="text-left hover:text-white transition-colors">Cardápio</button>
                    <button onClick={() => scrollToSection('lojas')} className="text-left hover:text-white transition-colors">Unidades</button>
                  </nav>
               </div>
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-yellow mb-8">Social</h4>
                  <div className="flex gap-6 mb-8">
                    <a href="https://instagram.com/casa.daesfiha" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-brand-red transition-all"><Instagram size={20} /></a>
                    <button onClick={openWhatsApp} className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-all"><MessageCircle size={20} /></button>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-zinc-600 tracking-widest uppercase">
                    <ShieldCheck size={14} /> Sistema de Gestão Certificado
                  </div>
               </div>
            </div>
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">© {new Date().getFullYear()} Casa da Esfiha Ourinhos - Todos os direitos reservados.</p>
               <div className="flex gap-3">
                  <div className="w-8 h-4 bg-zinc-800 rounded-sm"></div>
                  <div className="w-8 h-4 bg-zinc-800 rounded-sm"></div>
                  <div className="w-8 h-4 bg-zinc-800 rounded-sm"></div>
               </div>
            </div>
         </div>
      </footer>

      {/* WhatsApp FAB Flutuante - Versão Profissional */}
      <button 
        onClick={() => openWhatsApp()}
        className="fixed bottom-8 right-8 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[120] flex items-center gap-4 group"
      >
        <div className="relative">
           <MessageCircle size={28} />
           <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-red rounded-full animate-ping"></span>
        </div>
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 text-xs font-black uppercase tracking-widest whitespace-nowrap">
          PEDIR VIA WHATSAPP
        </span>
      </button>
    </div>
  );
};

export default App;
