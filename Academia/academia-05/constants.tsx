
import React from 'react';
import { 
  Dumbbell, 
  Zap, 
  Clock, 
  Trophy, 
  Users,
  Target,
  ShieldCheck,
  Flame,
  Activity,
  UserCheck,
  Cpu,
  Monitor,
  Microscope,
  TrendingUp,
  Infinity
} from 'lucide-react';
import { Service, FAQItem, Benefit } from './types';

export const BENEFITS: Benefit[] = [
  {
    title: "Hardware Bio-Optimizado",
    description: "Equipamentos com sensores de carga em tempo real para ajuste instantâneo de intensidade.",
    icon: <Cpu size={24} />
  },
  {
    title: "Ecossistema 24/7",
    description: "Sincronize seu treino com sua rotina biológica. Acesso total, qualquer hora do dia ou da noite.",
    icon: <Monitor size={24} />
  },
  {
    title: "Analistas de Performance",
    description: "Nossos coaches não apenas ensinam, eles analisam seus dados para otimizar cada repetição.",
    icon: <Microscope size={24} />
  }
];

export const SERVICES: Service[] = [
  {
    id: 'musculacao',
    title: 'Bio-Hypertrophy',
    tag: 'Base_Level',
    description: 'Foco total em hipertrofia otimizada por biomecânica avançada.',
    price: 'R$ 119',
    icon: <Activity size={24} />,
    features: [
      'Digital Training Log',
      'Sensores Bio-Feedback',
      'Área de Carga Pro',
      'Climatização Ionizada'
    ]
  },
  {
    id: 'crossfit',
    title: 'Titan HIIT Matrix',
    tag: 'Max_Intensity',
    description: 'Protocolos de queima calórica extrema baseados em variabilidade cardíaca.',
    price: 'R$ 169',
    icon: <Zap size={24} />,
    features: [
      'WODs Data-Driven',
      'Monitoramento Real-time',
      'Comunidade Atleta',
      'Equipamentos V-Series'
    ]
  },
  {
    id: 'personal',
    title: 'Neural Personal VIP',
    tag: 'Elite_Access',
    description: 'Acompanhamento neuro-muscular exclusivo para resultados exponenciais.',
    price: 'Consult',
    icon: <Target size={24} />,
    features: [
      'Nutrição Nutrigenômica',
      'Recovery Assistido',
      'Agenda Algorítmica',
      'Correção via IA'
    ]
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'O sistema aceita iniciantes?',
    answer: 'Sim. Nosso algoritmo de onboarding ajusta as cargas e técnicas para sua capacidade atual, evoluindo conforme você se adapta.'
  },
  {
    question: 'Como funciona o cancelamento do contrato?',
    answer: 'Liberdade total. O cancelamento pode ser feito via App com 30 dias de antecedência. Sem burocracia humana.'
  },
  {
    question: 'Vocês têm estacionamento monitorado?',
    answer: 'Sim, dispomos de estacionamento amplo com segurança 24h e monitoramento via reconhecimento de placa para alunos.'
  }
];
