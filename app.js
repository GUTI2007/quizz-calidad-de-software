/**
 * ==========================================================================
 * QUIZ INTERACTIVO: CALIDAD DE SOFTWARE E ISO/IEC 33000 (CHAZIN FOOD)
 * Competencia: Negociación · Instructor: Jairo Augusto Arboleda Londoño
 * Centro de Servicios y Gestión Empresarial - SENA
 * ==========================================================================
 */

// CLAVE MAESTRA DE ADMINISTRADOR PARA REINICIAR PUNTAJES (Personalizable)
const ADMIN_MASTER_KEY = 'sena2026';

// 1. BANCO DE PREGUNTAS (Fiel al documento CALIDAD-DE-SOFTWARE.pdf, opciones balanceadas)
const QUIZ_QUESTIONS = [
  {
    id: 1,
    slide: "Diapositiva 2: Contexto Histórico",
    question: "¿Qué significan las siglas del antecedente normativo conocido como SPICE?",
    options: [
      { text: "Software Process Improvement and Capability Determination", correct: true },
      { text: "System Programming Integration and Code Evaluation", correct: false },
      { text: "Standard Process Inspection and Certification Enterprise", correct: false },
      { text: "Software Project Infrastructure and Compliance Engine", correct: false }
    ],
    explanation: "¡Correcto! SPICE significa 'Software Process Improvement and Capability Determination' y correspondió a la norma ISO/IEC 15504, antecedente directo de la actual familia ISO/IEC 33000."
  },
  {
    id: 2,
    slide: "Diapositiva 2 y 3: Marco Normativo Actual",
    question: "¿Cuál es la familia de normas internacionales que representa el marco actual para la evaluación de procesos de software?",
    options: [
      { text: "Familia ISO/IEC 33000", correct: true },
      { text: "Familia ISO/IEC 9001", correct: false },
      { text: "Familia ISO/IEC 27001", correct: false },
      { text: "Familia IEEE 802", correct: false }
    ],
    explanation: "¡Exacto! La Familia ISO/IEC 33000 constituye el marco internacional moderno para la evaluación de procesos, determinar su capacidad y promover la mejora continua."
  },
  {
    id: 3,
    slide: "Diapositiva 3: Marco Normativo Actual",
    question: "Dentro de la familia ISO/IEC 33000, ¿qué norma define específicamente los conceptos y el vocabulario?",
    options: [
      { text: "ISO/IEC 33001", correct: true },
      { text: "ISO/IEC 33020", correct: false },
      { text: "ISO/IEC 33004", correct: false },
      { text: "ISO/IEC TS 33061", correct: false }
    ],
    explanation: "¡Muy bien! Diapositiva 3: ISO/IEC 33001 establece los conceptos generales y el vocabulario técnico para todo el marco de evaluación de procesos."
  },
  {
    id: 4,
    slide: "Diapositiva 3: Marco Normativo Actual",
    question: "¿Qué norma de la familia ISO/IEC 33000 establece el marco formal de medición de procesos?",
    options: [
      { text: "ISO/IEC 33020", correct: true },
      { text: "ISO/IEC 33001", correct: false },
      { text: "ISO/IEC 33002", correct: false },
      { text: "ISO/IEC 33004", correct: false }
    ],
    explanation: "¡Excelente! Diapositiva 3: La norma ISO/IEC 33020 establece el marco de medición formal para cuantificar la capacidad de los procesos evaluados."
  },
  {
    id: 5,
    slide: "Diapositiva 4: Evaluación de Procesos",
    question: "Según la presentación, ¿cuál es el principio clave al evaluar la calidad de los procesos?",
    options: [
      { text: "No solo si el software funciona: se analiza cómo se desarrolla, documenta y gestiona", correct: true },
      { text: "Evaluar únicamente que el código compile sin advertencias en consola", correct: false },
      { text: "Comprobar exclusivamente el costo financiero total del proyecto de software", correct: false },
      { text: "Verificar únicamente el número de usuarios registrados en la base de datos", correct: false }
    ],
    explanation: "¡Así es! Diapositiva 4: No solo se evalúa si el software funciona, sino cómo se desarrolla y gestiona en sus áreas de Ingeniería, Soporte y Gestión."
  },
  {
    id: 6,
    slide: "Diapositiva 5: Modelo de Capacidad",
    question: "¿Cuál es la escala numérica de referencia del modelo de capacidad de procesos (ISO/IEC 15504 hacia 33000)?",
    options: [
      { text: "Escala de niveles del 0 al 5", correct: true },
      { text: "Escala porcentual del 1 al 10", correct: false },
      { text: "Escala de letras de la A a la F", correct: false },
      { text: "Escala binaria de 0 a 1", correct: false }
    ],
    explanation: "¡Correcto! Diapositiva 5: El enfoque de capacidad de procesos se fundamenta en una escala de referencia de 0 a 5 niveles para comprender la madurez del proceso."
  },
  {
    id: 7,
    slide: "Diapositiva 6: Proyecto Chazin Food",
    question: "¿A cuál proyecto formativo desarrollado por los aprendices se le aplicó el enfoque de evaluación de calidad ISO/IEC 33000?",
    options: [
      { text: "Chazin Food", correct: true },
      { text: "Fast Delivery App", correct: false },
      { text: "SENA Gourmet Cloud", correct: false },
      { text: "EcoResto Manager", correct: false }
    ],
    explanation: "¡Genial! Diapositiva 6: El proyecto Chazin Food es el caso real aplicado donde se analizan evidencias en Ingeniería, Soporte y Gestión."
  },
  {
    id: 8,
    slide: "Diapositiva 7: Autoevaluación Académica",
    question: "En la autoevaluación de Chazin Food, ¿cuáles áreas fueron identificadas con situación 'Consolidada'?",
    options: [
      { text: "Análisis, Diseño, Desarrollo (web/móvil) y Soporte", correct: true },
      { text: "Pruebas de estrés masivo y automatización total CI/CD", correct: false },
      { text: "Métricas formales cuantitativas y certificación internacional", correct: false },
      { text: "Gestión financiera y mercadeo digital omnicanal", correct: false }
    ],
    explanation: "¡Excelente! Diapositiva 7: Análisis (requisitos/historias), Diseño (arquitectura/prototipos), Desarrollo (web/móvil funcional) y Soporte (Git/GitHub/documentación) figuran como consolidados."
  },
  {
    id: 9,
    slide: "Diapositiva 7 y 9: Oportunidades y Plan de Mejora",
    question: "¿Cuáles son las áreas clave que la autoevaluación de Chazin Food identificó como 'Por fortalecer'?",
    options: [
      { text: "Formalización de pruebas, métricas del proceso y mejora continua", correct: true },
      { text: "Diseño gráfico de logotipos y compra de servidores físicos", correct: false },
      { text: "Reescribir todo el código fuente en lenguaje ensamblador", correct: false },
      { text: "Eliminar el control de versiones con Git para acelerar entregas", correct: false }
    ],
    explanation: "¡Muy bien! Diapositivas 7 y 9: Las oportunidades de fortalecimiento y la ruta de mejora apuntan a formalizar pruebas, crear KPIs de procesos y ciclos de mejora continua."
  },
  {
    id: 10,
    slide: "Diapositiva 8: Evidencias del Proceso",
    question: "¿Cuáles son las principales tecnologías del desarrollo funcional de Chazin Food evidenciadas en el documento?",
    options: [
      { text: "React + JavaScript, Flutter + Dart, MySQL y Git/GitHub", correct: true },
      { text: "Ruby on Rails, Cobol, Oracle DB y SVN", correct: false },
      { text: "PHP nativo, Visual Basic 6, Access y FTP", correct: false },
      { text: "C++ monolítico, Pascal, SQLite y Dropbox", correct: false }
    ],
    explanation: "¡Fantástico! Diapositiva 8: Las evidencias técnicas de Chazin Food demuestran un stack moderno: sistema web en React + JS, app móvil en Flutter + Dart, base de datos en MySQL y control de versiones en Git/GitHub."
  }
];

