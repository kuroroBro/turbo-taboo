(function () {
  "use strict";

  // ---------- State ----------
  const state = {
    teams: [],
    currentTeamIndex: 0,
    turnsPerTeam: 2,
    turnsTaken: [0, 0],
    roundSeconds: 60,
    timeLeft: 60,
    timerId: null,
    deck: [],
    deckPointer: 0,
    currentCard: null,
    turnStats: { correct: [], taboo: [], skipped: [] },
    activeCards: TABOO_CARDS,
  };

  // ---------- Elements ----------
  const screens = {
    setup: document.getElementById("screen-setup"),
    ready: document.getElementById("screen-ready"),
    play: document.getElementById("screen-play"),
    summary: document.getElementById("screen-summary"),
    gameover: document.getElementById("screen-gameover"),
  };

  const el = {
    team1Name: document.getElementById("team1-name"),
    team2Name: document.getElementById("team2-name"),
    roundTime: document.getElementById("round-time"),
    roundsPerTeam: document.getElementById("rounds-per-team"),
    btnStartGame: document.getElementById("btn-start-game"),
    btnHowTo: document.getElementById("btn-how-to-play"),
    btnCloseHowTo: document.getElementById("btn-close-howto"),
    modalHowTo: document.getElementById("modal-howto"),
    categoryList: document.getElementById("category-list"),
    categoryWarning: document.getElementById("category-warning"),
    btnCatAll: document.getElementById("btn-cat-all"),
    btnCatNone: document.getElementById("btn-cat-none"),

    readyTeamName: document.getElementById("ready-team-name"),
    readyScoreboard: document.getElementById("ready-scoreboard"),
    btnStartTurn: document.getElementById("btn-start-turn"),

    playingTeamName: document.getElementById("playing-team-name"),
    timerDisplay: document.getElementById("timer-display"),
    timerBarFill: document.getElementById("timer-bar-fill"),
    cardCategory: document.getElementById("card-category"),
    cardTarget: document.getElementById("card-target"),
    cardTabooList: document.getElementById("card-taboo-list"),
    btnCorrect: document.getElementById("btn-correct"),
    btnTaboo: document.getElementById("btn-taboo"),
    btnSkip: document.getElementById("btn-skip"),
    btnEndTurn: document.getElementById("btn-end-turn"),

    summaryTeamName: document.getElementById("summary-team-name"),
    summaryScore: document.getElementById("summary-score"),
    summaryCorrect: document.getElementById("summary-correct"),
    summaryTaboo: document.getElementById("summary-taboo"),
    summarySkipped: document.getElementById("summary-skipped"),
    summaryScoreboard: document.getElementById("summary-scoreboard"),
    btnNextTurn: document.getElementById("btn-next-turn"),

    winnerName: document.getElementById("winner-name"),
    finalScoreboard: document.getElementById("final-scoreboard"),
    btnPlayAgain: document.getElementById("btn-play-again"),
  };

  // ---------- Helpers ----------
  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderScoreboard(container, { compact } = {}) {
    container.innerHTML = "";
    state.teams.forEach((team) => {
      const item = document.createElement("div");
      item.className = "score-item";
      item.innerHTML = `${team.name}<strong>${team.score}</strong>`;
      container.appendChild(item);
    });
  }

  // ---------- Seen-card tracking (persisted per browser) ----------
  const SEEN_CARDS_KEY = "turboTabooSeenCardIds";

  function loadSeenIds() {
    try {
      const raw = localStorage.getItem(SEEN_CARDS_KEY);
      return new Set(raw ? JSON.parse(raw) : []);
    } catch (e) {
      return new Set();
    }
  }

  function saveSeenIds() {
    try {
      localStorage.setItem(SEEN_CARDS_KEY, JSON.stringify(Array.from(seenIds)));
    } catch (e) {
      // localStorage unavailable (private mode, etc.) - seen tracking just won't persist
    }
  }

  const seenIds = loadSeenIds();

  function markSeen(card) {
    seenIds.add(card.id);
    saveSeenIds();
  }

  // Builds a shuffled deck of cards not yet seen in this browser; once every
  // card in the pool has been seen, that pool's history is cleared so it can
  // cycle again. avoidFirstId keeps the just-shown card from immediately
  // repeating right at that reset boundary.
  function buildDeck(pool, avoidFirstId) {
    let unseen = pool.filter((c) => !seenIds.has(c.id));
    if (unseen.length === 0) {
      pool.forEach((c) => seenIds.delete(c.id));
      saveSeenIds();
      unseen = pool.slice();
    }
    const deck = shuffle(unseen);
    if (avoidFirstId != null && deck.length > 1 && deck[0].id === avoidFirstId) {
      [deck[0], deck[1]] = [deck[1], deck[0]];
    }
    return deck;
  }

  // ---------- Categories ----------
  const CATEGORIES = [...new Set(TABOO_CARDS.map((c) => c.category))];

  function renderCategoryList() {
    el.categoryList.innerHTML = "";
    CATEGORIES.forEach((category, i) => {
      const count = TABOO_CARDS.filter((c) => c.category === category).length;
      const id = "cat-" + i;
      const label = document.createElement("label");
      label.className = "category-option";
      label.setAttribute("for", id);
      label.innerHTML = `
        <input type="checkbox" id="${id}" data-category="${category}" checked>
        <span>${category}</span>
        <span class="cat-count">${count}</span>
      `;
      el.categoryList.appendChild(label);
    });
    el.categoryList.querySelectorAll("input[type=checkbox]").forEach((cb) => {
      cb.addEventListener("change", updateCategoryValidity);
    });
    updateCategoryValidity();
  }

  function getSelectedCategories() {
    return Array.from(el.categoryList.querySelectorAll("input[type=checkbox]:checked")).map(
      (cb) => cb.dataset.category
    );
  }

  function updateCategoryValidity() {
    const selected = getSelectedCategories();
    const valid = selected.length > 0;
    el.categoryWarning.classList.toggle("active", !valid);
    el.btnStartGame.disabled = !valid;
    return valid;
  }

  el.btnCatAll.addEventListener("click", () => {
    el.categoryList.querySelectorAll("input[type=checkbox]").forEach((cb) => (cb.checked = true));
    updateCategoryValidity();
  });
  el.btnCatNone.addEventListener("click", () => {
    el.categoryList.querySelectorAll("input[type=checkbox]").forEach((cb) => (cb.checked = false));
    updateCategoryValidity();
  });

  renderCategoryList();

  // ---------- Setup ----------
  el.btnStartGame.addEventListener("click", () => {
    if (!updateCategoryValidity()) return;

    const name1 = el.team1Name.value.trim() || "Team Red";
    const name2 = el.team2Name.value.trim() || "Team Blue";
    state.teams = [
      { name: name1, score: 0 },
      { name: name2, score: 0 },
    ];
    state.roundSeconds = parseInt(el.roundTime.value, 10);
    state.turnsPerTeam = parseInt(el.roundsPerTeam.value, 10);
    state.turnsTaken = [0, 0];
    state.currentTeamIndex = 0;

    const selectedCategories = getSelectedCategories();
    state.activeCards = TABOO_CARDS.filter((c) => selectedCategories.includes(c.category));
    state.deck = buildDeck(state.activeCards, state.currentCard ? state.currentCard.id : null);
    state.deckPointer = 0;

    goToReady();
  });

  el.btnHowTo.addEventListener("click", () => el.modalHowTo.classList.add("active"));
  el.btnCloseHowTo.addEventListener("click", () => el.modalHowTo.classList.remove("active"));
  el.modalHowTo.addEventListener("click", (e) => {
    if (e.target === el.modalHowTo) el.modalHowTo.classList.remove("active");
  });

  // ---------- Ready screen ----------
  function goToReady() {
    const team = state.teams[state.currentTeamIndex];
    el.readyTeamName.textContent = team.name;
    renderScoreboard(el.readyScoreboard);
    showScreen("ready");
  }

  el.btnStartTurn.addEventListener("click", startTurn);

  // ---------- Play / Turn logic ----------
  function drawNextCard() {
    if (state.deckPointer >= state.deck.length) {
      const lastId = state.currentCard ? state.currentCard.id : null;
      state.deck = buildDeck(state.activeCards, lastId);
      state.deckPointer = 0;
    }
    const card = state.deck[state.deckPointer];
    state.deckPointer++;
    markSeen(card);
    return card;
  }

  function renderCard(card) {
    el.cardCategory.textContent = card.category;
    el.cardCategory.setAttribute("data-cat", card.category);
    el.cardTarget.textContent = card.targetWord;
    el.cardTabooList.innerHTML = "";
    card.tabooWords.forEach((w) => {
      const li = document.createElement("li");
      li.textContent = w;
      el.cardTabooList.appendChild(li);
    });
  }

  function nextCard() {
    state.currentCard = drawNextCard();
    renderCard(state.currentCard);
  }

  function startTurn() {
    const team = state.teams[state.currentTeamIndex];
    el.playingTeamName.textContent = team.name;
    state.turnStats = { correct: [], taboo: [], skipped: [] };
    state.timeLeft = state.roundSeconds;
    updateTimerDisplay();

    nextCard();
    showScreen("play");

    state.timerId = setInterval(() => {
      state.timeLeft--;
      updateTimerDisplay();
      if (state.timeLeft <= 0) {
        endTurn();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    el.timerDisplay.textContent = state.timeLeft;
    const pct = Math.max(0, (state.timeLeft / state.roundSeconds) * 100);
    el.timerBarFill.style.width = pct + "%";
    const isWarning = state.timeLeft <= 10;
    el.timerDisplay.classList.toggle("warning", isWarning);
    el.timerBarFill.classList.toggle("warning", isWarning);
  }

  el.btnCorrect.addEventListener("click", () => {
    if (!state.currentCard) return;
    state.turnStats.correct.push(state.currentCard);
    state.teams[state.currentTeamIndex].score++;
    nextCard();
  });

  el.btnTaboo.addEventListener("click", () => {
    if (!state.currentCard) return;
    state.turnStats.taboo.push(state.currentCard);
    nextCard();
  });

  el.btnSkip.addEventListener("click", () => {
    if (!state.currentCard) return;
    state.turnStats.skipped.push(state.currentCard);
    nextCard();
  });

  el.btnEndTurn.addEventListener("click", endTurn);

  function endTurn() {
    clearInterval(state.timerId);
    state.timerId = null;

    const team = state.teams[state.currentTeamIndex];
    el.summaryTeamName.textContent = team.name;
    el.summaryScore.textContent = "+" + state.turnStats.correct.length;

    fillSummaryList(el.summaryCorrect, state.turnStats.correct);
    fillSummaryList(el.summaryTaboo, state.turnStats.taboo);
    fillSummaryList(el.summarySkipped, state.turnStats.skipped);

    renderScoreboard(el.summaryScoreboard);
    showScreen("summary");
  }

  function fillSummaryList(container, cards) {
    container.innerHTML = "";
    cards.forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c.targetWord;
      container.appendChild(li);
    });
  }

  el.btnNextTurn.addEventListener("click", () => {
    state.turnsTaken[state.currentTeamIndex]++;

    const totalTurns = state.turnsPerTeam * state.teams.length;
    const turnsSoFar = state.turnsTaken.reduce((a, b) => a + b, 0);

    if (turnsSoFar >= totalTurns) {
      endGame();
      return;
    }

    state.currentTeamIndex = (state.currentTeamIndex + 1) % state.teams.length;
    goToReady();
  });

  // ---------- Game over ----------
  function endGame() {
    const sorted = state.teams.slice().sort((a, b) => b.score - a.score);
    const isTie = sorted.length > 1 && sorted[0].score === sorted[1].score;

    el.winnerName.textContent = isTie
      ? "It's a Tie! 🤝"
      : `${sorted[0].name} Wins! 🏆`;

    el.finalScoreboard.innerHTML = "";
    sorted.forEach((team, i) => {
      const row = document.createElement("div");
      row.className = "final-row" + (!isTie && i === 0 ? " is-winner" : "");
      row.innerHTML = `<span>${team.name}</span><span class="final-score">${team.score}</span>`;
      el.finalScoreboard.appendChild(row);
    });

    showScreen("gameover");
  }

  el.btnPlayAgain.addEventListener("click", () => {
    showScreen("setup");
  });
})();
