import type { TimelineItemData } from '../types/timeline-item-data';

export const EXPERIENCE: TimelineItemData[] = [
  {
    title: 'Semi Senior Frontend Developer',
    company: 'Indra Group',
    location: 'Colombia - Remoto',
    startDate: 'Enero 2026',
    description:
      'Desarrollo frontend con Web Components Lit, JavaScript y TypeScript en la aplicación móvil (Android - iOS) y web BBVA Empresas',
    listTitle: 'Responsabilidades',
    items: [
      'Desarrollo frontend con el framework Cells de BBVA para la implementación de Web Components modulares utilizando Lit, Polymer, SASS, CSS',
      'Implementación de features en microfrontends Cells',
      'Integración de REST API endpoints',
      'Implementación de unit tests con @open-wc/testing, Mocha, Chai, y Sinon',
      'Tests end-to-end con Cucumber y Selenium',
      'Envío de eventos de analítica para la trazabilidad de la interacción del usuario con la interfaz gráfica de la aplicación',
      'Despliegue de microfrontends en entornos para pruebas preliminares',
    ],
  },
  {
    title: 'Software Developer',
    company: 'RithmXO',
    location: 'Estados Unidos - Remoto',
    startDate: 'Enero 2022',
    endDate: 'Enero 2026',
    description:
      'Desarrollo de aplicaciones web con tecnologías como Angular, React y Node.js.',
    listTitle: 'Responsabilidades',
    items: [
      'Desarrollo frontend con HTML, CSS, Tailwind CSS, TypeScript, React, Redux, Angular, RxJS',
      'Implementación de Feature Flags con Split.io',
      'Desarrollo backend con Node.js, Express.js, JWT, MySQL, PostgreSQL, MongoDB',
      'Uso de Docker y pipelines CI/CD con GitHub Actions',
      'Testing con Jest, Jasmine Framework, y Playwright',
      'Procesamiento de pagos con Stripe',
    ],
  },
];
