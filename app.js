'use strict';

// ─── Config ───────────────────────────────────────────────────────────────────
const ADSENSE_PUBLISHER_ID = 'ca-pub-XXXXXXXXXXXXXXXXX'; // replace with your ID
const ADSENSE_BANNER_SLOT  = 'XXXXXXXXXX';               // replace with banner slot
const ADSENSE_REWARD_SLOT  = 'XXXXXXXXXX';               // replace with rewarded slot

const LANGUAGES = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '한국어' },
  { code: 'ru', label: 'Русский' },
  { code: 'ar', label: 'العربية' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'pl', label: 'Polski' },
  { code: 'sv', label: 'Svenska' },
  { code: 'tr', label: 'Türkçe' },
];

const UI_STRINGS = {
  en: {
    subtitle: 'pop your ears · relax · just breathe',
    btnGo: 'Go!',
    whyTitle: 'Why should I click it?',
    whyText: 'Yawning is one of the most effective ways to equalize pressure in your ears during flights, altitude changes, or even after diving. When you yawn, the Eustachian tube — the small canal connecting your middle ear to your throat — opens briefly, allowing air to flow in and equalize the pressure difference that causes that plugged, uncomfortable feeling.\n\nThe problem is that yawning on command is hard. That\'s where mirror neurons come in. Your brain contains specialized cells that fire both when you perform an action and when you observe someone else performing it. Yawning is one of the most contagious behaviors known — seeing it, hearing it, or even reading about it lowers the threshold for your own yawn reflex.\n\nYawn. uses this mechanism deliberately. Watch the videos, let your brain do the rest.',
    tabHumans: 'Humans', tabAnimals: ' Animals',
    modalTitle: 'Unlock more yawns',
    modalSubtitle: 'Watch a short ad to unlock Animals — permanently on this device.',
    unlockAnimalsLabel: 'Animals', unlockAnimalsDesc: 'Cross-species empathy boost',
    adUnlockingAnimals: 'Unlocking Animals…',
    adHint: 'Unlocking Animals…', btnContinue: 'Continue ›',
    cookieText: 'We use cookies and ads to keep Yawn. free.',
    cookieAccept: 'Accept', cookieDecline: 'Decline',
    privacyPolicy: 'Privacy Policy',
  },
  pt: {
    subtitle: 'desentupa os ouvidos · relaxa · respira',
    btnGo: 'Vai!',
    whyTitle: 'Por que devo clicar?',
    whyText: 'Bocejar é uma das formas mais eficazes de equalizar a pressão nos ouvidos durante voos, mudanças de altitude ou mesmo após mergulhos. Quando você boceja, a trompa de Eustáquio — o pequeno canal que conecta o ouvido médio à garganta — se abre brevemente, permitindo que o ar circule e equalize a diferença de pressão que causa aquela sensação incômoda de ouvido tampado.\n\nO problema é que bocejar por vontade própria é difícil. É aí que entram os neurônios-espelho. Seu cérebro contém células especializadas que disparam tanto quando você realiza uma ação quanto quando observa outra pessoa realizando. Bocejar é um dos comportamentos mais contagiosos conhecidos — ver, ouvir ou até ler sobre bocejo reduz o limiar do seu reflexo de bocejo.\n\nO Yawn. usa esse mecanismo de forma deliberada. Assista aos vídeos, deixe seu cérebro fazer o resto.',
    tabHumans: 'Humanos', tabAnimals: ' Animais',
    modalTitle: 'Desbloqueia mais bocejos',
    modalSubtitle: 'Assiste um anúncio curto para desbloquear Animais — permanentemente neste dispositivo.',
    unlockAnimalsLabel: 'Animais', unlockAnimalsDesc: 'Empatia entre espécies',
    adUnlockingAnimals: 'Desbloqueando Animais…',
    adHint: 'Desbloqueando Animais…', btnContinue: 'Continuar ›',
    cookieText: 'Usamos cookies e anúncios para manter o Yawn. gratuito.',
    cookieAccept: 'Aceitar', cookieDecline: 'Recusar',
    privacyPolicy: 'Política de Privacidade',
  },
  es: {
    subtitle: 'destapa tus oídos · relájate · respira',
    btnGo: '¡Vamos!',
    whyTitle: '¿Por qué debería hacer clic?',
    whyText: 'Bostezar es una de las formas más eficaces de igualar la presión en los oídos durante vuelos, cambios de altitud o incluso después de bucear. Cuando bostezas, la trompa de Eustaquio — el pequeño canal que conecta el oído medio con la garganta — se abre brevemente, permitiendo que el aire fluya y equilibre la diferencia de presión que causa esa sensación incómoda de oídos tapados.\n\nEl problema es que bostezar a voluntad es difícil. Ahí es donde entran las neuronas espejo. Tu cerebro contiene células especializadas que se activan tanto cuando realizas una acción como cuando observas a otra persona realizándola. Bostezar es uno de los comportamientos más contagiosos conocidos — verlo, escucharlo o incluso leer sobre ello reduce el umbral de tu propio reflejo de bostezo.\n\nYawn. usa este mecanismo de forma deliberada. Mira los vídeos, deja que tu cerebro haga el resto.',
    tabHumans: 'Humanos', tabAnimals: ' Animales',
    modalTitle: 'Desbloquea más bostezos',
    modalSubtitle: 'Mira un anuncio corto para desbloquear Animales — permanentemente en este dispositivo.',
    unlockAnimalsLabel: 'Animales', unlockAnimalsDesc: 'Empatía entre especies',
    adUnlockingAnimals: 'Desbloqueando Animales…',
    adHint: 'Desbloqueando Animales…', btnContinue: 'Continuar ›',
    cookieText: 'Usamos cookies y anuncios para mantener Yawn. gratuito.',
    cookieAccept: 'Aceptar', cookieDecline: 'Rechazar',
    privacyPolicy: 'Política de Privacidad',
  },
  fr: {
    subtitle: 'débouchez vos oreilles · détendez-vous · respirez',
    btnGo: 'Allez !',
    whyTitle: 'Pourquoi devrais-je cliquer ?',
    whyText: 'Bâiller est l\'un des moyens les plus efficaces d\'équilibrer la pression dans vos oreilles lors de vols, de changements d\'altitude ou même après une plongée. Lorsque vous bâillez, la trompe d\'Eustache — le petit canal reliant votre oreille moyenne à votre gorge — s\'ouvre brièvement, permettant à l\'air de circuler et d\'égaliser la différence de pression qui provoque cette sensation désagréable d\'oreilles bouchées.\n\nLe problème, c\'est que bâiller sur commande est difficile. C\'est là qu\'interviennent les neurones miroirs. Votre cerveau contient des cellules spécialisées qui s\'activent aussi bien lorsque vous effectuez une action que lorsque vous observez quelqu\'un d\'autre l\'effectuer. Le bâillement est l\'un des comportements les plus contagieux connus — le voir, l\'entendre ou même en lire abaisse le seuil de votre propre réflexe de bâillement.\n\nYawn. utilise ce mécanisme délibérément. Regardez les vidéos, laissez votre cerveau faire le reste.',
    tabHumans: 'Humains', tabAnimals: ' Animaux',
    modalTitle: 'Débloquez plus de bâillements',
    modalSubtitle: 'Regardez une courte pub pour débloquer les Animaux — définitivement sur cet appareil.',
    unlockAnimalsLabel: 'Animaux', unlockAnimalsDesc: 'Empathie inter-espèces',
    adUnlockingAnimals: 'Déblocage Animaux…',
    adHint: 'Déblocage Animaux…', btnContinue: 'Continuer ›',
    cookieText: 'Nous utilisons des cookies et des pubs pour garder Yawn. gratuit.',
    cookieAccept: 'Accepter', cookieDecline: 'Refuser',
    privacyPolicy: 'Politique de confidentialité',
  },
  de: {
    subtitle: 'Ohren freimachen · entspannen · atmen',
    btnGo: 'Los!',
    whyTitle: 'Warum sollte ich klicken?',
    whyText: 'Gähnen ist eine der effektivsten Methoden, um den Druck in den Ohren beim Fliegen, bei Höhenänderungen oder sogar nach dem Tauchen auszugleichen. Wenn du gähnst, öffnet sich die Eustachische Röhre — der kleine Kanal, der dein Mittelohr mit deinem Rachen verbindet — kurz, sodass Luft einströmen und den Druckunterschied ausgleichen kann, der dieses unangenehme Völlegefühl verursacht.\n\nDas Problem ist, dass Gähnen auf Kommando schwierig ist. Hier kommen die Spiegelneuronen ins Spiel. Dein Gehirn enthält spezialisierte Zellen, die sowohl feuern, wenn du eine Handlung ausführst, als auch wenn du jemand anderen dabei beobachtest. Gähnen ist eines der ansteckendsten bekannten Verhaltensweisen — es zu sehen, zu hören oder sogar darüber zu lesen, senkt die Schwelle deines eigenen Gähnreflexes.\n\nYawn. nutzt diesen Mechanismus bewusst. Schau dir die Videos an, lass dein Gehirn den Rest erledigen.',
    tabHumans: 'Menschen', tabAnimals: ' Tiere',
    modalTitle: 'Mehr Gähnen freischalten',
    modalSubtitle: 'Sieh dir eine kurze Werbung an — dauerhaft auf diesem Gerät freigeschaltet.',
    unlockAnimalsLabel: 'Tiere', unlockAnimalsDesc: 'Artenübergreifende Empathie',
    adUnlockingAnimals: 'Tiere werden freigeschaltet…',
    adHint: 'Tiere werden freigeschaltet…', btnContinue: 'Weiter ›',
    cookieText: 'Wir nutzen Cookies und Werbung, um Yawn. kostenlos zu halten.',
    cookieAccept: 'Akzeptieren', cookieDecline: 'Ablehnen',
    privacyPolicy: 'Datenschutzrichtlinie',
  },
  it: {
    subtitle: 'libera le orecchie · rilassati · respira',
    btnGo: 'Vai!',
    whyTitle: 'Perché dovrei cliccare?',
    whyText: 'Sbadigliare è uno dei modi più efficaci per equalizzare la pressione nelle orecchie durante i voli, i cambiamenti di altitudine o anche dopo le immersioni. Quando sbadigli, la tuba di Eustachio — il piccolo canale che collega l\'orecchio medio alla gola — si apre brevemente, permettendo all\'aria di fluire ed equalizzare la differenza di pressione che causa quella fastidiosa sensazione di orecchie tappate.\n\nIl problema è che sbadigliare su comando è difficile. È qui che entrano in gioco i neuroni specchio. Il tuo cervello contiene cellule specializzate che si attivano sia quando esegui un\'azione sia quando osservi qualcun altro eseguirla. Sbadigliare è uno dei comportamenti più contagiosi conosciuti — vederlo, sentirlo o anche solo leggerlo abbassa la soglia del tuo riflesso di sbadiglio.\n\nYawn. usa questo meccanismo deliberatamente. Guarda i video, lascia che il tuo cervello faccia il resto.',
    tabHumans: 'Umani', tabAnimals: ' Animali',
    modalTitle: 'Sblocca più sbadigli',
    modalSubtitle: 'Guarda un breve annuncio per sbloccare gli Animali — definitivamente su questo dispositivo.',
    unlockAnimalsLabel: 'Animali', unlockAnimalsDesc: 'Empatia interspecifica',
    adUnlockingAnimals: 'Sblocco Animali…',
    adHint: 'Sblocco Animali…', btnContinue: 'Continua ›',
    cookieText: 'Usiamo cookie e pubblicità per mantenere Yawn. gratuito.',
    cookieAccept: 'Accetta', cookieDecline: 'Rifiuta',
    privacyPolicy: 'Informativa sulla privacy',
  },
  ja: {
    subtitle: '耳抜き · リラックス · 深呼吸',
    btnGo: 'スタート',
    whyTitle: 'なぜクリックすべきなの？',
    whyText: 'あくびは、飛行機の搭乗中や高度変化、またはダイビング後に耳の圧力を調整する最も効果的な方法の一つです。あくびをすると、耳管（中耳と喉をつなぐ小さな管）が一瞬開き、空気が流れ込んで、あの不快な耳詰まり感を引き起こす気圧差を解消します。\n\n問題は、意志の力であくびをするのが難しいことです。そこで登場するのがミラーニューロンです。あなたの脳には、自分が行動するときだけでなく、他の人が同じ行動をするのを観察するときにも発火する特殊な細胞があります。あくびは最も伝染しやすい行動の一つで、見ること、聞くこと、または読むだけでもあくびの閾値を下げます。\n\nYawn.はこのメカニズムを意図的に活用しています。動画を見て、後は脳に任せましょう。',
    tabHumans: '人間', tabAnimals: ' 動物',
    modalTitle: 'もっとあくびを解放する',
    modalSubtitle: '短い広告を見て動物コンテンツを解放 — このデバイスで永久に。',
    unlockAnimalsLabel: '動物', unlockAnimalsDesc: '異種間の共感',
    adUnlockingAnimals: '動物を解放中…',
    adHint: '動物を解放中…', btnContinue: '続ける ›',
    cookieText: 'Yawn.を無料に保つためにCookieと広告を使用しています。',
    cookieAccept: '同意する', cookieDecline: '拒否する',
    privacyPolicy: 'プライバシーポリシー',
  },
  zh: {
    subtitle: '疏通耳道 · 放松 · 深呼吸',
    btnGo: '开始',
    whyTitle: '为什么要点击？',
    whyText: '打哈欠是在飞行、海拔变化或潜水后平衡耳内气压最有效的方法之一。当你打哈欠时，咽鼓管——连接中耳和咽喉的小管道——会短暂打开，让空气流通，平衡造成耳朵堵塞不适感的气压差。\n\n问题在于，想打哈欠就打并不容易。这时候镜像神经元就派上用场了。你的大脑中有一种特殊细胞，无论是你自己做某个动作，还是观察别人做同样的动作，它都会激活。打哈欠是已知最具传染性的行为之一——看到它、听到它，甚至只是读到它，都会降低你自己打哈欠的阈值。\n\nYawn. 就是有意识地利用这一机制。观看视频，让你的大脑来完成剩下的事情。',
    tabHumans: '人类', tabAnimals: ' 动物',
    modalTitle: '解锁更多哈欠',
    modalSubtitle: '观看一段短广告以解锁动物内容 — 在此设备上永久有效。',
    unlockAnimalsLabel: '动物', unlockAnimalsDesc: '跨物种共情',
    adUnlockingAnimals: '正在解锁动物…',
    adHint: '正在解锁动物…', btnContinue: '继续 ›',
    cookieText: '我们使用Cookie和广告来保持Yawn.免费。',
    cookieAccept: '接受', cookieDecline: '拒绝',
    privacyPolicy: '隐私政策',
  },
  ko: {
    subtitle: '귀 뚫기 · 휴식 · 심호흡',
    btnGo: '시작!',
    whyTitle: '왜 클릭해야 하나요?',
    whyText: '하품은 비행 중, 고도 변화 시, 또는 다이빙 후 귀의 압력을 조절하는 가장 효과적인 방법 중 하나입니다. 하품을 하면 유스타키오관 — 중이와 목구멍을 연결하는 작은 통로 — 이 잠깐 열리면서 공기가 흘러 들어가 그 불편한 귀 막힘 현상을 일으키는 기압차를 해소합니다.\n\n문제는 의지로 하품하기가 어렵다는 점입니다. 바로 여기서 거울 뉴런이 등장합니다. 뇌에는 내가 어떤 행동을 할 때뿐만 아니라 다른 사람이 같은 행동을 하는 것을 관찰할 때도 활성화되는 특수 세포가 있습니다. 하품은 알려진 행동 중 가장 전염성이 강한 것 중 하나로, 보거나 듣거나 심지어 읽는 것만으로도 하품 반사의 역치를 낮춥니다.\n\nYawn.은 이 메커니즘을 의도적으로 활용합니다. 영상을 보고, 나머지는 뇌에 맡기세요.',
    tabHumans: '사람', tabAnimals: ' 동물',
    modalTitle: '하품 더 해제하기',
    modalSubtitle: '짧은 광고를 보고 동물 콘텐츠를 해제하세요 — 이 기기에서 영구적으로.',
    unlockAnimalsLabel: '동물', unlockAnimalsDesc: '종간 공감',
    adUnlockingAnimals: '동물 해제 중…',
    adHint: '동물 해제 중…', btnContinue: '계속 ›',
    cookieText: 'Yawn.을 무료로 유지하기 위해 쿠키와 광고를 사용합니다.',
    cookieAccept: '수락', cookieDecline: '거부',
    privacyPolicy: '개인정보 처리방침',
  },
  ru: {
    subtitle: 'продуй уши · расслабься · дыши',
    btnGo: 'Вперёд!',
    whyTitle: 'Зачем мне нажимать?',
    whyText: 'Зевота — один из самых эффективных способов выровнять давление в ушах во время полётов, перепадов высоты или после погружений. Когда вы зеваете, евстахиева труба — небольшой канал, соединяющий среднее ухо с горлом — ненадолго открывается, позволяя воздуху проникнуть и устранить перепад давления, вызывающий то самое неприятное ощущение заложенности.\n\nПроблема в том, что зевнуть по команде непросто. Здесь на помощь приходят зеркальные нейроны. В вашем мозге есть специализированные клетки, которые активируются как тогда, когда вы сами совершаете действие, так и когда наблюдаете за тем, как его совершает другой. Зевота — одно из самых заразительных поведений: увидеть её, услышать или даже прочитать о ней достаточно, чтобы снизить порог вашего собственного рефлекса зевоты.\n\nYawn. использует этот механизм намеренно. Смотрите видео — остальное сделает ваш мозг.',
    tabHumans: 'Люди', tabAnimals: ' Животные',
    modalTitle: 'Разблокировать больше зевков',
    modalSubtitle: 'Посмотрите короткую рекламу для разблокировки Животных — навсегда на этом устройстве.',
    unlockAnimalsLabel: 'Животные', unlockAnimalsDesc: 'Межвидовая эмпатия',
    adUnlockingAnimals: 'Разблокировка Животных…',
    adHint: 'Разблокировка Животных…', btnContinue: 'Продолжить ›',
    cookieText: 'Мы используем куки и рекламу, чтобы Yawn. оставался бесплатным.',
    cookieAccept: 'Принять', cookieDecline: 'Отклонить',
    privacyPolicy: 'Политика конфиденциальности',
  },
  ar: {
    subtitle: 'افتح أذنيك · استرخِ · تنفّس',
    btnGo: 'يلّا!',
    whyTitle: 'لماذا يجب أن أضغط؟',
    whyText: 'التثاؤب هو أحد أكثر الطرق فعالية لتعادل الضغط في أذنيك خلال الرحلات الجوية أو عند تغيّر الارتفاع أو حتى بعد الغوص. عندما تتثاءب، تنفتح قناة استاكيوس — القناة الصغيرة التي تربط أذنك الوسطى بحلقك — لفترة وجيزة، مما يسمح للهواء بالتدفق وتعادل فارق الضغط الذي يسبب ذلك الإحساس المزعج بانسداد الأذن.\n\nالمشكلة أن التثاؤب الإرادي أمر صعب. هنا يأتي دور الخلايا العصبية المرآتية. يحتوي دماغك على خلايا متخصصة تنشط سواء حين تؤدي فعلاً بنفسك أو حين تشاهد شخصاً آخر يؤديه. التثاؤب من أكثر السلوكيات المعدية المعروفة — رؤيته أو سماعه أو حتى القراءة عنه تخفض عتبة منعكس التثاؤب لديك.\n\nيستخدم Yawn. هذه الآلية بشكل مقصود. شاهد مقاطع الفيديو، ودع دماغك يكمل الباقي.',
    tabHumans: 'بشر', tabAnimals: ' حيوانات',
    modalTitle: 'فتح المزيد من التثاؤب',
    modalSubtitle: 'شاهد إعلاناً قصيراً لفتح محتوى الحيوانات — بشكل دائم على هذا الجهاز.',
    unlockAnimalsLabel: 'حيوانات', unlockAnimalsDesc: 'تعاطف بين الأنواع',
    adUnlockingAnimals: 'جارٍ فتح الحيوانات…',
    adHint: 'جارٍ فتح الحيوانات…', btnContinue: 'متابعة ›',
    cookieText: 'نستخدم ملفات تعريف الارتباط والإعلانات للحفاظ على Yawn. مجانياً.',
    cookieAccept: 'قبول', cookieDecline: 'رفض',
    privacyPolicy: 'سياسة الخصوصية',
  },
  nl: {
    subtitle: 'oren vrijmaken · ontspannen · ademen',
    btnGo: 'Start!',
    whyTitle: 'Waarom zou ik klikken?',
    whyText: 'Geeuwen is een van de meest effectieve manieren om de druk in je oren te egaliseren tijdens vluchten, hoogteveranderingen of zelfs na het duiken. Wanneer je geeuwt, opent de buis van Eustachius — het kleine kanaal dat je middenoor met je keel verbindt — zich kort, waardoor lucht kan instromen en het drukverschil kan worden opgeheven dat dat vervelende gevoel van verstopte oren veroorzaakt.\n\nHet probleem is dat op commando geeuwen moeilijk is. Dat is waar spiegelneuronen van pas komen. Je hersenen bevatten gespecialiseerde cellen die zowel vuren wanneer je een handeling uitvoert als wanneer je iemand anders die handeling ziet uitvoeren. Geeuwen is een van de meest besmettelijke bekende gedragingen — het zien, horen of zelfs lezen erover verlaagt de drempel van je eigen geeuWreflex.\n\nYawn. gebruikt dit mechanisme bewust. Bekijk de video\'s en laat je hersenen de rest doen.',
    tabHumans: 'Mensen', tabAnimals: ' Dieren',
    modalTitle: 'Meer geeuwen ontgrendelen',
    modalSubtitle: 'Bekijk een korte advertentie om Dieren te ontgrendelen — permanent op dit apparaat.',
    unlockAnimalsLabel: 'Dieren', unlockAnimalsDesc: 'Soortoverschrijdende empathie',
    adUnlockingAnimals: 'Dieren ontgrendelen…',
    adHint: 'Dieren ontgrendelen…', btnContinue: 'Doorgaan ›',
    cookieText: 'Wij gebruiken cookies en advertenties om Yawn. gratis te houden.',
    cookieAccept: 'Accepteren', cookieDecline: 'Weigeren',
    privacyPolicy: 'Privacybeleid',
  },
  pl: {
    subtitle: 'odblokuj uszy · zrelaksuj się · oddychaj',
    btnGo: 'Dalej!',
    whyTitle: 'Dlaczego mam kliknąć?',
    whyText: 'Ziewanie jest jednym z najskuteczniejszych sposobów wyrównania ciśnienia w uszach podczas lotów, zmian wysokości lub nawet po nurkowaniu. Gdy ziewasz, trąbka Eustachiusza — mały kanał łączący ucho środkowe z gardłem — chwilowo się otwiera, umożliwiając przepływ powietrza i wyrównanie różnicy ciśnień, która powoduje to nieprzyjemne uczucie zatkanych uszu.\n\nProblem polega na tym, że ziewanie na komendę jest trudne. Tutaj wkraczają neurony lustrzane. Twój mózg zawiera wyspecjalizowane komórki, które aktywują się zarówno gdy sam wykonujesz jakąś czynność, jak i gdy obserwujesz kogoś innego ją wykonującego. Ziewanie jest jednym z najbardziej zaraźliwych znanych zachowań — zobaczenie go, usłyszenie lub nawet przeczytanie o nim obniża próg twojego odruchu ziewania.\n\nYawn. celowo wykorzystuje ten mechanizm. Oglądaj filmy i pozwól mózgowi zrobić resztę.',
    tabHumans: 'Ludzie', tabAnimals: ' Zwierzęta',
    modalTitle: 'Odblokuj więcej ziewania',
    modalSubtitle: 'Obejrzyj krótką reklamę, aby odblokować Zwierzęta — na stałe na tym urządzeniu.',
    unlockAnimalsLabel: 'Zwierzęta', unlockAnimalsDesc: 'Empatia między gatunkami',
    adUnlockingAnimals: 'Odblokowywanie Zwierząt…',
    adHint: 'Odblokowywanie Zwierząt…', btnContinue: 'Kontynuuj ›',
    cookieText: 'Używamy plików cookie i reklam, aby Yawn. pozostało bezpłatne.',
    cookieAccept: 'Akceptuj', cookieDecline: 'Odrzuć',
    privacyPolicy: 'Polityka prywatności',
  },
  sv: {
    subtitle: 'rensa öronen · slappna av · andas',
    btnGo: 'Kör!',
    whyTitle: 'Varför ska jag klicka?',
    whyText: 'Att gäspa är ett av de mest effektiva sätten att utjämna trycket i öronen under flygresor, höjdförändringar eller till och med efter dykning. När du gäspar öppnas örontrumpeten — den lilla kanalen som förbinder ditt mellanöra med halsen — kortvarigt, vilket låter luft flöda in och utjämna tryckskillnaden som orsakar den obehagliga känslan av igentäppta öron.\n\nProblemet är att gäspa på kommando är svårt. Det är där spegelneuroner kommer in. Din hjärna innehåller specialiserade celler som aktiveras både när du utför en handling och när du observerar någon annan utföra den. Gäspningar är ett av de mest smittsamma beteenden som känns till — att se, höra eller till och med läsa om det sänker tröskeln för din egen gäspreflex.\n\nYawn. använder denna mekanism avsiktligt. Titta på videorna och låt din hjärna göra resten.',
    tabHumans: 'Människor', tabAnimals: ' Djur',
    modalTitle: 'Lås upp fler gäspningar',
    modalSubtitle: 'Titta på en kort annons för att låsa upp Djur — permanent på den här enheten.',
    unlockAnimalsLabel: 'Djur', unlockAnimalsDesc: 'Artöverskridande empati',
    adUnlockingAnimals: 'Låser upp Djur…',
    adHint: 'Låser upp Djur…', btnContinue: 'Fortsätt ›',
    cookieText: 'Vi använder cookies och annonser för att hålla Yawn. gratis.',
    cookieAccept: 'Acceptera', cookieDecline: 'Avböj',
    privacyPolicy: 'Integritetspolicy',
  },
  tr: {
    subtitle: 'kulaklarını aç · rahatla · nefes al',
    btnGo: 'Başla!',
    whyTitle: 'Neden tıklamalıyım?',
    whyText: 'Esneme, uçuşlar, irtifa değişimleri veya dalışların ardından kulak basıncını dengelemenin en etkili yollarından biridir. Esnerken, orta kulağı boğaza bağlayan küçük kanal olan Östaki borusu kısa süreliğine açılır; bu sayede hava akışı sağlanır ve o rahatsız edici tıkalı kulak hissine neden olan basınç farkı giderilir.\n\nSorun şu ki, isteğe bağlı olarak esnemek zordur. İşte tam bu noktada ayna nöronlar devreye girer. Beyniniz, hem bir eylemi kendiniz gerçekleştirdiğinizde hem de bir başkasının aynı eylemi yaptığını gözlemlediğinizde aktive olan özel hücreler içerir. Esneme, bilinen en bulaşıcı davranışlardan biridir — görmek, duymak veya hatta okumak bile kendi esneme refleksinizin eşiğini düşürür.\n\nYawn. bu mekanizmayı bilinçli olarak kullanır. Videoları izleyin, gerisini beyninize bırakın.',
    tabHumans: 'İnsanlar', tabAnimals: ' Hayvanlar',
    modalTitle: 'Daha fazla esnetmeyi aç',
    modalSubtitle: 'Hayvanlar içeriğini açmak için kısa bir reklam izle — bu cihazda kalıcı olarak.',
    unlockAnimalsLabel: 'Hayvanlar', unlockAnimalsDesc: 'Türler arası empati',
    adUnlockingAnimals: 'Hayvanlar kilidi açılıyor…',
    adHint: 'Hayvanlar kilidi açılıyor…', btnContinue: 'Devam ›',
    cookieText: 'Yawn.\'ı ücretsiz tutmak için çerezler ve reklamlar kullanıyoruz.',
    cookieAccept: 'Kabul Et', cookieDecline: 'Reddet',
    privacyPolicy: 'Gizlilik Politikası',
  },
};

