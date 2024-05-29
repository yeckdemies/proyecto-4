const data = {
  name: 'Yolanda',
  surname: 'Pérez',
  address: 'Armilla',
  email: 'yolandapnr@email.com',
  avatar:
    'https://res.cloudinary.com/dszffglcl/image/upload/v1716458026/Imagen_de_perfil_wklhk6.jpg',
  aboutMe: `Tengo una gran capacidad para trabajar en equipo y coordinar tareas. Mi enfoque proactivo y mi afán de superación me han permitido adaptarme a diferentes entornos laborales y asumir nuevos desafíos con éxito. Soy respetuosa y me comprometo a brindar un excelente servicio, demostrando profesionalidad y empatía. Estoy constantemente buscando oportunidades para seguir aprendiendo y crecer profesionalmente, manteniéndome al día en las últimas tendencias y tecnologías en el ámbito de la informática y el desarrollo de software.`,

  education: [
    {
      position: 'Full Stack Developer',
      company: 'ThePower Tech School',
      endDate: 2024,
      description: [
        'HTML5 y CSS3',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'React',
        'React Native',
        'Next.js',
        'Vite',
        'Vue.js',
        'Ionic',
        'Flutter',
        'Angular',
        'SQL & NoSQL',
        'Mongo DB',
        'Figma'
      ]
    },
    {
      position: 'CFGS Desarrollo de Aplicaciones WEB',
      company: 'IES AGUADULCE',
      endDate: 2021,
      description: [
        'Sistemas informáticos',
        'Bases de datos',
        'Programación',
        'Lenguajes de marcas y sistemas de gestión de información',
        'Entornos de desarrollo',
        'Desarrollo web en entorno cliente',
        'Desarrollo web en entorno servidor',
        'Despliegue de aplicaciones web',
        'Diseño de interfaces WEB',
        'Proyecto de desarrollo de aplicaciones web',
        'Formación y orientación laboral',
        'Empresa e iniciativa emprendedora',
        'Formación en centros de trabajo'
      ]
    },
    {
      position: 'CFGS Desarrollo de Aplicaciones Informáticas',
      company: 'IES ZAIDIN-VERGELES',
      endDate: 2007,
      description: [
        'Sistemas informáticos multiusuario y en red',
        'Análisis y diseño detallado de aplicaciones informáticas de gestión',
        'Programación en lenguajes estructurados',
        'Desarrollo de aplicaciones en entornos de cuarta generación y con herramientas CASE',
        'Diseño y realización de servicios de presentación en entornos gráficos',
        'Relaciones en el Entorno de Trabajo',
        'Formación y Orientación Laboral',
        'La Informática: su Utilización en las Empresas de Andalucía',
        'Proyecto de desarrollo de aplicaciones informáticas',
        'Formación en centros de trabajo'
      ]
    }
  ],
  workExperience: [
    {
      position: 'Administración de Sistemas Informáticos | Desarrollo',
      company: 'Ayuntamiento de Armilla',
      startDate: '12/2023',
      endDate: '',
      location: 'Armilla (Granada)',
      description: [
        'Formación en IT',
        'Desarrollo web',
        'Digitalización',
        'Helpdesk'
      ]
    },
    {
      position:
        'Desarrollo | Consultora funcional ERP | Coordinación de equipos | Testing | Helpdesk',
      company: 'Covirán Soluciones Tecnológicas',
      startDate: '08/2008',
      endDate: '12/2023',
      location: 'Atarfe (Granada)',
      description: [
        'Evaluación de los procesos existentes y definición de mejoras para adaptar el software a las necesidades de nuestros clientes',
        'Creación y Mantenimiento de Servidores IIS para sincronización de datos',
        'Realización de test y pruebas funcionales',
        'Configuración y personalización del software para adaptarlo a las necesidades específicas de cada cliente',
        'Entrenamiento y formación a técnicos y usuarios finales en el uso del software',
        'Coordinación de migraciones, implementación y despliegue del software en nuestros clientes',
        'Mantenimiento y soporte avanzado post-implementación a técnicos y usuarios finales',
        'Coordinación, revisión y creación de manuales, guías y documentación técnica para el uso y mantenimiento del software'
      ]
    },
    {
      position: 'Helpdesk',
      company: 'Attempora ETT, SL',
      startDate: '05/2008',
      endDate: '08/2008',
      location: 'Atarfe (Granada)',
      description: [
        'Soporte informático telefónico y de campo',
        'Formación a clientes finales en software de gestión comercial',
        'Mantenimiento e implantación de hardware y software'
      ]
    },
    {
      position: 'Desarrollo',
      company: 'Técnica Taine',
      startDate: '02/2008',
      endDate: '05/2008',
      location: 'Ogíjares (Granada)',
      description: [
        'Migración de datos de aplicación de gestión comercial a ERP',
        'Desarrollo de informes específicos',
        'Soporte funcional y técnico',
        'Mantenimiento informático',
        'Desarrollo web'
      ]
    },
    {
      position: 'Helpdesk | Desarrollo',
      company: 'RGB Consultores',
      startDate: '09/2007',
      endDate: '05/2008',
      location: 'Granada',
      description: [
        'Mantenimiento informático',
        'Soporte informático remoto e in situ',
        'Desarrollo web: Javascript, PHP',
        'Formación informática a usuario final'
      ]
    },
    {
      position: 'Programadora Junior',
      company: 'Intecna Soluciones Integrales',
      startDate: '04/2007',
      endDate: '08/2007',
      location: 'Granada',
      description: [
        'Portal del ciudadano de la Diputación de Granada: JSP',
        'Diputación de Cádiz: ASP, PHP y JavaScript',
        'HTML y CSS',
        'OpenCS'
      ]
    },
    {
      position: 'Administración de Sistemas Informáticos | Helpdesk',
      company: 'Europroma Soft',
      startDate: '06/2007',
      endDate: '06/2007',
      location: 'Motril (Granada)',
      description: [
        'Implantación de software: AM System, A3 Asesor',
        'Formación en microinformática y tecnologías implantadas',
        'Soporte técnico y formación',
        'Administración de sistemas y mantenimiento informático'
      ]
    }
  ],
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'RESTful API',
    'Git',
    'Frontend and Backend Development'
  ],
  projects: [
    {
      title: 'Réplica Starbucks',
      description:
        'Esta práctica consistió en crear una página web inspirada en el sitio de Starbucks. El proyecto se centró en el diseño y la estructura de la página, buscando capturar la estética y la funcionalidad del sitio oficial de Starbucks. Incluye secciones informativas, un menú de productos y elementos interactivos para mejorar la experiencia del usuario.',
      link: 'https://proyecto2-replica-starbucks.vercel.app',
      preview:
        'https://res.cloudinary.com/dszffglcl/image/upload/v1716920770/ReplicaStarbucks_v1plm9.png'
    },
    {
      title: 'Réplica Pinterest',
      description:
        'En esta práctica, he desarrollado una réplica de la página de búsqueda de Pinterest. El objetivo era recrear la interfaz de usuario y la experiencia de navegación de Pinterest, enfocándome en el diseño responsivo y la funcionalidad de búsqueda. Utilicé HTML, CSS y JavaScript para lograr un diseño visualmente atractivo y una experiencia de usuario fluida, similar a la plataforma original.',
      link: 'https://proyecto-3-replica-pinterest.vercel.app',
      preview:
        'https://res.cloudinary.com/dszffglcl/image/upload/v1716920770/ReplicaPinterest_gnjj9u.png'
    }
  ]
};

export default data;
