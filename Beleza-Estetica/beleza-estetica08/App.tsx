
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
            <div className="w-10 h-10 bg-[#4895EF] rounded-full flex items-center justify-center text-white font-serif text-xl shadow-sm">L</div>
            <span className="text-xl font-bold tracking-tight text-[#023E8A]">Lumière</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-[#4895EF] transition-colors ${scrolled ? 'text-[#023E8A]/70' : 'text-[#023E8A]/80'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#4895EF] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#4361EE] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Agendar Avaliação
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#023E8A]" /> : <Menu className="text-[#023E8A]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#023E8A] font-medium py-2 border-b border-[#F0F8FF]"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#4895EF] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
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
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Premium Aesthetic Clinic" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0F8FF] via-[#F0F8FF]/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#4895EF]/15 text-[#4895EF] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-[#4895EF]/10">
              Estética de Alta Tecnologia
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#023E8A] mb-6 leading-tight">
              Sua beleza <br /><span className="italic text-[#4895EF]">em águas claras.</span>
            </h1>
            <p className="text-xl text-[#023E8A]/60 mb-8 leading-relaxed">
              Tratamentos avançados para uma pele profundamente hidratada, firme e luminosa. A confiança que você merece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#4895EF] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#4361EE] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#4895EF]/20"
              >
                Solicitar Orçamento <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('serviços')}
                className="bg-white text-[#4895EF] border-2 border-[#4895EF]/20 px-8 py-4 rounded-full font-bold text-lg hover:border-[#4895EF] hover:bg-[#F0F8FF] transition-all"
              >
                Ver Serviços
              </button>
            </div>

            <div className="flex items-center gap-8 border-t border-[#4895EF]/10 pt-8">
              <div className="flex items-center gap-2">
                <div className="bg-[#4895EF]/10 p-2 rounded-full text-[#4895EF]">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-[#023E8A] text-sm">Altíssimo Padrão</p>
                  <p className="text-[#023E8A]/40 text-xs">Clínica Certificada</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#4895EF]/10 p-2 rounded-full text-[#4895EF]">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#023E8A] text-sm">Segurança</p>
                  <p className="text-[#023E8A]/40 text-xs">Protocolos Médicos</p>
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
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#023E8A]">A clareza que faltava para <span className="text-[#4895EF] italic">seu espelho.</span></h2>
            <p className="text-[#023E8A]/50 max-w-2xl mx-auto text-lg">Pare de esconder o que te incomoda. Revelamos sua melhor face.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Pele Desidratada', desc: 'Recupere o brilho hídrico e a maciez de uma pele saudável.' },
              { title: 'Manchas e Sombras', desc: 'Protocolos de uniformização com tecnologia de luz avançada.' },
              { title: 'Perda de Contorno', desc: 'Redefinição estratégica para um semblante mais jovem.' },
              { title: 'Olhar de Cansaço', desc: 'Tratamentos específicos para suavizar olheiras e bolsas.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F0F8FF] p-8 rounded-3xl border border-[#4895EF]/5 hover:border-[#4895EF]/40 transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#4895EF] mb-6 shadow-sm group-hover:bg-[#4895EF] group-hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#023E8A]">{item.title}</h3>
                <p className="text-[#023E8A]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="sobre" className="py-24 bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tech Clinic" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#4895EF] rounded-full -z-0 opacity-10 blur-3xl"></div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-lg hidden md:block border border-[#4895EF]/10">
              <p className="text-[#4895EF] font-bold text-4xl mb-1">Elite</p>
              <p className="text-[#023E8A]/40 text-sm uppercase tracking-widest font-bold">Tecnologia Azul</p>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#023E8A]">Ciência e <span className="text-[#4895EF]">transparência.</span></h2>
            <p className="text-[#023E8A]/70 text-lg mb-8 leading-relaxed">
              O azul representa nossa dedicação à precisão. Cada procedimento na Lumière é baseado em evidências científicas e resultados mensuráveis.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { step: '01', title: 'Check-up Facial', desc: 'Mapeamento digital da saúde da sua pele antes de começar.' },
                { step: '02', title: 'Procedimento Master', desc: 'Execução sob rigorosos padrões de assepsia e tecnologia.' },
                { step: '03', title: 'Monitoramento', desc: 'Acompanhamento digital do seu progresso pós-sessão.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="text-3xl font-serif text-[#4895EF]/30 font-bold">{step.step}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#023E8A]">{step.title}</h4>
                    <p className="text-[#023E8A]/50 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('serviços')}
              className="bg-[#4895EF] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4361EE] transition-all shadow-md"
            >
              Nossos Protocolos
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#023E8A]">Experiências Lumière</h2>
            <p className="text-[#023E8A]/40 max-w-2xl mx-auto">Procedimentos de elite para pacientes que buscam o melhor.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-[#F0F8FF] rounded-[2.5rem] overflow-hidden border border-[#4895EF]/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                {service.tag && (
                  <div className="absolute top-6 right-6 bg-[#4895EF] text-white px-4 py-1 rounded-full text-[10px] font-bold z-10 shadow-sm uppercase tracking-widest">
                    {service.tag}
                  </div>
                )}
                <div className="h-64 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${service.id}/600/400`} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#023E8A]">{service.title}</h3>
                  <p className="text-[#023E8A]/50 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#4895EF]/10">
                    <span className="text-[#4895EF] font-bold">{service.price}</span>
                    <button 
                      onClick={() => window.open(`https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre ${service.title}`, '_blank')}
                      className="text-[#023E8A] font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:text-[#4895EF] transition-colors"
                    >
                      Reservar <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#023E8A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4895EF] rounded-full blur-[150px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Por que confiar na <br /><span className="text-[#4895EF]">Lumière?</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#4895EF] border border-white/20">
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
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tech Treatment" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 text-[#023E8A]">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-[#4895EF]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="font-bold text-sm">Rating 5.0</span>
                </div>
                <p className="text-[#023E8A]/40 text-[10px] font-bold uppercase tracking-widest">Compromisso com o Paciente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#023E8A]">Vozes que Inspiram</h2>
            <p className="text-[#023E8A]/40">O reconhecimento sincero de quem confiou em nosso olhar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#F0F8FF] p-10 rounded-[2.5rem] border border-[#4895EF]/5 flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-6 ring-4 ring-white shadow-sm" />
                <div className="flex text-[#4895EF] mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#023E8A]/70 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-[#023E8A]">{t.name}</h4>
                  <p className="text-[#4895EF] text-[10px] font-bold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#F0F8FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#023E8A]">Transparência Total</h2>
            <p className="text-[#023E8A]/40">Suas perguntas respondidas com clareza clínica.</p>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-[#4895EF]/10 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-[#F0F8FF]/50 transition-colors"
                >
                  <span className="font-bold text-[#023E8A]">{item.question}</span>
                  <ChevronDown className={`text-[#4895EF] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-[#023E8A]/60 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4895EF] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
           <div className="absolute top-10 left-10 w-64 h-64 border-[16px] border-white rounded-full"></div>
           <div className="absolute bottom-20 right-20 w-48 h-48 border-[16px] border-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">O próximo passo para sua <br /><span className="italic text-[#023E8A]">melhor versão.</span></h2>
          <p className="text-white/90 text-xl mb-12">Agende hoje sua análise profissional e sinta a diferença Lumière.</p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-white text-[#4895EF] px-12 py-5 rounded-full font-bold text-xl hover:bg-[#F0F8FF] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle size={24} /> Conversar no WhatsApp
          </button>
          <p className="mt-6 text-white/50 text-xs font-bold uppercase tracking-[0.3em]">Atendimento VIP & Personalizado</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-[#4895EF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-[#4895EF] rounded-full flex items-center justify-center text-white font-serif text-xl">L</div>
                <span className="text-2xl font-bold tracking-tight text-[#023E8A]">Lumière</span>
              </div>
              <p className="text-[#023E8A]/40 text-sm leading-relaxed mb-8">
                Referência em estética de alta performance. Onde a ciência encontra a arte do rejuvenescimento.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#4895EF] hover:bg-[#4895EF] hover:text-white transition-all shadow-sm"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#4895EF] hover:bg-[#4895EF] hover:text-white transition-all shadow-sm"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#4895EF] mb-8 text-[10px] uppercase tracking-[0.3em]">Navegação</h4>
              <ul className="space-y-4 text-[#023E8A]/40 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-[#4895EF] transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-[#4895EF] transition-colors">A Clínica</button></li>
                <li><button onClick={() => scrollToSection('serviços')} className="hover:text-[#4895EF] transition-colors">Tratamentos</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#4895EF] mb-8 text-[10px] uppercase tracking-[0.3em]">Fale Conosco</h4>
              <ul className="space-y-4 text-[#023E8A]/40 text-sm">
                <li className="font-bold text-[#4895EF]"><span>(11) 99999-9999</span></li>
                <li><span>contato@lumiere.com.br</span></li>
                <li><span>São Paulo, SP</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#4895EF] mb-8 text-[10px] uppercase tracking-[0.3em]">Horários</h4>
              <ul className="space-y-4 text-[#023E8A]/40 text-sm">
                <li className="flex justify-between"><span>Seg - Sex</span> <span>09h - 19h</span></li>
                <li className="flex justify-between"><span>Sáb</span> <span>09h - 13h</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#4895EF]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[#023E8A]/20 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2024 Lumière Estética. Excelência em cada detalhe.</p>
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
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#4895EF]/10 p-4 z-40 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#4895EF]">Avaliação Gratuita</span>
        <button 
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          className="bg-[#4895EF] text-white px-8 py-2 rounded-full text-xs font-bold"
        >
          Agendar
        </button>
      </div>
    </div>
  );
};

export default App;