// 2. SISTEMA DE AUDIO SINTETIZADO (Web Audio API - Sin archivos externos)
class AudioManager {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1, delay = 0) {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime + delay;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playCorrect() {
    this.init();
    // Acorde ascendente victorioso
    this.playTone(523.25, 'triangle', 0.12, 0.15, 0.00); // C5
    this.playTone(659.25, 'triangle', 0.12, 0.15, 0.08); // E5
    this.playTone(783.99, 'triangle', 0.15, 0.18, 0.16); // G5
    this.playTone(1046.50, 'sine', 0.25, 0.20, 0.24);    // C6
  }

  playWrong() {
    this.init();
    // Tono grave descendente
    this.playTone(280, 'sawtooth', 0.18, 0.12, 0.00);
    this.playTone(200, 'sawtooth', 0.28, 0.12, 0.12);
  }

  playFanfare() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
    const delays = [0, 0.12, 0.24, 0.36, 0.52, 0.68];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.22, 0.18, delays[idx]);
    });
  }

  playClick() {
    this.init();
    this.playTone(800, 'sine', 0.04, 0.05, 0);
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }
}

// Detectar si estamos en protocolo local de archivo (doble clic en index.html)
const isFileProtocol = typeof window !== 'undefined' && window.location.protocol === 'file:';

// 3. SISTEMA DE RANKING Y PERSISTENCIA (Sincronización en la Nube y LocalStorage)
class RankingManager {
  constructor() {
    this.storageKey = 'sena_calidad_software_scores_v1';
    this.apiUrl = '/api/scores';
    // Si estamos en file:// no intentamos conexiones remotas para evitar errores de CORS
    this.cloudAvailable = isFileProtocol ? false : null;
    
    // Lista inicial de referencia con el equipo SENA para competencia sana (Podio + Puestos 4+)
    this.initialRanking = [
      { name: "Jairo Arboleda (Instructor)", avatar: "🛡️", score: 1500, correct: 10, time: 28, date: "2026-09-20" },
      { name: "Samuel Gutiérrez", avatar: "📊", score: 1420, correct: 10, time: 35, date: "2026-09-21" },
      { name: "Henry Caballero", avatar: "⚡", score: 1360, correct: 10, time: 42, date: "2026-09-21" },
      { name: "Juan José Gallego", avatar: "📋", score: 1290, correct: 9, time: 46, date: "2026-09-21" },
      { name: "Alexis Gómez", avatar: "🚀", score: 1220, correct: 9, time: 51, date: "2026-09-21" },
      { name: "Emanuel Henao", avatar: "🏆", score: 1150, correct: 8, time: 55, date: "2026-09-21" },
      { name: "Mariana Restrepo", avatar: "🛡️", score: 1080, correct: 8, time: 59, date: "2026-09-21" },
      { name: "Mateo Valencia", avatar: "⚡", score: 990, correct: 7, time: 64, date: "2026-09-21" }
    ];

    this.cache = this.getLocalScores();
  }

