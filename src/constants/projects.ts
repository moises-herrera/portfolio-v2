import type { Project } from '../types/project';
import { TAGS } from './tags';

export const PROJECTS: Project[] = [
  {
    title: 'SmartFinance',
    description:
      'Aplicación móvil para comprar y vender acciones. Puedes ver el precio de las acciones, comprar y vender acciones, y ver tu historial de transacciones.',
    github: 'https://github.com/moises-herrera/smart-finance-mobile',
    image: '/projects/smart-finance.webp',
    tags: [
      TAGS.REACT_NATIVE,
      TAGS.EXPO,
      TAGS.TYPESCRIPT,
      TAGS.REDUX,
      TAGS.NODE_JS,
      TAGS.EXPRESS,
      TAGS.MONGO_DB,
      TAGS.JWT,
      TAGS.ZOD,
    ],
  },
  {
    title: 'People - The Social Network',
    description: `People es una red social donde puedes compartir tus pensamientos, fotos y videos con tus amigos y familiares. Cuenta con un sistema de autenticación y autorización, y un feed de noticias donde puedes ver las publicaciones de tus amigos. También puedes seguir a otros usuarios y chatear con tus amigos en tiempo real.`,
    github: 'https://github.com/moises-herrera/social-network-frontend',
    image: '/projects/people.webp',
    tags: [
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.REDUX,
      TAGS.TAILWIND,
      TAGS.CHAKRA,
      TAGS.NODE_JS,
      TAGS.EXPRESS,
      TAGS.MONGO_DB,
      TAGS.JWT,
      TAGS.ZOD,
      TAGS.SOCKET_IO,
    ],
  },
  {
    title: 'Fast Food Delivery',
    description:
      'Aplicación web para gestionar pedidos de comida utilizando microservicios y RabbitMQ. Puedes ver el menú, realizar un pedido, y en el panel de administración se puede ver el estado de los pedidos en tiempo real.',
    image: '/projects/food-delivery.webp',
    tags: [
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
      TAGS.MATERIAL_UI,
      TAGS.NODE_JS,
      TAGS.MONGO_DB,
      TAGS.SOCKET_IO,
      TAGS.DOCKER,
      TAGS.RABBIT_MQ,
      TAGS.DIGITAL_OCEAN,
    ],
  },
  {
    title: 'Easy Bills',
    description:
      'Aplicación web para gestionar tus facturas y gastos. Puedes crear facturas, gastos y categorías, y ver un resumen de tus finanzas. También puedes exportar tus facturas y gastos a un archivo PDF.',
    github: 'https://github.com/moises-herrera/easy-bills-frontend',
    image: '/projects/easy-bills.webp',
    tags: [
      TAGS.ANGULAR,
      TAGS.RX_JS,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
      TAGS.CHART_JS,
      TAGS.JWT,
      TAGS.DOTNET,
      TAGS.MYSQL,
      TAGS.AZURE,
    ],
  },
];
