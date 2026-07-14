(function () {
  const lessons = [
    {
      kicker: "Step 01 · establish quantity",
      title: "Repetition comes before number.",
      copy: "A reader can distinguish one mark from two and two from three without knowing what any mark is called.",
      inference: "More marks represent more of the same thing.",
      artifact: `
        <div class="artifact-sequence" aria-label="One mark, two marks, and three marks">
          ${tallyGroup(1, "one group")}
          ${tallyGroup(2, "two group")}
          ${tallyGroup(3, "three group")}
        </div>`
    },
    {
      kicker: "Step 02 · earn the numerals",
      title: "A compact mark replaces a group.",
      copy: "Repeated pairings allow an abstract numeral to acquire meaning. The symbol is shown only after its quantity is visually stable.",
      inference: "The new mark is a shorthand for a specific quantity.",
      artifact: `
        <div class="mapping" aria-label="Tallies mapped to the numerals one, two, and three">
          ${mappingItem("1", "│")}
          ${mappingItem("2", "││")}
          ${mappingItem("3", "│││")}
        </div>`
    },
    {
      kicker: "Step 03 · establish equivalence",
      title: "Different forms can mean the same amount.",
      copy: "The equality mark is placed between representations already proven to indicate identical quantities.",
      inference: "The two sides may look different while remaining quantitatively equivalent.",
      artifact: `<div class="artifact-expression" aria-label="Three tally marks equal the numeral three">│││ <span class="earned">=</span> 3</div>`
    },
    {
      kicker: "Step 04 · demonstrate combination",
      title: "An operation is shown before it is named.",
      copy: "Two visible groups are combined. Repeating the pattern at several magnitudes gives the operator a stable meaning.",
      inference: "The cross-shaped mark indicates that separate quantities are being combined.",
      artifact: `<div class="artifact-expression" aria-label="Two plus three equals five">2 <span class="earned">+</span> 3 <span class="earned">=</span> 5</div>`
    },
    {
      kicker: "Step 05 · reveal scale",
      title: "Patterns extend beyond what can be tallied.",
      copy: "Once multiplication and ten are established, repeated scaling can indicate quantities too large to carve as individual marks.",
      inference: "A small symbolic system can describe orders of magnitude.",
      artifact: `<div class="artifact-expression" aria-label="Ten times ten equals one hundred">10 <span class="earned">×</span> 10 <span class="earned">=</span> 100</div>`
    }
  ];

  function tallyGroup(count, label) {
    const marks = Array.from({ length: count }, (_, i) => `<i class="tally" style="--tilt:${i % 2 ? 1 : -1}deg"></i>`).join("");
    return `<div class="artifact-group"><div class="tallies" aria-hidden="true">${marks}</div><span class="artifact-label">${label}</span></div>`;
  }

  function mappingItem(number, marks) {
    return `<div class="mapping-item"><div><strong>${number}</strong><div aria-hidden="true">${marks}</div></div></div>`;
  }

  const shell = document.querySelector("[data-lesson]");
  if (shell) {
    const tabs = Array.from(shell.querySelectorAll("[data-step]"));
    const artifact = shell.querySelector("[data-artifact]");
    const kicker = shell.querySelector("[data-kicker]");
    const title = shell.querySelector("[data-title]");
    const copy = shell.querySelector("[data-copy]");
    const inference = shell.querySelector("[data-inference]");
    const progress = shell.querySelector("[data-progress]");
    const previous = shell.querySelector("[data-previous]");
    const next = shell.querySelector("[data-next]");
    let current = 0;

    function showLesson(index, focusTab) {
      current = Math.max(0, Math.min(lessons.length - 1, index));
      const lesson = lessons[current];
      artifact.innerHTML = lesson.artifact;
      kicker.textContent = lesson.kicker;
      title.textContent = lesson.title;
      copy.textContent = lesson.copy;
      inference.textContent = lesson.inference;
      progress.textContent = `${current + 1} / ${lessons.length}`;
      previous.disabled = current === 0;
      next.disabled = current === lessons.length - 1;
      tabs.forEach((tab, tabIndex) => {
        const active = tabIndex === current;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      if (focusTab) tabs[current].focus();
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => showLesson(index, false));
      tab.addEventListener("keydown", event => {
        if (event.key === "ArrowRight") { event.preventDefault(); showLesson((current + 1) % lessons.length, true); }
        if (event.key === "ArrowLeft") { event.preventDefault(); showLesson((current - 1 + lessons.length) % lessons.length, true); }
      });
    });
    previous.addEventListener("click", () => showLesson(current - 1, false));
    next.addEventListener("click", () => showLesson(current + 1, false));
    showLesson(0, false);
  }

  const header = document.querySelector("[data-header]");
  function updateHeader() { header.classList.toggle("is-scrolled", window.scrollY > 18); }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const menuButton = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }));

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    reveals.forEach(element => observer.observe(element));
  } else {
    reveals.forEach(element => element.classList.add("is-visible"));
  }
})();
