
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
  Box,
  Smile,
  Gem
} from 'lucide-react';
import { Service, FAQItem } from './types';

export const BENEFITS = [
  {
    title: "Massa Signature",
    description: "Nossa massa é desenvolvida para ter a elasticidade correta, permitindo um fechamento que não rompe no forno.",
    icon: <Gem size={24} />
  },
  {
    title: "Câmara de Vapor",
    description: "O design fechado cria uma câmara de vapor interna que cozinha o recheio com sua própria umidade.",
    icon: <Flame size={24} />
  },
  {
    title: "Legado Ourinhense",
    description: "Há mais de três décadas servindo o mesmo padrão de excelência no centro de Ourinhos.",
    icon: <Award size={24} />
  }
];

export const SERVICES: Service[] = [
  {
    id: 'esfihas-bistro',
    title: 'Esfihas Fechadas',
    tag: 'Especialidade Tradicional',
    isPromo: true,
    description: 'A jóia da casa. Seladas manualmente e assadas até atingirem o dourado perfeito. Suculência em cada mordida.',
    price: 'R$ 4,50',
    icon: <Box size={24} />,
    features: [
      'Carne fresca temperada',
      'Mussarela derretida',
      'Massa artesanal fina',
      'Fechamento clássico'
    ]
  },
  {
    id: 'salgados-elite',
    title: 'Salgados Artesanais',
    tag: 'Padrão Gourmet',
    description: 'Coxinhas, kibes e bolinhos de queijo feitos com massa de batata real e fritura controlada.',
    price: 'R$ 5,00',
    icon: <Star size={24} />,
    features: [
      'Crocância externa absoluta',
      'Recheios abundantes',
      'Sem excesso de óleo',
      'Ingredientes premium'
    ]
  },
  {
    id: 'doces-assinatura',
    title: 'Sobremesas de Forno',
    tag: 'Finalização Doce',
    description: 'Nossas esfihas fechadas doces são o encerramento perfeito para seu jantar. Quentes e cremosas.',
    price: 'R$ 7,50',
    icon: <Heart size={24} />,
    features: [
      'Chocolate ao leite nobre',
      'Doce de leite tradicional',
      'Massa equilibrada',
      'Feito sob encomenda'
    ]
  },
  {
    id: 'bebidas-frescas',
    title: 'Sucos da Estação',
    tag: 'Harmonização',
    description: 'Sucos extraídos na hora para acompanhar a intensidade dos nossos salgados artesanais.',
    price: 'Menu Gelado',
    icon: <Coffee size={24} />,
    features: [
      'Laranja natural colhida',
      'Limonadas refrescantes',
      'Gelado na medida certa',
      'Frutas selecionadas'
    ]
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Qual a técnica usada no fechamento?',
    answer: 'Nossas esfihas são seladas usando uma técnica manual de "pinçamento" das bordas, o que garante que nenhum vapor escape durante o assamento no forno de alta temperatura.'
  },
  {
    question: 'Como as unidades de Ourinhos operam?',
    answer: 'Operamos com duas unidades centrais para garantir agilidade. Unidade I na Rio de Janeiro e Unidade II na Antônio Carlos Mori. Ambas seguem o rigoroso padrão Casa da Esfiha.'
  },
  {
    question: 'O delivery preserva a temperatura?',
    answer: 'Utilizamos embalagens térmicas específicas para esfihas fechadas, que mantêm o calor por até 40 minutos, garantindo que o produto chegue em sua mesa como se tivesse acabado de sair do forno.'
  },
  {
    question: 'Existem opções para vegetarianos?',
    answer: 'Sim! Temos esfihas fechadas de queijo, escarola com queijo e milho com queijo, todas preparadas com o mesmo cuidado artesanal.'
  }
];