// ─── Videos — update filenames here if you rename them differently ────────────
const VIDEOS = {
  humans: [
    'videos/humans/0511_cropped.mp4',
    'videos/humans/0512_cropped.mp4',
    'videos/humans/0513_cropped.mp4',
    'videos/humans/0514_cropped.mp4',
    'videos/humans/0515_cropped.mp4',
    'videos/humans/0516_cropped.mp4',
    'videos/humans/0517_cropped.mp4',
    'videos/humans/0518_cropped.mp4',
  ],
  animals: [
    'videos/animals/0519_cropped.mp4',
    'videos/animals/0520_cropped.mp4',
    'videos/animals/0521_cropped.mp4',
    'videos/animals/0522_cropped.mp4',
    'videos/animals/0523_cropped.mp4',
    'videos/animals/788-139604894_medium.mp4',
  ],
};

const RING_CIRCUMFERENCE = 2 * Math.PI * 34; // ~213.6

// ─── Shuffle ──────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Shuffle both playlists once on startup
const PLAYLIST = {
  humans:  shuffle(VIDEOS.humans),
  animals: shuffle(VIDEOS.animals),
};

// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  language:      'en',
  mode:          'humans',
  videoIndex:    0,
  unlocked:      { animals: false },
  videosWatched: 0,
  modalShown:    false,
  cookieConsent: null,
};

