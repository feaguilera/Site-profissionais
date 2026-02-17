
import React from 'react';
import { 
  Utensils, 
  Flame, 
  Clock, 
  Star, 
  Heart,
  Coffee,
  CheckCircle2,
  MapPin,
  Phone,
  Award,
  Zap,
  Layers,
  Sparkles,
  Wheat,
  ShieldAlert,
  ThumbsUp,
  Box
} from 'lucide-react';
import { Service, FAQItem } from './types';

export const BENEFITS = [
  {
    title: "Sabor Blindado",
    description: "Ao fechar a esfiha, criamos uma câmara de vapor que cozinha o recheio lentamente, mantendo toda a suculência.",
    icon: <Box size={24} />
  },
  {
    title: "Massa Extra Fina",
    description: "Nossa receita exclusiva resulta em uma massa que não pesa, sendo apenas o suporte para o recheio generoso.",
    icon: <Wheat size={24} />
  },
  {
    title: "Padrão de Ouro",
    description: "Mais de 30 anos aperfeiçoando a mesma receita que conquistou Ourinhos e região.",
    icon: <Award size={24} />
  }
];

export const SERVICES: Service[] = [
  {
    id: 'esfihas-fechadas',
    title: 'Esfihas Fechadas',
    tag: 'Especialidade da Casa',
    description: 'Nossas famosas esfihas fechadas. Carne, queijo e frango com tempero autoral e massa que derrete na boca.',
    price: 'R$ 4,50',
    icon: <Flame size={24} />,
    features: [
      'Assamento uniforme',
      'Recheio úmido e suculento',
      'Massa artesanal leve',
      'Fechamento manual'
    ]
  },
  {
    id: 'salgados-artesanais',
    title: 'Salgados Premium',
    tag: 'Fritos na Hora',
    description: 'Coxinhas de catupiry, kibes crocantes e enrolados. O acompanhamento perfeito para qualquer hora.',
    price: 'R$ 5,00',
    icon: <Utensils size={24} />,
    features: [
      'Crocância externa',
      'Catupiry de verdade',
      'Kibe com hortelã fresca',
      'Zero oleosidade'
    ]
  },
  {
    id: 'doces-forneados',
    title: 'Delícias Doces',
    tag: 'Sobremesas',
    description: 'Esfihas fechadas doces que guardam o recheio cremoso e quente para uma explosão de sabor.',
    price: 'R$ 7,50',
    icon: <Heart size={24} />,
    features: [
      'Chocolate de alta qualidade',
      'Doce de leite cremoso',
      'Combinações com frutas',
      'Finalização gourmet'
    ]
  },
  {
    id: 'sucos-naturais',
    title: 'Sucos & Bebidas',
    tag: 'Refrescos',
    description: 'A combinação clássica de Ourinhos: Esfiha fechada com suco natural feito na hora.',
    price: 'Menu Gelado',
    icon: <Coffee size={24} />,
    features: [
      'Laranja natural',
      'Opções refrescantes',
      'Bebidas selecionadas',
      'Sempre gelado'
    ]
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Qual o diferencial da esfiha fechada?',
    answer: 'Diferente da esfiha aberta, a fechada protege o recheio da exposição direta ao calor seco do forno, o que garante que a carne ou o queijo não fiquem secos, mantendo toda a umidade e sabor concentrados.'
  },
  {
    question: 'Vocês têm delivery em Ourinhos?',
    answer: 'Sim! Atendemos toda a cidade com entregadores próprios e parceiros para garantir que seu pedido chegue rápido e na temperatura certa.'
  },
  {
    question: 'Onde ficam as unidades da Casa da Esfiha?',
    answer: 'Temos duas casas no coração de Ourinhos: Unidade I na Rua Rio de Janeiro, 186 e Unidade II na Rua Antônio Carlos Mori, 337.'
  },
  {
    question: 'Posso fazer pedidos grandes para festas?',
    answer: 'Com certeza. Temos condições especiais e kits para eventos. Basta entrar em contato pelo nosso WhatsApp para um orçamento personalizado.'
  },
  {
    question: 'Quais são os horários de pico?',
    answer: 'Nossas casas costumam ser muito movimentadas entre as 19h e 21h. Recomendamos pedir com antecedência pelo WhatsApp para evitar espera.'
  }
];