  getLocalScores() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data === null) {
        // Primera vez que se abre la aplicación: precargar con el equipo SENA
        this.saveLocalScores(this.initialRanking);
        return [...this.initialRanking];
      }
      return JSON.parse(data);
    } catch (e) {
      return [...this.initialRanking];
    }
  }

  saveLocalScores(scores) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(scores));
    } catch (e) {}
  }

  getScores() {
    return this.cache;
  }

  // Cargar puntajes desde la nube (Gist / API Vercel)
  async fetchCloudScores() {
    // Si estamos en file:// o ya se detectó que la API no existe en este servidor local, no llamar
    if (isFileProtocol || this.cloudAvailable === false) {
      return this.cache;
    }

    try {
      const res = await fetch(this.apiUrl, { cache: 'no-store' });
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          this.cloudAvailable = true;
          const scores = await res.json();
          if (Array.isArray(scores) && scores.length > 0) {
            this.cache = scores;
            this.saveLocalScores(scores);
            return scores;
          }
        } else {
          this.cloudAvailable = false;
        }
      } else {
        // Entorno local o estático donde /api/scores no está desplegado (evita spam de errores)
        this.cloudAvailable = false;
      }
    } catch (e) {
      this.cloudAvailable = false;
    }
    return this.cache;
  }

  // Guardar puntaje en la nube y localmente
  async addEntry(player) {
    // 1. Actualizar inmediatamente la caché local
    this.cache.push(player);
    this.cache.sort((a, b) => b.score - a.score || a.time - b.time);
    this.cache = this.cache.slice(0, 50);
    this.saveLocalScores(this.cache);

    // 2. Enviar a la nube solo si la API está confirmada en el entorno (ej: Vercel)
    if (!isFileProtocol && this.cloudAvailable !== false) {
      try {
        const res = await fetch(this.apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(player)
        });
        if (res.ok) {
          const contentType = res.headers.get('content-type') || '';
          if (contentType.includes('application/json')) {
            const updated = await res.json();
            if (Array.isArray(updated) && updated.length > 0) {
              this.cache = updated;
              this.saveLocalScores(updated);
              return updated;
            }
          }
        }
      } catch (e) {
        this.cloudAvailable = false;
      }
    }
    return this.cache;
  }

  // Limpiar puntajes de la nube y de la caché (Exclusivo con Clave de Administrador)
  async clearScores(adminKey) {
    this.cache = [];
    this.saveLocalScores([]);
    if (!isFileProtocol && this.cloudAvailable !== false) {
      try {
        await fetch(this.apiUrl, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-key': adminKey,
            'Authorization': `Bearer ${adminKey}`
          },
          body: JSON.stringify({ adminKey })
        });
      } catch (e) {
        this.cloudAvailable = false;
      }
    }
  }
}