// ─── DOM refs ─────────────────────────────────────────────────────────────────
const el = {
  screenEntry:      document.getElementById('screen-entry'),
  screenPlayer:     document.getElementById('screen-player'),
  langSelect:       document.getElementById('lang-select'),
  btnGo:            document.getElementById('btn-go'),
  videoPlayer:      document.getElementById('video-player'),
  progressBar:      document.getElementById('progress-bar'),
  btnPrev:          document.getElementById('btn-prev'),
  btnNext:          document.getElementById('btn-next'),
  tabHumans:        document.getElementById('tab-humans'),
  tabAnimals:       document.getElementById('tab-animals'),
  modalUnlock:      document.getElementById('modal-unlock'),
  modalClose:       document.getElementById('modal-close'),
  btnUnlockAnimals: document.getElementById('btn-unlock-animals'),
  adOverlay:        document.getElementById('ad-overlay'),
  adModeLabel:      document.getElementById('ad-mode-label'),
  adFallback:       document.getElementById('ad-fallback'),
  countdownNumber:  document.getElementById('countdown-number'),
  ringFill:         document.getElementById('ring-fill'),
  btnContinue:      document.getElementById('btn-continue'),
  cookieBanner:     document.getElementById('cookie-banner'),
  btnCookieAccept:  document.getElementById('btn-cookie-accept'),
  btnCookieDecline: document.getElementById('btn-cookie-decline'),
  tapOverlay:       document.getElementById('tap-overlay'),
  a2hsBanner:       document.getElementById('a2hs-banner'),
  btnA2hsInstall:   document.getElementById('btn-a2hs-install'),
  btnA2hsDismiss:   document.getElementById('btn-a2hs-dismiss'),
  shareToast:       document.getElementById('share-toast'),
};

