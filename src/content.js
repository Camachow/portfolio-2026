export const content = {
  pt: {
    nav: {
      about: "Sobre",
      stack: "Stack",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      languageLabel: "Selecionar idioma",
    },
    hero: {
      status: "Disponível para novos projetos",
      eyebrow: "Software Engineer • Frontend • Backend",
      title:
        "Crio experiências digitais com linguagem visual de produto e engenharia sólida.",
      lead: "Sou Rafael Camacho, desenvolvedor full-stack com foco em interfaces marcantes, aplicações escaláveis e integrações confiáveis para web e mobile.",
      ctaProjects: "Ver projetos",
      ctaContact: "Falar comigo",
      profileAlt: "Rafael Camacho",
      metrics: [
        { value: "+3", label: "anos construindo software" },
        { value: "Full-Stack", label: "web, mobile e integrações" },
        { value: "UFMG", label: "Engenharia de Sistemas" },
      ],
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Visão de engenharia com acabamento de produto.",
      intro:
        "Minha motivação é transformar problemas complexos em experiências claras, rápidas e úteis, sem abrir mão de arquitetura, manutenção e qualidade de código.",
      storyOne:
        "Desde cedo sou movido por tecnologia e pela forma como software bem construído muda rotinas, negócios e decisões. Gosto de unir implementação prática, visão sistêmica e senso estético para entregar produtos mais robustos e memoráveis.",
      storyTwo:
        "Hoje curso Engenharia de Sistemas na UFMG, onde aprofundei minha base em algoritmos, estruturas de dados, lógica computacional e engenharia de software. Isso complementa meu trabalho com aplicações web, mobile e fluxos integrados no mercado.",
      panelTitle: "Foco atual",
      highlights: [
        "Arquitetura de aplicações orientadas à escala",
        "Interfaces com foco em performance e clareza",
        "Integrações, automações e produtos digitais completos",
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologias que uso para construir produtos de ponta a ponta.",
      intro:
        "Combino front-end, back-end, dados e ferramentas de entrega para desenvolver produtos com velocidade e consistência.",
      specialtiesTitle: "Especialidades",
      snapshotTitle: "Snapshot",
      highlights: [
        "Front-end responsivo com foco em UX e performance",
        "Back-end e APIs para produtos escaláveis",
        "Modelagem de dados e integrações entre sistemas",
      ],
      snapshot: [
        { value: "4", label: "camadas de atuação" },
        { value: "15+", label: "tecnologias recorrentes" },
        { value: "Web + Mobile", label: "entrega full-stack" },
      ],
      technologiesLabel: "tecnologias",
      categories: [
        {
          title: "Linguagens",
          tag: "Base",
          accent: "#61dafb",
          focus: "Sintaxe, performance e tipagem",
          description:
            "Ferramentas centrais para lógica, tipagem, automação e construção de aplicações.",
          items: [
            ["javascript", "JavaScript"],
            ["typescript", "TypeScript"],
            ["python", "Python"],
            ["c", "C"],
            ["cplusplus", "C++"],
          ],
        },
        {
          title: "Frameworks & Bibliotecas",
          tag: "Entrega",
          accent: "#77f7c0",
          focus: "UI, mobile e APIs modernas",
          description:
            "Ecossistema principal para interfaces, aplicações server-side e experiências mobile.",
          items: [
            ["react", "ReactJS"],
            ["react", "React Native"],
            ["nestjs", "NestJS"],
            ["express", "Express.js"],
            ["nodejs", "Node.js"],
          ],
        },
        {
          title: "Banco de Dados",
          tag: "Dados",
          accent: "#8a7dff",
          focus: "Persistência e modelagem",
          description:
            "Tecnologias usadas para persistência, consulta e estruturação de informação.",
          items: [
            ["postgresql", "PostgreSQL"],
            ["mysql", "MySQL"],
            ["mongodb", "MongoDB"],
          ],
        },
        {
          title: "Ferramentas",
          tag: "Workflow",
          accent: "#ffb86b",
          focus: "Fluxo, deploy e colaboração",
          description:
            "Ferramentas que sustentam versionamento, design, empacotamento e produtividade.",
          items: [
            ["git", "Git"],
            ["github", "GitHub"],
            ["npm", "npm"],
            ["figma", "Figma"],
            ["docker", "Docker"],
            ["dbeaver", "DBeaver"],
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Trabalhos que demonstram produto, escala e execução técnica.",
      intro:
        "Selecionei projetos que refletem minha atuação em mobile, plataformas web e colaboração com times de produto e engenharia.",
      featuredLabel: "Projeto em destaque",
      filtersLabel: "Categorias",
      allFilter: "Todos",
      impactLabel: "Impacto",
      statusLabel: "Status",
      periodLabel: "Ano",
      liveTag: "No ar",
      developmentTag: "Em desenvolvimento",
      openSourceTag: "Colaboração open source",
      highlights: [
        { value: "5", label: "cases principais" },
        { value: "2", label: "produtos em produção" },
        { value: "1", label: "projeto open source ativo" },
      ],
      viewMore: "Ver mais",
      visitProject: "Acessar site",
      viewRepository: "Ver no GitHub",
      closeLabel: "Fechar",
      prevImage: "Imagem anterior",
      nextImage: "Proxima imagem",
      selectImage: "Selecionar imagem",
      goToImage: "Ir para imagem",
      imageAltPrefix: "Imagem do projeto",
      projects: [
        {
          title: "Aplicativo Nandes Neuroscience & Basketball",
          category: "Mobile Product",
          quote: "Experiência de treino orientada por dados, sem atrito.",
          impact: "Uso recorrente por atletas e comissão técnica",
          status: "Em desenvolvimento",
          period: "2023-atual",
          description:
            "Aplicativo móvel desenvolvido em React Native que permite acompanhar treinamentos e métricas de desempenho de atletas. Colaborei com designers e stakeholders, garantindo uma experiência fluida e responsiva.",
          modalText:
            "O app centraliza planos de treino, métricas e relatórios em um fluxo simples para atletas e treinadores. Meu foco foi entregar telas responsivas, integrações estáveis e uma navegação clara para o acompanhamento diário.",
          images: [
            "https://www.nandes.com.br/assets/logo2-SqGl37HI.png",
            "/images/projects/neurobasket/login.png",
            "/images/projects/neurobasket/court.png",
          ],
          projectUrl: "#",
          featured: true,
        },
        {
          title: "Sistema de Gestao de Aprendizagem (LMS)",
          category: "SaaS Platform",
          quote: "Arquitetura de ensino digital preparada para escala.",
          impact: "Plataforma utilizada em rotinas acadêmicas reais",
          status: "No ar",
          period: "2024-2025",
          description:
            "Sistema web completo para gerenciamento de cursos e alunos, desenvolvido com React, Nest.js e SQL. Projeto realizado na Pec Tec, com foco em escalabilidade e soluções baseadas em banco de dados.",
          modalText:
            "Plataforma LMS com dashboards administrativos, matrículas e trilhas de conteúdo. Trabalhei no front-end e na integração com a API para garantir performance, segurança e escalabilidade.",
          images: ["/images/projects/lms-projeto-desenvolve/login-screen.png"],
          projectUrl: "https://projetodesenvolve.online",
        },
        {
          title: "Contribuições OpenEdx",
          category: "Open Source",
          quote: "Melhorias pontuais que elevam estabilidade e usabilidade.",
          impact: "Melhorias incorporadas em releases da comunidade",
          status: "Contribuidor ativo",
          period: "2024",
          description:
            "Participação em projeto open-source, aprimorando funcionalidades da plataforma de educação a distância OpenEdx. Incluiu desenvolvimento de novos módulos, correções de bugs em colaboração com a comunidade e atualização de pacotes de tradução",
          modalText:
            "Contribuições em módulos e correções no core do OpenEdx, com foco em usabilidade e estabilidade. O trabalho envolveu alinhamento com a comunidade e atualização de pacotes de tradução para português.",
          images: [
            "https://openedx.org/wp-content/uploads/2025/08/openedx-logo-2026.svg",
          ],
          projectUrl: "https://openedx.org",
          githubUrl: "https://github.com/openedx",
        },
        {
          title: "Organo",
          category: "Web App",
          quote: "Organização visual de equipes com criação dinâmica de cards.",
          impact: "Estrutura times e colaboradores de forma simples e clara",
          status: "No ar",
          period: "2022",
          description:
            "Aplicação web em React para cadastrar colaboradores, organizar times e montar cards com foco em clareza visual e fluxo simples. O projeto destaca a criação dinâmica de conteúdo e uma interface direta para uso em contexto educacional ou interno.",
          modalText:
            "O Organo centraliza a criação de cards de colaboradores e a gestão de times em uma experiência visual objetiva. Trabalhei a apresentação das informações para tornar o cadastro rápido, a organização intuitiva e a navegação fácil de usar.",
          images: [
            "https://organo-three-cyan.vercel.app/imagens/banner.png",
            "https://organo-three-cyan.vercel.app/imagens/logo.png",
          ],
          projectUrl: "https://organo-three-cyan.vercel.app/",
        },
        {
          title: "AX37 Marketing Eventos",
          category: "Landing Page",
          quote: "Do briefing à execução, eventos com presença e impacto.",
          impact: "500+ eventos realizados e 10+ anos de experiência",
          status: "No ar",
          period: "2025",
          description:
            "Landing page institucional para uma empresa especializada em marketing e montagem de eventos, exposições e experiências corporativas. O projeto organiza serviços, produtos e chamadas de contato para facilitar a conversão e destacar a proposta da marca.",
          modalText:
            "A página apresenta a AX37 com foco em autoridade e conversão, distribuindo o conteúdo entre hero, serviços, produtos e contato rápido por WhatsApp, e-mail e orçamento. O site evidencia formatos como blitz promocionais, eventos corporativos, seminários, simpósios, feiras, roadshows, workshops, congressos, treinamentos, convenções empresariais, eventos online e híbridos. Na linha de produtos, destaca portal e fachada de acesso, estandes, quiosques, deck para parklet, meeting point, cenários instagramáveis, contêineres customizados, outdoor, PDV e expositores, mobiliário para eventos, materiais promocionais e soluções completas para eventos.",
          images: ["/images/projects/ax37/first-view.png"],
          projectUrl: "https://ax37-landing-page.vercel.app",
        },
        {
          title: "Terra Cor Brasil",
          category: "Landing Page",
          quote:
            "Arte, ciência e pigmentos naturais como ferramentas de autodescoberta.",
          impact:
            "Divulgação e promoção de projetos sociais e artísticos com geotintas",
          status: "No ar",
          period: "2022-2023",
          description:
            "Site institucional que apresenta o projeto Terra Cor Brasil, uma iniciativa que mescla aprendizagem, coletividade e expressão artística através de geotintas. A plataforma organiza informações sobre a missão, trajetória e propostas do projeto para comunidades e espaços culturais.",
          modalText:
            "O site Terra Cor Brasil comunica o propósito da instituição, que realiza atividades artísticas e educacionais com foco em autodescoberta e transformação sócio-cultural através de pigmentos minerais. A página apresenta a trajetória do projeto desde 1998, destaca seus pilares (arte, ciência e cultura) e facilita o acesso às redes sociais e informações sobre parcerias. O design reflete a identidade visual do projeto, com ênfase em cores naturais e na exploração das infinitas possibilidades das geotintas.",
          images: [
            "/images/projects/terra-cor-brasil/first-view.png",
            "https://terracorbrasil.com.br/wp-content/uploads/2023/01/Foto-Perfil-FB-Nome-1.png",
          ],
          projectUrl: "https://terracorbrasil.com.br",
        },
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title:
        "Evolução consistente em produtos, times e responsabilidade técnica.",
      intro:
        "Minha trajetória combina entrega prática, colaboração com times multidisciplinares e crescimento contínuo em arquitetura e produto.",
      experiences: [
        {
          title: "LEVTY - Engenheiro de Software",
          period: "Mai 2025 - Presente",
          description:
            "Atuação no desenvolvimento de processos BPMN utilizando ferramentas de modelagem. Programação e automação de fluxos de trabalho em JavaScript, com foco na integração entre sistemas e otimização de processos. Participação em cerimônias ágeis (Scrum) e uso de práticas como Kanban para gestão de tarefas. Colaboração em modelagem de sistemas, levantamento de requisitos, testes funcionais e decisões arquiteturais para soluções escaláveis.",
        },
        {
          title: "Pec Tec - Desenvolvedor Full-Stack Júnior",
          period: "Abr 2024 - Abr 2025",
          description:
            "Desenvolvimento e implantação de aplicações web completas usando React, Nest.js, TypeScript, Node.js e SQL. Colaboração em projetos de sistemas de gerenciamento de aprendizagem (LMS) e CRM, com foco em arquitetura escalável e soluções baseadas em banco de dados. Contribuições para o projeto open-source OpenEdx e participação ativa em equipes ágeis, assumindo papéis de liderança.",
        },
        {
          title: "Projeto Desenvolve - Estagiário em Desenvolvimento",
          period: "Nov 2023 - Mar 2024",
          description:
            "Acompanhamento de alunos e realização de monitorias para tirar dúvidas. Participação em projetos internos com responsabilidade pelo desenvolvimento front-end. Desenvolvimento da nova plataforma de estudos da empresa e colaboração na manutenção de diversos projetos.",
        },
        {
          title: "Nandes Neuroscience & Basketball - Dev. Full-Stack Mobile",
          period: "Jan 2023 - Presente",
          description:
            "Desenvolvimento de aplicativo móvel com React Native CLI para Android (versão iOS em fase final). Colaboração com designers e stakeholders para traduzir requisitos de negócio em funcionalidades técnicas escaláveis. Implementação de funcionalidades interativas e responsivas, garantindo experiência fluida. Gerenciamento de banco de dados relacional e otimização da estrutura de dados para escalabilidade.",
        },
        {
          title: "iJunior - Desenvolvedor Back-end",
          period: "Nov 2021 - Abr 2023",
          description:
            "Atuação no desenvolvimento back-end de aplicações web e testes unitários, utilizando JavaScript, NodeJS, Redis, SCRUM e Gitflow. Participação em mais de cinco projetos de sucesso, aperfeiçoando trabalho em equipe, proatividade e relacionamento com clientes. Participação na diretoria de marketing, buscando soluções inovadoras para melhores resultados.",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Se você quer construir algo forte, vamos conversar.",
      intro:
        "Estou aberto a oportunidades em produto, engenharia de software e projetos em que performance, escala e boa experiência importem.",
      labels: {
        email: "Email",
        phone: "Telefone",
        base: "Base",
      },
      baseValue: "Belo Horizonte, MG, Brasil",
      form: {
        name: "Nome",
        email: "Email",
        message: "Mensagem",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "seu@email.com",
        messagePlaceholder: "Conte rapidamente sobre a oportunidade ou projeto",
        submit: "Enviar mensagem",
        submitting: "Enviando...",
        sendingStatus: "Enviando mensagem...",
        successStatus: "Mensagem enviada com sucesso. Vou retornar em breve.",
        errorStatus:
          "Não foi possível enviar agora. Tente novamente em instantes.",
        subject: "Novo contato pelo portfólio",
      },
    },
    footer: {
      copy: "2026 Rafael Camacho. Engenharia, produto e execução.",
    },
  },
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      languageLabel: "Select language",
    },
    hero: {
      status: "Available for new projects",
      eyebrow: "Software Engineer • Frontend • Backend",
      title:
        "I build digital experiences with strong product language and solid engineering.",
      lead: "I am Rafael Camacho, a full-stack developer focused on striking interfaces, scalable applications, and reliable integrations for web and mobile.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      profileAlt: "Rafael Camacho",
      metrics: [
        { value: "+3", label: "years building software" },
        { value: "Full-Stack", label: "web, mobile, and integrations" },
        { value: "UFMG", label: "Systems Engineering" },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "Engineering mindset with product-level polish.",
      intro:
        "My motivation is to turn complex problems into clear, fast, and useful experiences without compromising architecture, maintainability, or code quality.",
      storyOne:
        "Since early on, I have been driven by technology and by how well-built software transforms routines, businesses, and decisions. I like combining practical implementation, systems thinking, and visual taste to deliver stronger and more memorable products.",
      storyTwo:
        "I currently study Systems Engineering at UFMG, where I deepened my foundation in algorithms, data structures, computational logic, and software engineering. This complements my work with web and mobile applications, as well as integrated workflows in real-world settings.",
      panelTitle: "Current focus",
      highlights: [
        "Scalable application architecture",
        "Interfaces focused on performance and clarity",
        "Integrations, automations, and complete digital products",
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Technologies I use to build end-to-end products.",
      intro:
        "I combine front-end, back-end, data, and delivery tooling to build products with speed and consistency.",
      specialtiesTitle: "Core strengths",
      snapshotTitle: "Snapshot",
      highlights: [
        "Responsive front-end focused on UX and performance",
        "Back-end and APIs for scalable products",
        "Data modeling and system integrations",
      ],
      snapshot: [
        { value: "4", label: "delivery layers" },
        { value: "15+", label: "recurring technologies" },
        { value: "Web + Mobile", label: "full-stack delivery" },
      ],
      technologiesLabel: "technologies",
      categories: [
        {
          title: "Languages",
          tag: "Core",
          accent: "#61dafb",
          focus: "Syntax, performance and typing",
          description:
            "Core tools for logic, typing, automation, and application development.",
          items: [
            ["javascript", "JavaScript"],
            ["typescript", "TypeScript"],
            ["python", "Python"],
            ["c", "C"],
            ["cplusplus", "C++"],
          ],
        },
        {
          title: "Frameworks & Libraries",
          tag: "Delivery",
          accent: "#77f7c0",
          focus: "UI, mobile and modern APIs",
          description:
            "Main ecosystem for interfaces, server-side apps, and mobile experiences.",
          items: [
            ["react", "ReactJS"],
            ["react", "React Native"],
            ["nestjs", "NestJS"],
            ["express", "Express.js"],
            ["nodejs", "Node.js"],
          ],
        },
        {
          title: "Databases",
          tag: "Data",
          accent: "#8a7dff",
          focus: "Persistence and modeling",
          description:
            "Technologies used for persistence, querying, and data structuring.",
          items: [
            ["postgresql", "PostgreSQL"],
            ["mysql", "MySQL"],
            ["mongodb", "MongoDB"],
          ],
        },
        {
          title: "Tools",
          tag: "Workflow",
          accent: "#ffb86b",
          focus: "Flow, deployment and collaboration",
          description:
            "Tools that support versioning, design, packaging, and productivity.",
          items: [
            ["git", "Git"],
            ["github", "GitHub"],
            ["npm", "npm"],
            ["figma", "Figma"],
            ["docker", "Docker"],
            ["dbeaver", "DBeaver"],
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title:
        "Work that showcases product thinking, scale, and technical execution.",
      intro:
        "I selected projects that reflect my work in mobile, web platforms, and collaboration with product and engineering teams.",
      featuredLabel: "Featured project",
      filtersLabel: "Categories",
      allFilter: "All",
      impactLabel: "Impact",
      statusLabel: "Status",
      periodLabel: "Year",
      liveTag: "Live",
      developmentTag: "In development",
      openSourceTag: "Open source contribution",
      highlights: [
        { value: "5", label: "main case studies" },
        { value: "2", label: "products in production" },
        { value: "1", label: "active open-source project" },
      ],
      viewMore: "View more",
      visitProject: "Open site",
      closeLabel: "Close",
      prevImage: "Previous image",
      nextImage: "Next image",
      selectImage: "Select image",
      goToImage: "Go to image",
      imageAltPrefix: "Project image",
      projects: [
        {
          title: "Nandes Neuroscience & Basketball App",
          category: "Mobile Product",
          quote: "Training experience guided by data, with no friction.",
          impact: "Recurring usage by athletes and coaching staff",
          status: "Live (Android)",
          period: "2023-present",
          description:
            "Mobile app built with React Native to track athlete training and performance metrics. I worked with designers and stakeholders to ensure a fluid and responsive experience.",
          modalText:
            "The app centralizes training plans, metrics, and reports in a simple flow for athletes and coaches. My focus was delivering responsive screens, stable integrations, and clear daily navigation.",
          images: [
            "https://www.nandes.com.br/assets/logo2-SqGl37HI.png",
            "/images/projects/neurobasket/login.png",
            "/images/projects/neurobasket/court.png",
          ],
          projectUrl: "#",
          featured: true,
        },
        {
          title: "Learning Management System (LMS)",
          category: "SaaS Platform",
          quote: "Digital learning architecture built to scale.",
          impact: "Platform used in real academic workflows",
          status: "Live",
          period: "2024-2025",
          description:
            "Complete web platform for course and student management, built with React, Nest.js, and SQL. Project delivered at Pec Tec, with a focus on scalability and data-driven solutions.",
          modalText:
            "LMS platform with admin dashboards, enrollments, and learning tracks. I worked on front-end and API integration to ensure performance, security, and scalability.",
          images: ["/images/projects/lms-projeto-desenvolve/login-screen.png"],
          projectUrl: "https://projetodesenvolve.online",
        },
        {
          title: "OpenEdx Contributions",
          category: "Open Source",
          quote: "Targeted improvements that raise stability and usability.",
          impact: "Improvements shipped in community releases",
          status: "Ongoing contributions",
          period: "2023-present",
          description:
            "Participation in an open-source project, improving features in the OpenEdx distance learning platform. It included building new modules and fixing bugs in collaboration with the community.",
          modalText:
            "Contributions in modules and core fixes for OpenEdx, focused on usability and stability. The work involved PR reviews and alignment with the community.",
          images: [
            "https://openedx.org/wp-content/uploads/2025/08/openedx-logo-2026.svg",
          ],
          projectUrl: "https://openedx.org",
          githubUrl: "https://github.com/openedx",
        },
        {
          title: "Organo",
          category: "Web App",
          quote: "Visual team organization with dynamic card creation.",
          impact: "Structures teams and collaborators in a simple, clear flow",
          status: "Live",
          period: "2022",
          description:
            "React web app for creating collaborator cards, organizing teams, and building a clear visual structure with a simple workflow. The project emphasizes dynamic content creation and a straightforward interface for educational or internal use.",
          modalText:
            "Organo centralizes collaborator card creation and team management in an objective visual experience. I shaped the information layout to make input fast, organization intuitive, and navigation easy to use.",
          images: [
            "https://organo-three-cyan.vercel.app/imagens/banner.png",
            "https://organo-three-cyan.vercel.app/imagens/logo.png",
          ],
          projectUrl: "https://organo-three-cyan.vercel.app/",
        },
        {
          title: "AX37 Marketing Events",
          category: "Landing Page",
          quote: "From briefing to delivery, events with presence and impact.",
          impact: "500+ events delivered and 10+ years of experience",
          status: "Live",
          period: "2025",
          description:
            "Institutional landing page for a company focused on event marketing, event setup, exhibitions, and corporate experiences. The project organizes services, products, and contact calls to action to improve conversion and clarify the brand offer.",
          modalText:
            "The page positions AX37 around authority and conversion, grouping content into hero, services, products, and quick contact via WhatsApp, email, and quote requests. The site showcases event formats such as promotional blitzes, corporate events, seminars, symposiums, fairs, roadshows, workshops, congresses, training programs, business conventions, online events, and hybrid events. On the product side, it highlights access portals and facades, stands, kiosks, parklet decks, meeting points, instagrammable scenes, custom containers, outdoor media, POS displays, event furniture, promotional materials, and complete event solutions.",
          images: ["/images/projects/ax37/first-view.png"],
          projectUrl: "https://ax37-landing-page.vercel.app",
        },
        {
          title: "Terra Cor Brasil",
          category: "Landing Page",
          quote:
            "Art, science, and natural pigments as tools for self-discovery.",
          impact:
            "Promotion and dissemination of social and artistic projects with geotints",
          status: "Live",
          period: "2022-2023",
          description:
            "Institutional website featuring Terra Cor Brasil, an initiative that blends learning, community, and artistic expression through geotints and mineral pigments. The platform organizes information about the project's mission, trajectory, and community-oriented proposals.",
          modalText:
            "The Terra Cor Brasil website communicates the institution's purpose of conducting artistic and educational activities focused on self-discovery and socio-cultural transformation through mineral pigments. The page presents the project's trajectory since 1998, highlights its pillars (art, science, and culture), and facilitates access to social media and partnership information. The design reflects the project's visual identity, emphasizing natural colors and the infinite possibilities of geotints.",
          images: [
            "/images/projects/terra-cor-brasil/first-view.png",
            "https://terracorbrasil.com.br/wp-content/uploads/2023/01/Foto-Perfil-FB-Nome-1.png",
          ],
          projectUrl: "https://terracorbrasil.com.br",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Consistent growth in products, teams, and technical ownership.",
      intro:
        "My journey combines practical delivery, collaboration with multidisciplinary teams, and continuous growth in architecture and product.",
      experiences: [
        {
          title: "LEVTY - Software Engineer",
          period: "May 2025 - Present",
          description:
            "Worked on BPMN process development using modeling tools. Programmed and automated workflows in JavaScript, with a focus on system integration and process optimization. Participated in agile ceremonies (Scrum) and used Kanban for task management. Collaborated on system modeling, requirements gathering, functional testing, and architectural decisions for scalable solutions.",
        },
        {
          title: "Pec Tec - Junior Full-Stack Developer",
          period: "Apr 2024 - Apr 2025",
          description:
            "Developed and deployed complete web applications using React, Nest.js, TypeScript, Node.js, and SQL. Collaborated on LMS and CRM projects, focused on scalable architecture and database-driven solutions. Contributed to the OpenEdx open-source project and actively participated in agile teams, taking on leadership roles.",
        },
        {
          title: "Projeto Desenvolve - Development Intern",
          period: "Nov 2023 - Mar 2024",
          description:
            "Supported students through mentoring sessions and technical guidance. Participated in internal projects with responsibility for front-end development. Helped build the company's new learning platform and collaborated on maintaining several projects.",
        },
        {
          title: "Nandes Neuroscience & Basketball - Full-Stack Mobile Dev",
          period: "Jan 2023 - Present",
          description:
            "Developed a mobile app with React Native CLI for Android (iOS version in final phase). Collaborated with designers and stakeholders to turn business requirements into scalable technical features. Implemented interactive and responsive features, ensuring a smooth experience. Managed relational database structure and optimized data architecture for scalability.",
        },
        {
          title: "iJunior - Back-end Developer",
          period: "Nov 2021 - Apr 2023",
          description:
            "Worked on back-end web applications and unit testing, using JavaScript, Node.js, Redis, Scrum, and Gitflow. Contributed to more than five successful projects, improving teamwork, proactivity, and client communication. Also participated in the marketing team, seeking innovative solutions for better results.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "If you want to build something strong, let's talk.",
      intro:
        "I am open to opportunities in product, software engineering, and projects where performance, scale, and user experience matter.",
      labels: {
        email: "Email",
        phone: "Phone",
        base: "Location",
      },
      baseValue: "Belo Horizonte, MG, Brazil",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@email.com",
        messagePlaceholder: "Briefly describe the opportunity or project",
        submit: "Send message",
        submitting: "Sending...",
        sendingStatus: "Sending message...",
        successStatus:
          "Message sent successfully. I will get back to you soon.",
        errorStatus: "Could not send right now. Please try again shortly.",
        subject: "New contact from portfolio",
      },
    },
    footer: {
      copy: "2026 Rafael Camacho. Engineering, product and execution.",
    },
  },
};
