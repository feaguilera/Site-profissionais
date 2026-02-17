
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
  Compass,
  Sparkles,
  Wheat,
  Feather
} from 'lucide-react';
import { Service, FAQItem } from './types';

export const BENEFITS = [
  {
    title: "Preparo Noble",
    description: "Cada esfiha é aberta individualmente de forma manual, preservando a leveza e a estrutura aerada da massa.",
    icon: <Feather size={24} />
  },
  {
    title: "Insumos Raros",
    description: "Trabalhamos com farinhas de alta performance e queijos selecionados por pequenos produtores.",
    icon: <Wheat size={24} />
  },
  {
    title: "Legado e Arte",
    description: "Uma história de 30 anos em Ourinhos, fundamentada no respeito absoluto ao paladar do cliente.",
    icon: <Award size={24} />
  }
];

export const SERVICES: Service[] = [
  {
    id: 'tradicional',
    title: 'Clássicos Atemporais',
    tag: 'A Tradição',
    description: 'Sabores que definiram nossa história, como carne com especiarias e mussarela premium.',
    price: 'A partir de R$ 4,50',
    icon: <Utensils size={24} />,
    features: [
      'Blend de carnes nobres',
      'Temperos secretos',
      'Massa extra leve',
      'Feito na hora'
    ]
  },
  {
    id: 'gourmet',
    title: 'Harmonia Gourmet',
    tag: 'Seleção Premium',
    description: 'Combinações sofisticadas de ingredientes frescos como rúcula, tomate seco e queijos especiais.',
    price: 'A partir de R$ 6,90',
    icon: <Star size={24} />,
    features: [
      'Ingredientes selecionados',
      'Azeite extravirgem',
      'Vegetais orgânicos',
      'Finalização manual'
    ]
  },
  {
    id: 'doces',
    title: 'Patisserie Doce',
    tag: 'O Final Perfeito',
    description: 'Delicadezas em massa artesanal recheadas com chocolate de grife e frutas frescas da estação.',
    price: 'A partir de R$ 7,50',
    icon: <Heart size={24} />,
    features: [
      'Chocolate belga',
      'Doce de leite artesanal',
      'Massa crocante',
      'Apresentação impecável'
    ]
  },
  {
    id: 'acompanhamentos',
    title: 'Sides & Fresh',
    tag: 'Acompanhamentos',
    description: 'Salgados tradicionais e bebidas naturais que completam a experiência Casa da Esfiha.',
    price: 'Menu Boutique',
    icon: <Coffee size={24} />,
    features: [
      'Kibe com hortelã fresca',
      'Sucos prensados a frio',
      'Coxinha de catupiry real',
      'Ambiente climatizado'
    ]
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Onde encontro as unidades?',
    answer: 'Nossas casas boutique estão localizadas na Rua Rio de Janeiro, 186 e na Rua Antônio Carlos Mori, 337, no coração de Ourinhos-SP.'
  },
  {
    question: 'Qual o horário de atendimento?',
    answer: 'Recebemos nossos clientes diariamente das 17:00 às 23:30. Oferecemos um ambiente acolhedor para sua refeição.'
  },
  {
    question: 'Vocês utilizam ingredientes frescos?',
    answer: 'Incondicionalmente. Nossa filosofia baseia-se no frescor absoluto de cada insumo utilizado em nossas receitas.'
  },
  {
    question: 'Como solicitar o menu completo?',
    answer: 'Você pode visualizar nossa vitrine física em nossas lojas ou solicitar o menu digital via WhatsApp para sua conveniência.'
  },
  {
    question: 'Aceitam reservas?',
    answer: 'Atendemos por ordem de chegada para garantir a fluidez da experiência, mas nossas unidades possuem amplo espaço para sua família.'
  }
];