// ─── Translations ─────────────────────────────────────────────────────────────
function applyTranslations(lang) {
  const t = UI_STRINGS[lang] || UI_STRINGS['en'];

  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = t[node.dataset.i18n] ?? node.textContent;
  });

  const cookieTextEl = document.getElementById('cookie-text');
  if (cookieTextEl) {
    cookieTextEl.innerHTML = `${t.cookieText} <a href="privacy-policy.html" target="_blank">${t.privacyPolicy}</a>`;
  }

  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const whyText = document.getElementById('why-text');
  if (whyText && t.whyText) {
    whyText.innerHTML = t.whyText.split('\n\n').map(p => `<span>${p}</span>`).join('');
  }
}

// ─── Persistence ──────────────────────────────────────────────────────────────
function saveState() {
  localStorage.setItem('yawn_language',      state.language);
  localStorage.setItem('yawn_unlocked',      JSON.stringify(state.unlocked));
  localStorage.setItem('yawn_videosWatched', state.videosWatched);
  localStorage.setItem('yawn_modalShown',    state.modalShown);
  localStorage.setItem('yawn_cookieConsent', state.cookieConsent || '');
}

function loadState() {
  const lang = localStorage.getItem('yawn_language');
  if (lang) state.language = lang;

  const unlocked = localStorage.getItem('yawn_unlocked');
  if (unlocked) {
    const parsed = JSON.parse(unlocked);
    state.unlocked = { animals: parsed.animals || false };
  }

  const watched = localStorage.getItem('yawn_videosWatched');
  if (watched) state.videosWatched = parseInt(watched, 10) || 0;

  const modalShown = localStorage.getItem('yawn_modalShown');
  if (modalShown === 'true') state.modalShown = true;

  const consent = localStorage.getItem('yawn_cookieConsent');
  if (consent === 'accepted' || consent === 'declined') state.cookieConsent = consent;
}

