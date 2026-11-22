import type { Scenario } from '../types.ts';

export const SCENARIOS_DEBATE_ARTICLE: Scenario[] = [
  {
    id: 'deb-strawman-transit',
    context: 'debate',
    category: 'strawman',
    radarFamily: 'distortion',
    difficulty: 'core',
    distractors: ['false_dichotomy', 'slippery_slope', 'red_herring'],
    en: {
      speakerOrSource: 'Municipal Budget Town Hall',
      excerpt:
        '“My opponent wants to expand dedicated bus lanes on three downtown avenues. So apparently she wants to ban families from owning cars and trap suburban commuters at home.”',
      subtleHint: 'Compare the original proposal (three bus lanes) with the extreme version attributed to the speaker.',
      whyItFails:
        'Expanding bus lanes on three streets does not equal banning private car ownership or trapping commuters. The reply attacks an invented extreme instead of the actual proposal.',
      rhetoricalTrick:
        'Uses the “So apparently...” pivot to inflate a modest policy into a sweeping personal restriction that triggers immediate anger.',
      howToDisarm:
        'Calmly restate the exact scope of the proposal and ask the speaker to address those real numbers.',
      counterOptions: [
        {
          id: 'a',
          text: '“Adding bus lanes on three corridors isn’t banning cars—over 80% of roads stay mixed-traffic. Which part of those three routes concerns you?”',
          isCorrect: true,
          feedback: 'Restores the real scope with concrete context and redirects to the actual policy debate.',
        },
        {
          id: 'b',
          text: '“That’s a textbook strawman, and frankly only someone who doesn’t care about climate collapse would say it.”',
          isCorrect: false,
          flawLabel: 'Label-shouting + Ad hominem',
          feedback: 'Calling out the fallacy name while attacking the speaker’s motives escalates defensiveness and abandons the transit evidence.',
        },
        {
          id: 'c',
          text: '“So you want gridlock to double until nobody can breathe downtown?”',
          isCorrect: false,
          flawLabel: 'Counter-strawman',
          feedback: 'Answers a strawman with another strawman, turning the exchange into mutual exaggeration.',
        },
        {
          id: 'd',
          text: '“Fine, let’s talk about electric scooter subsidies instead.”',
          isCorrect: false,
          flawLabel: 'Accepts diversion',
          feedback: 'Leaves the distortion uncorrected on the record and changes the subject.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Pleno Municipal de Movilidad',
      excerpt:
        '«Mi rival propone ampliar el carril bus en tres avenidas del centro. O sea, que pretende prohibir que las familias tengan coche y dejar encerrados a quienes viven en las afueras.»',
      subtleHint: 'Compara la propuesta real (tres avenidas) con la versión extrema que se le atribuye.',
      whyItFails:
        'Ampliar carriles bus en tres calles no equivale a prohibir la propiedad privada de vehículos ni a confinar a los residentes. Se ataca una caricatura inventada.',
      rhetoricalTrick:
        'Usa el giro «O sea, que pretende...» para inflar una medida acotada hasta convertirla en una prohibición total que indigna al oyente.',
      howToDisarm:
        'Restaura con serenidad el alcance exacto de la propuesta y pide valorar ese dato concreto.',
      counterOptions: [
        {
          id: 'a',
          text: '«Habilitar carril bus en tres ejes no prohíbe los coches: más del 80 % de la red sigue igual. ¿Qué impacto ves en esas tres avenidas?»',
          isCorrect: true,
          feedback: 'Devuelve el debate al alcance real con precisión y abre una discusión sobre datos concretos.',
        },
        {
          id: 'b',
          text: '«Eso es un hombre de paja de manual dicho por alguien que desprecia la salud pública.»',
          isCorrect: false,
          flawLabel: 'Etiqueta + Ad hominem',
          feedback: 'Acompañar el tecnicismo con un ataque moral cierra la puerta al diálogo y desvía el foco.',
        },
        {
          id: 'c',
          text: '«Entonces tú prefieres que el centro sea un atasco irrespirable para siempre.»',
          isCorrect: false,
          flawLabel: 'Contra-caricatura',
          feedback: 'Responde a un hombre de paja fabricando otro igual de exagerado.',
        },
        {
          id: 'd',
          text: '«Bueno, mejor hablemos de las subvenciones a bicicletas eléctricas.»',
          isCorrect: false,
          flawLabel: 'Deja la distorsión intacta',
          feedback: 'Cambia de tema sin corregir la falsa afirmación ante el público.',
        },
      ],
    },
  },
  {
    id: 'deb-false-dichotomy-security',
    context: 'debate',
    category: 'false_dichotomy',
    radarFamily: 'binary_slope',
    difficulty: 'core',
    distractors: ['appeal_to_fear', 'strawman', 'slippery_slope'],
    en: {
      speakerOrSource: 'Tech Policy Panel',
      excerpt:
        '“Either we give platforms unchecked access to scan every private message, or we accept total lawlessness online. There is no third option.”',
      subtleHint: 'Ask whether targeted warrants, metadata analysis, or end-to-end safeguards exist between those two poles.',
      whyItFails:
        'Forces a complex security-privacy trade-off into two artificial extremes, erasing judicial warrants, targeted investigations, and technical safeguards.',
      rhetoricalTrick:
        'Closes the debate prematurely with “There is no third option” so any pushback sounds pro-lawlessness.',
      howToDisarm:
        'Explicitly name one or two realistic middle-ground mechanisms that exist between the extremes.',
      counterOptions: [
        {
          id: 'a',
          text: '“Those aren’t the only two choices—targeted judicial warrants and report-based moderation address crime without mass scanning of every message.”',
          isCorrect: true,
          feedback: 'Breaks the binary cleanly by naming concrete third options that preserve both safety and privacy.',
        },
        {
          id: 'b',
          text: '“Only authoritarian regimes talk like that.”',
          isCorrect: false,
          flawLabel: 'Ad hominem / Labeling',
          feedback: 'Attacks the speaker’s character rather than dismantling the false binary.',
        },
        {
          id: 'c',
          text: '“Then I choose total privacy even if policing becomes harder.”',
          isCorrect: false,
          flawLabel: 'Accepts the false dilemma',
          feedback: 'Steps straight into the trap by accepting that middle-ground solutions do not exist.',
        },
        {
          id: 'd',
          text: '“Why aren’t we talking about telecom pricing instead?”',
          isCorrect: false,
          flawLabel: 'Off-topic pivot',
          feedback: 'Evades the security claim without exposing the missing options.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Mesa Redonda sobre Regulación Digital',
      excerpt:
        '«O permitimos el escaneo automático de todos los mensajes privados sin restricciones, o aceptamos la impunidad total en internet. No existe término medio.»',
      subtleHint: 'Comprueba si existen órdenes judiciales específicas, denuncias de usuarios o salvaguardas técnicas intermedias.',
      whyItFails:
        'Reduce un equilibrio complejo entre seguridad y privacidad a dos extremos falsos, ocultando herramientas judiciales y técnicas intermedias.',
      rhetoricalTrick:
        'Sentencia «No existe término medio» para que cualquier matiz parezca una defensa de la impunidad.',
      howToDisarm:
        'Nombra explícitamente alternativas intermedias viables para romper el dilema artificial.',
      counterOptions: [
        {
          id: 'a',
          text: '«Sí hay alternativas entre esos extremos: las órdenes judiciales individualizadas y la moderación tras denuncia actúan sin rastrear cada chat privado.»',
          isCorrect: true,
          feedback: 'Rompe la falsa dicotomía mostrando mecanismos reales que combinan investigación y privacidad.',
        },
        {
          id: 'b',
          text: '«Ese discurso es propio de quien quiere vigilarlo todo.»',
          isCorrect: false,
          flawLabel: 'Ataque de intenciones',
          feedback: 'Ataca al ponente en vez de desmontar el falso dilema.',
        },
        {
          id: 'c',
          text: '«Pues prefiero la privacidad absoluta aunque no se pueda perseguir ningún delito.»',
          isCorrect: false,
          flawLabel: 'Acepta el marco binario',
          feedback: 'Cae en la trampa al dar por hecho que no hay soluciones intermedias.',
        },
        {
          id: 'd',
          text: '«El verdadero problema aquí son las tarifas de fibra óptica.»',
          isCorrect: false,
          flawLabel: 'Desvío irrelevante',
          feedback: 'Esquiva la cuestión sin mostrar la falsa dicotomía.',
        },
      ],
    },
  },
  {
    id: 'deb-ad-hominem-nutrition',
    context: 'debate',
    category: 'ad_hominem',
    radarFamily: 'messenger_authority',
    difficulty: 'core',
    distractors: ['red_herring', 'appeal_to_authority', 'false_equivalence'],
    en: {
      speakerOrSource: 'Public Health Roundtable',
      excerpt:
        '“Dr. Patel’s meta-analysis on sodium limits shouldn’t be taken seriously—twenty years ago she advised a restaurant trade group, and besides, she always looks exhausted on television.”',
      subtleHint: 'Notice whether the critique examines the study’s methodology, sample size, or data.',
      whyItFails:
        'Dismisses peer-reviewed data based on an unrelated past role and physical appearance rather than auditing the study’s methods or numbers.',
      rhetoricalTrick:
        'Blends a vague conflict-of-interest insinuation with a personal jab to taint the data without reading it.',
      howToDisarm:
        'Acknowledge transparency about funding if relevant, then insist on testing the actual methodology and replication results.',
      counterOptions: [
        {
          id: 'a',
          text: '“Disclosure of past consulting matters, yet it doesn’t invalidate the data by itself. Which dataset or statistical step in the meta-analysis is flawed?”',
          isCorrect: true,
          feedback: 'Separates legitimate conflict transparency from personal jabs and demands methodological evidence.',
        },
        {
          id: 'b',
          text: '“Well, you aren’t even a doctor, so you have no right to question her.”',
          isCorrect: false,
          flawLabel: 'Counter ad hominem + credentialism',
          feedback: 'Answers a personal attack with another personal dismissal instead of defending the evidence.',
        },
        {
          id: 'c',
          text: '“She looks great on TV and works harder than anyone in this room.”',
          isCorrect: false,
          flawLabel: 'Takes the bait',
          feedback: 'Gets dragged into defending personal appearance instead of bringing the focus back to the science.',
        },
        {
          id: 'd',
          text: '“Everyone takes consulting fees at some point, so conflicts of interest never matter.”',
          isCorrect: false,
          flawLabel: 'Overcorrects / dismisses transparency',
          feedback: 'Overstates the defense; disclosures do merit checking, just not automatic dismissal without inspecting the data.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Debate sobre Salud Pública',
      excerpt:
        '«El metaanálisis de la doctora Patel sobre el sodio no merece crédito: hace veinte años asesoró a una asociación de hostelería y, además, en televisión siempre sale con mala cara.»',
      subtleHint: 'Fíjate en si la crítica analiza la metodología, la muestra o los cálculos del estudio.',
      whyItFails:
        'Descarta evidencia científica atacando el pasado y el aspecto físico de la autora sin señalar ningún fallo metodológico ni estadístico.',
      rhetoricalTrick:
        'Mezcla una sospecha antigua con un comentario personal para desacreditar los datos sin tener que refutarlos.',
      howToDisarm:
        'Reconoce que declarar vínculos es sano, pero exige examinar los datos y métodos del estudio.',
      counterOptions: [
        {
          id: 'a',
          text: '«Revisar posibles conflictos es válido, pero no refuta los números por sí solo. ¿Qué fallo estadístico o de muestra ves en el análisis?»',
          isCorrect: true,
          feedback: 'Distingue entre transparencia de intereses y validez empírica, devolviendo la carga a los datos.',
        },
        {
          id: 'b',
          text: '«Tú ni siquiera tienes título médico, así que no puedes opinar.»',
          isCorrect: false,
          flawLabel: 'Contraataque ad hominem',
          feedback: 'Responde atacando al interlocutor en lugar de centrar el debate en la evidencia.',
        },
        {
          id: 'c',
          text: '«Sale estupenda en televisión y trabaja el doble que tú.»',
          isCorrect: false,
          flawLabel: 'Entra en la provocación',
          feedback: 'Discute sobre el aspecto físico, legitimando un criterio irrelevante.',
        },
        {
          id: 'd',
          text: '«Como todo el mundo cobra asesorías, los conflictos de interés nunca importan.»',
          isCorrect: false,
          flawLabel: 'Defensa excesiva',
          feedback: 'Minimiza en exceso la transparencia de financiación, que sí debe mirarse junto con los datos.',
        },
      ],
    },
  },
  {
    id: 'deb-slippery-slope-remote',
    context: 'debate',
    category: 'slippery_slope',
    radarFamily: 'binary_slope',
    difficulty: 'nuanced',
    distractors: ['appeal_to_fear', 'hasty_generalization', 'false_dichotomy'],
    en: {
      speakerOrSource: 'Executive Strategy Debate',
      excerpt:
        '“If we approve one flexible remote Friday a month, soon nobody will come in on Thursdays, then office collaboration collapses, and within two years we’ll have to shutter headquarters.”',
      subtleHint: 'Look at the unverified chain of four escalating steps from one day a month to closing headquarters.',
      whyItFails:
        'Assumes a single bounded policy automatically spirals into total organizational collapse without showing why attendance guidelines or quarterly reviews would fail.',
      rhetoricalTrick:
        'Chains vivid worst-case dominoes together to make a reversible trial look irreversible.',
      howToDisarm:
        'Introduce explicit guardrails and measurable trial metrics that break the imagined chain.',
      counterOptions: [
        {
          id: 'a',
          text: '“One Friday a month has clear boundaries. We can pilot it for 90 days and track delivery and team metrics—if output drops, we revert.”',
          isCorrect: true,
          feedback: 'Stops the imagined domino chain with concrete limits and measurable feedback.',
        },
        {
          id: 'b',
          text: '“Offices are dead anyway; headquarters are just a relic of micromanagers.”',
          isCorrect: false,
          flawLabel: 'Dismissive generalization',
          feedback: 'Substitutes an ideological slogan for a grounded operational response.',
        },
        {
          id: 'c',
          text: '“You can’t prove we’ll shut down, so there’s zero risk to remote work.”',
          isCorrect: false,
          flawLabel: 'Overreaches in reverse',
          feedback: 'Claims zero risk instead of offering sensible pilot controls.',
        },
        {
          id: 'd',
          text: '“Why are we debating Fridays when coffee machine maintenance is overdue?”',
          isCorrect: false,
          flawLabel: 'Trivializes the topic',
          feedback: 'Evades the legitimate concern about team coordination.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Comité de Dirección',
      excerpt:
        '«Si aprobamos un viernes al mes de teletrabajo, enseguida nadie vendrá los jueves, luego desaparecerá la colaboración y en dos años cerraremos la sede.»',
      subtleHint: 'Observa los cuatro saltos encadenados sin pruebas desde un viernes al mes hasta el cierre de la sede.',
      whyItFails:
        'Da por inevitable que una medida acotada y revisable desate un colapso total sin explicar por qué fallarían las normas internas ni las métricas de seguimiento.',
      rhetoricalTrick:
        'Encadena fichas de dominó catastróficas para presentar una prueba piloto reversible como un abismo seguro.',
      howToDisarm:
        'Propón límites explícitos, duración de prueba y métricas objetivas que rompan esa cadena.',
      counterOptions: [
        {
          id: 'a',
          text: '«Es un día al mes con reglas claras. Podemos probarlo 90 días midiendo entregas y coordinación; si empeoran, se revierte.»',
          isCorrect: true,
          feedback: 'Detiene la pendiente resbaladiza fijando límites verificables y reversibilidad.',
        },
        {
          id: 'b',
          text: '«Las oficinas están muertas y solo las defienden jefes controladores.»',
          isCorrect: false,
          flawLabel: 'Ataque y eslogan',
          feedback: 'Reemplaza la solución práctica por un ataque que polariza al equipo.',
        },
        {
          id: 'c',
          text: '«Como no puedes demostrar que cerraremos, el teletrabajo no tiene ningún riesgo.»',
          isCorrect: false,
          flawLabel: 'Exceso contrario',
          feedback: 'Niega cualquier posible fricción operativa en lugar de proponer controles.',
        },
        {
          id: 'd',
          text: '«Deberíamos hablar primero de cambiar la máquina de café.»',
          isCorrect: false,
          flawLabel: 'Evasiva frívola',
          feedback: 'Ignora la preocupación real sobre coordinación sin desmontar el salto lógico.',
        },
      ],
    },
  },
  {
    id: 'deb-red-herring-audit',
    context: 'debate',
    category: 'red_herring',
    radarFamily: 'diversion_circular',
    difficulty: 'core',
    distractors: ['ad_hominem', 'strawman', 'false_equivalence'],
    en: {
      speakerOrSource: 'Live Accountability Hearing',
      excerpt:
        '“Journalist: Why did the infrastructure project run 40% over budget? Spokesperson: Before we obsess over spreadsheets, let’s remember how hard our frontline crews worked during January’s storm!”',
      subtleHint: 'Check whether praising storm crews answers why the budget rose by 40%.',
      whyItFails:
        'Shifts attention to an admirable, emotionally resonant topic (crews in a storm) to avoid answering a factual question about a 40% cost overrun.',
      rhetoricalTrick:
        'Wraps a budget deflection in gratitude so pressing the original question feels ungrateful.',
      howToDisarm:
        'Affirm the praise briefly so the trap loses moral leverage, then return cleanly to the unanswered question.',
      counterOptions: [
        {
          id: 'a',
          text: '“We appreciate the crews’ work in January. Returning to the audit: which specific cost drivers caused the 40% overrun?”',
          isCorrect: true,
          feedback: 'Defuses the emotional shield in one sentence and anchors firmly back to the original question.',
        },
        {
          id: 'b',
          text: '“Don’t hide behind workers like a coward—answer me!”',
          isCorrect: false,
          flawLabel: 'Hostile escalation',
          feedback: 'Allows the spokesperson to play victim and frame the questioner as attacking frontline workers.',
        },
        {
          id: 'c',
          text: '“How many hours did the crews actually work during that storm?”',
          isCorrect: false,
          flawLabel: 'Chases the decoy',
          feedback: 'Follows the red herring completely off the budget audit.',
        },
        {
          id: 'd',
          text: '“Forget the storm, nobody cares about January anymore.”',
          isCorrect: false,
          flawLabel: 'Sounds callous',
          feedback: 'Creates an unnecessary PR own-goal by dismissing the crews instead of separating the two topics.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Comparecencia Pública',
      excerpt:
        '«Periodista: ¿Por qué la obra superó el presupuesto en un 40 %? Portavoz: Antes de obsesionarnos con hojas de cálculo, recordemos lo duro que trabajaron las cuadrillas bajo el temporal de enero.»',
      subtleHint: 'Comprueba si elogiar el esfuerzo en el temporal responde por qué subió el coste un 40 %.',
      whyItFails:
        'Introduce un tema noble y emotivo (el esfuerzo en la tormenta) para esquivar la pregunta concreta sobre el sobrecoste del 40 %.',
      rhetoricalTrick:
        'Escuda la evasiva en la gratitud hacia los operarios para que insistir parezca ingratitud.',
      howToDisarm:
        'Reconoce brevemente el mérito de las cuadrillas para desactivar el escudo moral y vuelve a la pregunta.',
      counterOptions: [
        {
          id: 'a',
          text: '«Reconocemos la labor del equipo en enero. Volviendo a la auditoría: ¿qué partidas explican exactamente ese sobrecoste del 40 %?»',
          isCorrect: true,
          feedback: 'Neutraliza el desvío emocional con respeto y devuelve el foco sin rodeos a los datos.',
        },
        {
          id: 'b',
          text: '«¡No te escondas detrás de los trabajadores como un cobarde!»',
          isCorrect: false,
          flawLabel: 'Escalada agresiva',
          feedback: 'Le regala al portavoz el papel de víctima y desvía la atención al tono.',
        },
        {
          id: 'c',
          text: '«¿Cuántas horas extras hicieron exactamente durante aquel temporal?»',
          isCorrect: false,
          flawLabel: 'Sigue el señuelo',
          feedback: 'Muerde la cortina de humo y abandona la auditoría presupuestaria.',
        },
        {
          id: 'd',
          text: '«Olvídate del temporal, eso ya no le importa a nadie.»',
          isCorrect: false,
          flawLabel: 'Falta de tacto',
          feedback: 'Suena insensible hacia los operarios en lugar de separar dos asuntos distintos.',
        },
      ],
    },
  },
  {
    id: 'deb-tu-quoque-emissions',
    context: 'debate',
    category: 'false_equivalence',
    radarFamily: 'distortion',
    difficulty: 'nuanced',
    distractors: ['ad_hominem', 'red_herring', 'strawman'],
    en: {
      speakerOrSource: 'Industry Regulatory Hearing',
      excerpt:
        '“Your agency lectures manufacturers about chemical discharge, yet last year two city buses failed emissions checks. Both sides pollute, so these new rules are pure hypocrisy.”',
      subtleHint: 'Compare the scale of industrial chemical discharge with two municipal buses needing repair, and ask if hypocrisy invalidates the standard.',
      whyItFails:
        'Equates two vastly different scales of harm and uses a “you too” (tu quoque) deflection to avoid addressing industrial discharge rules.',
      rhetoricalTrick:
        'Frames enforcement as hypocrisy so the rule itself never gets evaluated on merit.',
      howToDisarm:
        'Acknowledge that the two buses should be fixed immediately, then re-establish scale and the merit of the safety rule.',
      counterOptions: [
        {
          id: 'a',
          text: '“Those two buses were pulled for repair, and they should meet standards too. Still, two bus tailpipes aren’t comparable to factory river discharge—let’s examine the plant limits.”',
          isCorrect: true,
          feedback: 'Concedes the minor point cleanly, rejects the false scale equivalence, and returns to the regulation’s merit.',
        },
        {
          id: 'b',
          text: '“City buses serve the public, so their emissions shouldn’t even count.”',
          isCorrect: false,
          flawLabel: 'Double standard',
          feedback: 'Appears to excuse municipal violations, reinforcing the opponent’s hypocrisy narrative.',
        },
        {
          id: 'c',
          text: '“You’re just trying to protect corporate donors with cheap tricks.”',
          isCorrect: false,
          flawLabel: 'Motives attack',
          feedback: 'Answers tu quoque with an accusation of corruption rather than comparing evidence.',
        },
        {
          id: 'd',
          text: '“If everyone pollutes a little, maybe regulations are pointless anyway.”',
          isCorrect: false,
          flawLabel: 'Surrenders the premise',
          feedback: 'Accepts the false equivalence that all levels of harm are identical.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Audiencia sobre Normativa Industrial',
      excerpt:
        '«Su agencia nos da lecciones sobre vertidos químicos, pero el año pasado dos autobuses municipales suspendieron la prueba de humos. Todos contaminamos; esta norma es pura hipocresía.»',
      subtleHint: 'Compara la escala de un vertido químico industrial con dos autobuses averiados, y evalúa si la norma pierde validez por ello.',
      whyItFails:
        'Equipara magnitudes muy desiguales y utiliza el recurso del «tú también» (tu quoque) para esquivar el fondo de la regulación industrial.',
      rhetoricalTrick:
        'Convierte el debate técnico en un juicio sobre supuesta hipocresía para no discutir los límites de vertido.',
      howToDisarm:
        'Admite que los autobuses deben cumplir la ley igual que todos y vuelve a la escala real del problema.',
      counterOptions: [
        {
          id: 'a',
          text: '«Esos dos autobuses deben repararse y cumplir la norma, por supuesto. Aun así, no es comparable en escala a un vertido químico fluvial; analicemos los límites de la planta.»',
          isCorrect: true,
          feedback: 'Acepta el estándar común sin caer en falsa simetría y regresa al análisis técnico.',
        },
        {
          id: 'b',
          text: '«Los autobuses dan servicio público, así que sus humos no deberían contar.»',
          isCorrect: false,
          flawLabel: 'Doble rasero',
          feedback: 'Da la razón al argumento de hipocresía al justificar fallos propios.',
        },
        {
          id: 'c',
          text: '«Solo dices eso porque defiendes a los lobbies contaminantes.»',
          isCorrect: false,
          flawLabel: 'Ataque a intenciones',
          feedback: 'Responde al tu quoque con un ataque personal sin desmontar la falsa equivalencia.',
        },
        {
          id: 'd',
          text: '«Si todo contamina algo, quizá ninguna norma tenga sentido.»',
          isCorrect: false,
          flawLabel: 'Asume la equivalencia',
          feedback: 'Cae en la trampa de igualar cualquier impacto sin medir proporciones.',
        },
      ],
    },
  },
  {
    id: 'deb-circular-curfew',
    context: 'debate',
    category: 'circular_reasoning',
    radarFamily: 'diversion_circular',
    difficulty: 'nuanced',
    distractors: ['appeal_to_authority', 'confirmation_bias', 'false_dichotomy'],
    en: {
      speakerOrSource: 'Neighborhood Association Debate',
      excerpt:
        '“Extending park lighting until 10 PM is clearly unsafe, because keeping parks open after dusk creates an inherently dangerous environment.”',
      subtleHint: 'Strip away synonyms: what is the difference between “unsafe” and “inherently dangerous environment”?',
      whyItFails:
        'The “because” clause merely restates the claim (“unsafe”) using different words (“inherently dangerous environment”) without providing crime statistics, lighting studies, or incident logs.',
      rhetoricalTrick:
        'Uses confident causal connectors (“clearly... because...”) so the listener assumes evidence was given when none was.',
      howToDisarm:
        'Point out that the premise repeats the conclusion and ask for external incident data.',
      counterOptions: [
        {
          id: 'a',
          text: '“Saying it’s unsafe because it’s dangerous restates the concern rather than testing it. Do we have incident data comparing well-lit parks vs unlit ones?”',
          isCorrect: true,
          feedback: 'Exposes the circular loop gently and asks for empirical comparison.',
        },
        {
          id: 'b',
          text: '“Parks are always completely safe at night everywhere.”',
          isCorrect: false,
          flawLabel: 'Unsupported absolute',
          feedback: 'Replaces an unsupported fear claim with an equally unsupported blanket guarantee.',
        },
        {
          id: 'c',
          text: '“You’re just afraid of young people using public spaces.”',
          isCorrect: false,
          flawLabel: 'Mind-reading / Ad hominem',
          feedback: 'Speculates on hidden motives instead of requesting evidence.',
        },
        {
          id: 'd',
          text: '“Lighting costs electricity, so let’s debate energy bills instead.”',
          isCorrect: false,
          flawLabel: 'Topic shift',
          feedback: 'Abandons the safety claim without showing the circular logic.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Debate Vecinal',
      excerpt:
        '«Ampliar la iluminación del parque hasta las diez es claramente inseguro, porque mantener parques abiertos al anochecer genera un entorno inherentemente peligroso.»',
      subtleHint: 'Quita los sinónimos: ¿qué diferencia hay entre «inseguro» y «entorno inherentemente peligroso»?',
      whyItFails:
        'La frase introducida por «porque» repite la misma tesis con otras palabras sin aportar datos de incidentes ni comparativas con iluminación.',
      rhetoricalTrick:
        'Usa conectores causales rotundos («claramente... porque...») para dar sensación de prueba donde solo hay repetición.',
      howToDisarm:
        'Señala que la razón ofrecida repite la conclusión y pide datos comparativos reales.',
      counterOptions: [
        {
          id: 'a',
          text: '«Decir que es inseguro porque es peligroso repite la preocupación, pero no la prueba. ¿Tenemos datos de incidentes en parques iluminados frente a oscuros?»',
          isCorrect: true,
          feedback: 'Muestra el círculo con claridad y pide evidencia contrastable.',
        },
        {
          id: 'b',
          text: '«Los parques son siempre cien por cien seguros de noche en cualquier sitio.»',
          isCorrect: false,
          flawLabel: 'Afirmación absoluta sin base',
          feedback: 'Responde a una tesis sin datos con otra tesis extrema igual de infundada.',
        },
        {
          id: 'c',
          text: '«Lo que te molesta es que la gente joven use el barrio.»',
          isCorrect: false,
          flawLabel: 'Juicio de intenciones',
          feedback: 'Atribuye motivos ocultos en lugar de examinar la lógica.',
        },
        {
          id: 'd',
          text: '«Las farolas gastan luz; mejor discutamos la factura eléctrica.»',
          isCorrect: false,
          flawLabel: 'Cambio de tema',
          feedback: 'Esquiva la cuestión de seguridad sin señalar el razonamiento circular.',
        },
      ],
    },
  },
  {
    id: 'deb-authority-economist',
    context: 'debate',
    category: 'appeal_to_authority',
    radarFamily: 'messenger_authority',
    difficulty: 'nuanced',
    distractors: ['confirmation_bias', 'circular_reasoning', 'hasty_generalization'],
    en: {
      speakerOrSource: 'Energy Policy Broadcast',
      excerpt:
        '“A Nobel laureate in literature signed an open letter saying next-generation grid batteries will never scale, so engineering benchmarks saying otherwise are obviously hype.”',
      subtleHint: 'Check whether literary prestige grants expertise in electrochemical grid engineering.',
      whyItFails:
        'Invokes prestige from an unrelated field (literature) to dismiss empirical engineering benchmarks instead of examining battery cost curves and failure rates.',
      rhetoricalTrick:
        'Borrows halo prestige (“Nobel laureate”) to intimidate technical disagreement.',
      howToDisarm:
        'Respect the figure’s achievement in their own field while asking for domain-relevant engineering evidence.',
      counterOptions: [
        {
          id: 'a',
          text: '“Their literary work is remarkable, though grid storage scaling is an engineering question. Which physical bottleneck in the benchmarks are they citing?”',
          isCorrect: true,
          feedback: 'Respects the person without granting false cross-domain authority and brings focus back to technical proof.',
        },
        {
          id: 'b',
          text: '“Writers shouldn’t be allowed to speak about energy policy at all.”',
          isCorrect: false,
          flawLabel: 'Gatekeeping',
          feedback: 'Dismisses civic participation instead of evaluating the claim’s technical evidence.',
        },
        {
          id: 'c',
          text: '“Well, two actors endorsed grid batteries, so that cancels out your Nobel winner.”',
          isCorrect: false,
          flawLabel: 'Battles authority with celebrity',
          feedback: 'Replaces one irrelevant authority with another instead of asking for data.',
        },
        {
          id: 'd',
          text: '“Nobel prizes are outdated anyway.”',
          isCorrect: false,
          flawLabel: 'Attack on the award',
          feedback: 'Sidetracks into debating awards rather than grid engineering.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Tertulia sobre Transición Energética',
      excerpt:
        '«Un premio Nobel de Literatura firmó una carta diciendo que las baterías de red nunca escalarán; por tanto, los ensayos de ingeniería que dicen lo contrario son puro humo.»',
      subtleHint: 'Comprueba si el prestigio literario aporta competencia técnica en ingeniería electroquímica.',
      whyItFails:
        'Usa la fama en un ámbito ajeno (literatura) para invalidar mediciones técnicas sin analizar curvas de coste ni pruebas de red.',
      rhetoricalTrick:
        'Aprovecha el efecto halo del título («premio Nobel») para frenar el contraste técnico.',
      howToDisarm:
        'Reconoce su prestigio en su disciplina y pide argumentos técnicos de especialistas en redes eléctricas.',
      counterOptions: [
        {
          id: 'a',
          text: '«Su obra literaria es brillante, pero la capacidad de almacenamiento es un problema de ingeniería. ¿Qué límite físico concreto cuestionan los ensayos?»',
          isCorrect: true,
          feedback: 'Separa el respeto personal de la competencia técnica y exige evidencia del dominio.',
        },
        {
          id: 'b',
          text: '«Los escritores no deberían opinar sobre energía.»',
          isCorrect: false,
          flawLabel: 'Censura de participación',
          feedback: 'Ataca el derecho a opinar en lugar de examinar si la afirmación tiene soporte técnico.',
        },
        {
          id: 'c',
          text: '«Pues dos actores de cine apoyan esas baterías, así que empate.»',
          isCorrect: false,
          flawLabel: 'Responde con otra autoridad irrelevante',
          feedback: 'Compite con fama contra fama en vez de aportar datos técnicos.',
        },
        {
          id: 'd',
          text: '«Hoy en día los premios Nobel no valen nada.»',
          isCorrect: false,
          flawLabel: 'Desvío contra el premio',
          feedback: 'Desvía el debate hacia los galardones y deja intacto el fallo lógico.',
        },
      ],
    },
  },
  {
    id: 'deb-fear-zoning',
    context: 'debate',
    category: 'appeal_to_fear',
    radarFamily: 'emotional_framing',
    difficulty: 'core',
    distractors: ['slippery_slope', 'strawman', 'post_hoc'],
    en: {
      speakerOrSource: 'City Planning Hearing',
      excerpt:
        '“Allowing duplexes on corner lots will turn our quiet streets into chaotic concrete canyons overnight, leaving seniors unsafe on their own sidewalks.”',
      subtleHint: 'Separate the vivid disaster imagery (“chaotic concrete canyons overnight”) from actual zoning height and density limits.',
      whyItFails:
        'Replaces realistic impact analysis (two-family homes within existing height caps) with frightening imagery to trigger protective panic.',
      rhetoricalTrick:
        'Pairs “overnight” urgency with vulnerable groups (“seniors unsafe”) to short-circuit calm measurement.',
      howToDisarm:
        'Acknowledge neighborhood safety values, then anchor to physical dimensions and comparative examples.',
      counterOptions: [
        {
          id: 'a',
          text: '“Keeping sidewalks safe matters to everyone. Under this code, corner duplexes stay under two stories—the same height as existing homes. What specific traffic rule needs tightening?”',
          isCorrect: true,
          feedback: 'Validates safety without accepting the panic imagery, then presents actual physical limits.',
        },
        {
          id: 'b',
          text: '“You’re just fear-mongering because you hate newcomers.”',
          isCorrect: false,
          flawLabel: 'Hostile motive attribution',
          feedback: 'Escalates conflict by labeling neighbors instead of calming the overstated risk.',
        },
        {
          id: 'c',
          text: '“Even if streets get chaotic, growth is more important than quiet neighborhoods.”',
          isCorrect: false,
          flawLabel: 'Accepts the fear premise',
          feedback: 'Concedes that duplexes cause chaos, alienating undecided listeners.',
        },
        {
          id: 'd',
          text: '“Concrete canyons are actually pretty cool in big cities.”',
          isCorrect: false,
          flawLabel: 'Tone-deaf framing',
          feedback: 'Fails to clarify that two-story duplexes aren’t high-rises at all.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Audiencia de Urbanismo',
      excerpt:
        '«Permitir viviendas dúplex en las esquinas convertirá nuestras calles tranquilas en cañones de hormigón caóticos de la noche a la mañana, dejando indefensos a nuestros mayores.»',
      subtleHint: 'Separa las imágenes alarmistas («cañones de hormigón caóticos») de la altura y densidad reales del proyecto.',
      whyItFails:
        'Sustituye el análisis real de edificabilidad por una escena de pánico para bloquear la discusión técnica.',
      rhetoricalTrick:
        'Combina urgencia extrema («de la noche a la mañana») con grupos vulnerables («mayores indefensos») para anular el cálculo racional.',
      howToDisarm:
        'Comparte la preocupación por la seguridad peatonal y contrasta con las medidas reales de altura.',
      counterOptions: [
        {
          id: 'a',
          text: '«La seguridad peatonal nos importa a todos. El plan limita esos dúplex a dos plantas, la misma altura actual. ¿Qué medida de tráfico o acera conviene reforzar?»',
          isCorrect: true,
          feedback: 'Recoge la preocupación legítima y desactiva el miedo mostrando los límites reales.',
        },
        {
          id: 'b',
          text: '«Solo metes miedo porque rechazas a la gente nueva.»',
          isCorrect: false,
          flawLabel: 'Ataque personal',
          feedback: 'Polariza el debate con acusaciones en vez de aclarar las dimensiones del plan.',
        },
        {
          id: 'c',
          text: '«Aunque haya caos, construir más es prioritario sobre la tranquilidad.»',
          isCorrect: false,
          flawLabel: 'Asume el escenario catastrófico',
          feedback: 'Da por cierto que habrá caos, perdiendo credibilidad ante vecinos moderados.',
        },
        {
          id: 'd',
          text: '«Los grandes cañones de edificios también tienen su encanto.»',
          isCorrect: false,
          flawLabel: 'Respuesta desconectada',
          feedback: 'No aclara que un dúplex de dos alturas no es un rascacielos.',
        },
      ],
    },
  },

  // --- ARTICLES & NEWS (9 scenarios) ---
  {
    id: 'art-posthoc-coffee',
    context: 'article',
    category: 'post_hoc',
    radarFamily: 'false_cause_sample',
    difficulty: 'core',
    distractors: ['hasty_generalization', 'confirmation_bias', 'framing_anchoring'],
    en: {
      speakerOrSource: 'Lifestyle Health Digest',
      excerpt:
        '“Cities that opened three or more specialty espresso bars saw a 14% rise in marathon finishers over five years—proof that daily espresso directly boosts endurance running.”',
      subtleHint: 'What other shared factor in a neighborhood might attract both specialty cafés and marathon runners?',
      whyItFails:
        'Infers direct causation from a correlation between two urban trends without controlling for income, demographics, age distribution, or fitness culture.',
      rhetoricalTrick:
        'Presents a precise-sounding percentage (“14%”) next to “proof that” to disguise an uncontrolled correlation as a causal lab result.',
      howToDisarm:
        'Distinguish the observed trend from causation and point to plausible confounding variables.',
      counterOptions: [
        {
          id: 'a',
          text: '“Both trends may share a third factor—like younger, higher-income residents moving in. Has any randomized trial isolated espresso’s effect on finish rates?”',
          isCorrect: true,
          feedback: 'Identifies confounding variables cleanly and asks for controlled causal evidence.',
        },
        {
          id: 'b',
          text: '“That’s completely false; coffee actually ruins every runner’s heart rate.”',
          isCorrect: false,
          flawLabel: 'Unverified counter-claim',
          feedback: 'Asserts an opposite causal claim without citing controlled data either.',
        },
        {
          id: 'c',
          text: '“Health blogs always make things up for clicks.”',
          isCorrect: false,
          flawLabel: 'Source dismissal',
          feedback: 'Dismisses the genre broadly without showing why this specific causal leap fails.',
        },
        {
          id: 'd',
          text: '“Well, 14% is too small a number to bother checking.”',
          isCorrect: false,
          flawLabel: 'Misses the logical flaw',
          feedback: 'Even a 90% correlation would not prove causation without controls.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Artículo de Tendencias y Bienestar',
      excerpt:
        '«Las ciudades que abrieron tres o más cafeterías de especialidad registraron un aumento del 14 % en corredores de maratón en cinco años: prueba de que el espresso diario mejora la resistencia.»',
      subtleHint: '¿Qué tercer factor urbano podría atraer a la vez cafeterías de especialidad y aficionados al running?',
      whyItFails:
        'Deduce causalidad directa a partir de una correlación geográfica sin controlar renta, edad media, densidad o cambios demográficos del barrio.',
      rhetoricalTrick:
        'Coloca un porcentaje concreto («14 %») junto a «prueba de que» para disfrazar una coincidencia de ensayo clínico.',
      howToDisarm:
        'Distingue entre correlación observada y causa probada señalando variables de confusión.',
      counterOptions: [
        {
          id: 'a',
          text: '«Ambas cosas pueden deberse a un tercer factor, como la llegada de población joven con más tiempo libre. ¿Existe algún ensayo controlado que pruebe esa relación?»',
          isCorrect: true,
          feedback: 'Señala la variable oculta con precisión y solicita prueba experimental real.',
        },
        {
          id: 'b',
          text: '«Mentira total: el café perjudica siempre a todos los corredores.»',
          isCorrect: false,
          flawLabel: 'Afirmación inversa sin pruebas',
          feedback: 'Contradice con otra afirmación categórica sin aportar estudios.',
        },
        {
          id: 'c',
          text: '«Los medios de bienestar solo publican basura por clics.»',
          isCorrect: false,
          flawLabel: 'Descalificación genérica',
          feedback: 'Ataca al medio en vez de explicar el fallo entre correlación y causalidad.',
        },
        {
          id: 'd',
          text: '«Un 14 % es una cifra demasiado pequeña para tomarla en cuenta.»',
          isCorrect: false,
          flawLabel: 'No detecta el error causal',
          feedback: 'Aunque la correlación fuera del 80 %, seguiría sin probar causalidad por sí sola.',
        },
      ],
    },
  },
  {
    id: 'art-framing-relative',
    context: 'article',
    category: 'framing_anchoring',
    radarFamily: 'emotional_framing',
    difficulty: 'nuanced',
    distractors: ['appeal_to_fear', 'post_hoc', 'hasty_generalization'],
    en: {
      speakerOrSource: 'Breaking Finance Headline',
      excerpt:
        '“ALERT: Rare component failure rate SOARS 100% in newest batch! (Fine print in paragraph 8: incidence moved from 1 in 10,000 units to 2 in 10,000 units.)”',
      subtleHint: 'Compare the dramatic relative percentage (“SOARS 100%”) with the absolute change in paragraph 8.',
      whyItFails:
        'Reports a tiny absolute change (+0.01 percentage points) exclusively as a giant relative jump (“100%”) to manufacture alarm.',
      rhetoricalTrick:
        'Uses relative risk framing in the headline and buries the low baseline denominator deep in the body text.',
      howToDisarm:
        'Translate relative spikes back into absolute rates per 10,000 units before deciding if risk changed materially.',
      counterOptions: [
        {
          id: 'a',
          text: '“Going from 1 to 2 per 10,000 is a 0.01% absolute shift—still 99.98% defect-free. Is there any sign of a wider trend beyond small-sample noise?”',
          isCorrect: true,
          feedback: 'Anchors the reader back to absolute risk and tests whether small-number variance explains the bump.',
        },
        {
          id: 'b',
          text: '“Nobody reads past headlines anyway, so all news is fake.”',
          isCorrect: false,
          flawLabel: 'Cynical overgeneralization',
          feedback: 'Dismisses journalism wholesale instead of teaching how to read baseline denominators.',
        },
        {
          id: 'c',
          text: '“Doubling failures means the entire product line should be recalled immediately.”',
          isCorrect: false,
          flawLabel: 'Falls for the relative framing',
          feedback: 'Reacts to the 100% headline frame without checking the 0.02% absolute rate.',
        },
        {
          id: 'd',
          text: '“Companies always hide defects in paragraph 8.”',
          isCorrect: false,
          flawLabel: 'Misattributes the headline',
          feedback: 'Misses that the article itself disclosed the baseline while the headline framed it sensationally.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Titular de Actualidad Tecnológica',
      excerpt:
        '«ALERTA: ¡La tasa de fallos de batería SE DISPARA un 100 % en el último lote! (Letra pequeña en el párrafo 8: pasó de 1 caso por cada 10.000 unidades a 2 por cada 10.000).»',
      subtleHint: 'Contrasta el porcentaje relativo («SE DISPARA un 100 %») con la diferencia absoluta del párrafo 8.',
      whyItFails:
        'Presenta un aumento absoluto mínimo (+0,01 puntos porcentuales) como un salto relativo enorme para generar alarma.',
      rhetoricalTrick:
        'Explota el riesgo relativo en el titular y esconde el denominador real en el cuerpo del texto.',
      howToDisarm:
        'Traduce los porcentajes relativos a casos absolutos sobre el total antes de valorar la gravedad.',
      counterOptions: [
        {
          id: 'a',
          text: '«Pasar de 1 a 2 entre 10.000 es una variación absoluta del 0,01 % (99,98 % sin fallos). ¿Hay tendencia sostenida o simple ruido estadístico?»',
          isCorrect: true,
          feedback: 'Devuelve el análisis a la tasa absoluta y pregunta por significación real.',
        },
        {
          id: 'b',
          text: '«Como la gente solo lee titulares, todas las noticias son falsas.»',
          isCorrect: false,
          flawLabel: 'Cinismo generalizado',
          feedback: 'Descarta todo el periodismo en vez de señalar el truco del riesgo relativo.',
        },
        {
          id: 'c',
          text: '«Si los fallos se han duplicado, hay que retirar todo el producto hoy mismo.»',
          isCorrect: false,
          flawLabel: 'Cae en el encuadre del titular',
          feedback: 'Reacciona al «100 %» sin comprobar que la incidencia sigue siendo del 0,02 %.',
        },
        {
          id: 'd',
          text: '«Seguro que la empresa pagó para esconder el dato en el párrafo 8.»',
          isCorrect: false,
          flawLabel: 'Conjetura sin base',
          feedback: 'Inventa una intención oculta en lugar de desmontar el encuadre numérico.',
        },
      ],
    },
  },
  {
    id: 'art-hasty-gen-hybrid',
    context: 'article',
    category: 'hasty_generalization',
    radarFamily: 'false_cause_sample',
    difficulty: 'core',
    distractors: ['confirmation_bias', 'post_hoc', 'strawman'],
    en: {
      speakerOrSource: 'Business Opinion Column',
      excerpt:
        '“Four software startups I spoke with at Tuesday’s mixer abandoned four-day workweeks. Clearly, shorter schedules fail across the entire tech industry.”',
      subtleHint: 'Look at the sample size (four startups at one mixer) versus the sweeping claim (“the entire tech industry”).',
      whyItFails:
        'Extrapolates a universal industry rule from four informal conversations at a single networking event—a tiny, non-random sample.',
      rhetoricalTrick:
        'Uses “Clearly” and “entire industry” to lend statistical authority to dinner-party anecdotes.',
      howToDisarm:
        'Ask about sample size, selection criteria, and broad multi-company retention or output studies.',
      counterOptions: [
        {
          id: 'a',
          text: '“Four firms at one mixer is a small, self-selected sample. Larger cross-sector trials give a clearer read on where four-day schedules work and where they don’t.”',
          isCorrect: true,
          feedback: 'Exposes the sampling flaw calmly without denying that those four firms may have struggled.',
        },
        {
          id: 'b',
          text: '“Those four founders must have been terrible managers.”',
          isCorrect: false,
          flawLabel: 'Ad hominem guess',
          feedback: 'Blames the founders’ competence instead of pointing out the unrepresentative sample.',
        },
        {
          id: 'c',
          text: '“Four-day weeks always increase revenue everywhere.”',
          isCorrect: false,
          flawLabel: 'Mirror overgeneralization',
          feedback: 'Commits the same hasty generalization in the opposite direction.',
        },
        {
          id: 'd',
          text: '“Networking mixers are a waste of time anyway.”',
          isCorrect: false,
          flawLabel: 'Irrelevant aside',
          feedback: 'Does not address how the column jumps from four cases to an industry-wide rule.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Columna de Opinión Empresarial',
      excerpt:
        '«Cuatro startups tecnológicas con las que charlé en el evento del martes abandonaron la jornada de cuatro días. Queda claro que reducir la semana laboral fracasa en todo el sector.»',
      subtleHint: 'Compara el tamaño de la muestra (cuatro empresas en un evento) con la conclusión universal («todo el sector»).',
      whyItFails:
        'Extrae una ley general para toda una industria a partir de cuatro charlas informales y no aleatorias en un único encuentro.',
      rhetoricalTrick:
        'Usa «Queda claro» para revestir unas anécdotas sueltas con apariencia de estudio sectorial.',
      howToDisarm:
        'Señala el tamaño y sesgo de selección de la muestra y pide estudios amplios con grupo de control.',
      counterOptions: [
        {
          id: 'a',
          text: '«Cuatro empresas en un evento es una muestra muy pequeña y no aleatoria. Para sacar conclusiones del sector hacen falta ensayos amplios con métricas comparadas.»',
          isCorrect: true,
          feedback: 'Expone el fallo de muestreo sin negar esas cuatro experiencias concretas.',
        },
        {
          id: 'b',
          text: '«Seguro que esos cuatro fundadores no sabían dirigir equipos.»',
          isCorrect: false,
          flawLabel: 'Ataque especulativo',
          feedback: 'Ataca a los directivos en vez de señalar el problema de muestra.',
        },
        {
          id: 'c',
          text: '«La semana de cuatro días siempre sube la productividad en todas las empresas.»',
          isCorrect: false,
          flawLabel: 'Generalización opuesta',
          feedback: 'Comete exactamente el mismo error pero en sentido contrario.',
        },
        {
          id: 'd',
          text: '«Ir a eventos de networking no sirve para nada.»',
          isCorrect: false,
          flawLabel: 'Comentario irrelevante',
          feedback: 'No toca el salto lógico entre cuatro anécdotas y todo un sector.',
        },
      ],
    },
  },
  {
    id: 'art-confirmation-housing',
    context: 'article',
    category: 'confirmation_bias',
    radarFamily: 'cognitive_bias',
    difficulty: 'nuanced',
    distractors: ['hasty_generalization', 'post_hoc', 'framing_anchoring'],
    en: {
      speakerOrSource: 'Editorial Blog Post',
      excerpt:
        '“I’ve followed economic newsletters for a decade, and every time I search for reports showing remote work lowers commercial values, I find dozens of examples proving my thesis right.”',
      subtleHint: 'Notice how the author explicitly describes searching ONLY for reports that agree with their thesis.',
      whyItFails:
        'Actively seeks confirming cases while never checking counter-examples (such as mixed-use districts or suburban retail gains), locking in a one-sided conclusion.',
      rhetoricalTrick:
        'Presents selective search volume (“dozens of examples”) as objective verification.',
      howToDisarm:
        'Ask what evidence was checked on the opposite side and look at net aggregate data.',
      counterOptions: [
        {
          id: 'a',
          text: '“Searching only for confirming reports will always yield matches. What do full-market studies show when growing suburban hubs are weighed alongside downtown offices?”',
          isCorrect: true,
          feedback: 'Targets the one-sided search method directly and requests balanced market-wide data.',
        },
        {
          id: 'b',
          text: '“Commercial real estate values haven’t changed anywhere at all.”',
          isCorrect: false,
          flawLabel: 'Factually overbroad denial',
          feedback: 'Denies real downtown shifts instead of critiquing the selective evidence gathering.',
        },
        {
          id: 'c',
          text: '“Ten years of reading newsletters means you’re biased by default.”',
          isCorrect: false,
          flawLabel: 'Dismisses experience',
          feedback: 'Attacks the reader’s tenure rather than explaining why one-sided search skews results.',
        },
        {
          id: 'd',
          text: '“Well, I found three articles saying the opposite, so my view wins.”',
          isCorrect: false,
          flawLabel: 'Mirrors confirmation search',
          feedback: 'Trades cherry-picked anecdotes instead of asking for comprehensive data.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Artículo de Opinión Económica',
      excerpt:
        '«Llevo diez años leyendo boletines económicos y cada vez que busco informes que muestren que el teletrabajo hunde el valor inmobiliario comercial encuentro decenas de casos que me dan la razón.»',
      subtleHint: 'Fíjate en cómo describe el propio autor su búsqueda: busca únicamente informes que respalden su tesis.',
      whyItFails:
        'Selecciona de forma activa solo datos que confirman su hipótesis previa sin revisar zonas donde el comercio de proximidad creció ni datos agregados.',
      rhetoricalTrick:
        'Presenta la cantidad de resultados buscados a favor («decenas de casos») como si fuera comprobación imparcial.',
      howToDisarm:
        'Pregunta qué evidencias contrarias se consultaron y pide cifras agregadas completas.',
      counterOptions: [
        {
          id: 'a',
          text: '«Si solo buscamos informes a favor, siempre encontraremos decenas. ¿Qué muestran los datos agregados de todo el mercado incluyendo barrios residenciales?»',
          isCorrect: true,
          feedback: 'Señala el sesgo en el método de búsqueda y pide balance completo.',
        },
        {
          id: 'b',
          text: '«El valor de las oficinas no ha bajado en ninguna ciudad.»',
          isCorrect: false,
          flawLabel: 'Negación exagerada',
          feedback: 'Niega datos reales en centros financieros en vez de corregir la búsqueda sesgada.',
        },
        {
          id: 'c',
          text: '«Llevar diez años leyendo boletines te ha vuelto parcial.»',
          isCorrect: false,
          flawLabel: 'Ataque personal',
          feedback: 'Juzga a la persona y no el filtro selectivo de fuentes.',
        },
        {
          id: 'd',
          text: '«Pues yo tengo tres artículos que dicen lo contrario, así que tengo razón.»',
          isCorrect: false,
          flawLabel: 'Replica con el mismo sesgo',
          feedback: 'Opone anécdotas seleccionadas a otras anécdotas en vez de pedir datos completos.',
        },
      ],
    },
  },
  {
    id: 'art-authority-study',
    context: 'article',
    category: 'appeal_to_authority',
    radarFamily: 'messenger_authority',
    difficulty: 'core',
    distractors: ['circular_reasoning', 'framing_anchoring', 'post_hoc'],
    en: {
      speakerOrSource: 'Sponsored Industry Whitepaper',
      excerpt:
        '“Our new sleep supplement works—just ask our chief advisor, a former Olympic swimmer whose gold medals prove his mastery of human recovery.”',
      subtleHint: 'Does athletic achievement in swimming equal clinical trial expertise in pharmacology or sleep medicine?',
      whyItFails:
        'Substitutes athletic fame for clinical sleep research, randomized placebo controls, and peer-reviewed efficacy.',
      rhetoricalTrick:
        'Conflates personal athletic success with scientific expertise in formulation.',
      howToDisarm:
        'Separate athletic achievement from clinical proof and ask for double-blind trial links.',
      counterOptions: [
        {
          id: 'a',
          text: '“Winning medals shows world-class training, not clinical trial validation. Is there a peer-reviewed placebo-controlled study on this formula?”',
          isCorrect: true,
          feedback: 'Honors the athlete cleanly while insisting on clinical evidence for the supplement claim.',
        },
        {
          id: 'b',
          text: '“Athletes don’t know anything about how their own bodies recover.”',
          isCorrect: false,
          flawLabel: 'Condescending overreach',
          feedback: 'Insults athletes needlessly rather than pointing to clinical trial standards.',
        },
        {
          id: 'c',
          text: '“Every supplement on the market is useless anyway.”',
          isCorrect: false,
          flawLabel: 'Sweeping dismissal',
          feedback: 'Avoids evaluating the actual evidence requirement for this product.',
        },
        {
          id: 'd',
          text: '“When did he win those medals? That was years ago!”',
          isCorrect: false,
          flawLabel: 'Attacks timing instead of relevance',
          feedback: 'Even a current gold medal wouldn’t validate a supplement formula clinically.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Informe Patrocinado de Bienestar',
      excerpt:
        '«Nuestro nuevo suplemento para dormir funciona: pregúntale a nuestro asesor jefe, exnadador olímpico cuyas medallas demuestran su dominio de la recuperación humana.»',
      subtleHint: '¿Tener medallas olímpicas equivale a diseñar ensayos clínicos en farmacología o medicina del sueño?',
      whyItFails:
        'Sustituye la evidencia clínica (ensayos con grupo placebo y revisión por pares) por el prestigio deportivo de un embajador.',
      rhetoricalTrick:
        'Confunde el éxito atlético personal con autoridad científica para validar fórmulas.',
      howToDisarm:
        'Distingue mérito deportivo de prueba clínica y solicita estudios publicados con grupo control.',
      counterOptions: [
        {
          id: 'a',
          text: '«Sus medallas acreditan su carrera deportiva, no la eficacia clínica de la fórmula. ¿Tenéis algún ensayo doble ciego frente a placebo publicado?»',
          isCorrect: true,
          feedback: 'Respeta al deportista y exige la prueba científica que corresponde al producto.',
        },
        {
          id: 'b',
          text: '«Los deportistas no tienen ni idea de cómo funciona su cuerpo.»',
          isCorrect: false,
          flawLabel: 'Desprecio gratuito',
          feedback: 'Ofende sin necesidad en vez de exigir estándares científicos.',
        },
        {
          id: 'c',
          text: '«Todos los suplementos son puro cuento.»',
          isCorrect: false,
          flawLabel: 'Generalización excesiva',
          feedback: 'No ataca el fallo concreto de apelar a una autoridad ajena.',
        },
        {
          id: 'd',
          text: '«Esas medallas las ganó hace muchos años, ya no cuentan.»',
          isCorrect: false,
          flawLabel: 'Fallo en la objeción',
          feedback: 'Aunque las hubiera ganado ayer, seguirían sin ser un ensayo clínico.',
        },
      ],
    },
  },
  {
    id: 'art-false-equiv-journalism',
    context: 'article',
    category: 'false_equivalence',
    radarFamily: 'distortion',
    difficulty: 'nuanced',
    distractors: ['strawman', 'red_herring', 'framing_anchoring'],
    en: {
      speakerOrSource: 'Editorial Balance Roundup',
      excerpt:
        '“On one side, 97 independent hydrological surveys warn of aquifer depletion; on the other, a bottled-water trade blog says rainfall will balance it out. Both views deserve equal weight.”',
      subtleHint: 'Check whether 97 empirical surveys and a single industry blog represent symmetrical evidence.',
      whyItFails:
        'Treats an overwhelming body of independent measurements and an unsubstantiated commercial claim as equally credible halves of a 50/50 debate.',
      rhetoricalTrick:
        'Appeals to procedural fairness (“equal weight”) to manufacture artificial doubt.',
      howToDisarm:
        'Clarify that fair reporting represents both voices accurately while weighting them by empirical evidence.',
      counterOptions: [
        {
          id: 'a',
          text: '“Fairness means describing positions accurately, not pretending 97 peer-reviewed surveys and one unverified trade blog carry identical evidence.”',
          isCorrect: true,
          feedback: 'Separates fairness of representation from false symmetry in evidentiary weight.',
        },
        {
          id: 'b',
          text: '“Trade associations should be banned from publishing blogs.”',
          isCorrect: false,
          flawLabel: 'Censorship overreach',
          feedback: 'Calls for silencing speech instead of evaluating evidence proportions.',
        },
        {
          id: 'c',
          text: '“Well, scientists have been wrong before, so maybe it really is 50/50.”',
          isCorrect: false,
          flawLabel: 'False balance fallacy',
          feedback: 'Treats past scientific revisions as proof that any claim is equally likely.',
        },
        {
          id: 'd',
          text: '“Only hydrologists who hate bottled water wrote those surveys.”',
          isCorrect: false,
          flawLabel: 'Conspiratorial motive',
          feedback: 'Dismisses independent measurement via unsupported motive claims.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Resumen Editorial de Actualidad',
      excerpt:
        '«Por un lado, 97 estudios hidrológicos independientes alertan del agotamiento del acuífero; por otro, un blog de la patronal embotelladora dice que la lluvia lo compensará. Ambas posturas merecen el mismo peso.»',
      subtleHint: 'Evalúa si 97 mediciones independientes y un blog sectorial sin datos tienen el mismo peso probatorio.',
      whyItFails:
        'Equilibra de forma artificial un consenso respaldado por decenas de mediciones empíricas con una afirmación interesada sin respaldo.',
      rhetoricalTrick:
        'Invoca la idea de imparcialidad («mismo peso») para fabricar una duda simétrica ficticia.',
      howToDisarm:
        'Distingue entre dar voz con rigor y asignar el mismo valor probatorio a evidencias desiguales.',
      counterOptions: [
        {
          id: 'a',
          text: '«El rigor informativo recoge las posturas con exactitud, pero no finge que 97 mediciones independientes y un blog comercial sin datos pesen lo mismo.»',
          isCorrect: true,
          feedback: 'Aclara la diferencia entre imparcialidad periodística y falsa equivalencia científica.',
        },
        {
          id: 'b',
          text: '«Habría que prohibir que las patronales publiquen blogs.»',
          isCorrect: false,
          flawLabel: 'Exceso censor',
          feedback: 'Propone prohibir opiniones en lugar de ponderar la evidencia.',
        },
        {
          id: 'c',
          text: '«Como la ciencia se ha equivocado otras veces, quizá estén empate al 50 %.»',
          isCorrect: false,
          flawLabel: 'Acepta el falso equilibrio',
          feedback: 'Confunde la autocorrección científica con igualdad entre datos y conjeturas.',
        },
        {
          id: 'd',
          text: '«Seguro que esos 97 informes los hicieron enemigos del agua embotellada.»',
          isCorrect: false,
          flawLabel: 'Sospecha infundada',
          feedback: 'Desacredita mediciones sin revisar sus cifras ni metodología.',
        },
      ],
    },
  },
  {
    id: 'art-strawman-curriculum',
    context: 'article',
    category: 'strawman',
    radarFamily: 'distortion',
    difficulty: 'nuanced',
    distractors: ['false_dichotomy', 'appeal_to_fear', 'red_herring'],
    en: {
      speakerOrSource: 'Education Commentary Headline',
      excerpt:
        '“University panel recommends adding statistical literacy alongside classic literature requirements—translating to: professors now want to erase Shakespeare from higher education.”',
      subtleHint: 'Notice the word “alongside” in the actual recommendation versus “erase” in the headline’s translation.',
      whyItFails:
        'Turns an additive proposal (“alongside”) into a destructive removal (“erase Shakespeare”) that the panel never proposed.',
      rhetoricalTrick:
        'Uses “translating to:” to smuggle a sensational distortion in as a helpful summary.',
      howToDisarm:
        'Quote the actual wording (“alongside”) and point out that both subjects remain in the plan.',
      counterOptions: [
        {
          id: 'a',
          text: '“The report explicitly says ‘alongside’ literature, not replacing it. Let’s look at how both courses fit into the credit hours.”',
          isCorrect: true,
          feedback: 'Corrects the distortion with the exact source word and focuses on practical scheduling.',
        },
        {
          id: 'b',
          text: '“Statistics is way more useful for jobs than Shakespeare anyway.”',
          isCorrect: false,
          flawLabel: 'Accepts the false either/or',
          feedback: 'Validates the headline’s premise that literature is being pushed out.',
        },
        {
          id: 'c',
          text: '“Headline writers clearly failed reading comprehension.”',
          isCorrect: false,
          flawLabel: 'Insulting jab',
          feedback: 'Mocks the writer instead of clarifying the curriculum details for readers.',
        },
        {
          id: 'd',
          text: '“Shakespeare was popular entertainment, not serious study back then.”',
          isCorrect: false,
          flawLabel: 'Side-track',
          feedback: 'Gets pulled into debating Shakespeare’s merit instead of correcting the misquote.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Titular de Opinión Educativa',
      excerpt:
        '«Un comité universitario propone sumar alfabetización estadística junto a los créditos de literatura clásica; traducido: quieren borrar a Cervantes de las aulas.»',
      subtleHint: 'Fíjate en la palabra «sumar / junto a» frente al salto a «borrar a Cervantes».',
      whyItFails:
        'Convierte una propuesta aditiva («junto a») en una eliminación total que el comité jamás planteó.',
      rhetoricalTrick:
        'Utiliza «traducido:» para colar una distorsión llamativa haciéndola pasar por síntesis honesta.',
      howToDisarm:
        'Cita la expresión literal («sumar junto a») y centra el debate en el reparto real de créditos.',
      counterOptions: [
        {
          id: 'a',
          text: '«El informe habla literalmente de sumar estadística junto a literatura, no de sustituirla. Revisemos cómo encajan ambas materias en el plan.»',
          isCorrect: true,
          feedback: 'Corrige la caricatura citando el texto original y pasa a la cuestión práctica.',
        },
        {
          id: 'b',
          text: '«La estadística sirve mucho más para trabajar que leer novelas antiguas.»',
          isCorrect: false,
          flawLabel: 'Acepta el falso reemplazo',
          feedback: 'Confirma sin querer que hay que elegir entre una y otra.',
        },
        {
          id: 'c',
          text: '«Quien escribió ese titular suspendió comprensión lectora.»',
          isCorrect: false,
          flawLabel: 'Descalificación personal',
          feedback: 'Ataca al redactor en vez de informar al lector del texto real.',
        },
        {
          id: 'd',
          text: '«En su época Cervantes también era entretenimiento popular.»',
          isCorrect: false,
          flawLabel: 'Se desvía del punto',
          feedback: 'Debate el estatus de Cervantes y deja sin desmentir el recorte ficticio.',
        },
      ],
    },
  },
  {
    id: 'art-sunkcost-rail',
    context: 'article',
    category: 'sunk_cost',
    radarFamily: 'cognitive_bias',
    difficulty: 'core',
    distractors: ['slippery_slope', 'appeal_to_fear', 'circular_reasoning'],
    en: {
      speakerOrSource: 'Regional Infrastructure Editorial',
      excerpt:
        '“Even though projected demand fell 65% and operating costs doubled, canceling the branch line now would mean wasting the $400 million already spent—we owe it to taxpayers to finish it.”',
      subtleHint: 'Can finishing the line recover the $400M already spent, or will it add future operating losses?',
      whyItFails:
        'Treats unrecoverable past spending ($400M) as a reason to commit even more future money to a project whose forward-looking value has collapsed.',
      rhetoricalTrick:
        'Frames cutting losses as “wasting” past money rather than preventing future losses.',
      howToDisarm:
        'Separate sunk past expenditures from future marginal costs and ask what produces the best return from today forward.',
      counterOptions: [
        {
          id: 'a',
          text: '“That $400M is already spent either way. The decision today is whether spending another $300M yields more value than redirecting those funds to higher-demand routes.”',
          isCorrect: true,
          feedback: 'Applies clean marginal forward-looking reasoning without blaming past planners.',
        },
        {
          id: 'b',
          text: '“Only reckless politicians approved the line in the first place.”',
          isCorrect: false,
          flawLabel: 'Backward-looking blame',
          feedback: 'Focuses on blaming original sponsors rather than solving the forward capital allocation.',
        },
        {
          id: 'c',
          text: '“Never finish any government rail project because they always lose money.”',
          isCorrect: false,
          flawLabel: 'Hasty generalization',
          feedback: 'Replaces project-specific math with a blanket dogma.',
        },
        {
          id: 'd',
          text: '“Finishing it at least gives us a ribbon-cutting photo.”',
          isCorrect: false,
          flawLabel: 'Avoids economic reality',
          feedback: 'Doesn’t refute the sunk-cost reasoning.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Editorial sobre Infraestructuras',
      excerpt:
        '«Aunque la demanda prevista cayó un 65 % y el coste de mantenimiento se duplicó, cancelar el ramal ahora sería tirar a la basura los 400 millones ya gastados; debemos terminarlo.»',
      subtleHint: '¿Terminar la obra devuelve los 400 millones ya gastados o compromete aún más pérdidas futuras?',
      whyItFails:
        'Usa un gasto pasado irrecuperable como motivo para seguir inyectando dinero en un proyecto cuya rentabilidad futura ya no se sostiene.',
      rhetoricalTrick:
        'Presenta detener una pérdida futura como «tirar a la basura» el esfuerzo pasado.',
      howToDisarm:
        'Separa el dinero ya invertido de la decisión futura y compara qué uso rinde más desde hoy en adelante.',
      counterOptions: [
        {
          id: 'a',
          text: '«Esos 400 millones ya no vuelven se termine o no. La pregunta de hoy es si gastar otros 300 millones aporta más valor que destinarlos a líneas con demanda real.»',
          isCorrect: true,
          feedback: 'Separa limpiamente el coste hundido del coste marginal futuro.',
        },
        {
          id: 'b',
          text: '«Quienes aprobaron este proyecto hace años deberían ir a juicio.»',
          isCorrect: false,
          flawLabel: 'Desvío al pasado',
          feedback: 'Busca culpables pasados sin resolver la decisión financiera presente.',
        },
        {
          id: 'c',
          text: '«Ningún tren público debería construirse nunca porque siempre dan pérdidas.»',
          isCorrect: false,
          flawLabel: 'Generalización apresurada',
          feedback: 'Sustituye el análisis concreto de demanda por un dogma general.',
        },
        {
          id: 'd',
          text: '«Bueno, al menos la obra ya tiene los túneles excavados.»',
          isCorrect: false,
          flawLabel: 'Refuerza el coste hundido',
          feedback: 'Vuelve a fijarse en lo ya hecho en lugar del retorno futuro.',
        },
      ],
    },
  },
  {
    id: 'art-fear-headline-ai',
    context: 'article',
    category: 'appeal_to_fear',
    radarFamily: 'emotional_framing',
    difficulty: 'core',
    distractors: ['slippery_slope', 'framing_anchoring', 'strawman'],
    en: {
      speakerOrSource: 'Syndicated Tech Clickbait Article',
      excerpt:
        '“Your career could vanish by December: experts warn new automation waves will leave entire professions unrecognizable before the holidays—click to see if you survive.”',
      subtleHint: 'Notice the cliffhanger deadline (“by December”) and survival framing without citing labor transition timelines.',
      whyItFails:
        'Amplifies existential panic and artificial countdown pressure (“by December”, “survive”) rather than reporting actual adoption rates and task-level shifts.',
      rhetoricalTrick:
        'Hooks attention via threat salience and urgency cues to bypass skeptical reading.',
      howToDisarm:
        'Ask for concrete sector adoption timelines and which specific tasks change versus entire roles.',
      counterOptions: [
        {
          id: 'a',
          text: '“Task-level tools evolve quickly, though full occupation shifts usually take years. Which verifiable labor dataset supports a December wipeout?”',
          isCorrect: true,
          feedback: 'Lowers the emotional temperature and demands concrete employment data.',
        },
        {
          id: 'b',
          text: '“Technology has never replaced a single job in history.”',
          isCorrect: false,
          flawLabel: 'Historically false denial',
          feedback: 'Ignores real historical disruptions instead of testing the timeline exaggeration.',
        },
        {
          id: 'c',
          text: '“Journalists are just terrified of losing their own jobs.”',
          isCorrect: false,
          flawLabel: 'Ad hominem',
          feedback: 'Speculates on the writer’s anxieties rather than checking the claim.',
        },
        {
          id: 'd',
          text: '“Better quit my field this week before December arrives!”',
          isCorrect: false,
          flawLabel: 'Reacts to panic',
          feedback: 'Follows the alarmist deadline uncritically.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Artículo Viral sobre Empleo',
      excerpt:
        '«Tu profesión podría desaparecer antes de diciembre: los expertos advierten de que esta ola de automatización dejará sectores irreconocibles en meses; comprueba si sobrevivirás.»',
      subtleHint: 'Fíjate en el plazo dramático («antes de diciembre», «sobrevivirás») sin datos laborales por sector.',
      whyItFails:
        'Usa lenguaje de supervivencia y cuenta atrás artificial para disparar la ansiedad del lector sin aportar datos reales de adopción.',
      rhetoricalTrick:
        'Activa el miedo inmediato mediante urgencia temporal para captar clics sin contraste empírico.',
      howToDisarm:
        'Distingue entre automatización de tareas concretas y desaparición súbita de empleos y pide fuentes laborales.',
      counterOptions: [
        {
          id: 'a',
          text: '«Las herramientas cambian tareas concretas, pero la reconversión laboral suele llevar años. ¿Qué estudio de empleo respalda esa fecha de diciembre?»',
          isCorrect: true,
          feedback: 'Desactiva la urgencia artificial y exige datos laborales verificables.',
        },
        {
          id: 'b',
          text: '«La tecnología jamás ha destruido ni un solo empleo en la historia.»',
          isCorrect: false,
          flawLabel: 'Negación histórica falsa',
          feedback: 'Niega transformaciones reales en lugar de cuestionar el alarmismo del plazo.',
        },
        {
          id: 'c',
          text: '«Quien escribió esto solo tiene miedo de perder su puesto de redactor.»',
          isCorrect: false,
          flawLabel: 'Ataque personal',
          feedback: 'Atribuye miedos al autor sin analizar la afirmación.',
        },
        {
          id: 'd',
          text: '«Más vale cambiar de carrera esta misma semana.»',
          isCorrect: false,
          flawLabel: 'Cae en la alarma',
          feedback: 'Acepta el titular catastrofista sin contrastarlo.',
        },
      ],
    },
  },
];
