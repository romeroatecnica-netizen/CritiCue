import type { Scenario } from '../types.ts';

export const SCENARIOS_AD_EVERYDAY: Scenario[] = [
  // --- ADVERTISING & MARKETING (9 scenarios) ---
  {
    id: 'adv-anchoring-mattress',
    context: 'advertising',
    category: 'framing_anchoring',
    radarFamily: 'emotional_framing',
    difficulty: 'core',
    distractors: ['appeal_to_fear', 'appeal_to_authority', 'hasty_generalization'],
    en: {
      speakerOrSource: 'Direct-to-Consumer Sleep Ad',
      excerpt:
        '“LUXURY EDITION — Normally $2,400, Flash Sale Today Only: $699! Don’t miss $1,701 in instant savings before midnight!”',
      subtleHint: 'Has the product ever genuinely sold consistently at $2,400, or is $699 the permanent street price?',
      whyItFails:
        'Uses an inflated “compare-at” anchor ($2,400) paired with a countdown clock to make $699 feel like a steal rather than letting the buyer evaluate quality against competing $700 mattresses.',
      rhetoricalTrick:
        'Exploits price anchoring plus scarcity urgency so you compare against a fictional reference price instead of real market alternatives.',
      howToDisarm:
        'Ignore the crossed-out anchor price and compare the actual $699 spec against independent competitors.',
      counterOptions: [
        {
          id: 'a',
          text: '“Ignore the $2,400 reference tag and compare foam density, warranty, and price history against three other $700 mattresses.”',
          isCorrect: true,
          feedback: 'Neutralizes the anchor cleanly and evaluates real product value.',
        },
        {
          id: 'b',
          text: '“If it’s 70% off, the materials must be total garbage.”',
          isCorrect: false,
          flawLabel: 'Hasty reverse inference',
          feedback: 'Assumes quality is bad purely from the marketing trick rather than checking actual specs.',
        },
        {
          id: 'c',
          text: '“Buy it before midnight just in case the price really jumps back to $2,400!”',
          isCorrect: false,
          flawLabel: 'Falls for anchoring + urgency',
          feedback: 'Surrenders directly to the artificial countdown and reference price.',
        },
        {
          id: 'd',
          text: '“Only gullible people shop online anyway.”',
          isCorrect: false,
          flawLabel: 'Sweeping insult',
          feedback: 'Doesn’t teach how to benchmark the offer objectively.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Anuncio de Colchones Online',
      excerpt:
        '«EDICIÓN PREMIUM — Precio habitual 2.400 €, ¡Solo hoy en oferta flash: 699 €! No dejes escapar 1.701 € de ahorro antes de medianoche.»',
      subtleHint: '¿Se vendió realmente de forma sostenida a 2.400 €, o 699 € es su precio real permanente?',
      whyItFails:
        'Fija un precio de referencia inflado (2.400 €) junto a una falsa urgencia para que 699 € parezca una ganga sin comparar calidades con otros modelos de 700 €.',
      rhetoricalTrick:
        'Combina anclaje de precio ficticio con cuenta atrás para frenar la comparación externa.',
      howToDisarm:
        'Borra mentalmente el precio tachado y compara especificaciones reales frente a alternativas de 700 €.',
      counterOptions: [
        {
          id: 'a',
          text: '«Descarta el precio tachado de 2.400 € y compara densidad, garantía e historial de precio frente a otros colchones de 700 €.»',
          isCorrect: true,
          feedback: 'Desmonta el anclaje y devuelve la compra a criterios objetivos.',
        },
        {
          id: 'b',
          text: '«Si rebajan un 70 %, seguro que es un colchón malísimo.»',
          isCorrect: false,
          flawLabel: 'Deducción apresurada',
          feedback: 'Juzga la calidad por el descuento publicitario en vez de mirar los materiales.',
        },
        {
          id: 'c',
          text: '«Cómpralo antes de las doce por si de verdad vuelve a 2.400 €.»',
          isCorrect: false,
          flawLabel: 'Cae en el anclaje y la prisa',
          feedback: 'Obedece al truco comercial sin contrastar el mercado.',
        },
        {
          id: 'd',
          text: '«Solo los ingenuos compran por internet.»',
          isCorrect: false,
          flawLabel: 'Generalización despectiva',
          feedback: 'No analiza cómo evaluar ofertas reales.',
        },
      ],
    },
  },
  {
    id: 'adv-authority-dentist',
    context: 'advertising',
    category: 'appeal_to_authority',
    radarFamily: 'messenger_authority',
    difficulty: 'core',
    distractors: ['framing_anchoring', 'hasty_generalization', 'circular_reasoning'],
    en: {
      speakerOrSource: 'Whitening Toothpaste Commercial',
      excerpt:
        '“Recommended by 9 out of 10 dentists surveyed! Switch to PearlGlow today for clinical-grade enamel transformation.”',
      subtleHint: 'Could dentists say “yes, brushing with a fluoride paste helps” even when asked about multiple brands at once?',
      whyItFails:
        'Cites an unspecified survey of authority figures without sharing the survey question, sample size, whether respondents could pick multiple brands, or clinical comparison data.',
      rhetoricalTrick:
        'Paints an ambiguous marketing survey as an exclusive clinical consensus.',
      howToDisarm:
        'Ask how the survey question was phrased and check the active ingredient concentration.',
      counterOptions: [
        {
          id: 'a',
          text: '“Notice they don’t show the survey question—often respondents could select multiple brands. Let’s check the active fluoride and abrasion ratings instead.”',
          isCorrect: true,
          feedback: 'Exposes the hidden survey design flaw and evaluates the product on verifiable ingredients.',
        },
        {
          id: 'b',
          text: '“Dentists are all paid off, so ignore dental advice altogether.”',
          isCorrect: false,
          flawLabel: 'Anti-expertise overreach',
          feedback: 'Discards legitimate dental science instead of questioning the vague marketing survey.',
        },
        {
          id: 'c',
          text: '“Well, 9 out of 10 means it has to be better than my current paste.”',
          isCorrect: false,
          flawLabel: 'Accepts vague authority',
          feedback: 'Assumes exclusivity that the ad never actually claimed.',
        },
        {
          id: 'd',
          text: '“Who was the 10th dentist? Probably someone grumpy.”',
          isCorrect: false,
          flawLabel: 'Misses the point',
          feedback: 'Jokes about the 10% outlier instead of checking the survey methodology.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Anuncio de Pasta Dental',
      excerpt:
        '«¡Recomendada por 9 de cada 10 dentistas encuestados! Pásate hoy a PearlGlow para una transformación clínica de tu esmalte.»',
      subtleHint: '¿Pudieron elegir varias marcas a la vez o responder si recomendaban usar pasta con flúor en general?',
      whyItFails:
        'Invoca un consenso de autoridad sin mostrar la pregunta exacta, el tamaño de la muestra ni si los encuestados podían marcar varias marcas simultáneamente.',
      rhetoricalTrick:
        'Convierte una encuesta promocional ambigua en un veredicto médico exclusivo.',
      howToDisarm:
        'Pregunta por la metodología de la encuesta y revisa los ingredientes activos reales.',
      counterOptions: [
        {
          id: 'a',
          text: '«No muestran la pregunta de la encuesta; muchas veces dejan marcar varias marcas a la vez. Conviene mirar el flúor activo y el índice de abrasividad.»',
          isCorrect: true,
          feedback: 'Señala el sesgo habitual de esas encuestas y pasa a datos comprobables.',
        },
        {
          id: 'b',
          text: '«Todos los dentistas están comprados; mejor no hacerles caso nunca.»',
          isCorrect: false,
          flawLabel: 'Desconfianza extrema',
          feedback: 'Rechaza toda la odontología en lugar de cuestionar el anuncio.',
        },
        {
          id: 'c',
          text: '«Con 9 de cada 10 seguro que es muy superior a todas las demás.»',
          isCorrect: false,
          flawLabel: 'Acepta la cifra ambigua',
          feedback: 'Asume exclusividad donde el anuncio no la demuestra.',
        },
        {
          id: 'd',
          text: '«¿Y quién sería el dentista número diez? Seguro que un aguafiestas.»',
          isCorrect: false,
          flawLabel: 'Broma irrelevante',
          feedback: 'Se queda en la anécdota sin revisar el diseño de la encuesta.',
        },
      ],
    },
  },
  {
    id: 'adv-fear-antivirus',
    context: 'advertising',
    category: 'appeal_to_fear',
    radarFamily: 'emotional_framing',
    difficulty: 'core',
    distractors: ['false_dichotomy', 'slippery_slope', 'post_hoc'],
    en: {
      speakerOrSource: 'Pop-up Cybersecurity Banner',
      excerpt:
        '“Hackers target unguarded devices every 3 seconds! Without our ShieldMax Ultra suite, your bank passwords and family photos are exposed RIGHT NOW.”',
      subtleHint: 'Notice the dramatic “every 3 seconds” alarm and assumption that your OS has zero built-in defenses.',
      whyItFails:
        'Uses panic cues (“RIGHT NOW”, “family photos exposed”) to push an immediate subscription while ignoring built-in OS firewalls, automatic updates, and basic hygiene like 2FA.',
      rhetoricalTrick:
        'Triggers acute threat anxiety so the user buys before checking whether their device already has adequate protection.',
      howToDisarm:
        'Verify actual threat vectors and audit existing built-in protections before buying add-on suites.',
      counterOptions: [
        {
          id: 'a',
          text: '“Fear banners exaggerate baseline exposure. With OS updates, built-in defender tools, and 2FA active, what specific threat does this paid suite cover that those don’t?”',
          isCorrect: true,
          feedback: 'Calms the panic and evaluates incremental security value objectively.',
        },
        {
          id: 'b',
          text: '“Nobody hacks regular people’s phones anyway.”',
          isCorrect: false,
          flawLabel: 'Complacent denial',
          feedback: 'Understates real phishing risks instead of assessing layered security.',
        },
        {
          id: 'c',
          text: '“Better install it immediately so my photos aren’t stolen tonight!”',
          isCorrect: false,
          flawLabel: 'Acts on fear trigger',
          feedback: 'Buys impulsively based on countdown fear.',
        },
        {
          id: 'd',
          text: '“All antivirus software is a scam.”',
          isCorrect: false,
          flawLabel: 'Overgeneralization',
          feedback: 'Dismisses legitimate endpoint security tools broadly rather than auditing real gaps.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Banner Publicitario de Ciberseguridad',
      excerpt:
        '«¡Los hackers atacan un dispositivo desprotegido cada 3 segundos! Sin nuestra suite ShieldMax Ultra, tus claves bancarias y fotos familiares están expuestas AHORA MISMO.»',
      subtleHint: 'Observa las mayúsculas urgentes («AHORA MISMO») y el silencio sobre la protección que ya trae tu sistema.',
      whyItFails:
        'Explota el miedo inmediato para vender una suscripción impulsiva omitiendo las defensas nativas del sistema, actualizaciones y verificación en dos pasos.',
      rhetoricalTrick:
        'Eleva la percepción de peligro inminente para bloquear la comparación racional.',
      howToDisarm:
        'Comprueba qué protección incluye ya tu sistema operativo y pregunta qué cobertura adicional aporta el producto.',
      counterOptions: [
        {
          id: 'a',
          text: '«El banner busca asustar. Con el sistema actualizado, su antivirus nativo y doble factor, ¿qué riesgo concreto cubre esta suite que no esté cubierto ya?»',
          isCorrect: true,
          feedback: 'Reduce la alarma y evalúa el valor real añadido.',
        },
        {
          id: 'b',
          text: '«A la gente normal nunca la hackean, eso solo pasa en películas.»',
          isCorrect: false,
          flawLabel: 'Falsa sensación de invulnerabilidad',
          feedback: 'Minimiza riesgos reales como el phishing en vez de evaluar defensas.',
        },
        {
          id: 'c',
          text: '«Voy a pagarlo ya mismo para que no me roben las fotos esta noche.»',
          isCorrect: false,
          flawLabel: 'Compra por pánico',
          feedback: 'Cede al miedo sin contrastar su necesidad real.',
        },
        {
          id: 'd',
          text: '«Todos los programas antivirus son una estafa.»',
          isCorrect: false,
          flawLabel: 'Generalización excesiva',
          feedback: 'Descarta herramientas útiles en vez de analizar el encuadre alarmista.',
        },
      ],
    },
  },
  {
    id: 'adv-circular-cleanlabel',
    context: 'advertising',
    category: 'circular_reasoning',
    radarFamily: 'diversion_circular',
    difficulty: 'nuanced',
    distractors: ['framing_anchoring', 'appeal_to_authority', 'post_hoc'],
    en: {
      speakerOrSource: 'Artisanal Beverage Packaging',
      excerpt:
        '“PureSpring is nature’s purest hydration because it is bottled exclusively from untouched pure springs untouched by artificial impurity.”',
      subtleHint: 'Does saying “purest... because... pure... untouched by impurity” prove mineral quality or safety?',
      whyItFails:
        'Repeats the word “pure” in three variations as both the claim and the supporting reason without supplying lab mineral profiles or contaminant testing.',
      rhetoricalTrick:
        'Uses poetic repetition (“purest... pure... impurity”) so the rhythm sounds like proof.',
      howToDisarm:
        'Ask for independent lab analysis or standardized mineral/contaminant testing reports.',
      counterOptions: [
        {
          id: 'a',
          text: '“Repeating ‘pure’ doesn’t tell us the mineral profile or test results. What does the independent water quality report show?”',
          isCorrect: true,
          feedback: 'Points out the tautology lightly and asks for measurable lab specs.',
        },
        {
          id: 'b',
          text: '“Bottled water is always dirtier than tap water.”',
          isCorrect: false,
          flawLabel: 'Counter-generalization',
          feedback: 'Makes a blanket claim without looking at either water quality report.',
        },
        {
          id: 'c',
          text: '“Well, the label looks super clean, so it’s probably healthier.”',
          isCorrect: false,
          flawLabel: 'Visual halo bias',
          feedback: 'Confuses minimalist packaging with verified water quality.',
        },
        {
          id: 'd',
          text: '“Copywriters should be fined for writing redundant adjectives.”',
          isCorrect: false,
          flawLabel: 'Misses consumer focus',
          feedback: 'Complains about style instead of checking measurable quality.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Etiqueta de Agua Embotellada',
      excerpt:
        '«PureSpring ofrece la hidratación más pura porque brota exclusivamente de manantiales puros libres de toda impureza artificial.»',
      subtleHint: 'Repetir «pura / puros / impureza», ¿aporta algún análisis químico o mineral comprobable?',
      whyItFails:
        'Usa variaciones de la palabra «puro» como afirmación y como prueba al mismo tiempo, sin ofrecer análisis minerales ni controles de calidad.',
      rhetoricalTrick:
        'Envuelve la tautología en prosa poética para que suene convincente al oído.',
      howToDisarm:
        'Solicita la ficha analítica independiente de composición y controles sanitarios.',
      counterOptions: [
        {
          id: 'a',
          text: '«Repetir “puro” tres veces no aporta datos químicos. ¿Qué indica el análisis independiente de minerales y contaminantes?»',
          isCorrect: true,
          feedback: 'Señala el círculo verbal y pide mediciones objetivas.',
        },
        {
          id: 'b',
          text: '«El agua embotellada siempre es peor que la del grifo.»',
          isCorrect: false,
          flawLabel: 'Generalización contraria',
          feedback: 'Afirma sin mirar los análisis reales de cada fuente.',
        },
        {
          id: 'c',
          text: '«Con esa etiqueta tan limpia seguro que sienta mejor.»',
          isCorrect: false,
          flawLabel: 'Efecto halo estético',
          feedback: 'Confunde diseño gráfico con calidad sanitaria.',
        },
        {
          id: 'd',
          text: '«Deberían multar a los redactores por repetir palabras.»',
          isCorrect: false,
          flawLabel: 'Crítica meramente estilística',
          feedback: 'Se fija en el estilo sin exigir datos de composición.',
        },
      ],
    },
  },
  {
    id: 'adv-posthoc-course',
    context: 'advertising',
    category: 'post_hoc',
    radarFamily: 'false_cause_sample',
    difficulty: 'core',
    distractors: ['hasty_generalization', 'confirmation_bias', 'sunk_cost'],
    en: {
      speakerOrSource: 'Social Media Trading Course Ad',
      excerpt:
        '“Marcus bought our weekend blueprint in March and made $18,000 by August. Join tonight—our blueprint clearly created his windfall!”',
      subtleHint: 'What happened in the overall stock market between March and August, and how many students lost money?',
      whyItFails:
        'Credits the weekend course solely because Marcus made money afterward, ignoring overall market rallies, prior capital, luck, and the 95% of buyers not featured.',
      rhetoricalTrick:
        'Spotlights one lucky survivor after a purchase to imply guaranteed causation.',
      howToDisarm:
        'Ask for audited median outcomes across all enrolled students compared to a passive index.',
      counterOptions: [
        {
          id: 'a',
          text: '“One person profiting after taking a course could just reflect a rising market or luck. What is the audited median return across all students vs. a passive index?”',
          isCorrect: true,
          feedback: 'Tests causation cleanly by requesting full cohort medians and benchmark comparisons.',
        },
        {
          id: 'b',
          text: '“Marcus is obviously a paid actor and doesn’t exist.”',
          isCorrect: false,
          flawLabel: 'Unverified accusation',
          feedback: 'Even if Marcus is real and truly earned $18,000, the causal proof is still missing.',
        },
        {
          id: 'c',
          text: '“Only lazy people fail at day trading.”',
          isCorrect: false,
          flawLabel: 'Blames victims',
          feedback: 'Reinforces the ad’s survivorship myth.',
        },
        {
          id: 'd',
          text: '“$18,000 in five months isn’t even impressive.”',
          isCorrect: false,
          flawLabel: 'Sidetracks onto dollar size',
          feedback: 'Misses that the core flaw is attributing causation without cohort benchmarks.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Anuncio de Curso de Inversión en Redes',
      excerpt:
        '«Marcos compró nuestro método en marzo y ganó 18.000 € en agosto. Apúntate hoy: ¡nuestro curso generó directamente sus ganancias!»',
      subtleHint: '¿Qué hizo el mercado general entre marzo y agosto y qué ocurrió con el resto de alumnos no mostrados?',
      whyItFails:
        'Atribuye el beneficio únicamente al curso por ser anterior en el tiempo, ignorando la subida general del mercado, la suerte, el capital previo y los alumnos con pérdidas.',
      rhetoricalTrick:
        'Muestra un único caso de éxito tras la compra para vender causalidad garantizada.',
      howToDisarm:
        'Pide la mediana auditada de resultados de toda la cohorte comparada con un índice pasivo.',
      counterOptions: [
        {
          id: 'a',
          text: '«Que una persona gane tras hacer un curso puede deberse a un mercado alcista o azar. ¿Cuál es la rentabilidad mediana auditada de todos los alumnos frente a un índice?»',
          isCorrect: true,
          feedback: 'Exige datos de toda la muestra y punto de comparación objetivo.',
        },
        {
          id: 'b',
          text: '«Seguro que Marcos es un actor pagado y ni siquiera existe.»',
          isCorrect: false,
          flawLabel: 'Conjetura innecesaria',
          feedback: 'Aunque Marcos fuera real, un caso posterior no demuestra causalidad del método.',
        },
        {
          id: 'c',
          text: '«Quien pierde dinero en bolsa es porque no se esfuerza.»',
          isCorrect: false,
          flawLabel: 'Culpa al alumno',
          feedback: 'Refuerza el sesgo de supervivencia del anuncio.',
        },
        {
          id: 'd',
          text: '«18.000 € en cinco meses tampoco es tanto dinero.»',
          isCorrect: false,
          flawLabel: 'Desvío sobre la cuantía',
          feedback: 'No señala que falta grupo de control y cohorte completa.',
        },
      ],
    },
  },
  {
    id: 'adv-dichotomy-skincare',
    context: 'advertising',
    category: 'false_dichotomy',
    radarFamily: 'binary_slope',
    difficulty: 'nuanced',
    distractors: ['appeal_to_fear', 'strawman', 'framing_anchoring'],
    en: {
      speakerOrSource: 'Luxury Skincare Ad Copy',
      excerpt:
        '“Either invest in our $185 cellular-renewal serum today, or accept visible premature aging—your skin won’t wait for compromises.”',
      subtleHint: 'Are $185 luxury serums and “premature aging” the only two paths for skin health?',
      whyItFails:
        'Erases proven, affordable options—daily broad-spectrum sunscreen, basic moisturizers, sleep, and standard retinoids—by framing a $185 bottle as the sole defense.',
      rhetoricalTrick:
        'Pairs binary ultimatums with time pressure (“won’t wait”) to block price-performance comparisons.',
      howToDisarm:
        'Name affordable evidence-backed alternatives that achieve the core dermatological benefit.',
      counterOptions: [
        {
          id: 'a',
          text: '“Those aren’t the only choices—daily sunscreen and affordable proven actives like generic retinoids protect skin without a $185 price tag.”',
          isCorrect: true,
          feedback: 'Breaks the artificial binary using accessible, evidence-backed options.',
        },
        {
          id: 'b',
          text: '“Skincare brands only sell colored water in expensive jars.”',
          isCorrect: false,
          flawLabel: 'Overbroad cynicism',
          feedback: 'Dismisses effective ingredients along with inflated marketing claims.',
        },
        {
          id: 'c',
          text: '“Fine, I’ll just look older because I can’t afford $185.”',
          isCorrect: false,
          flawLabel: 'Internalizes the false dilemma',
          feedback: 'Accepts the ad’s claim that affordable care does nothing.',
        },
        {
          id: 'd',
          text: '“Aging naturally is beautiful, so nobody needs sunscreen either.”',
          isCorrect: false,
          flawLabel: 'Swings to the opposite extreme',
          feedback: 'Rejects genuine preventive care alongside luxury hype.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Anuncio de Cosmética de Lujo',
      excerpt:
        '«O inviertes hoy en nuestro sérum regenerador celular de 185 €, o te resignas al envejecimiento prematuro visible; tu piel no admite medias tintas.»',
      subtleHint: '¿De verdad no existen opciones probadas y asequibles entre pagar 185 € y descuidar la piel?',
      whyItFails:
        'Oculta alternativas dermatológicas respaldadas y económicas —protector solar diario, hidratante básica o retinoides estándar— presentando un frasco de 185 € como única salida.',
      rhetoricalTrick:
        'Une un dilema binario extremo con urgencia estética («no admite medias tintas»).',
      howToDisarm:
        'Enumera opciones intermedias accesibles con evidencia clínica.',
      counterOptions: [
        {
          id: 'a',
          text: '«Existen opciones eficaces fuera de ese dilema: el protector solar diario y activos probados económicos protegen la piel sin pagar 185 €.»',
          isCorrect: true,
          feedback: 'Rompe la falsa dicotomía con alternativas reales y contrastadas.',
        },
        {
          id: 'b',
          text: '«Todas las cremas caras son exactamente agua con perfume.»',
          isCorrect: false,
          flawLabel: 'Generalización sin matices',
          feedback: 'Mete todo en el mismo saco sin distinguir entre activos reales y sobreprecio.',
        },
        {
          id: 'c',
          text: '«Pues tendré que aceptar arrugas antes de tiempo porque no llego a 185 €.»',
          isCorrect: false,
          flawLabel: 'Asume el falso dilema',
          feedback: 'Acepta la premisa falsa de que sin ese producto no hay cuidado eficaz.',
        },
        {
          id: 'd',
          text: '«Envejecer es natural, así que tampoco hace falta protector solar.»',
          isCorrect: false,
          flawLabel: 'Extremo contrario',
          feedback: 'Descarta cuidados preventivos útiles por rechazar un anuncio caro.',
        },
      ],
    },
  },
  {
    id: 'adv-hasty-gen-reviews',
    context: 'advertising',
    category: 'hasty_generalization',
    radarFamily: 'false_cause_sample',
    difficulty: 'nuanced',
    distractors: ['confirmation_bias', 'appeal_to_authority', 'framing_anchoring'],
    en: {
      speakerOrSource: 'SaaS Landing Page Testimonial Strip',
      excerpt:
        '“Read these three glowing quotes from enterprise VPs—proof that every single company cuts onboarding time in half within 48 hours of switching to FlowDesk.”',
      subtleHint: 'Can three hand-picked quotes prove a guaranteed result for “every single company”?',
      whyItFails:
        'Uses three curated testimonials from an unknown total customer pool to promise universal 50% speedups for every company regardless of team size or legacy workflows.',
      rhetoricalTrick:
        'Substitutes hand-selected showcase quotes for representative customer outcome metrics.',
      howToDisarm:
        'Ask for median onboarding times across a full cohort of similar-sized teams.',
      counterOptions: [
        {
          id: 'a',
          text: '“Three hand-picked quotes show best-case outcomes. What is the median onboarding timeline across all accounts of our size, including migrations from legacy tools?”',
          isCorrect: true,
          feedback: 'Welcomes customer stories for what they are while asking for representative median data.',
        },
        {
          id: 'b',
          text: '“Software vendors always fake all testimonials.”',
          isCorrect: false,
          flawLabel: 'Baseless cynicism',
          feedback: 'Accuses fraud without evidence instead of pointing out sample selection bias.',
        },
        {
          id: 'c',
          text: '“Enterprise VPs don’t even use the software themselves.”',
          isCorrect: false,
          flawLabel: 'Ad hominem deflection',
          feedback: 'Dismisses the speakers rather than addressing the missing aggregate metrics.',
        },
        {
          id: 'd',
          text: '“Three VPs agree, so our team will definitely save 50% too.”',
          isCorrect: false,
          flawLabel: 'Falls for small-sample hype',
          feedback: 'Applies best-case anecdotes uncritically to a different context.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Página Comercial de Software B2B',
      excerpt:
        '«Lee estas tres reseñas entusiastas de directivos: la prueba de que todas las empresas reducen a la mitad su tiempo de alta en 48 horas al pasarse a FlowDesk.»',
      subtleHint: '¿Pueden tres citas seleccionadas por el vendedor demostrar un resultado garantizado para «todas las empresas»?',
      whyItFails:
        'Toma tres testimonios escogidos a mano para prometer una mejora universal del 50 % sin mostrar promedios globales ni fricciones de migración.',
      rhetoricalTrick:
        'Vende casos de escaparate seleccionados como si fueran una estadística universal.',
      howToDisarm:
        'Solicita tiempos medianos reales en cuentas de tamaño comparable.',
      counterOptions: [
        {
          id: 'a',
          text: '«Tres citas escogidas muestran el mejor escenario. ¿Cuál es la mediana real de implantación entre clientes de nuestro tamaño con datos previos?»',
          isCorrect: true,
          feedback: 'Pide estadísticas representativas sin descalificar gratuitamente las reseñas.',
        },
        {
          id: 'b',
          text: '«Todas las empresas de software se inventan las reseñas.»',
          isCorrect: false,
          flawLabel: 'Acusación sin pruebas',
          feedback: 'Presume falsedad en lugar de señalar el sesgo de selección.',
        },
        {
          id: 'c',
          text: '«Los directivos ni siquiera tocan la herramienta en el día a día.»',
          isCorrect: false,
          flawLabel: 'Desvío personal',
          feedback: 'Ignora el salto estadístico entre tres casos y el universo de clientes.',
        },
        {
          id: 'd',
          text: '«Si tres directivos lo lograron, nosotros ahorraremos un 50 % seguro.»',
          isCorrect: false,
          flawLabel: 'Generaliza desde 3 casos',
          feedback: 'Acepta el escaparate como garantía universal.',
        },
      ],
    },
  },
  {
    id: 'adv-sunkcost-subscription',
    context: 'advertising',
    category: 'sunk_cost',
    radarFamily: 'cognitive_bias',
    difficulty: 'nuanced',
    distractors: ['framing_anchoring', 'appeal_to_fear', 'confirmation_bias'],
    en: {
      speakerOrSource: 'Retention Cancellation Screen',
      excerpt:
        '“Are you sure you want to cancel? You’ve already paid for 14 months and earned 2,400 loyalty points—don’t throw away over a year of investment!”',
      subtleHint: 'Are the 14 past monthly payments recoverable if you keep paying month 15, or do loyalty points cost more to keep alive?',
      whyItFails:
        'Uses past subscription fees (“14 months already paid”) and non-cash points to pressure you into continuing an unwanted monthly charge.',
      rhetoricalTrick:
        'Triggers loss aversion by reframing canceling an unused service as “throwing away” past money.',
      howToDisarm:
        'Evaluate only whether next month’s fee is worth next month’s actual usage.',
      counterOptions: [
        {
          id: 'a',
          text: '“The past 14 months are gone either way. Next month costs $29—if I won’t use $29 of value next month, canceling saves money.”',
          isCorrect: true,
          feedback: 'Anchors strictly on forward monthly cost versus forward utility.',
        },
        {
          id: 'b',
          text: '“Subscriptions should all be illegal.”',
          isCorrect: false,
          flawLabel: 'Overreaction',
          feedback: 'Misses the personal decision framework for evaluating ongoing value.',
        },
        {
          id: 'c',
          text: '“I’d better stay three more months just to redeem those 2,400 points.”',
          isCorrect: false,
          flawLabel: 'Falls for sunk cost',
          feedback: 'Pays $87 more just to chase points worth a fraction of that amount.',
        },
        {
          id: 'd',
          text: '“I’m canceling because your website colors are ugly.”',
          isCorrect: false,
          flawLabel: 'Unrelated reason',
          feedback: 'Doesn’t clarify the sunk-cost trap in retention screens.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Pantalla de Baja de Suscripción',
      excerpt:
        '«¿Seguro que quieres cancelar? Ya has pagado 14 meses y acumulado 2.400 puntos de fidelidad: ¡no tires a la basura más de un año de inversión!»',
      subtleHint: '¿Recuperas las 14 cuotas pasadas por pagar la cuota 15, o estás pagando más solo por no soltar puntos?',
      whyItFails:
        'Apela a cuotas ya pagadas e irrecuperables para convencerte de seguir pagando un servicio que ya no necesitas.',
      rhetoricalTrick:
        'Activa la aversión a la pérdida presentando la baja como «tirar» el gasto pasado.',
      howToDisarm:
        'Valora únicamente si el servicio del mes siguiente merece la cuota del mes siguiente.',
      counterOptions: [
        {
          id: 'a',
          text: '«Los 14 meses anteriores ya pasaron. El mes que viene cuesta 29 €; si no voy a sacarles ese uso el próximo mes, darme de baja me ahorra dinero.»',
          isCorrect: true,
          feedback: 'Evalúa exclusivamente el coste y beneficio futuros.',
        },
        {
          id: 'b',
          text: '«Habría que prohibir todos los modelos de suscripción.»',
          isCorrect: false,
          flawLabel: 'Reacción desproporcionada',
          feedback: 'No enseña el criterio racional frente al coste hundido.',
        },
        {
          id: 'c',
          text: '«Seguiré tres meses más para no perder esos 2.400 puntos.»',
          isCorrect: false,
          flawLabel: 'Cae en el coste hundido',
          feedback: 'Gasta 87 € adicionales por retener puntos de menor valor.',
        },
        {
          id: 'd',
          text: '«Me doy de baja porque el diseño de la web es feo.»',
          isCorrect: false,
          flawLabel: 'Motivo lateral',
          feedback: 'No identifica la trampa de retención.',
        },
      ],
    },
  },
  {
    id: 'adv-redherring-fees',
    context: 'advertising',
    category: 'red_herring',
    radarFamily: 'diversion_circular',
    difficulty: 'nuanced',
    distractors: ['framing_anchoring', 'strawman', 'appeal_to_authority'],
    en: {
      speakerOrSource: 'Fintech Customer Support Reply',
      excerpt:
        '“Customer: Why is there a hidden 3.5% currency markup on my bill? Brand Reply: Great question! Did you know our app won two design awards and lets you pick custom neon card colors?”',
      subtleHint: 'Did mentioning design awards and neon card colors explain the 3.5% markup?',
      whyItFails:
        'Dodges a concrete billing transparency question by dangling shiny, irrelevant product perks.',
      rhetoricalTrick:
        'Uses upbeat enthusiasm and unrelated accolades to shift attention away from fees.',
      howToDisarm:
        'Skip past the perks and restate the billing question in one short sentence.',
      counterOptions: [
        {
          id: 'a',
          text: '“Card colors aren’t the issue—where in the fee schedule was the 3.5% currency markup disclosed, and can it be waived?”',
          isCorrect: true,
          feedback: 'Ignores the shiny distraction and pins down the exact fee disclosure.',
        },
        {
          id: 'b',
          text: '“Those design awards were obviously bought!”',
          isCorrect: false,
          flawLabel: 'Chases the decoy angrily',
          feedback: 'Starts arguing about design awards while forgetting the 3.5% fee.',
        },
        {
          id: 'c',
          text: '“Oh cool, I didn’t know I could customize my card color!”',
          isCorrect: false,
          flawLabel: 'Completely distracted',
          feedback: 'Falls straight into the smokescreen.',
        },
        {
          id: 'd',
          text: '“All banks steal money from customers.”',
          isCorrect: false,
          flawLabel: 'Unhelpful venting',
          feedback: 'Fails to request the specific contract clause or fee reversal.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Respuesta Comercial de Fintech',
      excerpt:
        '«Cliente: ¿Por qué me habéis cobrado un 3,5 % oculto por cambio de divisa? Marca: ¡Gran pregunta! ¿Sabías que nuestra app ganó dos premios de diseño y te deja elegir tarjeta neón?»',
      subtleHint: 'Hablar de premios de diseño y colores neón, ¿explica el recargo del 3,5 %?',
      whyItFails:
        'Esquiva una pregunta directa sobre comisiones ocultas desviando la conversación hacia ventajas estéticas irrelevantes.',
      rhetoricalTrick:
        'Emplea entusiasmo amable y logros ajenos para hacer olvidar el cobro cuestionado.',
      howToDisarm:
        'Ignora el adorno y repite la pregunta financiera en una línea clara.',
      counterOptions: [
        {
          id: 'a',
          text: '«El color de la tarjeta no viene al caso: ¿en qué apartado de las condiciones figura ese 3,5 % de comisión y cómo se solicita su devolución?»',
          isCorrect: true,
          feedback: 'Sortea el señuelo con calma y exige la cláusula contractual exacta.',
        },
        {
          id: 'b',
          text: '«¡Esos premios de diseño seguro que son comprados!»',
          isCorrect: false,
          flawLabel: 'Discute el señuelo',
          feedback: 'Se enreda con los premios y olvida reclamar su comisión.',
        },
        {
          id: 'c',
          text: '«Anda, pues no sabía que se podía personalizar el color.»',
          isCorrect: false,
          flawLabel: 'Distracción total',
          feedback: 'Muerde por completo la cortina de humo.',
        },
        {
          id: 'd',
          text: '«Todos los bancos sois iguales, solo queréis robar.»',
          isCorrect: false,
          flawLabel: 'Desahogo impreciso',
          feedback: 'No concreta la reclamación ni señala la evasiva.',
        },
      ],
    },
  },

  // --- EVERYDAY CONVERSATIONS (9 scenarios) ---
  {
    id: 'evy-sunkcost-movie',
    context: 'everyday',
    category: 'sunk_cost',
    radarFamily: 'cognitive_bias',
    difficulty: 'core',
    distractors: ['confirmation_bias', 'false_dichotomy', 'circular_reasoning'],
    en: {
      speakerOrSource: 'Weekend Plans with Friends',
      excerpt:
        '“Look, this three-hour play is boring and we’re both exhausted, but we paid $85 a ticket—we have to suffer through the final two hours so we get our money’s worth.”',
      subtleHint: 'If you stay two miserable hours, do you get your $85 back—or lose both $85 and two hours?',
      whyItFails:
        'Assumes enduring two extra unpleasant hours somehow recovers the unrefundable $85 already spent.',
      rhetoricalTrick:
        'Treats extra discomfort as “getting your money’s worth” rather than compounding a bad evening.',
      howToDisarm:
        'Point out gently that the ticket money is spent either way, so the real choice is how to enjoy the next two hours.',
      counterOptions: [
        {
          id: 'a',
          text: '“The $85 is gone whether we stay or leave. The only real choice is whether we spend the next two hours bored here or grabbing dinner somewhere fun.”',
          isCorrect: true,
          feedback: 'Reframes clearly around future utility without shaming anyone for buying the tickets.',
        },
        {
          id: 'b',
          text: '“I told you picking this theater was a stupid idea.”',
          isCorrect: false,
          flawLabel: 'Blame game',
          feedback: 'Assigns fault instead of helping make a good decision from this moment forward.',
        },
        {
          id: 'c',
          text: '“True, leaving early is literally throwing cash in the trash.”',
          isCorrect: false,
          flawLabel: 'Endorses sunk cost',
          feedback: 'Confuses past payment with future return.',
        },
        {
          id: 'd',
          text: '“Live theater is overrated anyway.”',
          isCorrect: false,
          flawLabel: 'Irrelevant generalization',
          feedback: 'Doesn’t clarify the decision bias.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Charla tras el Entreacto',
      excerpt:
        '«Mira, la obra dura tres horas, es aburridísima y estamos agotados, pero pagamos 85 € por entrada; tenemos que aguantar las dos horas que quedan para amortizarla.»',
      subtleHint: 'Quedarse dos horas incómodos, ¿devuelve los 85 € o suma dos horas perdidas al gasto?',
      whyItFails:
        'Cree que sufrir dos horas más recupera un gasto irrecuperable, cuando en realidad solo añade malestar a un dinero ya gastado.',
      rhetoricalTrick:
        'Disfraza la incomodidad adicional de «amortización» financiera.',
      howToDisarm:
        'Recuerda con naturalidad que el dinero ya está gastado en ambos casos y decide qué hacer con las dos horas libres.',
      counterOptions: [
        {
          id: 'a',
          text: '«Los 85 € ya están gastados nos quedemos o nos vayamos. Lo único que decidimos ahora es si pasamos las próximas dos horas aburridos o cenando a gusto.»',
          isCorrect: true,
          feedback: 'Separa limpiamente el gasto pasado del bienestar futuro.',
        },
        {
          id: 'b',
          text: '«Ya te dije que elegir esta obra era una tontería tuya.»',
          isCorrect: false,
          flawLabel: 'Reproche inútil',
          feedback: 'Busca culpables del pasado y estropea más el plan.',
        },
        {
          id: 'c',
          text: '«Tienes razón, marcharse antes es tirar billetes a la basura.»',
          isCorrect: false,
          flawLabel: 'Refuerza el coste hundido',
          feedback: 'Mantiene la confusión entre dinero ya gastado y tiempo futuro.',
        },
        {
          id: 'd',
          text: '«El teatro en general está sobrevalorado.»',
          isCorrect: false,
          flawLabel: 'Generalización fuera de lugar',
          feedback: 'No resuelve la decisión presente.',
        },
      ],
    },
  },
  {
    id: 'evy-confirmation-horoscope',
    context: 'everyday',
    category: 'confirmation_bias',
    radarFamily: 'cognitive_bias',
    difficulty: 'core',
    distractors: ['post_hoc', 'hasty_generalization', 'circular_reasoning'],
    en: {
      speakerOrSource: 'Coffee Break Conversation',
      excerpt:
        '“My productivity coach’s personality quiz is spooky accurate! It said I’m decisive and creative, and yesterday I made three quick decisions—just proves the quiz nails who I am.”',
      subtleHint: 'Do vague flattering traits like “decisive and creative” fit almost everyone when we only recall matching days?',
      whyItFails:
        'Remembers yesterday’s three quick choices while forgetting dozens of indecisive days, and treats broad flattering statements as unique proof.',
      rhetoricalTrick:
        'Selective memory filters out non-matching days while amplifying one vivid hit.',
      howToDisarm:
        'Suggest testing specific falsifiable predictions over a week—including days when things don’t match.',
      counterOptions: [
        {
          id: 'a',
          text: '“It’s easy to spot three quick choices when we look for them. What about days you hesitated—would the opposite profile have sounded plausible too?”',
          isCorrect: true,
          feedback: 'Invites a friendly reality check on selective memory and falsifiability without mocking.',
        },
        {
          id: 'b',
          text: '“Only gullible people believe personality quizzes.”',
          isCorrect: false,
          flawLabel: 'Condescending insult',
          feedback: 'Shames the coworker instead of showing how confirmation memory works.',
        },
        {
          id: 'c',
          text: '“You’re actually terrible at making decisions, remember last month?”',
          isCorrect: false,
          flawLabel: 'Personal attack',
          feedback: 'Turns a casual chat into an awkward personal critique.',
        },
        {
          id: 'd',
          text: '“Wait, send me the quiz link so I can see mine!”',
          isCorrect: false,
          flawLabel: 'Ignores the bias',
          feedback: 'Leaves the flawed reasoning unexamined.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Charla en el Café de la Oficina',
      excerpt:
        '«¡El test de personalidad de este coach acierta muchísimo! Decía que soy resolutivo y creativo, y ayer mismo tomé tres decisiones rápidas; queda demostrado que me describe al cien por cien.»',
      subtleHint: '¿Recuerda también los días en que dudó, o solo está contando el ejemplo de ayer que encaja?',
      whyItFails:
        'Retiene únicamente el episodio reciente que encaja con una etiqueta halagadora y amplia, olvidando las muchas ocasiones en que dudó.',
      rhetoricalTrick:
        'La memoria selectiva convierte una coincidencia vaga en confirmación rotunda.',
      howToDisarm:
        'Propón comprobar también los contraejemplos y si una descripción opuesta parecería igual de válida.',
      counterOptions: [
        {
          id: 'a',
          text: '«Es normal fijarse en las tres decisiones de ayer si ya buscas encajar. ¿Qué pasa con los días que dudaste? ¿La descripción opuesta también podría colar?»',
          isCorrect: true,
          feedback: 'Plantea una prueba amistosa de sesgo de confirmación y falsabilidad sin burla.',
        },
        {
          id: 'b',
          text: '«Solo la gente crédula se traga esos tests.»',
          isCorrect: false,
          flawLabel: 'Insulto condescendiente',
          feedback: 'Cierra la conversación con desprecio en vez de explicar el sesgo.',
        },
        {
          id: 'c',
          text: '«Pero si tú eres superindeciso, acuérdate del mes pasado.»',
          isCorrect: false,
          flawLabel: 'Ataque personal',
          feedback: 'Convierte una charla ligera en un reproche personal.',
        },
        {
          id: 'd',
          text: '«Pásame el enlace para hacerlo yo también.»',
          isCorrect: false,
          flawLabel: 'Pasa por alto el sesgo',
          feedback: 'No cuestiona el mecanismo de confirmación.',
        },
      ],
    },
  },
  {
    id: 'evy-ad-hominem-office',
    context: 'everyday',
    category: 'ad_hominem',
    radarFamily: 'messenger_authority',
    difficulty: 'nuanced',
    distractors: ['red_herring', 'false_equivalence', 'strawman'],
    en: {
      speakerOrSource: 'Engineering Team Retro',
      excerpt:
        '“Before we listen to Sam’s suggestion about simplifying QA sign-offs, remember Sam only joined three months ago and missed two release deadlines at his old company.”',
      subtleHint: 'Does Sam’s tenure or old company record change whether the QA checklist suggestion itself saves time safely?',
      whyItFails:
        'Dismisses a concrete workflow proposal by attacking Sam’s tenure and past job history instead of testing the QA steps on merit.',
      rhetoricalTrick:
        'Poisons the well before the team even hears the actual workflow change.',
      howToDisarm:
        'Separate Sam’s past tenure from the specific steps being proposed and review the checklist directly.',
      counterOptions: [
        {
          id: 'a',
          text: '“Let’s judge the QA proposal on its own steps—which specific risk or check do you think would be missed if we simplify it?”',
          isCorrect: true,
          feedback: 'Redirects the room calmly from personal history to testable workflow criteria.',
        },
        {
          id: 'b',
          text: '“How dare you bring up Sam’s old job—you’re toxic!”',
          isCorrect: false,
          flawLabel: 'Escalates hostility',
          feedback: 'Turns the retro into a personal HR fight instead of reviewing the QA idea.',
        },
        {
          id: 'c',
          text: '“Actually Sam was awesome at his old job, I checked with a friend.”',
          isCorrect: false,
          flawLabel: 'Debates the wrong topic',
          feedback: 'Gets pulled into litigating Sam’s resume rather than evaluating the QA proposal.',
        },
        {
          id: 'd',
          text: '“Yeah, junior teammates should wait a year before suggesting changes.”',
          isCorrect: false,
          flawLabel: 'Validates messenger bias',
          feedback: 'Accepts that idea quality depends on seniority.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Retrospectiva de Equipo',
      excerpt:
        '«Antes de escuchar la idea de Sam para simplificar las pruebas de calidad, recordad que lleva solo tres meses aquí y en su anterior empresa entregó tarde dos versiones.»',
      subtleHint: 'La antigüedad de Sam o su trabajo previo, ¿cambian si los pasos de su propuesta técnica funcionan o no?',
      whyItFails:
        'Envenena el pozo atacando la trayectoria del compañero antes de analizar siquiera los pros y contras de la propuesta.',
      rhetoricalTrick:
        'Descalifica al mensajero por adelantado para evitar debatir la mejora planteada.',
      howToDisarm:
        'Separa la historia laboral de los méritos técnicos concretos de la propuesta.',
      counterOptions: [
        {
          id: 'a',
          text: '«Evaluemos la propuesta por sus pasos concretos: ¿qué riesgo o validación técnica concreta crees que quedaría descubierta si la simplificamos?»',
          isCorrect: true,
          feedback: 'Devuelve la reunión al terreno técnico sin alimentar el conflicto personal.',
        },
        {
          id: 'b',
          text: '«Es repugnante que saques su pasado laboral, eres un tóxico.»',
          isCorrect: false,
          flawLabel: 'Escalada personal',
          feedback: 'Convierte la reunión en un choque de egos y deja la propuesta sin evaluar.',
        },
        {
          id: 'c',
          text: '«Mentira, en su anterior empresa era buenísimo, me lo dijo un conocido.»',
          isCorrect: false,
          flawLabel: 'Discute el currículum',
          feedback: 'Acepta debatir la reputación de Sam en lugar del proceso de calidad.',
        },
        {
          id: 'd',
          text: '«Cierto, los nuevos deberían esperar un año antes de proponer cambios.»',
          isCorrect: false,
          flawLabel: 'Valida el sesgo contra el mensajero',
          feedback: 'Confunde antigüedad con validez técnica.',
        },
      ],
    },
  },
  {
    id: 'evy-posthoc-umbrella',
    context: 'everyday',
    category: 'post_hoc',
    radarFamily: 'false_cause_sample',
    difficulty: 'core',
    distractors: ['confirmation_bias', 'appeal_to_fear', 'slippery_slope'],
    en: {
      speakerOrSource: 'Family Group Chat',
      excerpt:
        '“Every time I wash my car on Saturday morning, it rains by Sunday afternoon. At this point I’m basically controlling the weather—don’t wash yours!”',
      subtleHint: 'Even if meant half-jokingly, what makes Saturday car-washing look linked to Sunday rain?',
      whyItFails:
        'Links two events by sequence (washing followed by rain) while ignoring normal weekly weather frequency and selective recall of sunny weekends.',
      rhetoricalTrick:
        'Mistakes vivid temporal coincidence for a causal mechanism.',
      howToDisarm:
        'Compare how often it rains on Sundays when you didn’t wash the car.',
      counterOptions: [
        {
          id: 'a',
          text: '“It feels uncanny because we remember the ruined shine! Check how many rainy Sundays happened on weeks you didn’t wash it at all.”',
          isCorrect: true,
          feedback: 'Points out the missing baseline comparison warmly without sounding robotic.',
        },
        {
          id: 'b',
          text: '“That’s superstitious nonsense, grow up.”',
          isCorrect: false,
          flawLabel: 'Needlessly harsh',
          feedback: 'Mocks a lighthearted comment instead of offering a clear mental check.',
        },
        {
          id: 'c',
          text: '“Okay, I won’t wash my car until next month just to be safe.”',
          isCorrect: false,
          flawLabel: 'Plays along with false cause',
          feedback: 'Reinforces the causal illusion.',
        },
        {
          id: 'd',
          text: '“Car soap actually evaporates and seeds rain clouds.”',
          isCorrect: false,
          flawLabel: 'Invents fake mechanism',
          feedback: 'Fabricates pseudo-science to justify the coincidence.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Chat Familiar',
      excerpt:
        '«Cada vez que lavo el coche el sábado por la mañana, el domingo llueve sin falta. ¡No laves el tuyo hoy que llamo a la lluvia!»',
      subtleHint: '¿Por qué recordamos tanto los domingos lluviosos tras lavar el coche frente a los sábados sin lluvia?',
      whyItFails:
        'Relaciona causalmente dos sucesos consecutivos ignorando la frecuencia normal de lluvia y los fines de semana soleados olvidados.',
      rhetoricalTrick:
        'Confunde secuencia temporal memorable con relación causa-efecto.',
      howToDisarm:
        'Compara cuántos domingos llovió también en semanas en las que no lavaste el coche.',
      counterOptions: [
        {
          id: 'a',
          text: '«Nos acordamos más porque fastidia el brillo recién dado. Si cuentas los domingos que llovió sin haber lavado el coche, verás que la proporción es la misma.»',
          isCorrect: true,
          feedback: 'Explica la falta de línea base con cercanía y claridad.',
        },
        {
          id: 'b',
          text: '«Eso son supersticiones ridículas, madura.»',
          isCorrect: false,
          flawLabel: 'Tono innecesariamente brusco',
          feedback: 'Reacciona con acritud a un comentario cotidiano.',
        },
        {
          id: 'c',
          text: '«Vale, mejor dejo el mío sucio por si acaso.»',
          isCorrect: false,
          flawLabel: 'Secunda la falsa causa',
          feedback: 'Da validez al vínculo causal ficticio.',
        },
        {
          id: 'd',
          text: '«El jabón de coche evapora humedad y forma nubes.»',
          isCorrect: false,
          flawLabel: 'Inventa falsa explicación',
          feedback: 'Fabrica pseudociencia para sostener la coincidencia.',
        },
      ],
    },
  },
  {
    id: 'evy-slippery-chores',
    context: 'everyday',
    category: 'slippery_slope',
    radarFamily: 'binary_slope',
    difficulty: 'core',
    distractors: ['strawman', 'false_dichotomy', 'appeal_to_fear'],
    en: {
      speakerOrSource: 'Roommate Kitchen Discussion',
      excerpt:
        '“If we let you leave one soaking pan overnight when you work late, next week the sink will be overflowing with moldy dishes and nobody will ever clean anything again.”',
      subtleHint: 'Does a clear 12-hour exception automatically abolish all kitchen rules?',
      whyItFails:
        'Assumes a single bounded exception (“one soaking pan overnight”) inevitably destroys all cleaning habits with zero middle boundary.',
      rhetoricalTrick:
        'Jumps from an occasional courtesy to permanent squalor to shut down flexibility.',
      howToDisarm:
        'Set an explicit, checkable boundary (e.g., cleared before 9 AM) that prevents the slide.',
      counterOptions: [
        {
          id: 'a',
          text: '“A clear rule prevents that: one soaking pan overnight is fine as long as it’s washed by 9 AM. Fair?”',
          isCorrect: true,
          feedback: 'Establishes a firm boundary that answers the clutter worry directly.',
        },
        {
          id: 'b',
          text: '“You’re obsessed with control and impossible to live with.”',
          isCorrect: false,
          flawLabel: 'Personal escalation',
          feedback: 'Turns a simple chore rule into a character attack.',
        },
        {
          id: 'c',
          text: '“Well, you left a mug on the table last Tuesday, so you can’t talk!”',
          isCorrect: false,
          flawLabel: 'Tu quoque deflection',
          feedback: 'Keeps score on old mistakes instead of agreeing on a clean rule.',
        },
        {
          id: 'd',
          text: '“Moldy dishes aren’t even that unhealthy.”',
          isCorrect: false,
          flawLabel: 'Bad defense',
          feedback: 'Defends dirty dishes instead of setting a clear time limit.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Conversación entre Compañeros de Piso',
      excerpt:
        '«Si aceptamos que dejes una sartén en remojo por la noche cuando sales tarde, la semana que viene el fregadero rebosará de platos con moho y nadie volverá a fregar nada.»',
      subtleHint: '¿Una excepción con hora límite fija elimina automáticamente todas las normas de la cocina?',
      whyItFails:
        'Da por hecho que una excepción acotada llevará inevitablemente al abandono total sin posibilidad de poner un límite horario.',
      rhetoricalTrick:
        'Salta de un favor puntual al caos absoluto para bloquear cualquier flexibilidad.',
      howToDisarm:
        'Propón una regla exacta con límite de hora que impida la acumulación.',
      counterOptions: [
        {
          id: 'a',
          text: '«Con un límite claro no se acumula nada: una sartén en remojo solo de noche y fregada antes de las nueve de la mañana. ¿Te parece?»',
          isCorrect: true,
          feedback: 'Desmonta la pendiente fijando una regla concreta y verificable.',
        },
        {
          id: 'b',
          text: '«Eres un maniático del control, no hay quien conviva contigo.»',
          isCorrect: false,
          flawLabel: 'Ataque personal',
          feedback: 'Escala el conflicto sin resolver la norma de limpieza.',
        },
        {
          id: 'c',
          text: '«Pues el martes tú dejaste una taza en la mesa, así que calla.»',
          isCorrect: false,
          flawLabel: 'Evasiva «tú también»',
          feedback: 'Pasa facturas antiguas en vez de pactar una regla práctica.',
        },
        {
          id: 'd',
          text: '«Tampoco pasa nada por tener platos varios días ahí.»',
          isCorrect: false,
          flawLabel: 'Defiende la acumulación',
          feedback: 'Valida la preocupación del compañero en lugar de acotar el margen.',
        },
      ],
    },
  },
  {
    id: 'evy-strawman-friends',
    context: 'everyday',
    category: 'strawman',
    radarFamily: 'distortion',
    difficulty: 'core',
    distractors: ['false_dichotomy', 'ad_hominem', 'red_herring'],
    en: {
      speakerOrSource: 'Family Dinner Table',
      excerpt:
        '“A: I think we should split the holiday rental cost by how many nights each person stays. B: Oh, so you only care about counting pennies with family now?”',
      subtleHint: 'Did person A suggest ending family generosity, or proposing a fair way to split uneven nights?',
      whyItFails:
        'Caricatures a proportional cost-sharing idea (paying per nights stayed) as cold stinginess toward family.',
      rhetoricalTrick:
        'Reframes fairness math into a character flaw (“counting pennies”) to guilt the speaker into backing down.',
      howToDisarm:
        'Affirm family goodwill first, then calmly explain why proportional nights feels fair to everyone.',
      counterOptions: [
        {
          id: 'a',
          text: '“I love hosting everyone—I’m only suggesting splitting by nights so someone staying two days doesn’t subsidize someone staying seven.”',
          isCorrect: true,
          feedback: 'Neutralizes the guilt framing warmly and explains the fairness principle.',
        },
        {
          id: 'b',
          text: '“You just want a free vacation on my dime!”',
          isCorrect: false,
          flawLabel: 'Counter-accusation',
          feedback: 'Matches the emotional jab and ruins dinner.',
        },
        {
          id: 'c',
          text: '“Forget it, I’ll just pay for the whole week myself.”',
          isCorrect: false,
          flawLabel: 'Surrenders to guilt',
          feedback: 'Lets the strawman push them into an unfair outcome.',
        },
        {
          id: 'd',
          text: '“That’s a strawman fallacy, look up the definition.”',
          isCorrect: false,
          flawLabel: 'Robotic lecturing',
          feedback: 'Sounds pedantic at a family table instead of clarifying intent.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Sobremesa Familiar',
      excerpt:
        '«A: Creo que lo justo es repartir el alquiler de la casa según las noches que se quede cada uno. B: Ah, ¿entonces ya solo te importa mirar el céntimo hasta con tu propia familia?»',
      subtleHint: '¿Propuso A acabar con el cariño familiar o simplemente repartir un gasto desigual por noches?',
      whyItFails:
        'Caricaturiza una regla proporcional de reparto como tacañería fría hacia la familia.',
      rhetoricalTrick:
        'Convierte una propuesta logística en un reproche afectivo para forzar la retirada por culpa.',
      howToDisarm:
        'Reafirma el afecto en una frase y explica la equidad práctica entre estancias cortas y largas.',
      counterOptions: [
        {
          id: 'a',
          text: '«Me encanta juntarnos todos; lo digo solo para que quien viene dos noches no pague lo mismo que quien se queda la semana entera.»',
          isCorrect: true,
          feedback: 'Desactiva la culpa con cercanía y aclara la proporción justa.',
        },
        {
          id: 'b',
          text: '«¡Lo que quieres tú es ir de vacaciones gratis a mi costa!»',
          isCorrect: false,
          flawLabel: 'Contraataque personal',
          feedback: 'Responde a la caricatura con otro golpe que arruina la charla.',
        },
        {
          id: 'c',
          text: '«Bueno, da igual, ya lo pago todo yo y en paz.»',
          isCorrect: false,
          flawLabel: 'Cede ante la culpa',
          feedback: 'Deja que la distorsión logre un reparto injusto.',
        },
        {
          id: 'd',
          text: '«Eso es una falacia del hombre de paja, búscalo en internet.»',
          isCorrect: false,
          flawLabel: 'Tono pedante',
          feedback: 'Suena frío en una mesa familiar y no aclara la intención práctica.',
        },
      ],
    },
  },
  {
    id: 'evy-false-equiv-parenting',
    context: 'everyday',
    category: 'false_equivalence',
    radarFamily: 'distortion',
    difficulty: 'nuanced',
    distractors: ['strawman', 'red_herring', 'hasty_generalization'],
    en: {
      speakerOrSource: 'Neighborhood Carpool Chat',
      excerpt:
        '“Sure, I ran a stop sign at the school crosswalk, but last week you parked two inches over the painted line! Nobody’s a perfect driver, so stop bringing it up.”',
      subtleHint: 'Compare the safety risk of running a school-zone stop sign versus touching a painted parking line.',
      whyItFails:
        'Equates a minor parking misalignment with a high-risk moving violation near children to silence legitimate safety feedback.',
      rhetoricalTrick:
        'Uses “nobody’s perfect” to flatten huge differences in risk into moral parity.',
      howToDisarm:
        'Accept feedback on parking cleanly while distinguishing severity of safety risk at a school crosswalk.',
      counterOptions: [
        {
          id: 'a',
          text: '“Fair point on parking neatly—I’ll watch the lines. Still, rolling through a school stop sign puts kids at real risk, so let’s keep crosswalk stops strict.”',
          isCorrect: true,
          feedback: 'Owns the minor flaw gracefully while keeping the critical safety boundary intact.',
        },
        {
          id: 'b',
          text: '“My parking wasn’t over the line at all, you’re making things up!”',
          isCorrect: false,
          flawLabel: 'Gets bogged down in parking',
          feedback: 'Lets the argument derail onto parking lines while the stop sign is forgotten.',
        },
        {
          id: 'c',
          text: '“You shouldn’t have a driver’s license!”',
          isCorrect: false,
          flawLabel: 'Harsh escalation',
          feedback: 'Creates defensiveness instead of securing agreement on school-zone stops.',
        },
        {
          id: 'd',
          text: '“Okay, I guess everyone makes driving mistakes sometimes.”',
          isCorrect: false,
          flawLabel: 'Accepts false equivalence',
          feedback: 'Treats a serious crosswalk hazard as trivial.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Chat de Familias del Colegio',
      excerpt:
        '«Vale, me salté el stop del paso escolar, pero la semana pasada tú pisaste dos dedos la línea del aparcamiento. Nadie conduce perfecto, así que deja el tema.»',
      subtleHint: 'Compara el riesgo de saltarse un stop escolar frente a pisar la raya al aparcar.',
      whyItFails:
        'Iguala una falta leve de estacionamiento con una infracción grave de seguridad vial junto a menores para esquivar la responsabilidad.',
      rhetoricalTrick:
        'Se ampara en «nadie es perfecto» para diluir diferencias enormes de riesgo.',
      howToDisarm:
        'Acepta corregir el aparcamiento y marca con claridad la diferencia de peligro en un cruce escolar.',
      counterOptions: [
        {
          id: 'a',
          text: '«Tomaré nota con la línea al aparcar, tienes razón. Pero saltarse un stop junto al colegio pone en riesgo directo a los niños; ahí no podemos relajarnos.»',
          isCorrect: true,
          feedback: 'Asume la parte menor sin ceder en la diferencia real de gravedad.',
        },
        {
          id: 'b',
          text: '«¡Es mentira que yo pisara la línea, te lo estás inventando!»',
          isCorrect: false,
          flawLabel: 'Discute el detalle menor',
          feedback: 'Se enreda defendiendo su aparcamiento y olvida la seguridad del cruce.',
        },
        {
          id: 'c',
          text: '«Deberían retirarte el carné de por vida.»',
          isCorrect: false,
          flawLabel: 'Ataque desmedido',
          feedback: 'Provoca cierre defensivo en lugar de compromiso vial.',
        },
        {
          id: 'd',
          text: '«Bueno, es verdad que todos cometemos despistes al volante.»',
          isCorrect: false,
          flawLabel: 'Acepta la falsa simetría',
          feedback: 'Minimiza un riesgo serio tratándolo como un error menor.',
        },
      ],
    },
  },
  {
    id: 'evy-anchoring-salary',
    context: 'everyday',
    category: 'framing_anchoring',
    radarFamily: 'emotional_framing',
    difficulty: 'nuanced',
    distractors: ['false_dichotomy', 'sunk_cost', 'appeal_to_authority'],
    en: {
      speakerOrSource: 'Job Offer Negotiation Call',
      excerpt:
        '“Wait, you’re asking for $85k? Our budget originally started around $62k—jumping all the way from $62k to $85k sounds huge! Meet us halfway at $70k.”',
      subtleHint: 'Does an arbitrary internal starting point ($62k) reflect actual market compensation for the role?',
      whyItFails:
        'Anchors the negotiation around a low internal figure ($62k) so $70k feels generous even if comparable market salaries sit around $84k–$90k.',
      rhetoricalTrick:
        'Frames a fair market ask as a “huge jump” relative to a self-chosen low anchor.',
      howToDisarm:
        'Re-anchor politely on external market benchmarks and concrete role scope.',
      counterOptions: [
        {
          id: 'a',
          text: '“I understand initial estimates vary. Looking at current market benchmarks for this stack and scope ($82k–$90k), $85k sits right in the median range.”',
          isCorrect: true,
          feedback: 'Replaces the arbitrary internal anchor with objective market benchmarks cleanly.',
        },
        {
          id: 'b',
          text: '“$62k is insulting—do you think I’m an intern?”',
          isCorrect: false,
          flawLabel: 'Hostile reaction',
          feedback: 'Escalates emotionally instead of persuading with market comparables.',
        },
        {
          id: 'c',
          text: '“Okay, $70k sounds fair since you came up $8k from $62k.”',
          isCorrect: false,
          flawLabel: 'Accepts the low anchor',
          feedback: 'Measures fairness against their arbitrary starting point instead of market value.',
        },
        {
          id: 'd',
          text: '“What does the CEO make compared to $62k?”',
          isCorrect: false,
          flawLabel: 'Irrelevant comparison',
          feedback: 'Derails the negotiation with unrelated executive pay.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Negociación de Oferta Laboral',
      excerpt:
        '«¿Pides 55.000 €? Nuestro presupuesto inicial partía de 38.000 €; subir hasta 55.000 € parece una barbaridad. Quedémonos a mitad de camino en 44.000 €.»',
      subtleHint: 'Un punto de partida interno bajo (38.000 €), ¿refleja realmente la banda de mercado del puesto?',
      whyItFails:
        'Ancla la conversación en una cifra inicial baja para que 44.000 € parezca una gran concesión aunque el mercado pague 52.000–58.000 €.',
      rhetoricalTrick:
        'Presenta una referencia de mercado como un salto desmedido respecto a un ancla elegida por ellos.',
      howToDisarm:
        'Reancla con cortesía la negociación en datos externos de mercado y responsabilidades del puesto.',
      counterOptions: [
        {
          id: 'a',
          text: '«Entiendo los presupuestos previos, pero según las bandas actuales de mercado para este perfil y responsabilidades (52.000–58.000 €), 55.000 € está justo en la mediana.»',
          isCorrect: true,
          feedback: 'Sustituye el ancla interna arbitraria por referencias externas objetivas.',
        },
        {
          id: 'b',
          text: '«Ofrecer 38.000 € es un insulto, ¿me ves cara de becario?»',
          isCorrect: false,
          flawLabel: 'Reacción airada',
          feedback: 'Cierra la negociación con enfado en lugar de sostenerla con datos.',
        },
        {
          id: 'c',
          text: '«Vale, acepto 44.000 € ya que habéis subido 6.000 €.»',
          isCorrect: false,
          flawLabel: 'Cae en el anclaje bajo',
          feedback: 'Mide el acuerdo frente a un ancla artificial y no frente al mercado.',
        },
        {
          id: 'd',
          text: '«¿Y cuánto cobra el director general comparado con eso?»',
          isCorrect: false,
          flawLabel: 'Comparación improcedente',
          feedback: 'Desvía la negociación salarial de tus funciones.',
        },
      ],
    },
  },
  {
    id: 'evy-circular-tradition',
    context: 'everyday',
    category: 'circular_reasoning',
    radarFamily: 'diversion_circular',
    difficulty: 'core',
    distractors: ['sunk_cost', 'appeal_to_authority', 'slippery_slope'],
    en: {
      speakerOrSource: 'Quarterly Team Planning',
      excerpt:
        '“We have to format the Friday status deck in this 18-slide template, because it’s the official mandatory template we’ve always used for Friday updates.”',
      subtleHint: 'Does saying “we must use it because it’s mandatory and we’ve always used it” explain why 18 slides help the team?',
      whyItFails:
        'Justifies a rule solely by pointing back to the rule’s own status (“official mandatory”) without explaining what practical purpose the 18 slides serve.',
      rhetoricalTrick:
        'Uses institutional circularity (“because it’s official”) to shut down efficiency reviews.',
      howToDisarm:
        'Ask what decision the 18 slides inform so useless sections can be trimmed.',
      counterOptions: [
        {
          id: 'a',
          text: '“I get that it’s the standard format—what decisions do readers make from slides 10–18 so we can verify whether a shorter brief works better?”',
          isCorrect: true,
          feedback: 'Respects process alignment while introducing an outcome-based check.',
        },
        {
          id: 'b',
          text: '“Nobody reads anything you send anyway, so I’m deleting the deck.”',
          isCorrect: false,
          flawLabel: 'Passive-aggressive rebellion',
          feedback: 'Skips constructive review and creates unnecessary friction.',
        },
        {
          id: 'c',
          text: '“Old templates are always useless.”',
          isCorrect: false,
          flawLabel: 'Hasty generalization',
          feedback: 'Dismisses standard templates globally instead of auditing utility.',
        },
        {
          id: 'd',
          text: '“True, if it’s official we shouldn’t ever change it.”',
          isCorrect: false,
          flawLabel: 'Accepts circularity',
          feedback: 'Confuses current policy with permanent usefulness.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Reunión Trimestral de Equipo',
      excerpt:
        '«Tenemos que rellenar el informe de los viernes en esta plantilla de 18 diapositivas, porque es la plantilla oficial obligatoria que siempre se ha usado los viernes.»',
      subtleHint: 'Decir «hay que usarla porque es obligatoria y siempre se usó», ¿explica para qué sirven esas 18 diapositivas?',
      whyItFails:
        'Justifica una norma citando la propia existencia de la norma sin explicar qué utilidad real aportan las 18 páginas.',
      rhetoricalTrick:
        'Usa la circularidad burocrática («es oficial») para evitar revisar procesos.',
      howToDisarm:
        'Pregunta qué decisiones concretas se toman con esa información para valorar una versión más breve.',
      counterOptions: [
        {
          id: 'a',
          text: '«Entiendo que sea el formato oficial; ¿qué decisiones concretas se toman con las diapositivas 10 a 18 para ver si un resumen más ágil cumple mejor?»',
          isCorrect: true,
          feedback: 'Respeta el orden y orienta la revisión hacia la utilidad real.',
        },
        {
          id: 'b',
          text: '«Como nadie lee tus informes, voy a dejar de enviarlo.»',
          isCorrect: false,
          flawLabel: 'Desafío improductivo',
          feedback: 'Genera conflicto en vez de mejorar el proceso.',
        },
        {
          id: 'c',
          text: '«Todas las plantillas antiguas son inútiles.»',
          isCorrect: false,
          flawLabel: 'Generalización apresurada',
          feedback: 'Descarta estándares útiles sin evaluar qué partes sirven.',
        },
        {
          id: 'd',
          text: '«Claro, si es oficial no se puede tocar nunca.»',
          isCorrect: false,
          flawLabel: 'Acepta el círculo',
          feedback: 'Confunde norma vigente con eficacia garantizada.',
        },
      ],
    },
  },
  {
    id: 'evy-hasty-gen-city',
    context: 'everyday',
    category: 'hasty_generalization',
    radarFamily: 'false_cause_sample',
    difficulty: 'core',
    distractors: ['confirmation_bias', 'ad_hominem', 'framing_anchoring'],
    en: {
      speakerOrSource: 'Post-Trip Brunch Chat',
      excerpt:
        '“Don’t bother visiting Lisbon—my taxi driver overcharged me from the airport and our first café forgot my toast. People there are clearly rude to tourists.”',
      subtleHint: 'Can two bad service moments represent an entire city of over half a million residents?',
      whyItFails:
        'Condemns an entire city’s population based on two frustrating travel moments on arrival day.',
      rhetoricalTrick:
        'Lets vivid personal annoyance override sample size.',
      howToDisarm:
        'Empathize with the frustrating arrival, then distinguish two bad encounters from an entire city.',
      counterOptions: [
        {
          id: 'a',
          text: '“That’s a frustrating way to land, for sure—though two bad spots near the airport don’t say much about a whole city. How was the rest of the week?”',
          isCorrect: true,
          feedback: 'Validates the annoyance empathetically while gently correcting the overgeneralization.',
        },
        {
          id: 'b',
          text: '“Lisbon is the friendliest city in Europe, you must have been rude first.”',
          isCorrect: false,
          flawLabel: 'Blames friend + opposite absolute',
          feedback: 'Insults the friend and counters with another sweeping generalization.',
        },
        {
          id: 'c',
          text: '“Yeah, I’ll cross Portugal off my travel list forever.”',
          isCorrect: false,
          flawLabel: 'Adopts hasty generalization',
          feedback: 'Treats two anecdotes as a nationwide verdict.',
        },
        {
          id: 'd',
          text: '“Airport taxis everywhere are always scammers.”',
          isCorrect: false,
          flawLabel: 'Trades one generalization for another',
          feedback: 'Adds another sweeping absolute instead of focusing on sample size.',
        },
      ],
    },
    es: {
      speakerOrSource: 'Charla tras un Viaje',
      excerpt:
        '«Ni vayas a Lisboa: el taxi del aeropuerto me cobró de más y en la primera cafetería se olvidaron de mi tostada. Allí tratan fatal a los turistas.»',
      subtleHint: '¿Pueden dos malas experiencias el primer día representar a toda una ciudad?',
      whyItFails:
        'Juzga a toda la población de una capital entera a partir de dos incidencias puntuales al llegar.',
      rhetoricalTrick:
        'Deja que la molestia vívida de dos momentos eclipse el tamaño mínimo de la muestra.',
      howToDisarm:
        'Empatiza con el mal rato de la llegada y separa dos casos concretos del conjunto de la ciudad.',
      counterOptions: [
        {
          id: 'a',
          text: '«Qué rabia empezar el viaje así, normal que fastidie. Aun así, dos malos ratos al llegar no representan a toda la ciudad; ¿qué tal fue el resto de días?»',
          isCorrect: true,
          feedback: 'Acompaña el enfado con empatía y acota la muestra sin sermonear.',
        },
        {
          id: 'b',
          text: '«Lisboa es la ciudad más amable de Europa, seguro que tú fuiste borde primero.»',
          isCorrect: false,
          flawLabel: 'Culpa al amigo + absoluto contrario',
          feedback: 'Ataca al interlocutor y responde con otra generalización total.',
        },
        {
          id: 'c',
          text: '«Pues borro Portugal de mi lista para siempre.»',
          isCorrect: false,
          flawLabel: 'Asume la generalización',
          feedback: 'Toma dos anécdotas como veredicto definitivo de un país.',
        },
        {
          id: 'd',
          text: '«Todos los taxistas de todos los aeropuertos son estafadores siempre.»',
          isCorrect: false,
          flawLabel: 'Sustituye por otra generalización',
          feedback: 'Amplía el sesgo en vez de corregirlo.',
        },
      ],
    },
  },
];
