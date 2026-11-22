import type { Locale, ScenarioContext, TrainingMode, TrapNature } from '../types.ts';

export interface BookRecommendation {
  id: string;
  title: string;
  author: string;
  focus: string;
  summary: string;
  affiliateUrl: string;
}

export interface TranslationDictionary {
  seoByMode: Record<TrainingMode, { title: string; description: string }>;
  nav: {
    trainer: string;
    radar: string;
    guide: string;
    faq: string;
    langToggleAria: string;
  };
  hero: {
    kicker: string;
    h1: string;
    subtitle: string;
    stats: {
      streak: string;
      streakUnit: string;
      xp: string;
      accuracy: string;
      topBlindspot: string;
      noneYet: string;
    };
  };
  modes: {
    spotter: string;
    counter: string;
    context: string;
    radar: string;
  };
  contexts: {
    all: string;
    debate: string;
    article: string;
    advertising: string;
    everyday: string;
  };
  natures: Record<TrapNature, string>;
  difficulties: {
    core: string;
    nuanced: string;
  };
  trainer: {
    roundProgress: string;
    timedMode: string;
    untimedMode: string;
    secondsLeft: string;
    timeExpired: string;
    showHint: string;
    hideHint: string;
    hintLabel: string;
    shareCase: string;
    copiedLink: string;
    spotterPrompt: string;
    counterPrompt: string;
    trapIdentified: string;
    correctSpot: string;
    missedSpot: string;
    correctCounter: string;
    weakCounter: string;
    whyItFails: string;
    rhetoricalTrick: string;
    howToDisarm: string;
    practiceCounterBtn: string;
    nextScenarioBtn: string;
    finishRoundBtn: string;
    newRoundBtn: string;
    backToAllBtn: string;
    roundCompleteTitle: string;
    roundCompleteSubtitle: string;
    scoreLabel: string;
    xpEarnedLabel: string;
    reviewRadarBtn: string;
    blindspotBannerTitle: string;
    blindspotBannerExit: string;
    keyboardTip: string;
    flawInOption: string;
    winningLogic: string;
  };
  radar: {
    title: string;
    subtitle: string;
    noDataTitle: string;
    noDataBody: string;
    runDiagnosticBtn: string;
    drillBlindspotsBtn: string;
    topBlindspotHeading: string;
    errorRateLabel: string;
    missesLabel: string;
    accuracyLabel: string;
    attemptsLabel: string;
    tableTitle: string;
    colTrap: string;
    colNature: string;
    colAccuracy: string;
    colErrorRate: string;
    colMissed: string;
    recentRoundsTitle: string;
    noRoundsYet: string;
    chartAriaLabel: string;
  };
  ads: {
    label: string;
    leaderboardFallbackTitle: string;
    leaderboardFallbackSub: string;
    bottomFallbackTitle: string;
    bottomFallbackSub: string;
  };
  resources: {
    heading: string;
    subheading: string;
    disclosure: string;
    viewBook: string;
    books: BookRecommendation[];
  };
  editorial: {
    guideHeading: string;
    guideLead: string;
    comparisonHeading: string;
    comparisonRows: Array<{
      concept: string;
      mechanism: string;
      example: string;
      fix: string;
    }>;
    comparisonCols: {
      concept: string;
      mechanism: string;
      example: string;
      fix: string;
    };
    fieldGuideHeading: string;
    fieldGuideSub: string;
    counterFrameworkHeading: string;
    counterSteps: Array<{
      step: string;
      title: string;
      body: string;
    }>;
    faqHeading: string;
    faqItems: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    disclaimer: string;
    localPrivacy: string;
    resetData: string;
    resetConfirm: string;
    resetCancel: string;
    resetDone: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  en: {
    seoByMode: {
      spotter: {
        title: 'CritiCue – Logical Fallacies & Critical Thinking Trainer',
        description:
          'Train your critical ear to spot logical fallacies, cognitive biases, and rhetorical tricks in debates, news, and ads, and practice constructive replies.',
      },
      counter: {
        title: 'Constructive Counter-Argument Lab | CritiCue',
        description:
          'Practice dismantling manipulative arguments with logic, precision, and evidence requests without falling into insults or strawman traps.',
      },
      context: {
        title: 'Real-World Context Fallacy Drill | CritiCue',
        description:
          'Filter critical thinking drills by debates, news articles, advertising copy, or everyday conversations to catch persuasion tricks in context.',
      },
      radar: {
        title: 'Blindspot Radar & Argumentation Analytics | CritiCue',
        description:
          'Visualize which logical fallacies and cognitive biases fool you most often and launch targeted practice rounds to close your blindspots.',
      },
    },
    nav: {
      trainer: 'Trainer',
      radar: 'Blindspot Radar',
      guide: 'Field Guide',
      faq: 'FAQ',
      langToggleAria: 'Switch language',
    },
    hero: {
      kicker: 'Critical Reading & Constructive Argumentation',
      h1: 'Logical Fallacies & Critical Thinking Trainer',
      subtitle:
        'Sharpen your ear against flawed reasoning in debates, headlines, advertising, and daily conversations—then practice calm, high-precision replies.',
      stats: {
        streak: 'Daily Streak',
        streakUnit: 'd',
        xp: 'XP',
        accuracy: 'Accuracy',
        topBlindspot: 'Top Blindspot',
        noneYet: 'Needs 3+ drills',
      },
    },
    modes: {
      spotter: 'Fallacy & Bias Spotter',
      counter: 'Counter-Argument Lab',
      context: 'Real-World Context',
      radar: 'Blindspot Radar',
    },
    contexts: {
      all: 'All Sources',
      debate: 'Debates',
      article: 'Articles & News',
      advertising: 'Advertising',
      everyday: 'Everyday Talk',
    },
    natures: {
      fallacy: 'Logical Fallacy',
      bias: 'Cognitive Bias',
      rhetoric: 'Rhetorical Trick',
    },
    difficulties: {
      core: 'Core',
      nuanced: 'Nuanced',
    },
    trainer: {
      roundProgress: 'Scenario',
      timedMode: '30s Timer',
      untimedMode: 'Untimed',
      secondsLeft: 's left',
      timeExpired: 'Time Up — Review the Trap',
      showHint: 'Show Clue',
      hideHint: 'Hide Clue',
      hintLabel: 'Structural Clue',
      shareCase: 'Share Exercise',
      copiedLink: 'Link Copied',
      spotterPrompt: 'Identify the primary fallacy, cognitive bias, or rhetorical trick:',
      counterPrompt: 'Choose the reply that disarms the argument cleanly without taking the bait:',
      trapIdentified: 'Active Trap',
      correctSpot: 'Trap Spotted',
      missedSpot: 'Missed Trap',
      correctCounter: 'Solid Counter-Argument',
      weakCounter: 'Fell Into the Trap',
      whyItFails: 'Why the Reasoning Fails',
      rhetoricalTrick: 'Rhetorical Mechanism',
      howToDisarm: 'Clean Disarm Formula',
      practiceCounterBtn: 'Practice Counter-Argument',
      nextScenarioBtn: 'Next Scenario',
      finishRoundBtn: 'Finish Round',
      newRoundBtn: 'Start New Round',
      backToAllBtn: 'Exit Focus Drill',
      roundCompleteTitle: 'Round Complete',
      roundCompleteSubtitle: 'Your blindspot profile and daily streak have been updated locally.',
      scoreLabel: 'Round Score',
      xpEarnedLabel: 'XP Earned',
      reviewRadarBtn: 'Open Blindspot Radar',
      blindspotBannerTitle: 'Focused Blindspot Drill',
      blindspotBannerExit: 'Return to Standard Deck',
      keyboardTip: 'Keys 1–4 to answer',
      flawInOption: 'Why this reply fails',
      winningLogic: 'Why this reply disarms the trap',
    },
    radar: {
      title: 'Blindspot Radar & Trap Breakdown',
      subtitle:
        'See which families of fallacies and biases slip past your filter most often, then launch a targeted drill.',
      noDataTitle: 'No Diagnostic Data Recorded Yet',
      noDataBody:
        'Complete at least a few scenarios in the Spotter or run a 6-case diagnostic to map your reasoning accuracy across all 7 rhetorical families.',
      runDiagnosticBtn: 'Run 6-Case Diagnostic',
      drillBlindspotsBtn: 'Drill My Weakest Traps',
      topBlindspotHeading: 'Most Frequently Missed Trap',
      errorRateLabel: 'Error Rate',
      missesLabel: 'Missed',
      accuracyLabel: 'Accuracy',
      attemptsLabel: 'Attempts',
      tableTitle: 'Performance by Trap Category',
      colTrap: 'Fallacy / Bias / Trick',
      colNature: 'Type',
      colAccuracy: 'Accuracy',
      colErrorRate: 'Error Rate',
      colMissed: 'Missed',
      recentRoundsTitle: 'Recent Training Rounds',
      noRoundsYet: 'Complete your first round to log session history.',
      chartAriaLabel: 'Radar chart of accuracy across seven logical fallacy and bias families',
    },
    ads: {
      label: 'Advertisement',
      leaderboardFallbackTitle: 'Sponsored Placement — Top Leaderboard (728×90 / Responsive)',
      leaderboardFallbackSub: 'Media.net preconfigured slot with reserved 100px min-height to prevent layout shift.',
      bottomFallbackTitle: 'Sponsored Placement — Editorial Footer Banner (Responsive)',
      bottomFallbackSub: 'Media.net preconfigured slot hidden in print view with reserved 250px min-height.',
    },
    resources: {
      heading: 'Recommended Reading on Critical Thinking & Rhetoric',
      subheading: 'Foundational books to deepen your command of informal logic, cognitive biases, and persuasive clarity.',
      disclosure: 'Affiliate Disclosure: Links below may earn a commission at no extra cost to you.',
      viewBook: 'View Book',
      books: [
        {
          id: 'weston',
          title: 'A Rulebook for Arguments',
          author: 'Anthony Weston',
          focus: 'Informal Logic & Structure',
          summary: 'A concise manual on building sound premises, checking sources, and spotting structural fallacies.',
          affiliateUrl: 'https://www.amazon.com/dp/162466654X?tag=criticue-20',
        },
        {
          id: 'kahneman',
          title: 'Thinking, Fast and Slow',
          author: 'Daniel Kahneman',
          focus: 'Cognitive Biases & Anchoring',
          summary: 'Explains anchoring, framing effects, confirmation bias, and why intuitive shortcuts mislead judgment.',
          affiliateUrl: 'https://www.amazon.com/dp/0374533555?tag=criticue-20',
        },
        {
          id: 'heinrichs',
          title: 'Thank You for Arguing',
          author: 'Jay Heinrichs',
          focus: 'Rhetoric & Constructive Debate',
          summary: 'Practical guide to classical rhetoric, recognizing emotional framing, and steering heated debates.',
          affiliateUrl: 'https://www.amazon.com/dp/0593237382?tag=criticue-20',
        },
        {
          id: 'mcinerney',
          title: 'Being Logical: A Guide to Good Thinking',
          author: 'D. Q. McInerny',
          focus: 'First Principles & Fallacies',
          summary: 'Clear breakdown of truth conditions, non-sequiturs, circular reasoning, and evasive language.',
          affiliateUrl: 'https://www.amazon.com/dp/0812971159?tag=criticue-20',
        },
      ],
    },
    editorial: {
      guideHeading: 'How to Spot & Disarm Manipulative Arguments',
      guideLead:
        'Persuasive bad reasoning rarely announces itself with textbook labels. In live debates, news headlines, and marketing copy, logical fallacies blend with cognitive biases and emotional framing so they feel intuitive at first glance.',
      comparisonHeading: 'Formal Fallacy vs. Informal Fallacy vs. Cognitive Bias vs. Rhetorical Trick',
      comparisonCols: {
        concept: 'Category',
        mechanism: 'Where It Breaks',
        example: 'Everyday Signal',
        fix: 'Best Counter-Move',
      },
      comparisonRows: [
        {
          concept: 'Formal Fallacy',
          mechanism: 'Invalid deductive structure regardless of whether premises are true.',
          example: '"If it rains, the street is wet. The street is wet, so it rained."',
          fix: 'Point out another sufficient cause (e.g., street cleaner).',
        },
        {
          concept: 'Informal Fallacy',
          mechanism: 'Flaw in relevance, ambiguity, or unsupported leaps inside real-world prose.',
          example: 'Strawman, false dichotomy, post hoc, ad hominem, circular reasoning.',
          fix: 'Restate the exact claim calmly and ask for causal or comparative evidence.',
        },
        {
          concept: 'Cognitive Bias',
          mechanism: 'Systematic mental shortcut that skews how we weigh evidence or sunk costs.',
          example: 'Confirmation bias, sunk cost fallacy, anchoring on an inflated price.',
          fix: 'Ask what data would disconfirm the claim or evaluate future-only marginal value.',
        },
        {
          concept: 'Rhetorical Trick',
          mechanism: 'Strategic framing, fear cues, or distraction used to bypass critical scrutiny.',
          example: 'Red herring pivots, loaded framing, artificial urgency.',
          fix: 'Acknowledge the emotion briefly, then anchor back to the original question.',
        },
      ],
      fieldGuideHeading: 'Field Guide to High-Frequency Argument Traps',
      fieldGuideSub: 'Recognize the structural tell in under three seconds across debates, media, and ads.',
      counterFrameworkHeading: 'The 3-Step Clean Counter-Argument Method',
      counterSteps: [
        {
          step: '01',
          title: 'Separate Tone from Premise',
          body: 'Do not mirror mockery, urgency, or outrage. Strip adjectives out of the speaker’s claim until only the testable proposition remains.',
        },
        {
          step: '02',
          title: 'Name the Missing Bridge',
          body: 'Point specifically to what is missing—whether it is a third option, a control group, relevant domain expertise, or an unstated premise—without lecturing.',
        },
        {
          step: '03',
          title: 'Ask a Narrow Verification Question',
          body: 'Close with a calm, concrete question ("What metric would change your mind?" or "Which independent dataset shows causation?").',
        },
      ],
      faqHeading: 'Frequently Asked Questions',
      faqItems: [
        {
          question: 'What is the difference between a logical fallacy and a cognitive bias?',
          answer:
            'A logical fallacy is a structural error in an argument offered to justify a conclusion (such as a strawman or false dichotomy). A cognitive bias is a predictable mental shortcut in human judgment (such as confirmation bias or sunk cost thinking) that distorts how we evaluate evidence even when nobody is debating us.',
        },
        {
          question: 'Why does naming a fallacy alone often fail in real conversations?',
          answer:
            'Simply shouting Latin labels like "Ad hominem!" or "Strawman!" usually makes the other person defensive and derails the discussion. Effective critical argumentation explains the exact flaw in plain words and asks a focused evidence question.',
        },
        {
          question: 'How does CritiCue calculate my Blindspot Radar?',
          answer:
            'CritiCue tracks your attempts, correct answers, and error rates locally in your browser across 14 trap categories grouped into 7 rhetorical families. Traps with the highest miss rate and repeat errors rise to the top so you can drill them with one click.',
        },
        {
          question: 'Does CritiCue send my training history or text to external servers or AI APIs?',
          answer:
            'No. CritiCue runs 100% locally in your browser as a static web application with a curated scenario engine. Your streak, XP, and blindspot analytics stay in your browser localStorage.',
        },
      ],
    },
    footer: {
      disclaimer:
        'Educational tool for practicing critical reading, logical fallacy identification, and constructive argumentation.',
      localPrivacy: '100% client-side · Progress stored locally in your browser',
      resetData: 'Reset Progress',
      resetConfirm: 'Confirm Reset',
      resetCancel: 'Cancel',
      resetDone: 'Progress cleared',
    },
  },
  es: {
    seoByMode: {
      spotter: {
        title: 'CritiCue – Entrenador de Falacias Lógicas y Pensamiento Crítico',
        description:
          'Entrena tu oído crítico para detectar falacias lógicas, sesgos cognitivos y trucos retóricos en debates, noticias y anuncios, y practica réplicas sólidas.',
      },
      counter: {
        title: 'Laboratorio de Contraataque Constructivo | CritiCue',
        description:
          'Practica cómo desmontar argumentos manipuladores con lógica, precisión y petición de evidencia sin caer en insultos ni hombres de paja.',
      },
      context: {
        title: 'Entrenamiento de Falacias en Contexto Real | CritiCue',
        description:
          'Filtra ejercicios por debates, artículos y noticias, publicidad o conversaciones cotidianas para cazar trampas argumentativas donde más se cuelan.',
      },
      radar: {
        title: 'Radar de Puntos Ciegos y Estadísticas | CritiCue',
        description:
          'Visualiza qué familias de falacias y sesgos se te escapan más a menudo y lanza rondas de repaso focalizado con un clic.',
      },
    },
    nav: {
      trainer: 'Entrenador',
      radar: 'Radar de Puntos Ciegos',
      guide: 'Guía Práctica',
      faq: 'Preguntas',
      langToggleAria: 'Cambiar idioma',
    },
    hero: {
      kicker: 'Lectura Crítica y Argumentación Constructiva',
      h1: 'Entrenador de Falacias Lógicas y Pensamiento Crítico',
      subtitle:
        'Afina tu oído crítico ante razonamientos defectuosos en debates, titulares, publicidad y charlas cotidianas, y entrena réplicas limpias sin caer en el barro.',
      stats: {
        streak: 'Racha diaria',
        streakUnit: 'd',
        xp: 'XP',
        accuracy: 'Precisión',
        topBlindspot: 'Mayor punto ciego',
        noneYet: 'Requiere 3+ casos',
      },
    },
    modes: {
      spotter: 'Detector de Falacias',
      counter: 'Modo Contraataque',
      context: 'Contexto Real',
      radar: 'Radar de Puntos Ciegos',
    },
    contexts: {
      all: 'Todas las fuentes',
      debate: 'Debates',
      article: 'Artículos / Noticias',
      advertising: 'Publicidad / Marketing',
      everyday: 'Conversación cotidiana',
    },
    natures: {
      fallacy: 'Falacia lógica',
      bias: 'Sesgo cognitivo',
      rhetoric: 'Truco retórico',
    },
    difficulties: {
      core: 'Esencial',
      nuanced: 'Sutil',
    },
    trainer: {
      roundProgress: 'Caso',
      timedMode: 'Temporizador 30s',
      untimedMode: 'Sin prisas',
      secondsLeft: 's restantes',
      timeExpired: 'Tiempo agotado — Revisa la trampa',
      showHint: 'Ver pista',
      hideHint: 'Ocultar pista',
      hintLabel: 'Pista estructural',
      shareCase: 'Compartir ejercicio',
      copiedLink: 'Enlace copiado',
      spotterPrompt: 'Identifica la falacia, sesgo cognitivo o truco retórico principal:',
      counterPrompt: 'Elige la réplica que desmonta el argumento con precisión sin entrar en el barro:',
      trapIdentified: 'Trampa activa',
      correctSpot: 'Trampa detectada',
      missedSpot: 'Trampa no detectada',
      correctCounter: 'Contraataque sólido',
      weakCounter: 'Caíste en la trampa',
      whyItFails: 'Por qué falla el razonamiento',
      rhetoricalTrick: 'Truco retórico utilizado',
      howToDisarm: 'Fórmula para desmontarlo',
      practiceCounterBtn: 'Practicar Contraataque',
      nextScenarioBtn: 'Siguiente caso',
      finishRoundBtn: 'Finalizar ronda',
      newRoundBtn: 'Nueva ronda',
      backToAllBtn: 'Salir del repaso',
      roundCompleteTitle: 'Ronda completada',
      roundCompleteSubtitle: 'Tu perfil de puntos ciegos y tu racha diaria se han guardado en este navegador.',
      scoreLabel: 'Aciertos de ronda',
      xpEarnedLabel: 'XP ganados',
      reviewRadarBtn: 'Ver Radar de Puntos Ciegos',
      blindspotBannerTitle: 'Repaso focalizado de puntos ciegos',
      blindspotBannerExit: 'Volver al mazo general',
      keyboardTip: 'Teclas 1–4 para responder',
      flawInOption: 'Por qué esta réplica falla',
      winningLogic: 'Por qué esta réplica desarma la trampa',
    },
    radar: {
      title: 'Radar de Puntos Ciegos y Desglose de Errores',
      subtitle:
        'Descubre qué familias de falacias y sesgos se te escapan con mayor frecuencia y lanza una ronda exclusiva de refuerzo.',
      noDataTitle: 'Aún no hay suficientes datos de diagnóstico',
      noDataBody:
        'Completa algunos casos en el Detector o lanza un diagnóstico rápido de 6 escenarios para trazar tu precisión en las 7 familias retóricas.',
      runDiagnosticBtn: 'Lanzar diagnóstico de 6 casos',
      drillBlindspotsBtn: 'Repasar mis trampas más falladas',
      topBlindspotHeading: 'Trampa que más se te escapa',
      errorRateLabel: 'Tasa de error',
      missesLabel: 'Fallos',
      accuracyLabel: 'Precisión',
      attemptsLabel: 'Intentos',
      tableTitle: 'Rendimiento por categoría',
      colTrap: 'Falacia / Sesgo / Truco',
      colNature: 'Tipo',
      colAccuracy: 'Precisión',
      colErrorRate: 'Tasa de error',
      colMissed: 'Fallos',
      recentRoundsTitle: 'Últimas rondas completadas',
      noRoundsYet: 'Completa tu primera ronda para registrar historial.',
      chartAriaLabel: 'Gráfico de radar con precisión en siete familias de falacias lógicas y sesgos',
    },
    ads: {
      label: 'Publicidad',
      leaderboardFallbackTitle: 'Espacio patrocinado — Cabecera inferior (728×90 / Adaptable)',
      leaderboardFallbackSub: 'Contenedor preconfigurado para Media.net con altura mínima reservada de 100px sin saltos CLS.',
      bottomFallbackTitle: 'Espacio patrocinado — Bloque editorial final (Adaptable)',
      bottomFallbackSub: 'Contenedor preconfigurado para Media.net oculto al imprimir y con 250px reservados.',
    },
    resources: {
      heading: 'Lecturas recomendadas sobre lógica informal y pensamiento crítico',
      subheading: 'Obras clave para dominar la detección de sesgos cognitivos, falacias argumentativas y retórica constructiva.',
      disclosure: 'Transparencia de afiliación: Los siguientes enlaces pueden generar una comisión sin coste adicional para ti.',
      viewBook: 'Ver libro',
      books: [
        {
          id: 'weston',
          title: 'Las claves de la argumentación (A Rulebook for Arguments)',
          author: 'Anthony Weston',
          focus: 'Lógica informal y estructura',
          summary: 'Manual breve y directo sobre cómo construir premisas sólidas, verificar fuentes y evitar falacias.',
          affiliateUrl: 'https://www.amazon.es/dp/8434419645?tag=criticue-20',
        },
        {
          id: 'kahneman',
          title: 'Pensar rápido, pensar despacio',
          author: 'Daniel Kahneman',
          focus: 'Sesgos cognitivos y anclaje',
          summary: 'Explica el anclaje, los efectos de encuadre, el sesgo de confirmación y los atajos intuitivos.',
          affiliateUrl: 'https://www.amazon.es/dp/8499922317?tag=criticue-20',
        },
        {
          id: 'schopenhauer',
          title: 'El arte de tener razón (Dialéctica erística)',
          author: 'Arthur Schopenhauer',
          focus: 'Estratagemas retóricas',
          summary: 'Catálogo clásico de 38 estratagemas usadas para ganar discusiones sin tener razón y cómo neutralizarlas.',
          affiliateUrl: 'https://www.amazon.es/dp/8441432694?tag=criticue-20',
        },
        {
          id: 'garcia_damborenea',
          title: 'Uso de razón: Diccionario de falacias',
          author: 'Ricardo García Damborenea',
          focus: 'Falacias en español',
          summary: 'Referencia rigurosa y llena de ejemplos cotidianos para identificar argumentos tramposos en debate y prensa.',
          affiliateUrl: 'https://www.amazon.es/dp/8470309722?tag=criticue-20',
        },
      ],
    },
    editorial: {
      guideHeading: 'Cómo detectar y desmontar argumentos manipuladores',
      guideLead:
        'Un mal argumento rara vez avisa con etiquetas académicas. En debates en directo, titulares y copias publicitarias, las falacias lógicas se mezclan con sesgos cognitivos y encuadres emocionales para parecer evidentes a primera vista.',
      comparisonHeading: 'Diferencia entre falacia formal, falacia informal, sesgo cognitivo y truco retórico',
      comparisonCols: {
        concept: 'Categoría',
        mechanism: 'Dónde falla',
        example: 'Señal habitual',
        fix: 'Mejor respuesta',
      },
      comparisonRows: [
        {
          concept: 'Falacia formal',
          mechanism: 'Estructura deductiva inválida aunque todas las premisas sean verdaderas.',
          example: '"Si llueve, la calle está mojada. Está mojada, luego llovió."',
          fix: 'Señalar otra causa suficiente (p. ej., pasó el camión de limpieza).',
        },
        {
          concept: 'Falacia informal',
          mechanism: 'Fallo de relevancia, ambigüedad o salto injustificado en el lenguaje natural.',
          example: 'Hombre de paja, falsa dicotomía, post hoc, ad hominem, razonamiento circular.',
          fix: 'Reformular la tesis exacta sin exagerar y pedir evidencia causal o comparativa.',
        },
        {
          concept: 'Sesgo cognitivo',
          mechanism: 'Atajo mental sistemático que distorsiona cómo evaluamos pruebas o costes.',
          example: 'Sesgo de confirmación, falacia del coste hundido, anclaje en cifras arbitrarias.',
          fix: 'Preguntar qué dato refutaría la idea o evaluar solo el beneficio futuro.',
        },
        {
          concept: 'Truco retórico',
          mechanism: 'Encuadre estratégico, alarma o desvío para esquivar el escrutinio crítico.',
          example: 'Cortina de humo, apelación al miedo, falsa urgencia.',
          fix: 'Reconocer brevemente la emoción y devolver el foco a la pregunta inicial.',
        },
      ],
      fieldGuideHeading: 'Guía rápida de las trampas más frecuentes',
      fieldGuideSub: 'Aprende la señal estructural de cada trampa para cazarla en menos de tres segundos.',
      counterFrameworkHeading: 'Método en 3 pasos para replicar sin caer en el barro',
      counterSteps: [
        {
          step: '01',
          title: 'Separa el tono de la premisa',
          body: 'No imites la burla, la prisa ni la indignación. Limpia los adjetivos del discurso ajeno hasta dejar únicamente la afirmación comprobable.',
        },
        {
          step: '02',
          title: 'Señala el puente que falta',
          body: 'Indica con calma qué pieza falta en el razonamiento —una tercera vía, un grupo de control, experiencia en el área o una premisa omitida— sin dar sermones.',
        },
        {
          step: '03',
          title: 'Cierra con una pregunta concreta de verificación',
          body: 'Formula una pregunta serena y específica («¿Qué dato te haría cambiar de postura?» o «¿Qué estudio independiente prueba esa causalidad?»).',
        },
      ],
      faqHeading: 'Preguntas frecuentes',
      faqItems: [
        {
          question: '¿En qué se diferencia una falacia lógica de un sesgo cognitivo?',
          answer:
            'Una falacia lógica es un defecto en la estructura de un argumento usado para defender una conclusión (como el hombre de paja o el falso dilema). Un sesgo cognitivo es un atajo mental predecible (como el sesgo de confirmación o el coste hundido) que altera nuestro juicio incluso cuando no estamos debatiendo con nadie.',
        },
        {
          question: '¿Por qué nombrar la falacia sin más suele empeorar la discusión?',
          answer:
            'Soltar etiquetas técnicas como «¡Eso es un ad hominem!» pone a la otra persona a la defensiva y desvía la conversación hacia el ego. Una réplica constructiva explica en lenguaje llano qué paso lógico falta y pide evidencia concreta.',
        },
        {
          question: '¿Cómo calcula CritiCue el Radar de Puntos Ciegos?',
          answer:
            'CritiCue guarda tus aciertos, fallos y tasa de error de forma local en tu navegador a lo largo de 14 categorías agrupadas en 7 familias retóricas. Las trampas con mayor tasa de error suben al primer puesto para que puedas repasarlas con un clic.',
        },
        {
          question: '¿Envía CritiCue mis respuestas o historial a servidores externos o APIs de IA?',
          answer:
            'No. CritiCue funciona al 100 % en local dentro de tu navegador como aplicación estática con un motor curado de escenarios. Tu racha, XP y analíticas permanecen exclusivamente en tu localStorage.',
        },
      ],
    },
    footer: {
      disclaimer:
        'Herramienta educativa para practicar la lectura crítica, la identificación de falacias lógicas y la argumentación constructiva.',
      localPrivacy: '100 % en local · Tu progreso se guarda solo en tu navegador',
      resetData: 'Reiniciar progreso',
      resetConfirm: 'Confirmar reinicio',
      resetCancel: 'Cancelar',
      resetDone: 'Progreso reiniciado',
    },
  },
};