// ─── Language ─────────────────────────────────────────────────────────────────
function detectLanguage() {
  const nav = (navigator.language || 'en').split('-')[0].toLowerCase();
  return LANGUAGES.find(l => l.code === nav) ? nav : 'en';
}

function populateLangSelect(selectedCode) {
  el.langSelect.innerHTML = '';
  LANGUAGES.forEach(({ code, label }) => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = label;
    if (code === selectedCode) opt.selected = true;
    el.langSelect.appendChild(opt);
  });
}

// ─── Preload ──────────────────────────────────────────────────────────────────
const preloadVideo = document.createElement('video');
preloadVideo.muted   = true;
preloadVideo.preload = 'auto';

function preloadNext(mode, currentIndex) {
  const list      = PLAYLIST[mode];
  const nextIndex = (currentIndex + 1) % list.length;
  preloadVideo.src = list[nextIndex];
  preloadVideo.load();
}

// ─── Screens ──────────────────────────────────────────────────────────────────
function showPlayer() {
  const dot = document.getElementById('title-dot');
  dot.classList.add('dot-zooming');

  setTimeout(() => {
    el.screenEntry.classList.remove('active');
    el.screenPlayer.classList.add('active');
    el.screenPlayer.classList.add('player-entering');
    loadVideo(state.mode, state.videoIndex);
    updateTabs();
    setTimeout(() => el.screenPlayer.classList.remove('player-entering'), 400);
  }, 480);
}

