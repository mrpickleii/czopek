const stories = {
  manifest: {
    kicker: "Lore drop",
    title: "67 to nie liczba, to stan psychiczny",
    text:
      "Czopek nie musi nic udowadniać. Wchodzi, patrzy, robi małe 'hmm' nosem i nagle każdy rozumie, że wynik był znany wcześniej. Maksiu ma tryb kanapa, Bailey ma tryb gala, a Czopek ma tryb: daj chrupka albo będzie audyt."
  },
  monaco: {
    kicker: "Raport",
    title: "Monte Karmelek: wejście bez sprintu, pełny damage",
    text:
      "Bailey zrobił dokładnie trzy kroki. Pierwszy: publika cichnie. Drugi: ktoś szepcze 'to ten od 67'. Trzeci: ring już należy do niego. Reszta psów biegała, a on po prostu farmił aurę."
  },
  warsaw: {
    kicker: "Werdykt",
    title: "Drzemka w finale to nie lenistwo, to psychologia",
    text:
      "Maksiu zasnął, bo po co stresować się rzeczami, które są już załatwione. Werdykt: 11/10 za spokój, +1 za łapki, +67 za to, że wyglądał jakby znał wszystkie odpowiedzi, ale nie chciało mu się tłumaczyć."
  },
  vienna: {
    kicker: "Anegdota",
    title: "Brzuszek dyplomatyczny zakończył dyskusję",
    text:
      "Czopek przewrócił się na plecy i nagle wszyscy przestali udawać, że oceniają linię grzbietu. To był moment typu: koniec meczu, wyłączcie światła, brzuszek wygrał. Zero kontrargumentów."
  },
  passport: {
    kicker: "Dossier",
    title: "Rasa: trójkolorowy kocykowiec z syndromem głównego bohatera",
    text:
      "Wzorzec jest prosty: biała strzałka na głowie, karmelowe brwi, czarne uszy i mina 'nic nie zrobiłem', nawet jeśli właśnie przeorganizował cały pokój. Rzadkość? Tak. Czy ktoś umie to udowodnić? Nie musi."
  }
};

const timelineItems = [
  {
    year: "I",
    title: "Spawn w klasie premium",
    text:
      "Otworzył oczy i od razu wyglądał, jakby ktoś źle ustawił światło. Mały, ale już z wymaganiami.",
    story: "passport"
  },
  {
    year: "II",
    title: "Pierwszy dywanik, pierwsze 67",
    text:
      "Przeszedł kawałek maty, zatrzymał się, pomyślał swoje i zrobił minę: 'dalej nie idę, bo już wygrałem'.",
    story: "warsaw"
  },
  {
    year: "III",
    title: "Bailey odpala tryb gala",
    text:
      "Imię Bailey pojawia się wtedy, gdy sytuacja wymaga klasy, świateł i udawania, że nikt nie mówi do niego 'Czopek'.",
    story: "monaco"
  },
  {
    year: "IV",
    title: "Nos meta wchodzi do gry",
    text:
      "Nos dostał osobną ocenę, bo inaczej zaburzał statystyki. Miękki, czarny, bardzo poważny.",
    story: "manifest"
  }
];

const awardItems = [
  {
    meta: "67x",
    title: "W streak bez patcha",
    text:
      "Seria tak bezczelna, że ludzie zaczęli mówić 'dobra, ale tym razem chyba nie'. I znowu 67.",
    story: "manifest"
  },
  {
    meta: "2026",
    title: "Monte Karmelek no diff",
    text:
      "Nie biegał, nie krzyczał, nie negocjował. Po prostu wszedł i zrobił atmosferę.",
    story: "monaco"
  },
  {
    meta: "Nos",
    title: "Mokry Nosek meta",
    text:
      "Gdy dotknął czegoś nosem, przedmiot automatycznie zyskiwał prestiż i trochę wilgoci.",
    story: "passport"
  },
  {
    meta: "11/10",
    title: "Drzemka rankingowa",
    text:
      "Maksiu spał tak pewnie, że wyglądało to jak przewaga mentalna, nie odpoczynek.",
    story: "warsaw"
  },
  {
    meta: "Rare",
    title: "Drop rate absurdalny",
    text:
      "Taki pies wypada z losowania tylko wtedy, gdy świat ma dobry dzień i świeży koc.",
    story: "passport"
  },
  {
    meta: "Belly",
    title: "Brzuszek kończy debatę",
    text:
      "Jedno przewrócenie na plecy i nagle wszyscy zapominają, o co był spór.",
    story: "vienna"
  }
];

