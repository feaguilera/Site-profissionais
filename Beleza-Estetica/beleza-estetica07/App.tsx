
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Instagram, 
  Facebook, 
  Star, 
  ChevronDown, 
  MessageCircle,
  Clock,
  MapPin,
  Mail,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQ, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-[#74C69D] rounded-full flex items-center justify-center text-white font-serif text-xl shadow-sm">L</div>
            <span className="text-xl font-bold tracking-tight text-[#2D6A4F]">Lumière</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-[#74C69D] transition-colors ${scrolled ? 'text-[#2D6A4F]/70' : 'text-[#2D6A4F]/80'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#74C69D] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#52B788] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Agendar Agora
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#2D6A4F]" /> : <Menu className="text-[#2D6A4F]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#2D6A4F] font-medium py-2 border-b border-[#F9FFF9]"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#74C69D] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> WhatsApp
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Soft Aesthetic" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9FFF9] via-[#F9FFF9]/70 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#74C69D]/20 text-[#2D6A4F] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-[#74C69D]/10">
              Estética Clean & Zen
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#2D6A4F] mb-6 leading-tight">
              A leveza <br /><span className="italic text-[#74C69D]">de se cuidar.</span>
            </h1>
            <p className="text-xl text-[#2D6A4F]/60 mb-8 leading-relaxed">
              Tratamentos minimalistas desenhados para realçar sua luz natural com a suavidade que sua pele merece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#74C69D] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#52B788] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#74C69D]/20"
              >
                Inicie sua Jornada <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('serviços')}
                className="bg-white text-[#74C69D] border-2 border-[#74C69D]/20 px-8 py-4 rounded-full font-bold text-lg hover:border-[#74C69D] hover:bg-[#F9FFF9] transition-all"
              >
                Ver Protocolos
              </button>
            </div>

            <div className="flex items-center gap-8 border-t border-[#74C69D]/10 pt-8">
              <div className="flex items-center gap-2">
                <div className="bg-[#74C69D]/10 p-2 rounded-full text-[#74C69D]">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-[#2D6A4F] text-sm">Cuidado Sutil</p>
                  <p className="text-[#2D6A4F]/40 text-xs">Beleza Natural</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#74C69D]/10 p-2 rounded-full text-[#74C69D]">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#2D6A4F] text-sm">Excelência</p>
                  <p className="text-[#2D6A4F]/40 text-xs">Padrão Internacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#2D6A4F]">Um suspiro para sua <span className="text-[#74C69D] italic">autoestima.</span></h2>
            <p className="text-[#2D6A4F]/50 max-w-2xl mx-auto text-lg">Menos excessos, mais vitalidade. O equilíbrio que você procura está aqui.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Estresse Visível', desc: 'Transforme o cansaço em uma expressão descansada e luminosa.' },
              { title: 'Textura sem Vida', desc: 'Revitalização profunda para uma pele macia e uniforme.' },
              { title: 'Perda de Viço', desc: 'Bioestimulação suave para recuperar o brilho de dentro para fora.' },
              { title: 'Traços Marcados', desc: 'Harmonização consciente que respeita sua identidade.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F9FFF9] p-8 rounded-3xl border border-[#74C69D]/5 hover:border-[#74C69D]/40 transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#74C69D] mb-6 shadow-sm group-hover:bg-[#74C69D] group-hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2D6A4F]">{item.title}</h3>
                <p className="text-[#2D6A4F]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="sobre" className="py-24 bg-[#F9FFF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clean Clinic" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#74C69D] rounded-full -z-0 opacity-10 blur-3xl"></div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-lg hidden md:block border border-[#74C69D]/10">
              <p className="text-[#74C69D] font-bold text-4xl mb-1">Soft</p>
              <p className="text-[#2D6A4F]/40 text-sm uppercase tracking-widest font-bold">Protocolos Zen</p>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#2D6A4F]">O cuidado que sua <span className="text-[#74C69D]">alma sente.</span></h2>
            <p className="text-[#2D6A4F]/70 text-lg mb-8 leading-relaxed">
              Na Lumière, o verde não é apenas uma cor, é uma promessa de renovação constante e frescor em cada toque.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { step: '01', title: 'Acolhimento', desc: 'Uma consulta sem pressa para ouvir as necessidades da sua pele.' },
                { step: '02', title: 'Toque de Seda', desc: 'Procedimentos executados com leveza e precisão milimétrica.' },
                { step: '03', title: 'Brilho Constante', desc: 'Suporte contínuo para manter sua pele radiante todos os dias.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="text-3xl font-serif text-[#74C69D]/30 font-bold">{step.step}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#2D6A4F]">{step.title}</h4>
                    <p className="text-[#2D6A4F]/50 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('serviços')}
              className="bg-[#74C69D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#52B788] transition-all shadow-md"
            >
              Conhecer Tratamentos
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#2D6A4F]">Momentos Lumière</h2>
            <p className="text-[#2D6A4F]/40 max-w-2xl mx-auto">Escolha o seu protocolo de renovação.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-[#F9FFF9] rounded-[2.5rem] overflow-hidden border border-[#74C69D]/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                {service.tag && (
                  <div className="absolute top-6 right-6 bg-[#74C69D] text-white px-4 py-1 rounded-full text-[10px] font-bold z-10 shadow-sm uppercase tracking-widest">
                    {service.tag}
                  </div>
                )}
                <div className="h-64 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${service.id}/600/400`} alt={service.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#2D6A4F]">{service.title}</h3>
                  <p className="text-[#2D6A4F]/50 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#74C69D]/10">
                    <span className="text-[#74C69D] font-bold">{service.price}</span>
                    <button 
                      onClick={() => window.open(`https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre ${service.title}`, '_blank')}
                      className="text-[#2D6A4F] font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:text-[#74C69D] transition-colors"
                    >
                      Detalhes <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#2D6A4F] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#74C69D] rounded-full blur-[150px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Por que somos <br /><span className="text-[#74C69D]">essenciais?</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#74C69D] border border-white/10">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 relative z-10">
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Soft Treatment" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 text-[#2D6A4F]">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-[#74C69D]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="font-bold text-sm">Feedback Real</span>
                </div>
                <p className="text-[#2D6A4F]/40 text-[10px] font-bold uppercase tracking-widest">Nossas Pacientes Brilham</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#2D6A4F]">Vidas Renovadas</h2>
            <p className="text-[#2D6A4F]/40">Histórias reais de quem redescobriu sua luz própria.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#F9FFF9] p-10 rounded-[2.5rem] border border-[#74C69D]/5 flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-6 ring-4 ring-white shadow-sm" />
                <div className="flex text-[#74C69D] mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#2D6A4F]/70 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-[#2D6A4F]">{t.name}</h4>
                  <p className="text-[#74C69D] text-[10px] font-bold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#F9FFF9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#2D6A4F]">Dúvidas Zen</h2>
            <p className="text-[#2D6A4F]/40">Transparência para sua paz de espírito.</p>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-[#74C69D]/10 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-[#F9FFF9]/50 transition-colors"
                >
                  <span className="font-bold text-[#2D6A4F]">{item.question}</span>
                  <ChevronDown className={`text-[#74C69D] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-[#2D6A4F]/60 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#74C69D] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
           <div className="absolute top-10 left-10 w-64 h-64 border-[16px] border-white rounded-full"></div>
           <div className="absolute bottom-20 right-20 w-48 h-48 border-[16px] border-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Sinta a leveza de ser <br /><span className="italic text-[#2D6A4F]">quem você é.</span></h2>
          <p className="text-white/90 text-xl mb-12">Agende sua análise sutil agora mesmo via WhatsApp.</p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-white text-[#74C69D] px-12 py-5 rounded-full font-bold text-xl hover:bg-[#F9FFF9] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle size={24} /> Chamar no WhatsApp
          </button>
          <p className="mt-6 text-white/50 text-xs font-bold uppercase tracking-[0.3em]">Atendimento Humanizado</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-[#74C69D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-[#74C69D] rounded-full flex items-center justify-center text-white font-serif text-xl">L</div>
                <span className="text-2xl font-bold tracking-tight text-[#2D6A4F]">Lumière</span>
              </div>
              <p className="text-[#2D6A4F]/40 text-sm leading-relaxed mb-8">
                Estética sutil e consciente. Unimos o frescor da natureza à ciência da beleza real.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#F9FFF9] rounded-full flex items-center justify-center text-[#74C69D] hover:bg-[#74C69D] hover:text-white transition-all shadow-sm"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 bg-[#F9FFF9] rounded-full flex items-center justify-center text-[#74C69D] hover:bg-[#74C69D] hover:text-white transition-all shadow-sm"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#2D6A4F] mb-8 text-[10px] uppercase tracking-[0.3em]">Menu</h4>
              <ul className="space-y-4 text-[#2D6A4F]/40 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-[#74C69D] transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-[#74C69D] transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollToSection('serviços')} className="hover:text-[#74C69D] transition-colors">Protocolos</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#2D6A4F] mb-8 text-[10px] uppercase tracking-[0.3em]">Contato</h4>
              <ul className="space-y-4 text-[#2D6A4F]/40 text-sm">
                <li className="font-bold text-[#74C69D]"><span>(11) 99999-9999</span></li>
                <li><span>hello@lumiere.com.br</span></li>
                <li><span>São Paulo, Brasil</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#2D6A4F] mb-8 text-[10px] uppercase tracking-[0.3em]">Horários</h4>
              <ul className="space-y-4 text-[#2D6A4F]/40 text-sm">
                <li className="flex justify-between"><span>Seg - Sex</span> <span>09h - 19h</span></li>
                <li className="flex justify-between"><span>Sáb</span> <span>09h - 13h</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#74C69D]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[#2D6A4F]/20 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2024 Lumière Estética Sutil. Respire Beleza.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50"
      >
        <MessageCircle size={32} />
      </button>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#74C69D]/10 p-4 z-40 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#74C69D]">Agende Agora</span>
        <button 
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          className="bg-[#74C69D] text-white px-8 py-2 rounded-full text-xs font-bold"
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default App;
