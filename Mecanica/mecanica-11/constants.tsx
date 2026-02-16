import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Gauge, 
  Settings, 
  Search, 
  Flame, 
  Cpu, 
  Target,
  Trophy,
  Activity,
  Maximize,
  Wind
} from 'lucide-react';
import { Service, Testimonial, FAQItem, Benefit } from './types';

export const BRANDS = [
  "Porsche", "Ferrari", "Lamborghini", "BMW M", "Mercedes AMG", "Audi RS"
];

export const PROCESS = [
  {
    title: "Telemetria Inicial",
    description: "Leitura completa de sensores e performance em tempo real.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Engenharia Reversa",
    description: "Análise técnica para identificar pontos de melhoria e gargalos de potência.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Ajuste de Precisão",
    description: "Execução com componentes forjados e calibração fina.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Validação de Pista",
    description: "Testes rigorosos para garantir estabilidade e torque máximo.",
    icon: <Trophy className="w-6 h-6" />
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Reprogramação ECU',
    description: 'Stage 1, 2 e 3 com mapas exclusivos para ganho real de cavalaria.',
    price: 'A partir de R$ 1.800',
    tag: 'Alta Performance',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: '2',
    title: 'Sistemas de Exaustão',
    description: 'Downpipes e Catbacks em Inox ou Titânio para ronco e fluxo otimizado.',
    price: 'Sob Consulta',
    icon: <Flame className="w-6 h-6" />
  },
  {
    id: '3',
    title: 'Dynamic Suspensions',
    description: 'Coilovers e ajustes de geometria para controle total em curvas.',
    price: 'A partir de R$ 2.500',
    icon: <Maximize className="w-6 h-6" />
  },
  {
    id: '4',
    title: 'Aerodinâmica Ativa',
    description: 'Instalação de kits em fibra de carbono para maior downforce.',
    icon: <Wind className="w-6 h-6" />
  },
  {
    id: '5',
    title: 'Manutenção Preventiva M',
    description: 'O cuidado técnico que veículos de alta performance exigem.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: '6',
    title: 'Diagnóstico Scanner 4K',
    description: 'Identificação cirúrgica de falhas eletrônicas complexas.',
    icon: <Search className="w-6 h-6" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ricardo Silveira',
    role: 'Piloto Amador',
    content: 'Meu 911 ganhou outra vida após o Stage 2. O atendimento técnico é o melhor que já vi no Brasil.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    name: 'Marcos Paulo',
    role: 'Colecionador',
    content: 'Confio todos os meus carros de pista à Carbon. Precisão é a palavra que define o trabalho deles.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    name: 'Juliana Torres',
    role: 'Entusiasta Track Day',
    content: 'A transparência no diagnóstico e a qualidade dos componentes usados são impecáveis.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Torque Máximo',
    description: 'Foco total em extrair cada grama de potência com segurança.',
    icon: <Gauge className="w-6 h-6" />
  },
  {
    title: 'Peças Forjadas',
    description: 'Parcerias com as maiores marcas globais de aftermarket.',
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: 'Garantia de Pista',
    description: 'Segurança absoluta para uso em condições extremas.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Equipe de Elite',
    description: 'Engenheiros mecânicos com experiência em competições.',
    icon: <Target className="w-6 h-6" />
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'A reprogramação afeta a vida útil do motor?',
    answer: 'Nossos mapas são desenvolvidos dentro das margens de segurança do fabricante, priorizando a eficiência sem comprometer a longevidade.'
  },
  {
    question: 'Vocês atendem carros populares?',
    answer: 'Somos especializados em veículos premium e performance, mas oferecemos serviços de diagnóstico para qualquer veículo que busque excelência técnica.'
  },
  {
    question: 'O serviço tem garantia?',
    answer: 'Sim, todos os nossos serviços de performance possuem 1 ano de garantia técnica e suporte total pós-ajuste.'
  },
  {
    question: 'Quanto tempo leva um Stage 1?',
    answer: 'Geralmente o processo de telemetria, ajuste e teste de validação leva de 4 a 6 horas.'
  }
];