// 4. MOTOR PRINCIPAL DE LA APLICACIÓN
class QuizApp {
  constructor() {
    this.audio = new AudioManager();
    this.ranking = new RankingManager();

    // Estado de la partida
    this.playerName = "";
    this.playerAvatar = "🌲";
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.correctCount = 0;
    this.userAnswers = [];
    this.questionStartTime = 0;
    this.totalTimerInterval = null;
    this.totalSeconds = 0;
    this.answeredCurrent = false;

    // Estado del retador (si llegó por link compartido)
    this.challenger = null;

    // Elementos del DOM
    this.dom = {
      // Vistas
      welcomeView: document.getElementById('welcome-view'),
      quizView: document.getElementById('quiz-view'),
      resultsView: document.getElementById('results-view'),

      // Reto
      challengeBanner: document.getElementById('challenge-banner'),
      challengeAvatar: document.getElementById('challenge-avatar'),
      challengeTitle: document.getElementById('challenge-title'),
      challengeSub: document.getElementById('challenge-sub'),
      duelCard: document.getElementById('duel-card'),
      duelUserAvatar: document.getElementById('duel-user-avatar'),
      duelUserName: document.getElementById('duel-user-name'),
      duelUserScore: document.getElementById('duel-user-score'),
      duelRivalAvatar: document.getElementById('duel-rival-avatar'),
      duelRivalName: document.getElementById('duel-rival-name'),
      duelRivalScore: document.getElementById('duel-rival-score'),
      duelVerdict: document.getElementById('duel-verdict'),

      // Formulario de inicio
      playerNameInput: document.getElementById('player-name'),
      avatarOptions: document.querySelectorAll('.avatar-opt'),
      startBtn: document.getElementById('start-quiz-btn'),

      // Barra superior del quiz
      quizStep: document.getElementById('quiz-step'),
      quizStreakBadge: document.getElementById('quiz-streak'),
      quizStreakCount: document.getElementById('streak-count'),
      quizCurrentScore: document.getElementById('current-score'),
      progressBar: document.getElementById('progress-bar-fill'),

      // Pregunta y opciones
      slideTag: document.getElementById('slide-tag'),
      questionText: document.getElementById('question-text'),
      optionsContainer: document.getElementById('options-container'),
      explanationCard: document.getElementById('explanation-card'),
      explanationHeader: document.getElementById('explanation-header'),
      explanationIcon: document.getElementById('explanation-icon'),
      explanationTitle: document.getElementById('explanation-title'),
      explanationText: document.getElementById('explanation-text'),
      nextBtn: document.getElementById('next-btn'),

      // Resultados
      finalTrophy: document.getElementById('final-trophy'),
      finalTitle: document.getElementById('final-title'),
      finalSubtitle: document.getElementById('final-subtitle'),
      finalBadge: document.getElementById('final-badge'),
      metricScore: document.getElementById('metric-score'),
      metricAccuracy: document.getElementById('metric-accuracy'),
      metricTime: document.getElementById('metric-time'),

      // Compartir
      whatsappBtn: document.getElementById('whatsapp-share-btn'),
      copyLinkBtn: document.getElementById('copy-challenge-btn'),
      playAgainBtn: document.getElementById('play-again-btn'),
      reviewAnswersBtn: document.getElementById('review-answers-btn'),

      // Ranking
      podiumWrapper: document.getElementById('podium-wrapper'),
      leaderboardRestHeader: document.getElementById('leaderboard-rest-header'),
      restBadgeCount: document.getElementById('rest-badge-count'),
      leaderboardList: document.getElementById('leaderboard-list'),

      // Modal de revisión
      reviewModal: document.getElementById('review-modal'),
      closeModalBtn: document.getElementById('close-modal-btn'),
      reviewModalBody: document.getElementById('review-modal-body'),

      // Modal de Seguridad / Administrador (Exclusivo para reiniciar puntos)
      adminModal: document.getElementById('admin-modal'),
      closeAdminModalBtn: document.getElementById('close-admin-modal-btn'),
      cancelAdminBtn: document.getElementById('cancel-admin-btn'),
      confirmResetBtn: document.getElementById('confirm-reset-btn'),
      adminPassInput: document.getElementById('admin-password-input'),
      toggleAdminPassBtn: document.getElementById('toggle-admin-pass-btn'),
      adminErrorMsg: document.getElementById('admin-error-msg'),
      resetLeaderboardBtn: document.getElementById('reset-leaderboard-btn'),

      // Toast & Audio Toggle
      soundToggleBtn: document.getElementById('sound-toggle-btn'),
      soundIcon: document.getElementById('sound-icon'),
      toast: document.getElementById('toast'),
      toastMessage: document.getElementById('toast-message')
    };

    this.init();
  }

  async init() {
    this.checkUrlChallenge();
    this.bindEvents();
    this.renderLeaderboard();

    // Solo consultar la nube si estamos bajo protocolo web (http: o https:) y no en archivo local file://
    if (!isFileProtocol) {
      await this.syncWithCloud();

      // Solo si la nube está confirmada y activa (ej: desplegado en Vercel) activamos el polling cada 6s
      if (this.ranking.cloudAvailable === true) {
        setInterval(() => {
          if (this.ranking.cloudAvailable) {
            this.syncWithCloud();
          }
        }, 6000);
      }
    }
  }

  async syncWithCloud() {
    await this.ranking.fetchCloudScores();
    this.renderLeaderboard();
  }

  // Detectar si el usuario abrió un link con reto (?retador=Alexis&score=1250&avatar=🛡️)
  checkUrlChallenge() {
    const params = new URLSearchParams(window.location.search);
    const retador = params.get('retador') || params.get('challenger');
    const score = parseInt(params.get('score'), 10);
    const avatar = params.get('avatar') || '🛡️';

    if (retador && !isNaN(score)) {
      this.challenger = { name: retador, score, avatar };
      this.dom.challengeBanner.style.display = 'flex';
      this.dom.challengeAvatar.textContent = avatar;
      this.dom.challengeTitle.textContent = `¡Desafío activo de ${retador}!`;
      this.dom.challengeSub.textContent = `Marcó ${score} pts. ¿Tienes lo necesario para superarlo?`;

      // Registrar al retador en el ranking para que todos los compañeros se vean en la tabla
      const existing = this.ranking.getScores();
      const alreadyHas = existing.some(e => e.name.toLowerCase() === retador.toLowerCase() && e.score === score);
      if (!alreadyHas) {
        this.ranking.addEntry({
          name: retador,
          avatar: avatar,
          score: score,
          correct: Math.min(10, Math.round(score / 140)),
          time: 40,
          date: new Date().toISOString().split('T')[0]
        });
      }
    }
  }