// ─── Video ────────────────────────────────────────────────────────────────────
function loadVideo(mode, index) {
  const list = PLAYLIST[mode];
  const src  = list[index % list.length];

  el.videoPlayer.style.opacity = '0';

  setTimeout(() => {
    el.videoPlayer.src = src;
    el.videoPlayer.currentTime = 0;
    el.videoPlayer.muted = true;
    el.videoPlayer.load();
    el.tapOverlay.classList.add('hidden');
    el.videoPlayer.play().catch(() => {
      el.tapOverlay.classList.remove('hidden');
    });
    el.videoPlayer.style.opacity = '1';
    preloadNext(mode, index);
    updateProgressBar(mode, index);
  }, 150);
}

function nextVideo() {
  const list = PLAYLIST[state.mode];
  state.videoIndex++;
  if (state.videoIndex >= list.length) {
    PLAYLIST[state.mode] = shuffle(VIDEOS[state.mode]);
    state.videoIndex = 0;
  }
  loadVideo(state.mode, state.videoIndex);
}

function prevVideo() {
  const list = PLAYLIST[state.mode];
  state.videoIndex = (state.videoIndex - 1 + list.length) % list.length;
  loadVideo(state.mode, state.videoIndex);
}

// ─── Progress bar ─────────────────────────────────────────────────────────────
function updateProgressBar(mode, index) {
  const total = PLAYLIST[mode].length;
  const pct   = ((index + 1) / total) * 100;
  el.progressBar.style.width = pct + '%';
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────
function updateTabs() {
  const tabs = { humans: el.tabHumans, animals: el.tabAnimals };

  Object.entries(tabs).forEach(([mode, tab]) => {
    tab.classList.toggle('active', mode === state.mode);
    const lockEl = tab.querySelector('.lock-icon');
    if (lockEl) {
      const isUnlocked = state.unlocked[mode];
      lockEl.textContent = isUnlocked ? '' : '🔒';
      lockEl.style.display = isUnlocked ? 'none' : '';
    }
  });
}

function switchMode(mode) {
  if (mode === 'humans') {
    state.mode       = 'humans';
    state.videoIndex = 0;
    loadVideo('humans', 0);
    updateTabs();
    return;
  }

  if (!state.unlocked[mode]) {
    showUnlockModal();
    return;
  }

  state.mode       = mode;
  state.videoIndex = 0;
  loadVideo(mode, 0);
  updateTabs();
}

// ─── Unlock modal ─────────────────────────────────────────────────────────────
function showUnlockModal() {
  state.modalShown = true;
  saveState();
  el.modalUnlock.classList.remove('hidden');
}

function hideUnlockModal() {
  el.modalUnlock.classList.add('hidden');
}

// ─── Rewarded ad / countdown ──────────────────────────────────────────────────
let countdownInterval = null;

function requestUnlock() {
  hideUnlockModal();

  const t = UI_STRINGS[state.language] || UI_STRINGS['en'];
  el.adModeLabel.textContent = t.adUnlockingAnimals;

  el.adOverlay.classList.remove('hidden');
  el.btnContinue.classList.add('hidden');

  const adLoaded = tryRewardedAd();
  if (!adLoaded) startCountdown();
}

function tryRewardedAd() {
  try {
    if (!window.adsbygoogle) return false;
    if (ADSENSE_REWARD_SLOT === 'XXXXXXXXXX') return false;
    return false; // fallback to countdown until real slot is configured
  } catch (e) {
    return false;
  }
}

function startCountdown() {
  let seconds = 5;
  el.countdownNumber.textContent = seconds;
  el.ringFill.style.strokeDashoffset = '0';
  el.adFallback.style.display = 'flex';
  el.adFallback.style.flexDirection = 'column';
  el.adFallback.style.alignItems = 'center';
  el.adFallback.style.gap = '20px';

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    seconds--;
    el.countdownNumber.textContent = seconds;

    const offset = RING_CIRCUMFERENCE * ((5 - seconds) / 5);
    el.ringFill.style.strokeDashoffset = offset;

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      el.btnContinue.classList.remove('hidden');
      el.btnContinue.onclick = finishUnlock;
    }
  }, 1000);
}

