
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
  UserCheck
} from 'lucide-react';
import { Service, FAQItem, Benefit } from './types';

export const BENEFITS: Benefit[] = [
  {
    title: "Equipamentos de Elite",
    description: "Tecnologia de ponta importada para máxima ativação muscular e segurança.",
    icon: <Dumbbell size={24} />
  },
  {
    title: "Suporte 24h",
    description: "Treine no seu horário. Abertos todos os dias para que você nunca perca o foco.",
    icon: <Clock size={24} />
  },
  {
    title: "Time de Especialistas",
    description: "Personal trainers certificados prontos para ajustar cada detalhe da sua evolução.",
    icon: <UserCheck size={24} />
  }
];

export const SERVICES: Service[] = [
  {
    id: 'musculacao',
    title: 'Musculação Alta Performance',
    tag: 'Mais Procurado',
    description: 'Foco total em hipertrofia e força com acompanhamento de biomecânica aplicada.',
    price: 'R$ 99,90',
    icon: <Activity size={24} />,
    features: [
      'Avaliação Física Mensal',
      'Treino Personalizado no App',
      'Acesso a Área de Pesos Livres',
      'Ar-condicionado Central'
    ]
  },
  {
    id: 'crossfit',
    title: 'Titan Cross & HIIT',
    tag: 'Intensidade Máxima',
    description: 'Aulas em grupo dinâmicas para quem busca queima calórica extrema e condicionamento.',
    price: 'R$ 149,90',
    icon: <Flame size={24} />,
    features: [
      'WODs Diários Desafiadores',
      'Coach Dedicado por Aula',
      'Comunidade Ativa',
      'Equipamentos Pro-Series'
    ]
  },
  {
    id: 'personal',
    title: 'Personal VIP 1-on-1',
    tag: 'Resultados Rápidos',
    description: 'Atenção total aos seus objetivos com um profissional exclusivo para sua jornada.',
    price: 'Sob Consulta',
    icon: <Target size={24} />,
    features: [
      'Plano Alimentar Integrado',
      'Monitoramento de Carga Real-time',
      'Horário Flexível',
      'Foco em Técnica Perfeita'
    ]
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Iniciantes podem treinar na Titan?',
    answer: 'Com certeza! Temos protocolos específicos para quem está começando, garantindo uma adaptação segura e eficiente.'
  },
  {
    question: 'Como funciona o cancelamento?',
    answer: 'Nossos planos recorrentes não possuem fidelidade oculta. Você pode cancelar com 30 dias de antecedência sem taxas abusivas.'
  },
  {
    question: 'A academia abre aos feriados?',
    answer: 'Sim, operamos em regime especial aos feriados para que sua rotina de treinos não sofra interrupções.'
  }
];
