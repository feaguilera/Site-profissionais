import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  MessageCircle,
  Shield,
  Code2,
  Lock,
  Globe2,
  Check,
  Plus,
  ArrowUpRight,
  Headphones,
  Info,
  Tag
} from 'lucide-react';
import { SERVICES, FAQ, BENEFITS, ADS_METHOD } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = (serviceName?: string) => {
    const text = serviceName 
      ? `Olá Felipe! Gostaria de uma consultoria sobre o plano ${serviceName}. Analisei as condições e gostaria de iniciar.`
      : 'Olá Felipe! Analisei sua proposta de engenharia digital e gostaria de uma consultoria estratégica.';
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar Premium */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/80 py-4 border-b border-slate-100 backdrop-blur-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <Code2 className="text-white" size={18} />
            </div>
            <span className="text-lg font-display font-semibold tracking-tight text-slate-900">Felipe<span className="text-indigo-600">.B</span></span>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Expertise', 'Metodologia', 'Soluções'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {item}
              </button>
            ))}
            <button onClick={() => openWhatsApp()} className="px-5 py-2.5 rounded-full btn-premium text-xs">Agendar Consultoria</button>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-[#fafafa]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-50 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-semibold uppercase tracking-wider mb-8">
              <Shield size={12} /> Engenharia de Software & Segurança
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-slate-900 leading-[1.1] mb-8 gradient-text">
              Engenharia Digital para Negócios de <span className="text-indigo-600">Alto Valor.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mb-12 leading-relaxed font-light">
              Desenvolvemos ativos digitais sob medida, focados em performance extrema, segurança de dados e conversão estratégica. O próximo nível da sua autoridade começa aqui.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => openWhatsApp()} className="px-8 py-4 rounded-full btn-premium flex items-center gap-3 text-sm">
                Iniciar Projeto <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSection('expertise')} className="px-8 py-4 rounded-full btn-outline text-sm">
                Ver Diferenciais
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 grayscale-[0.2] hover:grayscale-0 transition-all duration-700 shadow-xl">
              <img 
                src="./perfil.jpg" 
                className="w-full h-full object-cover"
                alt="Felipe B. - Especialista"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white/80 font-medium text-xs uppercase tracking-widest mb-1">Consultor Responsável</p>
                <h3 className="text-white text-2xl font-display font-semibold tracking-tight">Felipe B.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-medium text-slate-900 mb-6">Expertise Técnica em <br /> Cada Detalhe.</h2>
              <p className="text-slate-600 font-light leading-relaxed">Não usamos modelos prontos. Construímos cada linha de código para garantir que sua empresa tenha a estrutura digital mais segura e rápida do mercado.</p>
            </div>
            <div className="text-slate-200 font-display text-8xl font-black opacity-30 hidden lg:block tracking-tighter">ENGINEERING</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="card-premium p-10 rounded-xl group">
                <div className="text-indigo-600 mb-8 transform group-hover:translate-x-1 transition-transform">
                  {b.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-slate-900 mb-4 uppercase tracking-tight">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-indigo-600 font-semibold text-xs uppercase tracking-[0.3em] block mb-4">Arquitetura de Sucesso</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-900">Método A.D.S.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {ADS_METHOD.map((m, i) => (
              <div key={i} className="relative p-10 bg-white border border-slate-200 rounded-3xl hover:border-indigo-200 hover:shadow-xl transition-all group">
                <div className="flex items-center justify-between mb-8">
                  {/* Número uniforme e bem posicionado, sem sobrepor o texto principal */}
                  <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-display font-bold text-lg group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {m.step}
                  </div>
                  <div className="h-px bg-slate-100 flex-grow ml-4"></div>
                </div>
                <h4 className="text-xl font-display font-semibold text-slate-900 mb-4 uppercase tracking-tight italic">{m.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluções" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-900 mb-6">Soluções Corporativas.</h2>
            <p className="text-slate-600 font-light max-w-2xl mx-auto">Desenvolvemos o ecossistema completo para sua empresa, do código à escala de anúncios, com transparência e foco em ROI.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className={`card-premium p-10 lg:p-14 rounded-3xl flex flex-col group relative overflow-hidden ${s.isPromo ? 'ring-2 ring-indigo-600/20' : ''}`}>
                
                {s.isPromo && (
                  <div className="absolute top-6 right-[-35px] bg-indigo-600 text-white text-[10px] font-bold py-1 px-10 rotate-45 shadow-lg uppercase tracking-widest z-10">
                    Promoção
                  </div>
                )}

                <div className="flex justify-between items-start mb-8">
                  <div className="flex-1">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block border ${s.isPromo ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
                      {s.isPromo ? 'Oportunidade Limitada' : s.tag}
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-slate-900 tracking-tight">{s.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shrink-0">
                    {s.icon}
                  </div>
                </div>

                <p className="text-slate-500 text-sm mb-8 font-light leading-relaxed italic">{s.description}</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                   {s.features?.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-slate-700 text-sm">
                         <Check className="text-indigo-500 shrink-0" size={16} />
                         <span className="font-light">{f}</span>
                      </div>
                   ))}
                   
                   {!s.id.includes('ads') && (
                     <div className="mt-8 p-5 rounded-2xl bg-indigo-600/5 border border-indigo-500/20 flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <Headphones size={18} className="text-indigo-600" />
                          <span className="text-slate-900 text-xs font-bold uppercase tracking-widest">+ R$ 100/mês</span>
                        </div>
                        <p className="text-slate-500 text-[11px] font-medium">Hospedagem + Manutenção + Suporte</p>
                     </div>
                   )}
                </div>

                <div className="pt-10 border-t border-slate-100 flex flex-col items-center sm:items-start gap-6">
                   <div className="text-center sm:text-left">
                      <p className="text-slate-400 text-[10px] font-bold uppercase mb-1 tracking-widest">
                        {s.id.includes('ads') ? 'Gestão Mensal' : 'Investimento Desenvolvimento'}
                      </p>
                      <div className="flex flex-col">
                        {s.isPromo && s.originalPrice && (
                          <span className="text-slate-400 text-sm line-through font-light mb-[-2px]">{s.originalPrice}</span>
                        )}
                        <p className={`text-3xl font-display font-semibold tracking-tighter ${s.isPromo ? 'text-indigo-600' : 'text-slate-900'}`}>{s.price}</p>
                      </div>
                   </div>
                   <button 
                    onClick={() => openWhatsApp(s.title)} 
                    className={`w-full px-8 py-5 rounded-full text-[11px] uppercase tracking-widest shadow-lg transition-all ${s.isPromo ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200' : 'btn-premium shadow-slate-200'}`}
                   >
                     Contratar {s.id === 'lp' ? 'Landing Page' : s.id === 'inst' ? 'Institucional' : 'Plano'}
                   </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-500 text-xs italic flex items-center justify-center gap-2">
              <Info size={14} className="text-indigo-400" />
              A opção de suporte garante monitoramento 24h e contrato de 12 meses para máxima estabilidade. 
              <span className="text-indigo-600 font-bold underline cursor-pointer ml-1" onClick={() => scrollToSection('faq')}>Ler FAQ.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 border-t border-slate-100 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-display font-medium text-slate-900 mb-16 text-center tracking-tight">Dúvidas Técnicas & Negócios</h2>
          <div className="space-y-2">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl mb-4 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex justify-between items-center group transition-colors hover:bg-slate-50"
                >
                  <span className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium text-sm sm:text-base">{item.question}</span>
                  <Plus size={18} className={`transition-transform duration-500 ${activeFaq === idx ? 'rotate-45 text-indigo-600' : 'text-slate-400'}`} />
                </button>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${activeFaq === idx ? 'max-h-96 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed font-light italic border-t border-slate-100 pt-6">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <Code2 className="text-white" size={16} />
            </div>
            <span className="text-lg font-display font-semibold text-slate-900 tracking-tight">Felipe<span className="text-indigo-600">.B</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <button onClick={() => scrollToSection('expertise')} className="hover:text-slate-900 transition-colors">Expertise</button>
            <button onClick={() => scrollToSection('metodologia')} className="hover:text-slate-900 transition-colors">Metodologia</button>
            <button onClick={() => scrollToSection('soluções')} className="hover:text-slate-900 transition-colors">Soluções</button>
            <button onClick={() => openWhatsApp()} className="hover:text-slate-900 transition-colors">Contato</button>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[10px] font-medium tracking-widest uppercase italic">© 2026 Felipe B. • Engenharia de Software Aplicada a Negócios</p>
            <div className="flex gap-4 items-center">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Monitoramento Ativo 24/7</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button 
        onClick={() => openWhatsApp()}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[120]"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default App;