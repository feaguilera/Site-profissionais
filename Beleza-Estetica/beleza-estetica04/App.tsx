
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-[#FFC2D1] rounded-full flex items-center justify-center text-white font-serif text-xl shadow-sm">L</div>
            <span className="text-xl font-bold tracking-tight text-[#4A2027]">Lumière</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-[#FB6F92] transition-colors ${scrolled ? 'text-[#4A2027]/70' : 'text-[#4A2027]/80'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#FB6F92] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#ff85a2] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Agendar Agora
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#4A2027]" /> : <Menu className="text-[#4A2027]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#4A2027] font-medium py-2 border-b border-[#FFFBFC]"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#FB6F92] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Agendar via WhatsApp
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Facial Aesthetic" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBFC] via-[#FFFBFC]/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#FFC2D1]/30 text-[#FB6F92] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Estética Avançada & Leveza
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#4A2027] mb-6 leading-tight">
              Sua beleza <br /><span className="italic text-[#FFC2D1]">em harmonia.</span>
            </h1>
            <p className="text-xl text-[#4A2027]/60 mb-8 leading-relaxed">
              Descubra tratamentos que respeitam sua essência em um ambiente acolhedor, desenhado para o seu bem-estar absoluto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#FB6F92] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#ff85a2] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#FB6F92]/20"
              >
                Solicitar Orçamento <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('serviços')}
                className="bg-white text-[#FB6F92] border-2 border-[#FFC2D1]/40 px-8 py-4 rounded-full font-bold text-lg hover:border-[#FB6F92] hover:bg-[#FFFBFC] transition-all transform hover:-translate-y-1"
              >
                Ver Serviços
              </button>
            </div>

            <div className="flex items-center gap-8 border-t border-[#FFC2D1]/20 pt-8">
              <div className="flex items-center gap-2">
                <div className="bg-[#FFC2D1]/20 p-2 rounded-full">
                  <Star className="text-[#FFC2D1] w-5 h-5 fill-[#FFC2D1]" />
                </div>
                <div>
                  <p className="font-bold text-[#4A2027] text-sm">Padrão Ouro</p>
                  <p className="text-[#4A2027]/40 text-xs">Excelência em Atendimento</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#FFC2D1]/20 p-2 rounded-full">
                  <CheckCircle2 className="text-[#FFC2D1] w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#4A2027] text-sm">+2.000</p>
                  <p className="text-[#4A2027]/40 text-xs">Vidas Iluminadas</p>
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
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#4A2027]">Sua pele merece <span className="text-[#FFC2D1] italic">esse carinho?</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Pequenos cuidados diários refletem a luz que existe em você.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Sinais de Tempo', desc: 'Resgate o viço e a firmeza natural que o tempo insiste em esconder.' },
              { title: 'Textura da Pele', desc: 'Sinta a suavidade de uma pele profundamente hidratada e renovada.' },
              { title: 'Contornos Suaves', desc: 'Equilibre seus traços com a delicadeza que sua face merece.' },
              { title: 'Momento de Pausa', desc: 'Permita-se um tempo para você mesma em meio à rotina agitada.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FFFBFC] p-8 rounded-3xl border border-[#FFC2D1]/10 hover:border-[#FFC2D1] transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#FFC2D1] mb-6 shadow-sm group-hover:bg-[#FB6F92] group-hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#4A2027]">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="sobre" className="py-24 bg-[#FFFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-xl border-[12px] border-white">
              <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinica Interior" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FFC2D1] rounded-full -z-0 opacity-20 blur-2xl"></div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hidden md:block border border-[#FFC2D1]/10">
              <p className="text-[#FB6F92] font-bold text-4xl mb-1">Elite</p>
              <p className="text-[#4A2027]/40 text-sm uppercase tracking-wider font-bold">Tecnologia & Carinho</p>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#4A2027]">Ciência aliada à <span className="text-[#FB6F92]">sensibilidade.</span></h2>
            <p className="text-[#4A2027]/70 text-lg mb-8 leading-relaxed">
              Entendemos que cada rosto conta uma história. Nosso papel é apenas iluminar os melhores capítulos da sua.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { step: '01', title: 'Consultoria Afetiva', desc: 'Um café e uma conversa para entender o que faz você se sentir bem.' },
                { step: '02', title: 'Mãos de Fada', desc: 'Tratamentos executados com o máximo de precisão e leveza.' },
                { step: '03', title: 'Cuidado em Casa', desc: 'Acompanhamento total para que os resultados brilhem por muito tempo.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="text-3xl font-serif text-[#FFC2D1]/40 font-bold">{step.step}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#4A2027]">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('serviços')}
              className="bg-[#FB6F92] text-white px-8 py-4 rounded-full font-bold hover:bg-[#ff85a2] transition-all shadow-lg shadow-[#FB6F92]/10"
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
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#4A2027]">Momentos de Luz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Protocolos pensados para realçar o seu melhor.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-[#FFFBFC] rounded-[2.5rem] overflow-hidden border border-[#FFC2D1]/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                {service.tag && (
                  <div className="absolute top-6 right-6 bg-[#FFC2D1] text-[#4A2027] px-4 py-1 rounded-full text-[10px] font-bold z-10 shadow-sm uppercase tracking-widest">
                    {service.tag}
                  </div>
                )}
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#FFC2D1]/5 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img src={`https://picsum.photos/seed/${service.id}/600/400`} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-3 text-[#4A2027]">{service.title}</h3>
                  <p className="text-[#4A2027]/50 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#FFC2D1]/10">
                    <span className="text-[#FB6F92] font-bold">{service.price}</span>
                    <button 
                      onClick={() => window.open(`https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre ${service.title}`, '_blank')}
                      className="text-[#4A2027]/60 font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:text-[#FB6F92] transition-colors"
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
      <section className="py-24 bg-[#FFC2D1]/10 text-[#4A2027] overflow-hidden relative border-y border-[#FFC2D1]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC2D1] rounded-full blur-[120px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Um refúgio de <br /><span className="text-[#FB6F92]">paz e beleza.</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#FB6F92] shadow-sm border border-[#FFC2D1]/20">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-[#4A2027]/50 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white relative z-10">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Specialist" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg z-20 text-[#4A2027] border border-[#FFC2D1]/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-[#FFC2D1]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFC2D1" />)}
                  </div>
                  <span className="font-bold text-sm">Experiência Única</span>
                </div>
                <p className="text-[#4A2027]/40 text-[10px] font-bold uppercase tracking-widest">Atendimento 5 Estrelas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#4A2027]">Pacientes Felizes</h2>
            <p className="text-gray-400">O maior resultado é o seu sorriso de satisfação.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#FFFBFC] p-10 rounded-[2.5rem] border border-[#FFC2D1]/10 flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-6 ring-4 ring-white shadow-sm" />
                <div className="flex text-[#FFC2D1] mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#FFC2D1" />)}
                </div>
                <p className="text-[#4A2027]/70 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-[#4A2027]">{t.name}</h4>
                  <p className="text-[#FB6F92] text-[10px] font-bold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#FFFBFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#4A2027]">Sua Tranquilidade</h2>
            <p className="text-gray-400">Transparência total em cada etapa do seu tratamento.</p>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-[#FFC2D1]/10 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-[#FFFBFC]/50 transition-colors"
                >
                  <span className="font-bold text-[#4A2027]">{item.question}</span>
                  <ChevronDown className={`text-[#FFC2D1] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-[#4A2027]/60 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#FFC2D1] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
           <div className="absolute top-10 left-10 w-64 h-64 border-[16px] border-white rounded-full"></div>
           <div className="absolute bottom-20 right-20 w-48 h-48 border-[16px] border-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Permita-se <br /><span className="italic text-[#4A2027]">brilhar novamente.</span></h2>
          <p className="text-white/90 text-xl mb-12">Agende sua avaliação gratuita e venha viver a experiência Lumière.</p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-white text-[#FB6F92] px-12 py-5 rounded-full font-bold text-xl hover:bg-[#FFFBFC] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle size={24} /> Falar no WhatsApp
          </button>
          <p className="mt-6 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Cuidado em cada palavra</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-[#FFC2D1]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-[#FFC2D1] rounded-full flex items-center justify-center text-white font-serif text-xl">L</div>
                <span className="text-2xl font-bold tracking-tight text-[#4A2027]">Lumière</span>
              </div>
              <p className="text-[#4A2027]/40 text-sm leading-relaxed mb-8">
                Mais que uma clínica, um espaço de acolhimento para a sua melhor versão.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#FFFBFC] rounded-full flex items-center justify-center text-[#FFC2D1] hover:bg-[#FB6F92] hover:text-white transition-all shadow-sm"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 bg-[#FFFBFC] rounded-full flex items-center justify-center text-[#FFC2D1] hover:bg-[#FB6F92] hover:text-white transition-all shadow-sm"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#4A2027] mb-8 text-[10px] uppercase tracking-[0.3em]">O Espaço</h4>
              <ul className="space-y-4 text-[#4A2027]/40 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-[#FB6F92] transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-[#FB6F92] transition-colors">História</button></li>
                <li><button onClick={() => scrollToSection('serviços')} className="hover:text-[#FB6F92] transition-colors">Protocolos</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#4A2027] mb-8 text-[10px] uppercase tracking-[0.3em]">Contato</h4>
              <ul className="space-y-4 text-[#4A2027]/40 text-sm">
                <li className="flex items-start gap-3 italic"><span>(11) 99999-9999</span></li>
                <li className="flex items-start gap-3"><span>olá@lumiere.com.br</span></li>
                <li className="flex items-start gap-3"><span>São Paulo, Brasil</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#4A2027] mb-8 text-[10px] uppercase tracking-[0.3em]">Atendimento</h4>
              <ul className="space-y-4 text-[#4A2027]/40 text-sm">
                <li className="flex justify-between"><span>Seg - Sex</span> <span>09h às 19h</span></li>
                <li className="flex justify-between"><span>Sáb</span> <span>09h às 13h</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FFC2D1]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#4A2027]/20 text-[10px] font-bold uppercase tracking-widest">© 2024 Lumière. Feito para você.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-8 right-8 bg-[#FB6F92] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 shadow-[#FB6F92]/20"
      >
        <MessageCircle size={32} />
      </button>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#FFC2D1]/10 p-4 z-40 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FB6F92]">Agende agora</span>
        <button 
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          className="bg-[#FB6F92] text-white px-8 py-2 rounded-full text-xs font-bold shadow-sm"
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default App;
