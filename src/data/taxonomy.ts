import type { RadarFamilyDefinition, RadarFamilyId, TrapCategoryId, TrapDefinition } from '../types.ts';

export const RADAR_FAMILIES: RadarFamilyDefinition[] = [
  {
    id: 'distortion',
    traps: ['strawman', 'false_equivalence'],
    en: {
      label: 'Distortion & False Balance',
      shortLabel: 'Distortion',
      description: 'Caricaturing an opponent’s claim or equating asymmetrical positions.',
    },
    es: {
      label: 'Distorsión y Falsa Simetría',
      shortLabel: 'Distorsión',
      description: 'Caricaturizar la postura ajena o equiparar hechos asimétricos.',
    },
  },
  {
    id: 'binary_slope',
    traps: ['false_dichotomy', 'slippery_slope'],
    en: {
      label: 'Binary & Slope Framing',
      shortLabel: 'Binary / Slope',
      description: 'Forcing two extreme options or claiming inevitable catastrophic chains.',
    },
    es: {
      label: 'Dilema y Pendiente',
      shortLabel: 'Dilema / Pendiente',
      description: 'Forzar dos extremos o afirmar cadenas catastróficas inevitables.',
    },
  },
  {
    id: 'messenger_authority',
    traps: ['ad_hominem', 'appeal_to_authority'],
    en: {
      label: 'Messenger & Authority',
      shortLabel: 'Messenger',
      description: 'Attacking character or leaning on prestige instead of evidence.',
    },
    es: {
      label: 'Mensajero y Autoridad',
      shortLabel: 'Mensajero',
      description: 'Atacar a quien habla o apoyarse en prestigio sin pruebas directas.',
    },
  },
  {
    id: 'false_cause_sample',
    traps: ['post_hoc', 'hasty_generalization'],
    en: {
      label: 'Causality & Sampling',
      shortLabel: 'Cause / Sample',
      description: 'Confusing timing with causation or generalizing from cherry-picked cases.',
    },
    es: {
      label: 'Causalidad y Muestra',
      shortLabel: 'Causa / Muestra',
      description: 'Confundir secuencia temporal con causa o generalizar con pocos casos.',
    },
  },
  {
    id: 'emotional_framing',
    traps: ['appeal_to_fear', 'framing_anchoring'],
    en: {
      label: 'Fear & Framing Triggers',
      shortLabel: 'Emotion / Frame',
      description: 'Exploiting urgency, threat, or arbitrary reference numbers to bypass scrutiny.',
    },
    es: {
      label: 'Miedo y Encuadre',
      shortLabel: 'Emoción / Marco',
      description: 'Explotar miedo, urgencia o números ancla para esquivar el análisis.',
    },
  },
  {
    id: 'cognitive_bias',
    traps: ['confirmation_bias', 'sunk_cost'],
    en: {
      label: 'Cognitive Anchors',
      shortLabel: 'Cognitive Bias',
      description: 'Cherry-picking confirming data or defending bad investments due to past spend.',
    },
    es: {
      label: 'Sesgos Cognitivos',
      shortLabel: 'Sesgos',
      description: 'Seleccionar datos afines o persistir por lo ya invertido sin retorno.',
    },
  },
  {
    id: 'diversion_circular',
    traps: ['red_herring', 'circular_reasoning'],
    en: {
      label: 'Diversion & Circularity',
      shortLabel: 'Diversion',
      description: 'Changing the subject under pressure or assuming the conclusion as proof.',
    },
    es: {
      label: 'Desvío y Circularidad',
      shortLabel: 'Desvío',
      description: 'Lanzar cortinas de humo o dar por probada la propia conclusión.',
    },
  },
];

