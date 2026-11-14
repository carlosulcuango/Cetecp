// Contenido ampliado de cada servicio: señales para consultar y preguntas frecuentes.
// BORRADOR: es contenido de salud y debe ser revisado por la terapeuta a cargo
// de cada servicio antes de publicarse.

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceExtras {
  /** "¿Cuándo consultar?": situaciones en las que conviene pedir una cita */
  signs: string[];
  faqs: ServiceFaq[];
}

export const SERVICE_EXTRAS: Record<string, ServiceExtras> = {
  'eval-psicologica': {
    signs: [
      'Cambios de ánimo, tristeza o irritabilidad que se mantienen durante semanas.',
      'Preocupación o nerviosismo que interfiere con el estudio, el trabajo o el sueño.',
      'Dificultad para entender qué se siente o por qué se reacciona de cierta manera.',
      'Una institución educativa o un médico solicita un informe psicológico.',
    ],
    faqs: [
      {
        question: '¿En qué se diferencia una evaluación psicológica de una terapia?',
        answer:
          'La evaluación es un proceso breve para comprender qué está ocurriendo y elaborar un informe con recomendaciones. La terapia es el acompañamiento posterior para trabajar sobre lo que la evaluación identificó.',
      },
      {
        question: '¿Qué recibo al terminar la evaluación?',
        answer:
          'Una reunión de devolución en la que se explican los resultados con claridad y un informe escrito con las conclusiones y las recomendaciones.',
      },
      {
        question: '¿Las pruebas son difíciles o incómodas?',
        answer:
          'No. Son entrevistas, cuestionarios y actividades adaptadas a la edad de la persona. No hay respuestas correctas o incorrectas ni se necesita preparación previa.',
      },
    ],
  },
  'eval-psicopedagogica': {
    signs: [
      'Dificultades persistentes para leer, escribir o resolver operaciones matemáticas.',
      'Bajo rendimiento escolar a pesar del esfuerzo y del apoyo en casa.',
      'Rechazo a las tareas, frustración o comentarios como "no puedo" o "soy malo para esto".',
      'El colegio o el DECE recomienda una valoración.',
    ],
    faqs: [
      {
        question: '¿A qué edad se puede hacer una evaluación psicopedagógica?',
        answer:
          'Suele realizarse durante la etapa escolar, cuando aparecen dificultades en la lectura, la escritura o el cálculo. Si hay dudas antes de esa edad, en la primera cita se orienta sobre el tipo de valoración más adecuado.',
      },
      {
        question: '¿El informe sirve para presentarlo en el colegio?',
        answer:
          'Sí. El informe incluye el perfil de aprendizaje del estudiante y recomendaciones concretas para docentes y para el departamento de consejería estudiantil (DECE).',
      },
      {
        question: '¿Mi hijo necesita prepararse para la evaluación?',
        answer:
          'No. Basta con que llegue descansado. Es útil que la familia traiga cuadernos, libretas de calificaciones o informes anteriores si los tiene.',
      },
    ],
  },
  'eval-conductual': {
    signs: [
      'Dificultad para mantener la atención en clase o al hacer tareas.',
      'Inquietud constante o impulsividad que genera problemas en casa o en la escuela.',
      'Rabietas frecuentes o desobediencia que no mejora con los límites habituales.',
      'Quejas repetidas de docentes sobre el comportamiento.',
    ],
    faqs: [
      {
        question: '¿Esta evaluación sirve para saber si mi hijo tiene TDAH?',
        answer:
          'La evaluación analiza la atención, la impulsividad y el comportamiento en distintos contextos, y permite identificar si los rasgos son compatibles con un TDAH o si se explican mejor por otras causas.',
      },
      {
        question: '¿Por qué se pide información a los docentes?',
        answer:
          'Porque el comportamiento puede variar entre la casa y la escuela. Contar con la observación de padres y docentes permite llegar a conclusiones más precisas.',
      },
      {
        question: '¿Qué sucede después de la evaluación?',
        answer:
          'Se entrega un informe con los resultados y un plan de recomendaciones para la casa y la escuela. Si hace falta, se propone un proceso de intervención.',
      },
    ],
  },
  'eval-diagnostico-tea': {
    signs: [
      'Poco contacto visual o escasa respuesta al nombre en la primera infancia.',
      'Retraso en el lenguaje o una forma de comunicarse poco habitual.',
      'Intereses muy intensos, rutinas rígidas o movimientos repetitivos.',
      'Dificultades persistentes para relacionarse, también en adolescentes y adultos que nunca fueron evaluados.',
    ],
    faqs: [
      {
        question: '¿Qué son el ADOS-2 y el ADI-R?',
        answer:
          'Son dos instrumentos estandarizados de referencia internacional para la evaluación del autismo. El ADOS-2 es una observación estructurada de la persona evaluada y el ADI-R es una entrevista detallada a los padres o cuidadores.',
      },
      {
        question: '¿Se puede evaluar a un adulto?',
        answer:
          'Sí. La evaluación se adapta a cada etapa de la vida, incluidos adolescentes y adultos que sospechan estar dentro del espectro y no recibieron un diagnóstico en la infancia.',
      },
      {
        question: '¿Qué se obtiene al final del proceso?',
        answer:
          'Un informe diagnóstico con los resultados de las pruebas, la descripción del perfil de la persona y recomendaciones para la familia, la escuela y los apoyos terapéuticos.',
      },
    ],
  },
  'rehabilitacion-neuropsicologica': {
    signs: [
      'Problemas de atención o memoria que afectan el estudio, el trabajo o la vida diaria.',
      'Dificultad para organizarse, planificar o terminar las actividades.',
      'Cambios cognitivos después de una lesión o enfermedad neurológica.',
      'Una evaluación previa recomendó estimulación o rehabilitación cognitiva.',
    ],
    faqs: [
      {
        question: '¿Qué es la rehabilitación neuropsicológica?',
        answer:
          'Es un programa de ejercicios y estrategias diseñado para fortalecer funciones como la atención, la memoria, el lenguaje y la organización, o para aprender formas de compensar las dificultades.',
      },
      {
        question: '¿Se necesita una evaluación antes de empezar?',
        answer:
          'Sí. El plan se diseña a partir de una valoración que identifica qué funciones conviene trabajar. Si ya existe un informe reciente, puede utilizarse como punto de partida.',
      },
      {
        question: '¿Cuánto dura el proceso?',
        answer:
          'Depende de cada caso y de los objetivos. Se realizan reevaluaciones periódicas para revisar los avances y ajustar el plan.',
      },
    ],
  },
  'eval-trastornos-neurocognitivos': {
    signs: [
      'Olvidos cada vez más frecuentes de citas, conversaciones o hechos recientes.',
      'Desorientación en lugares conocidos o confusión con las fechas.',
      'Dificultad para encontrar palabras o para seguir una conversación.',
      'Cambios en el carácter o en la capacidad de manejar tareas cotidianas.',
    ],
    faqs: [
      {
        question: '¿Todos los olvidos son señal de demencia?',
        answer:
          'No. Algunos cambios en la memoria forman parte del envejecimiento normal. La evaluación permite diferenciar esos cambios de un deterioro cognitivo que requiere atención.',
      },
      {
        question: '¿Debe acudir un familiar a la cita?',
        answer:
          'Es recomendable. La información de un familiar cercano sobre los cambios observados en la vida diaria complementa los resultados de las pruebas.',
      },
      {
        question: '¿El informe sirve para el médico tratante?',
        answer:
          'Sí. El informe describe el estado de las funciones cognitivas y puede ser compartido con el neurólogo, geriatra o médico de cabecera.',
      },
    ],
  },
  'atencion-adulto-mayor': {
    signs: [
      'Interés en mantener la memoria y la mente activas durante el envejecimiento.',
      'Tristeza, aislamiento o pérdida de interés tras la jubilación o una pérdida.',
      'La familia necesita orientación para acompañar y cuidar mejor.',
      'Un profesional recomendó estimulación cognitiva.',
    ],
    faqs: [
      {
        question: '¿Este servicio es solo para personas con deterioro cognitivo?',
        answer:
          'No. También está dirigido a personas mayores sanas que desean mantener sus capacidades y a quienes atraviesan cambios emocionales propios de esta etapa.',
      },
      {
        question: '¿Las actividades son individuales o grupales?',
        answer:
          'Pueden ser de las dos formas. La modalidad se define según las necesidades y preferencias de cada persona.',
      },
      {
        question: '¿La familia participa?',
        answer:
          'Sí. Se ofrece orientación a familiares y cuidadores para adaptar el entorno y acompañar el proceso en casa.',
      },
    ],
  },
  'terapia-aprendizaje': {
    signs: [
      'Confusión, inversión u omisión de letras al leer o escribir.',
      'Lectura lenta o dificultad para comprender lo que se lee.',
      'Problemas persistentes con los números y las operaciones básicas.',
      'Desmotivación o baja autoestima relacionadas con la escuela.',
    ],
    faqs: [
      {
        question: '¿En qué se diferencia de un refuerzo escolar?',
        answer:
          'El refuerzo escolar repasa los contenidos de clase. La terapia de aprendizaje trabaja las habilidades de base, como la conciencia fonológica o el procesamiento numérico, que hacen posible aprender esos contenidos.',
      },
      {
        question: '¿Se necesita una evaluación previa?',
        answer:
          'Es recomendable, porque permite saber con precisión qué dificultades existen y diseñar un plan individual. Si ya hay un informe, se parte de él.',
      },
      {
        question: '¿Se coordina con el colegio?',
        answer:
          'Sí. Con autorización de la familia se mantiene comunicación con los docentes para que las estrategias se apliquen también en el aula.',
      },
    ],
  },
  'terapia-conductual-infantil': {
    signs: [
      'Rabietas intensas o frecuentes que resultan difíciles de manejar.',
      'Dificultad para seguir reglas y límites en casa o en la escuela.',
      'Conductas agresivas hacia otros niños, hermanos o adultos.',
      'Sensación en los padres de haber probado todo sin resultado.',
    ],
    faqs: [
      {
        question: '¿Los padres participan en el proceso?',
        answer:
          'Sí. El trabajo con los padres es una parte central: se entregan pautas concretas para aplicar en casa, porque los cambios se consolidan en el día a día.',
      },
      {
        question: '¿Las rabietas son normales?',
        answer:
          'Forman parte del desarrollo en los primeros años. Conviene consultar cuando son muy frecuentes o intensas, cuando se mantienen al crecer o cuando afectan la convivencia familiar o escolar.',
      },
      {
        question: '¿Cómo son las sesiones con el niño?',
        answer:
          'Se trabaja mediante el juego y actividades adaptadas a su edad, para que aprenda a reconocer sus emociones y a expresarlas de otra manera.',
      },
    ],
  },
  'terapia-lenguaje': {
    signs: [
      'El niño habla poco o usa menos palabras de las esperadas para su edad.',
      'Pronunciación difícil de entender para personas fuera de la familia.',
      'Dificultad para armar frases o para contar lo que le sucede.',
      'Frustración al no lograr hacerse entender.',
    ],
    faqs: [
      {
        question: '¿A qué edad conviene consultar?',
        answer:
          'Cuando la familia o los docentes notan que el lenguaje avanza más lento de lo esperado. Consultar temprano permite orientar a la familia y, si hace falta, iniciar la estimulación a tiempo.',
      },
      {
        question: '¿Cómo se trabaja en las sesiones?',
        answer:
          'A través del juego, canciones y ejercicios de articulación adaptados a la edad, para ampliar el vocabulario y mejorar la pronunciación.',
      },
      {
        question: '¿Qué puede hacer la familia en casa?',
        answer:
          'Se entregan pautas sencillas para estimular el habla en las rutinas diarias. La práctica en casa es una parte importante del avance.',
      },
    ],
  },
  'estimulacion-temprana': {
    signs: [
      'Dudas sobre si el desarrollo del bebé o niño pequeño avanza como se espera.',
      'Retraso en hitos como sentarse, gatear, caminar o decir las primeras palabras.',
      'Nacimiento prematuro u otros antecedentes que requieren seguimiento.',
      'Deseo de acompañar y potenciar el desarrollo en los primeros años.',
    ],
    faqs: [
      {
        question: '¿Desde qué edad se puede iniciar?',
        answer:
          'Desde los primeros meses de vida. Las actividades se adaptan a la etapa de desarrollo de cada niño.',
      },
      {
        question: '¿Es solo para niños con dificultades?',
        answer:
          'No. Está dirigida tanto a niños que necesitan apoyo en algún área como a familias que desean favorecer el desarrollo de sus hijos.',
      },
      {
        question: '¿Los padres están presentes en las sesiones?',
        answer:
          'Sí. La participación de los padres es parte del proceso, y se les enseñan actividades para continuar en casa.',
      },
    ],
  },
  'terapia-ansiedad-depresion': {
    signs: [
      'Preocupación constante, nerviosismo o sensación de estar siempre en alerta.',
      'Tristeza, falta de energía o pérdida de interés por lo que antes gustaba.',
      'Problemas para dormir, cambios en el apetito o dificultad para concentrarse.',
      'Episodios de palpitaciones, falta de aire o miedo intenso sin causa aparente.',
    ],
    faqs: [
      {
        question: '¿Cómo sé si lo que siento requiere terapia?',
        answer:
          'Si el malestar se mantiene en el tiempo o interfiere con el trabajo, el estudio, el descanso o las relaciones, es recomendable consultar. No hace falta esperar a sentirse muy mal para pedir ayuda.',
      },
      {
        question: '¿La terapia incluye medicación?',
        answer:
          'No. La psicoterapia trabaja con herramientas psicológicas. Si en algún caso se considera útil una valoración médica o psiquiátrica, se indica y se orienta a la persona.',
      },
      {
        question: '¿Lo que cuento en sesión es confidencial?',
        answer:
          'Sí. La confidencialidad es un principio ético de la atención psicológica y lo conversado en sesión es reservado.',
      },
    ],
  },
  'terapia-individual': {
    signs: [
      'Un duelo, una ruptura o un cambio de vida difícil de atravesar.',
      'Sensación de estancamiento o de no saber qué decisión tomar.',
      'Baja autoestima o dificultad para poner límites.',
      'Deseo de conocerse mejor y de crecer a nivel personal.',
    ],
    faqs: [
      {
        question: '¿Tengo que tener un problema grave para ir a terapia?',
        answer:
          'No. La terapia también es un espacio para conocerse, tomar decisiones con mayor claridad y atravesar cambios con acompañamiento.',
      },
      {
        question: '¿Qué ocurre en la primera sesión?',
        answer:
          'Es un espacio para contar el motivo de consulta, resolver dudas y acordar junto con la terapeuta los objetivos del proceso.',
      },
      {
        question: '¿Cuánto dura un proceso terapéutico?',
        answer:
          'Depende de cada persona y de sus objetivos. La duración y la frecuencia se conversan con la terapeuta y se revisan a lo largo del proceso.',
      },
    ],
  },
  'terapia-pareja': {
    signs: [
      'Discusiones frecuentes que terminan siempre de la misma forma.',
      'Distancia emocional o sensación de convivir como compañeros de casa.',
      'Pérdida de confianza después de una crisis.',
      'Dificultad para ponerse de acuerdo en decisiones importantes.',
    ],
    faqs: [
      {
        question: '¿Deben asistir los dos miembros de la pareja?',
        answer:
          'Lo ideal es que participen ambos. Si uno de los dos no desea asistir, se puede iniciar con una consulta individual para recibir orientación.',
      },
      {
        question: '¿La terapeuta toma partido por uno de los dos?',
        answer:
          'No. El papel de la terapeuta es imparcial: ayuda a que ambos se escuchen, se entiendan y encuentren acuerdos.',
      },
      {
        question: '¿La terapia sirve si estamos pensando en separarnos?',
        answer:
          'Sí. El espacio ayuda a tomar esa decisión con mayor claridad, ya sea para reconstruir la relación o para cerrar la etapa de manera respetuosa.',
      },
    ],
  },
  'gestion-estres': {
    signs: [
      'Cansancio constante que no mejora con el descanso.',
      'Dificultad para desconectarse del trabajo fuera del horario laboral.',
      'Irritabilidad, dolores de cabeza o tensión muscular frecuentes.',
      'Pérdida de motivación o sensación de no rendir como antes.',
    ],
    faqs: [
      {
        question: '¿Qué es el burnout?',
        answer:
          'Es un estado de agotamiento físico y emocional asociado al estrés laboral sostenido. Suele manifestarse con cansancio extremo, distanciamiento del trabajo y sensación de bajo rendimiento.',
      },
      {
        question: '¿En qué consiste el proceso?',
        answer:
          'Se identifican las fuentes de sobrecarga y se trabajan herramientas prácticas: organización del tiempo, establecimiento de límites, técnicas de regulación y hábitos de descanso.',
      },
      {
        question: '¿Tengo que dejar mi trabajo para mejorar?',
        answer:
          'No necesariamente. El objetivo es encontrar una forma más saludable de relacionarse con las exigencias y recuperar el equilibrio entre la vida laboral y la personal.',
      },
    ],
  },
  'orientacion-padres': {
    signs: [
      'Dudas sobre cómo poner límites sin gritos ni castigos.',
      'Rabietas, desobediencia o conflictos diarios por las rutinas.',
      'Desacuerdos entre los padres sobre la forma de criar.',
      'Preocupación por el uso de pantallas o por una etapa nueva del desarrollo.',
    ],
    faqs: [
      {
        question: '¿Debe asistir mi hijo a las sesiones?',
        answer:
          'No es necesario. La orientación está dirigida a madres, padres y cuidadores, y se centra en las herramientas que ellos pueden aplicar en casa.',
      },
      {
        question: '¿Es útil si solo puede asistir uno de los padres?',
        answer:
          'Sí. Lo ideal es que participen ambos, pero el proceso también es útil cuando asiste una sola persona responsable de la crianza.',
      },
      {
        question: '¿Sirve para hijos adolescentes?',
        answer:
          'Sí. Las pautas se adaptan a cada etapa, desde la primera infancia hasta la adolescencia.',
      },
    ],
  },
  'terapia-familiar': {
    signs: [
      'Conflictos frecuentes entre padres e hijos o entre hermanos.',
      'Dificultad de la familia para adaptarse a un divorcio, una mudanza o una pérdida.',
      'Comunicación tensa o silencio prolongado en casa.',
      'Un integrante atraviesa un momento difícil que afecta a todos.',
    ],
    faqs: [
      {
        question: '¿Tiene que asistir toda la familia?',
        answer:
          'Depende de la situación. En la primera cita se define quiénes conviene que participen y en qué momentos.',
      },
      {
        question: '¿Qué pasa si un integrante no quiere asistir?',
        answer:
          'Se puede iniciar con quienes estén dispuestos. Con frecuencia, los cambios en una parte de la familia influyen en el resto.',
      },
      {
        question: '¿En la terapia se busca un culpable?',
        answer:
          'No. El enfoque considera a la familia como un conjunto y busca mejorar la forma en que sus integrantes se relacionan, sin señalar a una persona.',
      },
    ],
  },
  'escuela-padres': {
    signs: [
      'Interés en aprender herramientas de crianza junto a otras familias.',
      'Instituciones educativas que desean ofrecer formación a sus padres de familia.',
      'Inquietudes sobre pantallas, acoso escolar o manejo de emociones.',
      'Deseo de prevenir dificultades antes de que aparezcan.',
    ],
    faqs: [
      {
        question: '¿Qué temas se tratan en los talleres?',
        answer:
          'Comunicación con los hijos, límites, uso responsable de pantallas, manejo de emociones y prevención, entre otros. Los temas pueden adaptarse a las necesidades del grupo.',
      },
      {
        question: '¿Los talleres pueden realizarse para una institución?',
        answer:
          'Sí. Pueden organizarse para colegios, grupos de padres u otras organizaciones. Los detalles se coordinan directamente con el centro.',
      },
      {
        question: '¿Se entrega material?',
        answer:
          'Sí. Los talleres incluyen material de apoyo para aplicar lo aprendido en casa.',
      },
    ],
  },
  'asesoria-escolar': {
    signs: [
      'El estudiante tiene un diagnóstico y necesita adaptaciones en el aula.',
      'El colegio solicita orientación para aplicar las recomendaciones de un informe.',
      'Las estrategias trabajadas en consulta no se reflejan en la escuela.',
      'La familia necesita acompañamiento en la comunicación con la institución.',
    ],
    faqs: [
      {
        question: '¿Qué es una adaptación curricular?',
        answer:
          'Es un ajuste en la forma de enseñar o de evaluar para que el estudiante pueda aprender según sus necesidades. Puede ir desde cambios en la metodología hasta ajustes en los objetivos.',
      },
      {
        question: '¿El centro se comunica directamente con el colegio?',
        answer:
          'Sí, con autorización de la familia. Se realizan reuniones con docentes y con el DECE para acordar las estrategias.',
      },
      {
        question: '¿Se necesita un informe previo?',
        answer:
          'Es recomendable contar con una evaluación que describa las necesidades del estudiante, ya que las adaptaciones se diseñan a partir de ella.',
      },
    ],
  },
};