const photos = [
  ["assets/focus-czopek-01.jpg", "portret", "Pierwszy kadr: twarz w tle rozmyta, Czopek robi cały obraz."],
  ["assets/focus-czopek-02.jpg", "ring", "Mata treningowa. Przysmak na dole kadru czeka jak mini-boss."],
  ["assets/focus-czopek-03.jpg", "sekret", "Łapki w górze, wynik już wpisany. 67 i do spania."],
  ["assets/focus-czopek-04.jpg", "portret", "Zbliżenie nosa. Prosty komunikat: feed me albo negocjuj."],
  ["assets/focus-czopek-05.jpg", "sekret", "Krzyk? Ziew? Komenda admina? Nikt nie wie, wszyscy słuchają."],
  ["assets/focus-czopek-06.jpg", "sekret", "Brzuszek dyplomatyczny w wersji beta, nadal OP."],
  ["assets/focus-czopek-07.jpg", "ring", "Pojedynek skali: Czopek vs skarpeta. Skarpeta bez szans."],
  ["assets/focus-czopek-08.jpg", "portret", "Oczy mówią: jestem mały. Aura mówi: nie próbuj mnie liczyć."],
  ["assets/focus-czopek-09.jpg", "portret", "Bailey mode. Kamera złapana, publiczność przejęta."],
  ["assets/focus-czopek-10.jpg", "ring", "Nocny apel. Jakość low light, energia high level."]
];

const legends = [
  "Czopek zrobił blink i licznik sam przeskoczył na 67.",
  "Bailey nie przegrywa, on tylko czasem ładuje mapę.",
  "Maksiu śpi, bo grind jest pasywny. Aura sama się farmi.",
  "Ktoś powiedział 'zwykły pies' i od razu zrobiło się niezręcznie.",
  "Nos wszedł w kadr i aparat dostał focus lock na zawsze.",
  "Brzuszek dyplomatyczny ma więcej argumentów niż cały panel ekspertów."
];

const drawer = document.querySelector("#storyDrawer");
const drawerKicker = document.querySelector("#drawerKicker");
const drawerTitle = document.querySelector("#drawerTitle");
const drawerText = document.querySelector("#drawerText");
const drawerClose = document.querySelector("#drawerClose");
const cursor = document.querySelector(".cursor-orbit");
const timeline = document.querySelector("#timeline");
const awardBoard = document.querySelector("#awardBoard");
const photoMasonry = document.querySelector("#photoMasonry");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const lightboxClose = document.querySelector("#lightboxClose");

function openStory(key) {
  const story = stories[key] || stories.manifest;
  drawerKicker.textContent = story.kicker;
  drawerTitle.textContent = story.title;
  drawerText.textContent = story.text;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  burstConfetti(window.innerWidth / 2, window.innerHeight / 2, 22);
}

function closeStory() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

function closeInlineStories(exceptPanel = null) {
  document.querySelectorAll(".inline-story.is-open").forEach((panel) => {
    if (panel === exceptPanel) return;
    panel.classList.remove("is-open");
    panel.innerHTML = "";
  });
  document.querySelectorAll("[data-story-toggle].is-open").forEach((button) => {
    const key = button.dataset.storyToggle;
    const localPanel = button.parentElement?.querySelector(`[data-story-panel="${key}"]`);
    if (localPanel !== exceptPanel) button.classList.remove("is-open");
  });
}

function toggleInlineStory(button) {
  const key = button.dataset.storyToggle;
  const story = stories[key] || stories.manifest;
  const scope = button.closest(".hero-copy, .scene-copy, .timeline-card, .award-card") || button.parentElement;
  const panel = scope?.querySelector(`[data-story-panel="${key}"]`);
  if (!panel) return;

  const alreadyOpen = panel.classList.contains("is-open");
  closeInlineStories(panel);

  if (alreadyOpen) {
    panel.classList.remove("is-open");
    panel.innerHTML = "";
    button.classList.remove("is-open");
    return;
  }

  panel.innerHTML = `
    <div>
      <span>${story.kicker}</span>
      <h4>${story.title}</h4>
      <p>${story.text}</p>
    </div>
  `;
  panel.classList.add("is-open");
  button.classList.add("is-open");
  burstConfetti(button.getBoundingClientRect().left + button.offsetWidth / 2, button.getBoundingClientRect().top, 12);
}