export const TRAPS: Record<TrapCategoryId, TrapDefinition> = {
  strawman: {
    id: 'strawman',
    nature: 'fallacy',
    radarFamily: 'distortion',
    en: {
      name: 'Strawman Fallacy',
      shortName: 'Strawman',
      summary: 'Replaces a nuanced argument with an exaggerated, easier-to-attack caricature.',
      tell: 'Listen for "So you are saying..." followed by an extreme position nobody actually defended.',
    },
    es: {
      name: 'Falacia del Hombre de Paja',
      shortName: 'Hombre de paja',
      summary: 'Sustituye un argumento matizado por una caricatura extrema más fácil de atacar.',
      tell: 'Fíjate en giros como "Entonces dices que..." seguidos de una postura absurda que nadie defendió.',
    },
  },
  false_dichotomy: {
    id: 'false_dichotomy',
    nature: 'fallacy',
    radarFamily: 'binary_slope',
    en: {
      name: 'False Dichotomy',
      shortName: 'False Dichotomy',
      summary: 'Presents two opposing extremes as the only possible choices while hiding middle paths.',
      tell: 'Watch for "Either we do X or Y happens" when realistic hybrids or third options exist.',
    },
    es: {
      name: 'Falsa Dicotomía (Falso Dilema)',
      shortName: 'Falsa dicotomía',
      summary: 'Presenta dos extremos opuestos como únicas salidas posibles ocultando opciones intermedias.',
      tell: 'Detecta frases de "O hacemos A o tendremos el desastre B" cuando existen soluciones graduales.',
    },
  },
  appeal_to_authority: {
    id: 'appeal_to_authority',
    nature: 'fallacy',
    radarFamily: 'messenger_authority',
    en: {
      name: 'False Appeal to Authority',
      shortName: 'False Authority',
      summary: 'Uses prestige, celebrity, or an unrelated credential instead of relevant empirical proof.',
      tell: 'Check whether the cited authority has expertise in that exact domain and offers verifiable data.',
    },
    es: {
      name: 'Falsa Apelación a la Autoridad',
      shortName: 'Falsa autoridad',
      summary: 'Usa prestigio, fama o un título ajeno al tema en lugar de evidencia comprobable.',
      tell: 'Comprueba si la persona citada es experta en ese campo exacto y si aporta datos verificables.',
    },
  },
  slippery_slope: {
    id: 'slippery_slope',
    nature: 'fallacy',
    radarFamily: 'binary_slope',
    en: {
      name: 'Slippery Slope',
      shortName: 'Slippery Slope',
      summary: 'Asserts that one small step will inevitably trigger an extreme chain reaction without proof.',
      tell: 'Look for dramatic leaps from step 1 to step 10 with no mechanism explaining why stops fail.',
    },
    es: {
      name: 'Pendiente Resbaladiza',
      shortName: 'Pendiente resbaladiza',
      summary: 'Afirma sin pruebas que una medida menor desatará una cadena inevitable hasta el desastre.',
      tell: 'Busca saltos del paso 1 al paso 10 sin explicar por qué los límites intermedios fallarían.',
    },
  },
  post_hoc: {
    id: 'post_hoc',
    nature: 'fallacy',
    radarFamily: 'false_cause_sample',
    en: {
      name: 'False Cause (Post Hoc)',
      shortName: 'Post Hoc / False Cause',
      summary: 'Assumes that because B happened after or alongside A, A must have caused B.',
      tell: 'Look for missing control groups, seasonality, or confounding third variables.',
    },
    es: {
      name: 'Correlación como Causa (Post Hoc)',
      shortName: 'Post hoc / Falsa causa',
      summary: 'Asume que porque B ocurrió después o junto a A, entonces A causó B.',
      tell: 'Observa si faltan grupos de control, estacionalidad o terceras variables ocultas.',
    },
  },
  ad_hominem: {
    id: 'ad_hominem',
    nature: 'fallacy',
    radarFamily: 'messenger_authority',
    en: {
      name: 'Ad Hominem Attack',
      shortName: 'Ad Hominem',
      summary: 'Dismisses a claim by attacking the speaker’s character, motives, or background.',
      tell: 'Notice when the reply targets who the person is rather than whether their evidence holds up.',
    },
    es: {
      name: 'Ataque Ad Hominem',
      shortName: 'Ad hominem',
      summary: 'Descarta una tesis atacando el carácter, intereses o pasado de quien la pronuncia.',
      tell: 'Nota cuándo la réplica se centra en quién habla en vez de evaluar si sus datos son ciertos.',
    },
  },
  circular_reasoning: {
    id: 'circular_reasoning',
    nature: 'fallacy',
    radarFamily: 'diversion_circular',
    en: {
      name: 'Circular Reasoning',
      shortName: 'Circular Reasoning',
      summary: 'Restates the conclusion in different words and offers it as its own premise.',
      tell: 'If the "because" clause just paraphrases the claim itself, no independent proof was offered.',
    },
    es: {
      name: 'Razonamiento Circular (Petición de Principio)',
      shortName: 'Razonamiento circular',
      summary: 'Reformula la conclusión con otras palabras y la presenta como si fuera su propia prueba.',
      tell: 'Si el "porque..." solo repite la afirmación inicial con sinónimos, no hay evidencia real.',
    },
  },
  false_equivalence: {
    id: 'false_equivalence',
    nature: 'fallacy',
    radarFamily: 'distortion',
    en: {
      name: 'False Equivalence / Tu Quoque',
      shortName: 'False Equivalence',
      summary: 'Treats vastly unequal issues as identical or deflects critique by pointing out another flaw.',
      tell: 'Check whether scale, severity, and intent are genuinely comparable—or just both imperfect.',
    },
    es: {
      name: 'Falsa Equivalencia / Tu Quoque',
      shortName: 'Falsa equivalencia',
      summary: 'Equipara hechos de escala muy distinta o esquiva la crítica señalando un fallo ajeno.',
      tell: 'Comprueba si la gravedad y la evidencia son comparables o si solo se busca empatar el debate.',
    },
  },
  confirmation_bias: {
    id: 'confirmation_bias',
    nature: 'bias',
    radarFamily: 'cognitive_bias',
    en: {
      name: 'Confirmation Bias',
      shortName: 'Confirmation Bias',
      summary: 'Selectively highlights anecdotes or data that match an existing belief while ignoring counter-evidence.',
      tell: 'Ask what evidence would falsify the speaker’s view and whether disconfirming cases were excluded.',
    },
    es: {
      name: 'Sesgo de Confirmación',
      shortName: 'Sesgo de confirmación',
      summary: 'Resalta solo casos que confirman una creencia previa e ignora la evidencia contraria.',
      tell: 'Pregúntate qué datos refutarían esa postura y si se descartaron casos desfavorables.',
    },
  },
  sunk_cost: {
    id: 'sunk_cost',
    nature: 'bias',
    radarFamily: 'cognitive_bias',
    en: {
      name: 'Sunk Cost Fallacy',
      shortName: 'Sunk Cost',
      summary: 'Justifies continuing a losing path because of unrecoverable time, money, or pride already spent.',
      tell: 'Listen for "We cannot waste the last three years" instead of comparing future costs and benefits.',
    },
    es: {
      name: 'Falacia del Coste Hundido',
      shortName: 'Coste hundido',
      summary: 'Justifica seguir en un mal plan por el tiempo, dinero o prestigio ya invertidos e irrecuperables.',
      tell: 'Detecta frases como "No podemos tirar por la borda estos años" en lugar de evaluar el futuro.',
    },
  },
  framing_anchoring: {
    id: 'framing_anchoring',
    nature: 'rhetoric',
    radarFamily: 'emotional_framing',
    en: {
      name: 'Manipulative Framing & Anchoring',
      shortName: 'Framing / Anchoring',
      summary: 'Sets an arbitrary reference point or loaded phrasing to distort perceived value or risk.',
      tell: 'Test the number or label against an absolute baseline (e.g., "was $999, now $299" or % vs raw counts).',
    },
    es: {
      name: 'Anclaje y Encuadre Manipulador',
      shortName: 'Anclaje / Encuadre',
      summary: 'Fija un número de referencia arbitrario o un lenguaje sesgado para distorsionar valor o riesgo.',
      tell: 'Contrasta la cifra con una base real (porcentaje relativo vs. dato absoluto o precio inflado).',
    },
  },
  appeal_to_fear: {
    id: 'appeal_to_fear',
    nature: 'rhetoric',
    radarFamily: 'emotional_framing',
    en: {
      name: 'Appeal to Fear & Emotion',
      shortName: 'Appeal to Fear',
      summary: 'Uses alarmist imagery, urgency, or moral panic to push compliance before evidence is checked.',
      tell: 'Separate the emotional temperature of the wording from the actual probability and evidence.',
    },
    es: {
      name: 'Apelación al Miedo o la Emoción',
      shortName: 'Apelación al miedo',
      summary: 'Usa alarma, urgencia o pánico moral para forzar adhesión antes de revisar los datos.',
      tell: 'Separa la carga emocional del vocabulario de la probabilidad real y los hechos verificables.',
    },
  },
  hasty_generalization: {
    id: 'hasty_generalization',
    nature: 'bias',
    radarFamily: 'false_cause_sample',
    en: {
      name: 'Hasty Generalization',
      shortName: 'Hasty Generalization',
      summary: 'Draws a sweeping rule about an entire group from a tiny, vivid, or unrepresentative sample.',
      tell: 'Look for "everyone", "always", or "proves the whole sector" backed by one or two anecdotes.',
    },
    es: {
      name: 'Generalización Apresurada',
      shortName: 'Generalización apresurada',
      summary: 'Extrae una regla universal sobre todo un grupo a partir de una muestra mínima o sesgada.',
      tell: 'Busca "siempre", "todos" o "queda demostrado" apoyados en apenas un par de anécdotas.',
    },
  },
  red_herring: {
    id: 'red_herring',
    nature: 'rhetoric',
    radarFamily: 'diversion_circular',
    en: {
      name: 'Red Herring / Smokescreen',
      shortName: 'Red Herring',
      summary: 'Introduces an emotionally charged side topic to steer attention away from the original question.',
      tell: 'Notice if the reply answers a different, easier, or flashier topic while leaving the core point untouched.',
    },
    es: {
      name: 'Cortina de Humo (Pista Falsa)',
      shortName: 'Cortina de humo',
      summary: 'Introduce un tema lateral llamativo para desviar la atención de la pregunta original.',
      tell: 'Comprueba si responde a otro asunto más vistoso dejando intacta la cuestión principal.',
    },
  },
};

export const TRAP_IDS = Object.keys(TRAPS) as TrapCategoryId[];

export const RADAR_FAMILY_MAP: Record<RadarFamilyId, RadarFamilyDefinition> = RADAR_FAMILIES.reduce(
  (acc, fam) => {
    acc[fam.id] = fam;
    return acc;
  },
  {} as Record<RadarFamilyId, RadarFamilyDefinition>,
);
