export interface CetecpInfo {
  name: string;
  fullName: string;
  slogan: string;
  description: string;
  email: string;
  location: string;
  address: string;
  googleMapsUrl: string;
  iframeSrc: string;
  schedule: string;
  logoUrl: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export interface Therapist {
  id: string;
  name: string;
  title: string;
  phone?: string;
  phoneRaw?: string;
  whatsappUrl: string;
  email?: string;
  linkedinUrl?: string;
  bio: string;
  specialties: string[];
  education?: string[];
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  targetAudience?: string;
  overview?: string;
  methodologies?: string[];
  benefits?: string[];
  assignedTherapistId?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  services: ServiceItem[];
}

export const CETECP_INFO: CetecpInfo = {
  name: "CETECP",
  fullName: "Centro de Evaluación y Terapia Emocional, Conductual y Psicopedagógica",
  slogan: "Tu Espacio para el Bienestar Emocional",
  description:
    "Somos un centro especializado en salud mental, evaluación psicopedagógica y acompañamiento emocional integral en Quito. Brindamos atención profesional y humana para niños, adolescentes, adultos y familias.",
  email: "cetecp2021@hotmail.com",
  location: "Quito, Parroquia San Antonio de Pichincha",
  address: "San Antonio de Pichincha, Quito, Ecuador",
  googleMapsUrl: "https://www.google.com/maps/place/0%C2%B000'43.8%22S+78%C2%B026'45.5%22W/@-0.0121589,-78.445959,17z",
  iframeSrc:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.81648083811!2d-78.445959!3d-0.0121589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMDAnNDMuOCJTIDc4wrAyNic0NS41Ilc!5e0!3m2!1ses!2sec!4v1710000000000!5m2!1ses!2sec",
  schedule: "Lunes a Sábado: 08:00 - 18:00",
  logoUrl: "/images/logo.webp",
  facebookUrl: "https://www.facebook.com/share/1AbPLvRGt6/",
  instagramUrl: "https://www.instagram.com/psicetecp?igsh=bWJ2cjZyenhhdWR1",
};

export const THERAPISTS: Therapist[] = [
  {
    id: "alejandra-estrella",
    name: "MSc. María Alejandra Estrella Mero",
    title: "NEUROPSICÓLOGA CLÍNICA",
    phone: "098 182 7618",
    phoneRaw: "593981827618",
    email: "aleestrella829@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/mariaestrella20",
    whatsappUrl:
      "https://wa.me/593981827618?text=Hola,%20deseo%20solicitar%20una%20consulta%20con%20la%20MSc.%20Mar%C3%ADa%20Alejandra%20Estrella%20Mero%20en%20CETECP",
    bio: "Neuropsicóloga clínica con un enfoque integral, orientada a comprender el perfil individual de cada paciente. Práctica humana, empática y minuciosa para aportar claridad diagnóstica e intervención adecuada en niños, adolescentes y adultos mayores.",
    specialties: [
      "Evaluación neuropsicológica en Trastornos Neurocognitivos (envejecimiento/adulto mayor)",
      "Evaluación del Neurodesarrollo y población infanto-juvenil",
      "Diagnóstico especializado de TEA mediante baterías acreditadas ADOS-2 y ADI-R",
      "Evaluación e intervención en dificultades cognitivas y del aprendizaje",
    ],
    education: [
      "MSc. en Neuropsicología Clínica - Universidad Internacional de La Rioja (UNIR)",
      "Licenciada en Psicología Clínica - Universidad de Las Américas (UDLA)",
      "Acreditación para uso clínico de ADOS-2 (Hogrefe TEA Ediciones, Madrid)",
      "Detección temprana de Autismo y Escala Bayley-III (Pearson Clinical)",
    ],
    image: "/images/alejandra.webp",
  },
  {
    id: "andriana-benitez",
    name: "Psic. Andriana Benítez",
    title: "PSICÓLOGA INFANTIL & PSICOREHABILITADORA",
    whatsappUrl:
      "https://wa.me/593981827618?text=Hola,%20deseo%20solicitar%20una%20consulta%20con%20la%20Psic.%20Andriana%20Ben%C3%ADtez%20en%20CETECP",
    bio: "Especialista en conducta y desarrollo emocional infantil. Acompaña a los niños en el fortalecimiento de sus habilidades socioemocionales, regulación afectiva y adaptación escolar exitosa.",
    specialties: [
      "Conducta Infantil",
      "Psicorehabilitación",
      "Regulación Afectiva",
      "Adaptación Escolar",
    ],
    education: [
      "Licenciada en Psicología Infantil y Psicorehabilitación",
      "Especialista en desarrollo infanto-juvenil y regulación afectiva",
    ],
    image: "/images/andriana.webp",
  },
  {
    id: "daniela-palacios",
    name: "Psic. Daniela Palacios",
    title: "PSICÓLOGA GENERAL",
    whatsappUrl:
      "https://wa.me/593995366899?text=Hola,%20deseo%20solicitar%20una%20consulta%20con%20la%20Psic.%20Daniela%20Palacios%20en%20CETECP",
    bio: "Especialista en procesos conductuales infanto-juveniles. Ofrece apoyo clínico integral a adolescentes y familias, promoviendo la comunicación asertiva, resolución de conflictos y bienestar emocional.",
    specialties: [
      "Apoyo Infanto-Juvenil",
      "Comunicación Asertiva",
      "Resolución de Conflictos",
      "Procesos Conductuales",
    ],
    education: [
      "Licenciada en Psicología General",
      "Especialista en apoyo clínico conductual infanto-juvenil y familiar",
    ],
    image: "/images/daniela.webp",
  },
  {
    id: "jazmin-parra",
    name: "Psic. Jazmín Parra",
    title: "PSICÓLOGA GENERAL",
    phone: "099 536 6899",
    phoneRaw: "593995366899",
    whatsappUrl:
      "https://wa.me/593995366899?text=Hola%20Psic.%20Jazm%C3%ADn%20Parra,%20deseo%20solicitar%20informaci%C3%B3n%20sobre%20una%20consulta%20en%20CETECP",
    bio: "Especialista en psicoterapia individual y de pareja. Experta en el abordaje clínico y manejo adaptativo de la ansiedad, depresión, duelo y conflictos afectivos en el ciclo vital adulto.",
    specialties: [
      "Psicoterapia Individual",
      "Terapia de Pareja",
      "Manejo de Ansiedad y Depresión",
      "Duelo y Conflictos Afectivos",
    ],
    education: [
      "Licenciada en Psicología General",
      "Especialista en Psicoterapia Individual, Pareja y Trastornos del Estado de Ánimo",
    ],
    image: "/images/jazmin.webp",
  },
  {
    id: "lizbeth-ulcuango",
    name: "Psic. Lizbeth Ulcuango",
    title: "PSICÓLOGA EDUCATIVA",
    phone: "098 182 7618",
    phoneRaw: "593981827618",
    whatsappUrl:
      "https://wa.me/593981827618?text=Hola%20Psic.%20Lizbeth%20Ulcuango,%20deseo%20solicitar%20informaci%C3%B3n%20sobre%20una%20consulta%20en%20CETECP",
    bio: "Especialista en Trastornos del Aprendizaje y Dificultades Psicopedagógicas. Diseña estrategias integrales para la dislexia, TDAH, lectoescritura y razonamiento cognitivo, impulsando la autoestima académica de los niños.",
    specialties: [
      "Trastornos del Aprendizaje",
      "Psicopedagogía e Intervención TDAH",
      "Lectoescritura",
      "Razonamiento Cognitivo",
    ],
    education: [
      "Psicóloga Educativa - Pontificia Universidad Católica del Ecuador (PUCE)",
      "Diplomado en Evaluación e Intervención Psicopedagógica con Enfoque Multidisciplinario",
      "Diplomado en Evaluación e Intervención del Espectro Autista",
      "Diplomado Internacional en Terapia ABA",
      "Certificación en Psicoterapia Infantil: Evaluación clínica, vínculo terapéutico y estrategias de intervención en casos complejos",
      "Certificación en Arteterapia: Técnicas terapéuticas y lúdicas para la intervención psicológica y psicopedagógica",
      "Certificación en Neuropsicología del Autismo y TDAH: Técnicas y herramientas de evaluación e intervención multidisciplinaria",
    ],
    image: "/images/lizbeth.webp",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "evaluaciones",
    title: "Evaluaciones Integrales",
    iconName: "ClipboardCheck",
    description: "Diagnósticos profesionales y certeros sobre aspectos psicológicos, emocionales y de aprendizaje.",
    services: [
      {
        id: "eval-psicologica",
        title: "Evaluación Psicológica Emocional",
        description: "Análisis del perfil emocional, personalidad y dinámicas afectivas.",
        targetAudience: "Niños, Adolescentes y Adultos",
        assignedTherapistId: "jazmin-parra",
        overview: "La Evaluación Psicológica Emocional en CETECP es un proceso clínico profundo diseñado para identificar la estructura afectiva, patrones de personalidad, factores de estrés y fortalezas emocionales del paciente. Empleamos pruebas psicométricas y proyectivas estandarizadas para construir un diagnóstico preciso que fundamente un plan de intervención personalizado.",
        methodologies: [
          "Entrevista clínica inicial y anamnesis completa.",
          "Aplicación de baterías de pruebas emocionales y de personalidad estandarizadas.",
          "Análisis de dinámicas vinculares y estilos de afrontamiento.",
          "Elaboración e informe escrito detallado con devolución psicoterapéutica."
        ],
        benefits: [
          "Identificación clara de detonantes de ansiedad, angustia o tristeza.",
          "Orientación precisa sobre la modalidad de terapia recomendada.",
          "Fortalecimiento del autoconocimiento y la regulación emocional.",
          "Entrega de informe formal apto para instituciones educativas o médicas."
        ]
      },
      {
        id: "eval-psicopedagogica",
        title: "Evaluación Psicopedagógica",
        description: "Detección de necesidades educativas especiales y dificultades cognitivas en el proceso de aprendizaje.",
        targetAudience: "Escolares y Adolescentes",
        assignedTherapistId: "lizbeth-ulcuango",
        overview: "Proceso especializado para evaluar cómo aprende el niño o adolescente. Identifica de manera objetiva si existen dificultades específicas en la lectoescritura, razonamiento lógico-matemático, atención o procesamiento de información, proporcionando las bases para adaptaciones curriculares y refuerzo psicopedagógico.",
        methodologies: [
          "Entrevista con los padres de familia y recolección de historial escolar.",
          "Evaluación de funciones cognitivas clave (memoria, percepción, velocidad de procesamiento).",
          "Pruebas específicas de lectoescritura, cálculo y expresión escrita.",
          "Elaboración del informe psicopedagógico con pautas de inclusión escolar."
        ],
        benefits: [
          "Comprensión exacta del perfil cognitivo y ritmo de aprendizaje del estudiante.",
          "Recomendaciones concretas para maestros y departamentos de consejería escolar (DECE).",
          "Reducción del estrés académico y la frustración escolar en el estudiante.",
          "Plan de nivelación individualizado ajustado a sus necesidades reales."
        ]
      },
      {
        id: "eval-conductual",
        title: "Evaluación Conductual",
        description: "Identificación de patrones de conducta, impulsividad y autorregulación (TDAH y déficit de atención).",
        targetAudience: "Niños y Jóvenes",
        assignedTherapistId: "andriana-benitez",
        overview: "Evaluación enfocada en analizar las manifestaciones del comportamiento en el hogar y la escuela. Permite identificar rasgos compatibles con el Trastorno por Déficit de Atención e Hiperactividad (TDAH), impulsividad, desobediencia o dificultad en la inhibición de respuesta.",
        methodologies: [
          "Escalas de observación de conducta para padres y docentes (Conners, Vanderbilt, etc.).",
          "Evaluación neuroconductual directa en el consultorio.",
          "Registro observacional de tolerancia a la frustración y atención focalizada.",
          "Informe diagnóstico con plan de modificación de conducta."
        ],
        benefits: [
          "Diagnóstico diferencial certero para descartar o confirmar TDAH.",
          "Estrategias de autorregulación y límites sin violencia para el hogar.",
          "Pautas pedagógicas para mantener la atención en clase.",
          "Mejora significativa de la convivencia familiar."
        ]
      },
    ],
  },
  {
    id: "neuropsicologia",
    title: "Neuropsicología y Neurodesarrollo",
    iconName: "Brain",
    description: "Evaluaciones neuropsicológicas especializadas, diagnóstico de TEA (ADOS-2 / ADI-R), rehabilitación cognitiva y atención integral al adulto mayor.",
    services: [
      {
        id: "eval-diagnostico-tea",
        title: "Evaluación y Diagnóstico de TEA (ADOS-2 / ADI-R)",
        description: "Diagnóstico del Espectro Autista mediante baterías estandarizadas acreditadas a nivel internacional.",
        targetAudience: "Niños, Adolescentes y Adultos",
        assignedTherapistId: "alejandra-estrella",
        overview: "Proceso clínico especializado para la detección y diagnóstico del Trastorno del Espectro Autista (TEA). Empleamos las herramientas estandarizadas de referencia internacional ADOS-2 y ADI-R para proporcionar un diagnóstico riguroso, empático y orientado al desarrollo de intervenciones individualizadas.",
        methodologies: [
          "Entrevista clínica estructurada a padres o cuidadores mediante la prueba ADI-R.",
          "Evaluación observacional directa e interactiva con el paciente mediante ADOS-2.",
          "Análisis del perfil socio-comunicativo, patrones de conducta e intereses.",
          "Informe diagnóstico formal cuantitativo y cualitativo con recomendaciones."
        ],
        benefits: [
          "Diagnóstico certero avalado por baterías con estándar de oro internacional.",
          "Comprensión profunda de las necesidades socio-emocionales y comunicativas.",
          "Guía clara para adaptaciones escolares, tratamientos y apoyo familiar.",
          "Atención humana y respetuosa adaptada a cada rango de edad."
        ]
      },
      {
        id: "rehabilitacion-neuropsicologica",
        title: "Rehabilitación Neuropsicológica",
        description: "Intervención y estimulación de funciones cognitivas como atención, memoria, lenguaje y funciones ejecutivas.",
        targetAudience: "Niños, Adolescentes y Adultos",
        assignedTherapistId: "alejandra-estrella",
        overview: "Programa de entrenamiento cognitivo diseñado para restaurar, compensar o mitigar alteraciones en las funciones cerebrales superiores. Permite potenciar la atención, memoria, flexibilidad mental y autorregulación tras dificultades del neurodesarrollo o secuelas neurocognitivas.",
        methodologies: [
          "Diseño de plan de rehabilitación neuropsicológica individualizado.",
          "Entrenamiento en funciones ejecutivas, control inhibitorio y memoria de trabajo.",
          "Uso de técnicas de estimulación cognitiva validadas y estrategias compensatorias.",
          "Seguimiento periódico de avances con reevaluaciones periódicas."
        ],
        benefits: [
          "Mejora en el rendimiento académico, laboral y en las actividades cotidianas.",
          "Fortalecimiento de la concentración, organización y planificación.",
          "Estrategias prácticas para afrontar olvidos o distracciones.",
          "Mayor autonomía y confianza en el desempeño diario."
        ]
      },
      {
        id: "eval-trastornos-neurocognitivos",
        title: "Evaluación de Trastornos Neurocognitivos",
        description: "Valoración del deterioro cognitivo leve, demencias y perfil neuropsicológico en adultos y adultos mayores.",
        targetAudience: "Adultos y Adultos Mayores",
        assignedTherapistId: "alejandra-estrella",
        overview: "Valoración neuropsicológica exhaustiva para identificar cambios en la memoria, orientación, juicio y razonamiento. Permite diferenciar entre el envejecimiento normal, deterioro cognitivo leve y síndromes demenciales.",
        methodologies: [
          "Análisis de la historia clínica neurocognitiva y antecedentes del paciente.",
          "Batería de pruebas neuropsicológicas estandarizadas para memoria, lenguaje y atención.",
          "Evaluación de la autonomía funcional en actividades de la vida diaria.",
          "Informe clínico detallado para la familia y médicos tratantes (neurología/geriatría)."
        ],
        benefits: [
          "Detección oportuna de signos de deterioro cognitivo.",
          "Claridad médica y familiar sobre el estado de salud neurocognitivo.",
          "Recomendaciones para ralentizar el avance del deterioro y mantener la funcionalidad.",
          "Orientación empática a la familia para el cuidado y acompañamiento."
        ]
      },
      {
        id: "atencion-adulto-mayor",
        title: "Atención al Adulto Mayor y Envejecimiento",
        description: "Acompañamiento integral y estimulación cognitiva para un envejecimiento activo, saludable y digno.",
        targetAudience: "Adultos Mayores y Grupo Familiar",
        assignedTherapistId: "alejandra-estrella",
        overview: "Servicio especializado orientado al bienestar cognitivo y emocional de las personas adultas mayores. Ofrecemos talleres de mantenimiento cognitivo, psicoeducación a cuidadores y apoyo emocional ante las transiciones del envejecimiento.",
        methodologies: [
          "Talleres individuales o grupales de mantenimiento y reserva cognitiva.",
          "Estrategias de estimulación sensorial y fortalecimiento de la memoria afectiva.",
          "Asesoría a cuidadores y familias para adaptar el entorno del hogar.",
          "Acompañamiento emocional centrado en la dignidad y autovaloración."
        ],
        benefits: [
          "Preservación de la independencia y calidad de vida en el adulto mayor.",
          "Estimulación constante para mantener la mente activa y saludable.",
          "Reducción del aislamiento social y estados depresivos en la vejez.",
          "Pautas concretas de manejo para la familia y cuidadores principales."
        ]
      }
    ]
  },
  {
    id: "terapias-infantiles",
    title: "Terapias Infantiles y Psicopedagógicas",
    iconName: "Sparkles",
    description: "Intervenciones lúdicas y especializadas para el desarrollo cognitivo, emocional y del aprendizaje.",
    services: [
      {
        id: "terapia-aprendizaje",
        title: "Terapia de Aprendizaje",
        description: "Estrategias personalizadas para superar dislexia, discalculia y problemas de lectoescritura.",
        targetAudience: "Niños en etapa escolar",
        assignedTherapistId: "lizbeth-ulcuango",
        overview: "Intervención terapéutica individualizada estructurada para niños con dificultades escolares específicas como dislexia, discalculia o disgrafía. Mediante metodologías multisensoriales, se entrenan la conciencia fonológica, el procesamiento numérico y la comprensión lectora.",
        methodologies: [
          "Métodos multisensoriales y lúdicos de alfabetización.",
          "Entrenamiento en conciencia fonológica y procesamiento visoperceptivo.",
          "Estrategias cognitivas para la comprensión y resolución de problemas matemáticos.",
          "Refuerzo continuo de la autoeficacia y confianza académica."
        ],
        benefits: [
          "Superación gradual de errores de inversión, omisión o sustitución de letras.",
          "Adquisición de estrategias autónomas de estudio y organización.",
          "Aumento de la motivación e interés por la lectura y la escuela.",
          "Apoyo constante en coordinación con el colegio del niño."
        ]
      },
      {
        id: "terapia-conductual-infantil",
        title: "Modificación de Conducta Infantil",
        description: "Técnicas terapéuticas para fortalecer el autocontrol, la paciencia y las reglas de convivencia.",
        targetAudience: "Niños de 3 a 12 años",
        assignedTherapistId: "andriana-benitez",
        overview: "Programa terapéutico estructurado para reemplazar conductas desadaptativas (rabieta, desobediencia, agresividad) por habilidades prosociales, gestión emocional y respeto de límites en el hogar y entorno social.",
        methodologies: [
          "Técnicas cognitivo-conductuales adaptadas a la infancia (economía de fichas, moldeamiento).",
          "Sesiones lúdicas de identificación y regulación de emociones básicas.",
          "Entrenamiento a padres en refuerzo positivo y límites firmes afectivos.",
          "Seguimiento periódico de cumplimiento de metas conductuales."
        ],
        benefits: [
          "Reducción notable de rabietas, desacuerdos y episodios de frustración.",
          "Desarrollo del autocontrol y la empatía en el niño.",
          "Restablecimiento de un clima familiar sereno y predecible.",
          "Instauración de hábitos saludables de rutina y estudio."
        ]
      },
      {
        id: "terapia-lenguaje",
        title: "Estimulación de Lenguaje y Habla",
        description: "Desarrollo de articulación, fluidez verbal y expresión comunicativa.",
        targetAudience: "Primera infancia",
        assignedTherapistId: "lizbeth-ulcuango",
        overview: "Acompañamiento especializado para niños que presentan retrasos en la adquisición del lenguaje, dislalias o dificultades en la expresión verbal. A través del juego estructurado, cantos y ejercicios praxicos, potenciamos el repertorio vocabular y articulatorio.",
        methodologies: [
          "Ejercicios de articulación fonética y movilidad bucofacial.",
          "Juego simbólico guiado para ampliar la estructuración de oraciones.",
          "Estimulación auditiva y de discriminación de fonemas.",
          "Pautas para que la familia estimule el habla activa en casa."
        ],
        benefits: [
          "Corrección de pronunciación defectuosa de sonidos difíciles.",
          "Mayor claridad en la comunicación de deseos, pensamientos y sentimientos.",
          "Prevención de dificultades posteriores en la lectoescritura.",
          "Aumento de la seguridad y sociabilidad del infante."
        ]
      },
      {
        id: "estimulacion-temprana",
        title: "Estimulación Temprana Cognitiva",
        description: "Potenciación de habilidades psicomotrices y neurocognitivas iniciales.",
        targetAudience: "Lactantes y Preescolares",
        assignedTherapistId: "andriana-benitez",
        overview: "Programa de estimulación oportuna diseñado para potenciar los hitos del desarrollo motor, cognitivo, sensorial y del lenguaje en los primeros años de vida de los niños.",
        methodologies: [
          "Actividades sensorio-motrices y de exploración corporal.",
          "Ejercicios de coordinación visomotora y motricidad fina/gruesa.",
          "Interacción afectiva y socialización guiada.",
          "Evaluación de hitos del desarrollo norma e intervención oportuna."
        ],
        benefits: [
          "Optimo aprovechamiento de la plasticidad cerebral infantil.",
          "Previene posibles rezagos en la maduración física o intelectual.",
          "Fortalece el vínculo afectivo entre padres e hijos.",
          "Prepara al niño con bases sólidas para el ingreso al nivel preescolar."
        ]
      },
    ],
  },
  {
    id: "terapias-adultos",
    title: "Terapias para Adultos",
    iconName: "HeartHandshake",
    description: "Espacios confidenciales y compasivos para sanar, comprenderse y crecer emocionalmente.",
    services: [
      {
        id: "terapia-ansiedad-depresion",
        title: "Manejo de Ansiedad y Depresión",
        description: "Herramientas clínicas para regular estados emocionales intensos y recuperar el equilibrio diario.",
        targetAudience: "Adultos y Jóvenes",
        assignedTherapistId: "jazmin-parra",
        overview: "Espacio de psicoterapia individual orientado a comprender el origen de la sintomatología ansiosa o depresiva (ataques de pánico, pensamientos rumiantes, insomnio, desmotivación) y desarrollar estrategias de afrontamiento científicamente respaldadas.",
        methodologies: [
          "Enfoque Cognitivo-Conductual (TCC) y Terapia de Aceptación y Compromiso (ACT).",
          "Reestructuración de pensamientos automáticos negativos.",
          "Técnicas de regulación fisiológica, respiración diafragmática y mindfulness.",
          "Diseño de plan de activación conductual para recuperar el bienestar."
        ],
        benefits: [
          "Reducción paulatina de la intensidad y frecuencia de la ansiedad.",
          "Reconexión con el sentido de vida, energía y actividades placenteras.",
          "Adquisición de herramientas de autorregulación emocional duraderas.",
          "Ambiente cálido, sin juzgar y con absoluta reserva confidencial."
        ]
      },
      {
        id: "terapia-individual",
        title: "Psicoterapia Individual",
        description: "Acompañamiento en procesos de duelo, cambios de vida, autoconocimiento y autoestima.",
        targetAudience: "Adultos",
        assignedTherapistId: "jazmin-parra",
        overview: "Proceso terapéutico individual personalizado para explorar la historia personal, superar eventos traumáticos o dolorosos, fortalecer el amor propio y establecer metas congruentes con tus valores esenciales.",
        methodologies: [
          "Psicoterapia humanista e integrativa centrada en la persona.",
          "Procesamiento de duelos, rupturas y transiciones vitales.",
          "Identificación y modificación de esquemas de pensamiento limitantes.",
          "Trabajo reflexivo de autoestima y asertividad interrelacional."
        ],
        benefits: [
          "Claridad mental para la toma de decisiones difíciles.",
          "Sanación de heridas emocionales del pasado o procesos de pérdida.",
          "Mayor seguridad personal, límites sanos y autoestima sólida.",
          "Mejora en las relaciones interpersonales y en la calidad de vida."
        ]
      },
      {
        id: "terapia-pareja",
        title: "Terapia de Pareja",
        description: "Resolución de conflictos, mejora de la comunicación y reconstrucción del vínculo afectivo.",
        targetAudience: "Parejas",
        assignedTherapistId: "jazmin-parra",
        overview: "Acompañamiento imparcial a parejas que atraviesan crisis relacionales, distanciamiento afectivo, falta de comunicación o problemas de confianza. Se promueve la empatía recíproca y acuerdos saludables.",
        methodologies: [
          "Abordaje de la Terapia Focalizada en las Emociones (EFT) para parejas.",
          "Análisis de ciclos destructivos de discusión e interacciones.",
          "Entrenamiento en comunicación asertiva y escucha activa sin violencia.",
          "Reconstrucción del proyecto de vida en común o cierre respetuoso de etapa."
        ],
        benefits: [
          "Romper los patrones de discusión repetitivos y destructivos.",
          "Expresar necesidades afectivas profundas con claridad y empatía.",
          "Reconstruir la confianza, intimidad y complicidad mutua.",
          "Establecer acuerdos de convivencia claros e igualitarios."
        ]
      },
      {
        id: "gestion-estres",
        title: "Gestión de Estrés y Burnout",
        description: "Estrategias para el balance entre la vida laboral, personal y el bienestar físico-mental.",
        targetAudience: "Profesionales y Adultos",
        assignedTherapistId: "daniela-palacios",
        overview: "Tratamiento enfocado en profesionales o adultos sometidos a sobrecarga laboral, exigencias constantes y agotamiento severo (síndrome del trabajador quemado o burnout).",
        methodologies: [
          "Diagnóstico de factores de sobrecarga y vulnerabilidades de estrés.",
          "Técnicas de gestión del tiempo, delegación y establecimiento de límites.",
          "Protocolos de desaceleración mental y descanso réparador.",
          "Reestructuración de la autoexigencia y el perfeccionismo nocivo."
        ],
        benefits: [
          "Recuperación de la energía vital, vitalidad y salud física.",
          "Capacidad de desconectar del trabajo en los espacios personales.",
          "Disminución de dolores somáticos asociados a tensión muscular.",
          "Mejora del rendimiento profesional sin descuidar la salud."
        ]
      },
    ],
  },
  {
    id: "acompanamiento-familiar",
    title: "Acompañamiento Familiar",
    iconName: "Users",
    description: "Asesoría continua a padres y familias para construir entornos del hogar armónicos y saludables.",
    services: [
      {
        id: "orientacion-padres",
        title: "Orientación y Pautas de Crianza",
        description: "Guía práctica para una crianza respetuosa, límites claros sin violencia y gestión de rabietas.",
        targetAudience: "Padres y Cuidadores",
        assignedTherapistId: "daniela-palacios",
        overview: "Asesoría práctica orientada a padres de familia para afrontar los retos cotidianos del cuidado infantil y adolescente. Brindamos herramientas concretas para aplicar disciplina consciente y establecer acuerdos respetuosos.",
        methodologies: [
          "Principios de Disciplina Positiva y Crianza Respetuosa.",
          "Estrategias de comunicación efectiva acordes a cada etapa del desarrollo.",
          "Manejo de situaciones complejas (uso excesivo de pantallas, desobediencia, rutinas).",
          "Resolución de desacuerdos entre los padres respecto a las reglas de crianza."
        ],
        benefits: [
          "Mayor seguridad e intuición informada en las decisiones parentales.",
          "Disminución de gritos, regaños constantes y tensiones en el hogar.",
          "Fortalecimiento del vínculo afectivo y la confianza de los hijos.",
          "Crianza coherente alineada entre ambos progenitores."
        ]
      },
      {
        id: "terapia-familiar",
        title: "Terapia y Mediación Familiar",
        description: "Restablecimiento de canales afectivos y fortalecimiento de la cohesión familiar.",
        targetAudience: "Grupo Familiar",
        assignedTherapistId: "daniela-palacios",
        overview: "Espacio de consulta donde participa el núcleo familiar para abordar dinámicas de convivencia difíciles, problemas de adaptación ante divorcios, mudanzas o conflictos intergeneracionales.",
        methodologies: [
          "Enfoque Sistémico Familiar.",
          "Reconfiguración de roles, jerarquías y límites en el hogar.",
          "Mediación guiada de conflictos entre hermanos o padres e hijos.",
          "Ejercicios de cohesión afectiva y trabajo en equipo familiar."
        ],
        benefits: [
          "Restablecimiento de canales de comunicación empáticos en todo el hogar.",
          "Comprensión mutua de las necesidades de cada integrante de la familia.",
          "Disminución del clima de hostilidad o distancia emocional.",
          "Capacidad colectiva para superar crisis familiares con resiliencia."
        ]
      },
      {
        id: "escuela-padres",
        title: "Talleres de Escuela para Padres",
        description: "Encuentros psicoeducativos sobre comunicación asertiva, uso responsable de pantallas y emociones.",
        targetAudience: "Comunidad Familiar",
        assignedTherapistId: "lizbeth-ulcuango",
        overview: "Talleres y encuentros psicoeducativos grupales donde se comparten aprendizajes, estrategias preventivas y reflexiones sobre el cuidado integral de los hijos en el mundo contemporáneo.",
        methodologies: [
          "Exposiciones dinámicas y participativas de temas psicoeducativos.",
          "Estudios de caso real y dinámicas de simulación de rol.",
          "Material de trabajo impreso y digital para aplicar en casa.",
          "Espacio abierto de preguntas, respuestas y debate guiado."
        ],
        benefits: [
          "Acceso a conocimientos actualizados en psicología y pedagogía infantil.",
          "Sensación de comunidad y apoyo entre padres de familia.",
          "Herramientas de prevención ante acoso escolar, adicción digital o depresión.",
          "Participación activa en el crecimiento integral de los hijos."
        ]
      },
      {
        id: "asesoria-escolar",
        title: "Asesoría e Inclusión Escolar",
        description: "Acompañamiento a la unidad educativa para adaptar estrategias docentes según el perfil del niño.",
        targetAudience: "Familias e Instituciones Educativas",
        assignedTherapistId: "lizbeth-ulcuango",
        overview: "Servicio de enlace y asesoramiento técnico entre el Centro CETECP, la familia y la institución educativa del estudiante. Garantiza que las recomendaciones terapéuticas se traduzcan en adaptaciones curriculares efectivas en el aula.",
        methodologies: [
          "Reuniones de caso con el equipo docente y tutores del estudiante.",
          "Diseño de planes de adaptación curricular no significativa o significativa.",
          "Seguimiento periódico del desempeño escolar y conductual.",
          "Sensibilización a docentes sobre Necesidades Educativas Específicas (NEE)."
        ],
        benefits: [
          "Garantía de un entorno educativo verdaderamente inclusivo y comprensivo.",
          "Alineación total entre lo trabajado en consulta y la dinámica del aula.",
          "Evita el fracaso escolar y deserciones por falta de acompañamiento especializado.",
          "Mayor bienestar y serenidad emocional para el estudiante en su jornada escolar."
        ]
      },
    ],
  },
];

// Helper to find a service by ID across all categories
export const getServiceById = (serviceId: string): { service: ServiceItem; category: ServiceCategory; therapist?: Therapist } | null => {
  for (const category of SERVICE_CATEGORIES) {
    const service = category.services.find(s => s.id === serviceId);
    if (service) {
      const therapist = service.assignedTherapistId 
        ? THERAPISTS.find(t => t.id === service.assignedTherapistId) || THERAPISTS[0]
        : THERAPISTS[0];
      return { service, category, therapist };
    }
  }
  return null;
};