function finishUnlock() {
  clearInterval(countdownInterval);
  el.adOverlay.classList.add('hidden');
  state.unlocked.animals = true;
  saveState();
  state.mode       = 'animals';
  state.videoIndex = 0;
  loadVideo('animals', 0);
  updateTabs();
}

// ─── Cookie consent ───────────────────────────────────────────────────────────
function initCookieConsent() {
  if (state.cookieConsent !== null) {
    if (state.cookieConsent === 'accepted') loadBannerAd();
    return;
  }
  el.cookieBanner.classList.remove('hidden');
}

function loadBannerAd() {
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {}
}

// ─── Touch / swipe ────────────────────────────────────────────────────────────
let touchStartX = 0;
let touchStartY = 0;

function initSwipe() {
  el.videoPlayer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  el.videoPlayer.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) < 40) return;
    if (Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0) nextVideo();
    else         prevVideo();
  }, { passive: true });
}

// ─── A2HS ─────────────────────────────────────────────────────────────────────
let deferredPrompt = null;

function initA2HS() {
  if (localStorage.getItem('yawn_a2hs_dismissed')) return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Show nudge after user has watched first video
  });
}

function showA2HSBanner() {
  if (!deferredPrompt) return;
  if (localStorage.getItem('yawn_a2hs_dismissed')) return;
  el.a2hsBanner.classList.remove('hidden');
}