  bindEvents() {
    // Selección de Avatar
    this.dom.avatarOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        this.dom.avatarOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        this.playerAvatar = opt.getAttribute('data-avatar');
        this.audio.playClick();
      });
    });

    // Iniciar Quiz
    this.dom.startBtn.addEventListener('click', () => this.startQuiz());
    this.dom.playerNameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.startQuiz();
    });

    // Siguiente Pregunta
    this.dom.nextBtn.addEventListener('click', () => this.handleNextQuestion());

    // Botones de Compartir
    this.dom.whatsappBtn.addEventListener('click', () => this.shareOnWhatsApp());
    this.dom.copyLinkBtn.addEventListener('click', () => this.copyChallengeLink());

    // Volver a Jugar
    this.dom.playAgainBtn.addEventListener('click', () => this.resetQuiz());

    // Modal de Revisión
    this.dom.reviewAnswersBtn.addEventListener('click', () => this.openReviewModal());
    this.dom.closeModalBtn.addEventListener('click', () => this.closeReviewModal());
    this.dom.reviewModal.addEventListener('click', (e) => {
      if (e.target === this.dom.reviewModal) this.closeReviewModal();
    });

    // Toggle de Sonido
    this.dom.soundToggleBtn.addEventListener('click', () => {
      const enabled = this.audio.toggleSound();
      this.dom.soundIcon.textContent = enabled ? '🔊' : '🔇';
      this.showToast(enabled ? 'Sonido activado' : 'Sonido silenciado');
    });

    // Botón de Reiniciar Tabla: Abre el modal de seguridad exclusivo para el administrador
    if (this.dom.resetLeaderboardBtn) {
      this.dom.resetLeaderboardBtn.addEventListener('click', () => this.openAdminModal());
    }

    // Eventos del Modal de Administrador
    if (this.dom.closeAdminModalBtn) {
      this.dom.closeAdminModalBtn.addEventListener('click', () => this.closeAdminModal());
    }
    if (this.dom.cancelAdminBtn) {
      this.dom.cancelAdminBtn.addEventListener('click', () => this.closeAdminModal());
    }
    if (this.dom.confirmResetBtn) {
      this.dom.confirmResetBtn.addEventListener('click', () => this.handleAdminResetSubmit());
    }
    if (this.dom.toggleAdminPassBtn) {
      this.dom.toggleAdminPassBtn.addEventListener('click', () => this.toggleAdminPasswordVisibility());
    }
    if (this.dom.adminPassInput) {
      this.dom.adminPassInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.handleAdminResetSubmit();
      });
    }
    if (this.dom.adminModal) {
      this.dom.adminModal.addEventListener('click', (e) => {
        if (e.target === this.dom.adminModal) this.closeAdminModal();
      });
    }
  }

  // Métodos del Modal de Seguridad de Administrador
  openAdminModal() {
    this.audio.playClick();
    if (!this.dom.adminModal) return;
    this.dom.adminPassInput.value = '';
    this.dom.adminErrorMsg.style.display = 'none';
    const card = this.dom.adminModal.querySelector('.admin-modal-card');
    if (card) card.classList.remove('modal-shake');
    this.dom.adminModal.style.display = 'flex';
    setTimeout(() => this.dom.adminPassInput.focus(), 150);
  }

  closeAdminModal() {
    this.audio.playClick();
    if (!this.dom.adminModal) return;
    this.dom.adminModal.style.display = 'none';
    this.dom.adminPassInput.value = '';
    this.dom.adminErrorMsg.style.display = 'none';
  }

  toggleAdminPasswordVisibility() {
    this.audio.playClick();
    const isPass = this.dom.adminPassInput.type === 'password';
    this.dom.adminPassInput.type = isPass ? 'text' : 'password';
    this.dom.toggleAdminPassBtn.textContent = isPass ? '🙈' : '👁️';
  }

  async handleAdminResetSubmit() {
    const enteredKey = this.dom.adminPassInput.value.trim();

    // Validación de seguridad estricta: solo el creador con la clave maestra puede reiniciar
    if (enteredKey === ADMIN_MASTER_KEY) {
      this.dom.adminErrorMsg.style.display = 'none';
      this.dom.confirmResetBtn.disabled = true;
      this.dom.confirmResetBtn.innerHTML = `<span>⏳</span> Reiniciando...`;

      await this.ranking.clearScores(ADMIN_MASTER_KEY);
      this.renderLeaderboard();
      this.closeAdminModal();
      this.showToast('🗑️ Puntajes reiniciados a cero por el administrador');
      this.audio.playFanfare();

      this.dom.confirmResetBtn.disabled = false;
      this.dom.confirmResetBtn.innerHTML = `<span>🗑️</span> Reiniciar Puntos`;
    } else {
      // Clave incorrecta: retroalimentación visual de rechazo y sonido
      this.dom.adminErrorMsg.style.display = 'block';
      this.dom.adminErrorMsg.textContent = '❌ Contraseña incorrecta. Solo el administrador puede reiniciar los puntos.';
      const card = this.dom.adminModal.querySelector('.admin-modal-card');
      if (card) {
        card.classList.remove('modal-shake');
        void card.offsetWidth; // Trigger reflow para reiniciar animación
        card.classList.add('modal-shake');
      }
      this.audio.playWrong();
      this.dom.adminPassInput.select();
    }
  }

  startQuiz() {
    const rawName = this.dom.playerNameInput.value.trim();
    this.playerName = rawName || "Aprendiz de Calidad";
    this.audio.playClick();

    // Reset de variables
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.correctCount = 0;
    this.userAnswers = [];
    this.totalSeconds = 0;

    // Iniciar cronómetro total
    clearInterval(this.totalTimerInterval);
    this.totalTimerInterval = setInterval(() => {
      this.totalSeconds++;
    }, 1000);

    // Cambiar de vista
    this.dom.welcomeView.style.display = 'none';
    this.dom.resultsView.style.display = 'none';
    this.dom.quizView.style.display = 'block';

    this.renderQuestion();
  }

  // Método de barajado aleatorio (Fisher-Yates) para que nunca se repita la posición ni la letra
  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  renderQuestion() {
    this.answeredCurrent = false;
    const q = QUIZ_QUESTIONS[this.currentIndex];
    this.questionStartTime = Date.now();

    // Actualizar marcadores
    this.dom.quizStep.textContent = `Pregunta ${this.currentIndex + 1} de ${QUIZ_QUESTIONS.length}`;
    this.dom.quizCurrentScore.textContent = `${this.score} pts`;

    // Barra de progreso
    const pct = ((this.currentIndex) / QUIZ_QUESTIONS.length) * 100;
    this.dom.progressBar.style.width = `${pct}%`;

    // Contenido de la pregunta
    this.dom.slideTag.textContent = q.slide;
    this.dom.questionText.textContent = q.question;

    // Ocultar explicación y botón siguiente
    this.dom.explanationCard.classList.remove('visible');
    this.dom.nextBtn.style.display = 'none';

    // Barajar opciones para que la respuesta correcta NUNCA tenga una letra o posición fija
    const shuffledOptions = this.shuffleArray(q.options);
    this.currentShuffledOptions = shuffledOptions;

    // Generar opciones con letras A, B, C, D
    this.dom.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    shuffledOptions.forEach((optObj, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${optObj.text}</span>
      `;
      btn.addEventListener('click', () => this.handleAnswerSelect(idx, btn, optObj));
      this.dom.optionsContainer.appendChild(btn);
    });
  }

  handleAnswerSelect(selectedIndex, selectedBtn, selectedOptObj) {
    if (this.answeredCurrent) return;
    this.answeredCurrent = true;

    const q = QUIZ_QUESTIONS[this.currentIndex];
    const isCorrect = selectedOptObj.correct;
    const elapsedSeconds = (Date.now() - this.questionStartTime) / 1000;

    // Deshabilitar todos los botones de opciones
    const allButtons = this.dom.optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
      this.correctCount++;
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;

      // Cálculo de puntos: 100 base + bonificación de velocidad (hasta 40 pts si responde en < 6s) + bonus de racha
      const speedBonus = Math.max(0, Math.round((6 - elapsedSeconds) * 8));
      const streakBonus = (this.streak - 1) * 15;
      const pointsWon = 100 + speedBonus + streakBonus;
      this.score += pointsWon;

      selectedBtn.classList.add('correct');
      this.audio.playCorrect();

      // Mostrar racha
      if (this.streak >= 2) {
        this.dom.quizStreakBadge.style.display = 'flex';
        this.dom.quizStreakCount.textContent = `x${this.streak}`;
        this.dom.quizStreakBadge.classList.add('active');
        setTimeout(() => this.dom.quizStreakBadge.classList.remove('active'), 500);
      }
    } else {
      this.streak = 0;
      this.dom.quizStreakBadge.style.display = 'none';
      selectedBtn.classList.add('wrong');

      // Resaltar la respuesta correcta entre los botones de la pantalla
      this.currentShuffledOptions.forEach((opt, idx) => {
        if (opt.correct) {
          allButtons[idx].classList.add('correct');
        }
      });
      this.audio.playWrong();
    }

    // Buscar el texto de la opción correcta
    const correctOptObj = q.options.find(o => o.correct);

    // Guardar para revisión
    this.userAnswers.push({
      question: q,
      userText: selectedOptObj.text,
      correctText: correctOptObj.text,
      isCorrect,
      time: elapsedSeconds.toFixed(1)
    });

    // Actualizar puntaje visual
    this.dom.quizCurrentScore.textContent = `${this.score} pts`;

    // Mostrar tarjeta de explicación pedagógica
    this.dom.explanationHeader.className = `explanation-header ${isCorrect ? 'correct' : 'wrong'}`;
    this.dom.explanationIcon.textContent = isCorrect ? '✅' : '💡';
    this.dom.explanationTitle.textContent = isCorrect ? '¡Respuesta Correcta!' : 'Ten en cuenta:';
    this.dom.explanationText.textContent = q.explanation;
    this.dom.explanationCard.classList.add('visible');

    // Mostrar botón de siguiente
    this.dom.nextBtn.style.display = 'inline-flex';
    this.dom.nextBtn.textContent = (this.currentIndex === QUIZ_QUESTIONS.length - 1) ? 'Ver Resultados 🏆' : 'Siguiente Pregunta ➡️';
  }

  handleNextQuestion() {
    this.audio.playClick();
    this.currentIndex++;
    if (this.currentIndex < QUIZ_QUESTIONS.length) {
      this.renderQuestion();
    } else {
      this.finishQuiz();
    }
  }

  async finishQuiz() {
    clearInterval(this.totalTimerInterval);
    this.dom.progressBar.style.width = '100%';

    // Registrar en Leaderboard (Nube + Local)
    const entry = {
      name: this.playerName,
      avatar: this.playerAvatar,
      score: this.score,
      correct: this.correctCount,
      time: this.totalSeconds,
      date: new Date().toISOString().split('T')[0]
    };
    await this.ranking.addEntry(entry);

    // Cambiar a vista de resultados
    this.dom.quizView.style.display = 'none';
    this.dom.resultsView.style.display = 'block';

    // Rellenar métricas
    this.dom.metricScore.textContent = `${this.score}`;
    this.dom.metricAccuracy.textContent = `${this.correctCount}/${QUIZ_QUESTIONS.length}`;
    this.dom.metricTime.textContent = `${this.totalSeconds}s`;

    // Calificación y título dinámico
    if (this.correctCount === 10) {
      this.dom.finalTrophy.textContent = '👑';
      this.dom.finalTitle.textContent = `¡Puntaje Perfecto, ${this.playerName}!`;
      this.dom.finalSubtitle.textContent = "Dominas a la perfección la Familia ISO/IEC 33000 y el modelo de calidad de Chazin Food.";
      this.dom.finalBadge.textContent = "🌟 Auditor Maestro de Calidad";
    } else if (this.correctCount >= 8) {
      this.dom.finalTrophy.textContent = '🏆';
      this.dom.finalTitle.textContent = `¡Gran Desempeño, ${this.playerName}!`;
      this.dom.finalSubtitle.textContent = "Tienes conocimientos muy sólidos sobre evaluación de procesos y normas ISO.";
      this.dom.finalBadge.textContent = "🛡️ Especialista en ISO/IEC 33000";
    } else if (this.correctCount >= 5) {
      this.dom.finalTrophy.textContent = '🥈';
      this.dom.finalTitle.textContent = `¡Buen Desempeño, ${this.playerName}!`;
      this.dom.finalSubtitle.textContent = "Comprendes los conceptos clave del marco SPICE y la autoevaluación de Chazin Food.";
      this.dom.finalBadge.textContent = "📋 Evaluador de Procesos";
    } else {
      this.dom.finalTrophy.textContent = '🌱';
      this.dom.finalTitle.textContent = `¡Ánimo, ${this.playerName}!`;
      this.dom.finalSubtitle.textContent = "Repasa las diapositivas de Calidad de Software del Instructor Jairo y vuelve a intentarlo.";
      this.dom.finalBadge.textContent = "🌱 Aprendiz en Formación";
    }

    // Efectos de celebración
    this.audio.playFanfare();
    this.triggerConfetti();

    // Si había un retador activo, mostrar tarjeta de duelo Head-to-Head
    if (this.challenger) {
      this.dom.duelCard.classList.add('visible');
      this.dom.duelUserAvatar.textContent = this.playerAvatar;
      this.dom.duelUserName.textContent = this.playerName;
      this.dom.duelUserScore.textContent = `${this.score} pts`;

      this.dom.duelRivalAvatar.textContent = this.challenger.avatar;
      this.dom.duelRivalName.textContent = this.challenger.name;
      this.dom.duelRivalScore.textContent = `${this.challenger.score} pts`;

      if (this.score > this.challenger.score) {
        this.dom.duelVerdict.innerHTML = `🎉 <span style="color:var(--emerald-400)">¡Victoria! Has superado a ${this.challenger.name} por ${this.score - this.challenger.score} puntos.</span>`;
      } else if (this.score === this.challenger.score) {
        this.dom.duelVerdict.innerHTML = `🤝 <span style="color:var(--amber-400)">¡Empate técnico legendario con ${this.challenger.name}!</span>`;
      } else {
        this.dom.duelVerdict.innerHTML = `⚔️ <span style="color:var(--rose-500)">¡${this.challenger.name} mantiene la ventaja por ${this.challenger.score - this.score} pts! ¿Revancha?</span>`;
      }
    }

    // Actualizar tabla de ranking
    this.renderLeaderboard(entry);
  }

  // Generar y abrir enlace de WhatsApp con el mensaje formateado
  shareOnWhatsApp() {
    this.audio.playClick();
    const challengeUrl = this.getShareableUrl();
    const message = `🛡️ *¡Te reto al Quiz de Calidad de Software (ISO/IEC 33000 y Chazin Food - SENA)!* 📋✨\n\n` +
      `👤 Jugador: *${this.playerName}* ${this.playerAvatar}\n` +
      `🏆 Puntaje: *${this.score} pts* (${this.correctCount}/${QUIZ_QUESTIONS.length} aciertos)\n` +
      `⏱️ Tiempo: *${this.totalSeconds}s* | Racha Máxima: *${this.maxStreak}* 🔥\n\n` +
      `¿Crees que puedes superar mi puntaje en evaluación de procesos? ¡Acepta el duelo aquí! 👇\n` +
      `${challengeUrl}`;

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  }

  // Copiar link de reto al portapapeles
  copyChallengeLink() {
    this.audio.playClick();
    const challengeUrl = this.getShareableUrl();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(challengeUrl).then(() => {
        this.showToast('📋 ¡Enlace de reto copiado al portapapeles!');
      }).catch(() => {
        this.fallbackCopyText(challengeUrl);
      });
    } else {
      this.fallbackCopyText(challengeUrl);
    }
  }

  fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.showToast('📋 ¡Enlace de reto copiado!');
    } catch (err) {
      this.showToast('⚠️ No se pudo copiar automáticamente.');
    }
    document.body.removeChild(textArea);
  }

  getShareableUrl() {
    const baseUrl = window.location.origin + window.location.pathname;
    const cleanName = encodeURIComponent(this.playerName);
    const cleanAvatar = encodeURIComponent(this.playerAvatar);
    return `${baseUrl}?retador=${cleanName}&score=${this.score}&avatar=${cleanAvatar}`;
  }

  // Renderizar la tabla de posiciones
  renderLeaderboard(currentEntry = null) {
    const scores = this.ranking.getScores();

    // Si la tabla está en cero, mostrar estado vacío elegante
    if (!scores || scores.length === 0) {
      this.dom.podiumWrapper.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.2rem 1rem; color: var(--text-muted); background: rgba(255,255,255,0.02); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
          <div style="font-size: 2.3rem; margin-bottom: 0.4rem;">🌱</div>
          <div style="font-size: 1.05rem; font-weight: 700; color: #fff;">¡Tabla de posiciones en 0!</div>
          <div style="font-size: 0.85rem; margin-top: 0.25rem; color: var(--text-secondary);">Completa el quiz para ser el primer aprendiz en el ranking.</div>
        </div>
      `;
      if (this.dom.leaderboardRestHeader) this.dom.leaderboardRestHeader.style.display = 'none';
      this.dom.leaderboardList.innerHTML = '';
      return;
    }

    // 1. Podio (Top 3)
    const top3 = scores.slice(0, 3);
    const medals = ['🥇', '🥈', '🥉'];
    const podiumClasses = ['first', 'second', 'third'];

    this.dom.podiumWrapper.innerHTML = '';
    // Mapeo orden visual: 2do (izquierda), 1ro (centro), 3ro (derecha)
    const displayOrder = [1, 0, 2];

    displayOrder.forEach(idx => {
      const player = top3[idx];
      if (player) {
        const card = document.createElement('div');
        card.className = `podium-card ${podiumClasses[idx]}`;
        card.innerHTML = `
          <div class="podium-medal">${medals[idx]}</div>
          <div class="podium-avatar">${player.avatar || '🛡️'}</div>
          <div class="podium-name" title="${player.name}">${player.name}</div>
          <div class="podium-score">${player.score} pts</div>
          <div class="podium-time">${player.correct}/10 • ${player.time}s</div>
        `;
        this.dom.podiumWrapper.appendChild(card);
      }
    });

    // 2. Lista de posiciones (4+) - Claramente visible por debajo del podio
    const rest = scores.slice(3, 50);
    this.dom.leaderboardList.innerHTML = '';

    if (this.dom.leaderboardRestHeader) {
      if (rest.length > 0) {
        this.dom.leaderboardRestHeader.style.display = 'flex';
        if (this.dom.restBadgeCount) {
          this.dom.restBadgeCount.textContent = `${rest.length} aprendiz${rest.length === 1 ? '' : 'es'}`;
        }
      } else {
        this.dom.leaderboardRestHeader.style.display = 'none';
      }
    }

    rest.forEach((player, i) => {
      const pos = i + 4;
      const isMe = currentEntry && currentEntry.name === player.name && currentEntry.score === player.score;
      const row = document.createElement('div');
      row.className = `ranking-row ${isMe ? 'current-player' : ''}`;
      row.innerHTML = `
        <div class="ranking-left">
          <span class="ranking-pos-badge">#${pos}</span>
          <span class="ranking-avatar">${player.avatar || '🛡️'}</span>
          <span class="ranking-player-name">${player.name} ${isMe ? '(Tú)' : ''}</span>
        </div>
        <div class="ranking-right">
          <span class="ranking-time">${player.correct}/10 • ${player.time}s</span>
          <span class="ranking-score">${player.score} pts</span>
        </div>
      `;
      this.dom.leaderboardList.appendChild(row);
    });
  }

  // Modal de revisión de respuestas
  openReviewModal() {
    this.audio.playClick();
    this.dom.reviewModalBody.innerHTML = '';

    this.userAnswers.forEach((ans, i) => {
      const q = ans.question;
      const item = document.createElement('div');
      item.className = `review-item ${ans.isCorrect ? 'was-correct' : 'was-wrong'}`;

      item.innerHTML = `
        <div class="review-q-num">Pregunta ${i + 1} (${q.slide})</div>
        <div class="review-q-title">${q.question}</div>
        <div class="review-answer-status">
          ${ans.isCorrect ?
            `✅ Tu respuesta: <strong>${ans.userText}</strong>` :
            `❌ Marcaste: <em>${ans.userText}</em> | Correcta: <strong>${ans.correctText}</strong>`
          }
        </div>
        <div class="review-exp">${q.explanation}</div>
      `;
      this.dom.reviewModalBody.appendChild(item);
    });

    this.dom.reviewModal.classList.add('active');
  }

  closeReviewModal() {
    this.audio.playClick();
    this.dom.reviewModal.classList.remove('active');
  }

  resetQuiz() {
    this.audio.playClick();
    this.dom.resultsView.style.display = 'none';
    this.dom.welcomeView.style.display = 'block';
  }

  showToast(msg) {
    this.dom.toastMessage.textContent = msg;
    this.dom.toast.classList.add('show');
    setTimeout(() => {
      this.dom.toast.classList.remove('show');
    }, 3000);
  }

  // Efecto de confeti (Usa window.confetti si está cargado vía CDN, o canvas fallback)
  triggerConfetti() {
    if (typeof window.confetti === 'function') {
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#10b981', '#0ea5e9', '#fbbf24', '#c084fc'];

      (function frame() {
        window.confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        window.confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    } else {
      // Fallback simple por si se usa sin conexión a internet
      this.drawCanvasConfetti();
    }
  }

  drawCanvasConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#10b981', '#0ea5e9', '#fbbf24', '#f43f5e', '#a855f7'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        r: Math.random() * 6 + 4,
        d: Math.random() * 80,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleIncremental: (Math.random() * 0.07) + .05,
        tiltAngle: 0
      });
    }

    let animationFrames = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.tilt = Math.sin(p.tiltAngle - (i / 3)) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + (p.r / 4), p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 4));
        ctx.stroke();
      }

      animationFrames++;
      if (animationFrames < 120) {
        requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    draw();
  }
}

// Iniciar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.app = new QuizApp();
});