function renderTimeline() {
  timeline.innerHTML = timelineItems
    .map(
      (item) => `
      <article class="timeline-card" data-year="${item.year}">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <button class="small-action magnetic" data-story-toggle="${item.story}">Rozwiń lore</button>
        <div class="inline-story" data-story-panel="${item.story}"></div>
      </article>`
    )
    .join("");
}

function renderAwards() {
  awardBoard.innerHTML = awardItems
    .map(
      (item) => `
      <article class="award-card" data-tilt>
        <span class="award-meta">${item.meta}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <button class="small-action magnetic" data-story-toggle="${item.story}">Pokaż dowód</button>
        <div class="inline-story" data-story-panel="${item.story}"></div>
      </article>`
    )
    .join("");
}

function renderPhotos(filter = "all") {
  photoMasonry.innerHTML = photos
    .filter((photo) => filter === "all" || photo[1] === filter)
    .map(
      (photo) => `
      <button class="photo-card magnetic" data-image="${photo[0]}" data-caption="${photo[2]}">
        <img src="${photo[0]}" alt="${photo[2]}">
        <span class="photo-caption">${photo[2]}</span>
      </button>`
    )
    .join("");
}

function updateActiveNav() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const current = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 160 && rect.bottom >= 160;
  });
  if (!current) return;
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.target === current.id);
  });
}

function animateCounters(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const card = entry.target;
    const number = card.querySelector(".metric-number");
    const target = Number(card.dataset.count);
    let start = null;
    function tick(timestamp) {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      number.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    observer.unobserve(card);
  });
}

function burstConfetti(x, y, amount = 12) {
  const colors = ["#d89523", "#bd5f35", "#c45767", "#1f7a75", "#ffe2a6"];
  for (let index = 0; index < amount; index++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 320}px`);
    piece.style.setProperty("--y", `${80 + Math.random() * 240}px`);
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 950);
  }
}

function spawnPawParticle(x, y) {
  const particle = document.createElement("span");
  particle.className = "paw-particle";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.setProperty("--x", `${(Math.random() - 0.5) * 70}px`);
  particle.style.setProperty("--y", `${-20 - Math.random() * 70}px`);
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 800);
}

function setupTilt() {
  document.querySelectorAll("[data-tilt]").forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateY(-3px)`;
    });
    element.addEventListener("mouseleave", () => {
      element.style.transform = "";
    });
  });
}

renderTimeline();
renderAwards();
renderPhotos();
setupTilt();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const counterObserver = new IntersectionObserver(animateCounters, { threshold: 0.35 });
document.querySelectorAll(".metric-card").forEach((card) => counterObserver.observe(card));

document.addEventListener("click", (event) => {
  const targetButton = event.target.closest("[data-target]");
  if (targetButton) {
    const section = document.getElementById(targetButton.dataset.target);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    burstConfetti(event.clientX, event.clientY, 8);
  }

  const storyButton = event.target.closest("[data-story-toggle]");
  if (storyButton) toggleInlineStory(storyButton);

  const photo = event.target.closest(".photo-card");
  if (photo) {
    lightboxImage.src = photo.dataset.image;
    lightboxCaption.textContent = photo.dataset.caption;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  }
});

drawerClose.addEventListener("click", closeStory);
drawer.addEventListener("click", (event) => {
  if (event.target === drawer) closeStory();
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeStory();
    closeLightbox();
  }
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPhotos(button.dataset.filter);
  });
});

document.querySelectorAll(".name-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".name-chip").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#nameResult").textContent = button.dataset.result;
    burstConfetti(button.getBoundingClientRect().left + 20, button.getBoundingClientRect().top, 10);
  });
});

document.querySelectorAll(".judge").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#judgeVerdict").textContent = button.dataset.judge;
    button.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 260, easing: "ease-out" }
    );
  });
});

document.querySelector("#legendButton").addEventListener("click", (event) => {
  const next = legends[Math.floor(Math.random() * legends.length)];
  const text = document.querySelector("#legendText");
  text.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], {
    duration: 320,
    easing: "ease-out"
  });
  text.textContent = next;
  burstConfetti(event.clientX, event.clientY, 24);
});

let particleClock = 0;
document.addEventListener("mousemove", (event) => {
  cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  cursor.classList.add("is-active");

  const magnetic = event.target.closest(".magnetic");
  cursor.classList.toggle("is-magnetic", Boolean(magnetic));

  const now = performance.now();
  if (now - particleClock > 55) {
    particleClock = now;
    spawnPawParticle(event.clientX, event.clientY);
  }
});

document.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();