// ─── Ambient Audio ────────────────────────────────────────────────────────────
// Drop your audio file at audio/ambient.mp3 — looping yawn/breath sounds
const ambientAudio = new Audio();
ambientAudio.src    = 'audio/ambient.mp3';
ambientAudio.loop   = true;
ambientAudio.volume = 0.35;

let ambientEnabled = false;

function toggleAmbient() {
  ambientEnabled = !ambientEnabled;
  const btn = document.getElementById('btn-audio');

  if (ambientEnabled) {
    ambientAudio.play().catch(() => {
      // Autoplay blocked — will retry on next user interaction
      ambientEnabled = false;
      btn.textContent = '🎵';
    });
    btn.textContent = '🔈';
    fadeAudio(ambientAudio, 0, 0.35, 800);
  } else {
    fadeAudio(ambientAudio, ambientAudio.volume, 0, 600, () => ambientAudio.pause());
    btn.textContent = '🎵';
  }

  localStorage.setItem('yawn_ambient', ambientEnabled);
}

function fadeAudio(audio, from, to, duration, onComplete) {
  const steps    = 30;
  const interval = duration / steps;
  const delta    = (to - from) / steps;
  let   current  = from;
  audio.volume   = from;

  const timer = setInterval(() => {
    current += delta;
    audio.volume = Math.min(1, Math.max(0, current));
    if ((delta > 0 && current >= to) || (delta < 0 && current <= to)) {
      clearInterval(timer);
      audio.volume = to;
      if (onComplete) onComplete();
    }
  }, interval);
}

function initAmbientAudio() {
  const saved = localStorage.getItem('yawn_ambient');
  // Default off — user must opt in
  ambientEnabled = false;
  document.getElementById('btn-audio').textContent = '🎵';
}

// ─── Events ───────────────────────────────────────────────────────────────────
function bindEvents() {
  el.btnGo.addEventListener('click', () => {
    state.language = el.langSelect.value;
    saveState();
    applyTranslations(state.language);
    showPlayer();
    initCookieConsent();
  });

  document.getElementById('why-toggle').addEventListener('click', () => {
    const body = document.getElementById('why-body');
    const toggle = document.getElementById('why-toggle');
    body.classList.toggle('hidden');
    toggle.classList.toggle('why-open');
  });

  el.btnPrev.addEventListener('click', prevVideo);
  el.btnNext.addEventListener('click', nextVideo);
  el.videoPlayer.addEventListener('ended', () => {
    if (state.mode === 'humans') {
      state.videosWatched++;
      saveState();
      // Unlock modal temporarily disabled
      // if (state.videosWatched === 1) showA2HSBanner();
      // if (state.videosWatched >= 2 && !state.modalShown) {
      //   setTimeout(showUnlockModal, 800);
      //   return;
      // }
    }
    nextVideo();
  });
  el.videoPlayer.addEventListener('error', () => setTimeout(nextVideo, 300));
  el.tapOverlay.addEventListener('click', () => {
    el.videoPlayer.play().catch(() => {});
    el.tapOverlay.classList.add('hidden');
  });

  document.getElementById('btn-audio').addEventListener('click', toggleAmbient);

  el.btnA2hsInstall.addEventListener('click', () => {
    el.a2hsBanner.classList.add('hidden');
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
    }
  });

  el.btnA2hsDismiss.addEventListener('click', () => {
    el.a2hsBanner.classList.add('hidden');
    localStorage.setItem('yawn_a2hs_dismissed', '1');
  });

  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', () => switchMode(tab.dataset.mode));
  });

  el.modalClose.addEventListener('click', hideUnlockModal);
  el.modalUnlock.querySelector('.modal-backdrop').addEventListener('click', hideUnlockModal);
  el.btnUnlockAnimals.addEventListener('click', requestUnlock);

  el.btnCookieAccept.addEventListener('click', () => {
    state.cookieConsent = 'accepted';
    saveState();
    el.cookieBanner.classList.add('hidden');
    loadBannerAd();
  });

  el.btnCookieDecline.addEventListener('click', () => {
    state.cookieConsent = 'declined';
    saveState();
    el.cookieBanner.classList.add('hidden');
  });

  initSwipe();

  document.addEventListener('keydown', (e) => {
    if (el.screenPlayer.classList.contains('active')) {
      if (e.key === 'ArrowLeft')  prevVideo();
      if (e.key === 'ArrowRight') nextVideo();
    }
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  loadState();

  if (!localStorage.getItem('yawn_language')) {
    state.language = detectLanguage();
  }

  populateLangSelect(state.language);
  applyTranslations(state.language);
  bindEvents();
  initA2HS();
  initAmbientAudio();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
