import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Droplets, 
  Waves, 
  Search, 
  Sun, 
  Layers, 
  Target,
  Trophy,
  Activity,
  Maximize,
  Wind,
  Brush
} from 'lucide-react';
import { Service, Testimonial, FAQItem, Benefit } from './types';

export const BRANDS = [
  "Porsche", "Ferrari", "Lamborghini", "BMW M", "Mercedes AMG", "Land Rover"
];

export const PROCESS = [
  {
    title: "Descontaminação",
    description: "Remoção profunda de impurezas ferrosas e resíduos químicos da pintura.",
    icon: <Waves className="w-6 h-6" />
  },
  {
    title: "Correção Técnica",
    description: "Polimento em múltiplos estágios para eliminar riscos e restaurar o brilho.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Selagem & Escudo",
    description: "Aplicação de cerâmica ou grafeno para proteção duradoura.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Entrega de Showroom",
    description: "Inspeção final sob luzes de detalhamento para perfeição absoluta.",
    icon: <Sun className="w-6 h-6" />
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Vitrificação 9H',
    description: 'Proteção cerâmica com dureza 9H contra raios UV, seiva e sujeira por até 3 anos.',
    price: 'A partir de R$ 1.500',
    tag: 'Mais Procurado',
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: '2',
    title: 'Polimento Técnico',
    description: 'Restauração total do verniz, eliminando redemoinhos (swirls) e oxidação.',
    price: 'A partir de R$ 800',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: '3',
    title: 'PPF (Paint Protection)',
    description: 'Filme invisível regenerativo que protege contra pedras e batidas leves.',
    price: 'Sob Consulta',
    icon: <Maximize className="w-6 h-6" />
  },
  {
    id: '4',
    title: 'Detailing Interno',
    description: 'Higienização profunda com extração e hidratação de couros premium.',
    price: 'A partir de R$ 450',
    icon: <Brush className="w-6 h-6" />
  },
  {
    id: '5',
    title: 'Proteção de Rodas',
    description: 'Selagem específica para suportar altas temperaturas e poeira de freio.',
    price: 'A partir de R$ 350',
    icon: <Activity className="w-6 h-6" />
  },
  {
    id: '6',
    title: 'Lavagem Detalhada',
    description: 'Método de dois baldes para evitar riscos, focando nos mínimos detalhes.',
    price: 'A partir de R$ 180',
    icon: <Droplets className="w-6 h-6" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Fabio Meirelles',
    role: 'Dono de Audi RS6',
    content: 'O resultado da vitrificação foi surreal. O carro parece que está sempre molhado de tão brilhante.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    name: 'Eduardo Guedes',
    role: 'Entusiasta de Clássicos',
    content: 'Levei meu Porsche 1990 para um polimento técnico. A cor voltou a ter uma profundidade que eu nunca tinha visto.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    name: 'Camila Rossi',
    role: 'Executiva',
    content: 'O PPF salvou meu capô de várias pedras na estrada. Vale cada centavo pela paz de espírito.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Brilho Espelhado',
    description: 'Técnicas avançadas para alcançar o máximo de reflexo e profundidade.',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: 'Valorização Real',
    description: 'Carros com estética impecável e protegida valem até 15% mais na revenda.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Facilidade na Lavagem',
    description: 'Superfícies hidrofóbicas que repelem água e sujeira com facilidade.',
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: 'Precisão em Detalhes',
    description: 'Tratamos cada fresta e emblema com ferramentas de micro-detalhamento.',
    icon: <Target className="w-6 h-6" />
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Quanto tempo dura a vitrificação?',
    answer: 'Dependendo do produto escolhido, a proteção pode durar de 1 a 5 anos, desde que as manutenções sejam feitas corretamente.'
  },
  {
    question: 'O polimento remove riscos profundos?',
    answer: 'Riscos que ultrapassaram a camada do verniz (chegaram na tinta) não saem com polimento, mas podemos suavizá-los significativamente.'
  },
  {
    question: 'O que é PPF?',
    answer: 'É o Paint Protection Film, uma película de poliuretano termoplástico que protege fisicamente a pintura contra impactos.'
  },
  {
    question: 'Posso lavar o carro normalmente após o serviço?',
    answer: 'Sim, mas recomendamos o uso de shampoos neutros e luvas de microfibra para não agredir a proteção aplicada.'
  }
];