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

// ─── Screens ──────────────────────────────────────────────────────────────────
function showPlayer() {
  el.screenEntry.classList.remove('active');
  el.screenPlayer.classList.add('active');
  loadVideo(state.mode, state.videoIndex);
  updateTabs();
}

// ─── Video ────────────────────────────────────────────────────────────────────
function loadVideo(mode, index) {
  const list = VIDEOS[mode];
  const src  = list[index % list.length];

  el.videoPlayer.src = src;
  el.videoPlayer.load();
  el.videoPlayer.play().catch(() => {});

  updateProgressBar(mode, index);

  if (mode === 'humans') {
    state.videosWatched++;
    saveState();
    if (state.videosWatched >= 3 && !state.modalShown) {
      setTimeout(showUnlockModal, 1200);
    }
  }
}

function nextVideo() {
  const list = VIDEOS[state.mode];
  state.videoIndex = (state.videoIndex + 1) % list.length;
  loadVideo(state.mode, state.videoIndex);
}

function prevVideo() {
  const list = VIDEOS[state.mode];
  state.videoIndex = (state.videoIndex - 1 + list.length) % list.length;
  loadVideo(state.mode, state.videoIndex);
}

// ─── Progress bar ─────────────────────────────────────────────────────────────
function updateProgressBar(mode, index) {
  const total = VIDEOS[mode].length;
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

// ─── Events ───────────────────────────────────────────────────────────────────
function bindEvents() {
  el.btnGo.addEventListener('click', () => {
    state.language = el.langSelect.value;
    saveState();
    applyTranslations(state.language);
    showPlayer();
    initCookieConsent();
  });

  el.btnPrev.addEventListener('click', prevVideo);
  el.btnNext.addEventListener('click', nextVideo);
  el.videoPlayer.addEventListener('ended', nextVideo);

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

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
