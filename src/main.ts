import "./style.css";
import {
  characters,
  getGiftPreferenceCounts,
  type CharacterGifts,
} from "./gifts";
import { knownItemRanks } from "./item-order";

const charactersWithPreferences = characters.filter(
  ({ loved, reallyLiked }) => loved.length > 0 || reallyLiked.length > 0,
);

const root = document.querySelector<HTMLDivElement>("#app")!;
const lovedByCharacter = new Map<string, Set<string>>();
for (const character of characters) {
  for (const gift of character.loved) {
    const lovedBy = lovedByCharacter.get(gift.name) ?? new Set<string>();
    lovedBy.add(character.name);
    lovedByCharacter.set(gift.name, lovedBy);
  }
}

let query = "";
let selected: CharacterGifts | null = null;
let suggestions: CharacterGifts[] = [];
let activeIndex = -1;
let timer: number | undefined;
let rosterOpen = false;
const bookmarkStorageKey = "fortunes-weave-bookmarks";
let bookmarks = readBookmarks();

root.innerHTML = `
  <header class="hero-band">
    <div class="hero-inner">
      <div class="masthead">
        <a class="home-link" href="/" aria-label="Fortune’s Weave Gift Almanac home"><h1>Fortune’s Weave <em>Gift Almanac</em></h1></a>
      </div>

      <section class="search-panel" aria-label="Find a character">
        <label for="character-search">Whose preferences are you looking for?</label>
        <div class="search-wrap">
          <span class="search-icon" aria-hidden="true">⌕</span>
          <input id="character-search" type="text" placeholder="Begin typing a name…" autocomplete="off" autofocus role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="suggestions" />
          <button class="clear-button" type="button" aria-label="Clear search" hidden>×</button>
          <ul id="suggestions" class="suggestions" role="listbox" hidden></ul>
        </div>
        <button id="roster-toggle" class="roster-toggle" type="button" aria-expanded="false" aria-controls="all-characters">See all characters</button>
        <div id="all-characters" class="all-characters" hidden></div>
      </section>
    </div>
  </header>

  <main class="page-shell">
    <aside class="bookmark-sidebar" aria-label="Character bookmarks">
      <section id="bookmark-action" class="bookmark-action" aria-label="Bookmark selected character"></section>
      <section id="bookmark-home" class="bookmark-home" aria-labelledby="bookmark-home-title"></section>
    </aside>
    <section id="result" class="result" aria-live="polite"></section>
  </main>
`;

const input = root.querySelector<HTMLInputElement>("#character-search")!;
const list = root.querySelector<HTMLUListElement>("#suggestions")!;
const clearButton = root.querySelector<HTMLButtonElement>(".clear-button")!;
const result = root.querySelector<HTMLElement>("#result")!;
const bookmarkAction = root.querySelector<HTMLElement>("#bookmark-action")!;
const bookmarkHome = root.querySelector<HTMLElement>("#bookmark-home")!;
const rosterToggle = root.querySelector<HTMLButtonElement>("#roster-toggle")!;
const roster = root.querySelector<HTMLDivElement>("#all-characters")!;

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!,
  );

function readBookmarks(): string[] {
  try {
    const saved: unknown = JSON.parse(
      window.localStorage.getItem(bookmarkStorageKey) ?? "[]",
    );
    return Array.isArray(saved)
      ? saved.filter(
          (name): name is string =>
            typeof name === "string" &&
            charactersWithPreferences.some(
              (character) => character.name === name,
            ),
        )
      : [];
  } catch {
    return [];
  }
}

function saveBookmarks() {
  try {
    window.localStorage.setItem(bookmarkStorageKey, JSON.stringify(bookmarks));
  } catch {
    // Keep bookmarks available for the current page even if browser storage is unavailable.
  }
}

function renderBookmarkHome(animateListChange = false) {
  const oldHeight = animateListChange
    ? bookmarkHome.getBoundingClientRect().height
    : 0;
  bookmarkHome.hidden = false;
  bookmarkAction.innerHTML = selected
    ? `<div class="bookmark-current-row"><h2 class="bookmark-current-character">${escapeHtml(selected.name)}</h2><button type="button" class="bookmark-icon-button${bookmarks.includes(selected.name) ? " is-bookmarked" : ""}" data-bookmark-character="${escapeHtml(selected.name)}" data-tooltip="${bookmarks.includes(selected.name) ? "Unbookmark" : "Bookmark"} ${escapeHtml(selected.name)}" aria-label="${bookmarks.includes(selected.name) ? "Unbookmark" : "Bookmark"} ${escapeHtml(selected.name)}" aria-pressed="${bookmarks.includes(selected.name)}"><svg class="bookmark-icon" viewBox="0 0 16 20" aria-hidden="true" focusable="false"><path d="M3 1.5h10v17l-5-3.5-5 3.5z" /></svg></button></div>`
    : "";
  const savedCharacters = bookmarks
    .map((name) =>
      charactersWithPreferences.find((character) => character.name === name),
    )
    .filter((character): character is CharacterGifts => Boolean(character));
  bookmarkHome.innerHTML = `<h2 id="bookmark-home-title">Bookmarks</h2>${
    savedCharacters.length
      ? `<ul>${savedCharacters.map(({ name }) => `<li><a href="?character=${encodeURIComponent(name)}" data-character="${escapeHtml(name)}">${escapeHtml(name)} <span aria-hidden="true">↗</span></a></li>`).join("")}</ul>`
      : "<p>Your bookmarked characters will appear here.</p>"
  }`;
  const newHeight = bookmarkHome.getBoundingClientRect().height;
  if (
    animateListChange &&
    oldHeight > 0 &&
    newHeight > 0 &&
    oldHeight !== newHeight &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    bookmarkHome.getAnimations().forEach((animation) => animation.cancel());
    bookmarkHome.style.overflow = "hidden";
    const animation = bookmarkHome.animate(
      [{ height: `${oldHeight}px` }, { height: `${newHeight}px` }],
      { duration: 260, easing: "cubic-bezier(.22,1,.36,1)" },
    );
    const restoreOverflow = () => {
      bookmarkHome.style.overflow = "";
    };
    animation.onfinish = restoreOverflow;
    animation.oncancel = restoreOverflow;
  }
}

function updateSuggestions() {
  const needle = query.trim().toLocaleLowerCase();
  suggestions = needle
    ? charactersWithPreferences
        .filter(({ name }) => name.toLocaleLowerCase().includes(needle))
        .slice(0, 7)
    : [];
  activeIndex = -1;
  list.innerHTML = suggestions
    .map(
      ({ name }, index) => `
    <li id="suggestion-${index}" role="option" aria-selected="false" data-index="${index}">
      <span>${escapeHtml(name)}</span><span class="option-arrow" aria-hidden="true">↗</span>
    </li>`,
    )
    .join("");
  const open = suggestions.length > 0 && !selected;
  list.hidden = !open;
  input.setAttribute("aria-expanded", String(open));
  if (suggestions.length === 0 && needle) {
    const exact = charactersWithPreferences.find(
      ({ name }) => name.toLocaleLowerCase() === needle,
    );
    if (exact) choose(exact);
  }
}

function renderResult(character: CharacterGifts) {
  const giftCounts = new Map(
    getGiftPreferenceCounts().map(({ name, totalCount }) => [name, totalCount]),
  );
  const orderGifts = (gifts: CharacterGifts["loved"]) => {
    const known = gifts
      .filter(({ name }) => knownItemRanks.has(name))
      .sort(
        (a, b) => knownItemRanks.get(a.name)! - knownItemRanks.get(b.name)!,
      );
    const unknown = gifts
      .filter(({ name }) => !knownItemRanks.has(name))
      .sort((a, b) => a.name.localeCompare(b.name));
    return { known, unknown };
  };
  const groups = [
    {
      title: "Loved",
      subtitle: "Double support gain",
      gifts: orderGifts(character.loved),
      icon: "♥",
      kind: "loved",
    },
    {
      title: "Really liked",
      subtitle: "Strong support gain",
      gifts: orderGifts(character.reallyLiked),
      icon: "✧",
      kind: "really-liked",
    },
  ];
  const visibleGroups = groups.filter(
    ({ gifts }) => gifts.known.length + gifts.unknown.length > 0,
  );
  const hasGifts = visibleGroups.length > 0;
  result.innerHTML = `
    ${
      hasGifts
        ? `<div class="gift-columns${visibleGroups.length === 1 ? " single" : ""}">${visibleGroups
            .map(
              (group) => `
        <section class="gift-card ${group.kind}" aria-labelledby="heading-${group.kind}">
        <div class="card-heading"><span class="gift-icon" aria-hidden="true">${group.icon}</span><div><h3 id="heading-${group.kind}">${group.title}</h3><p>${group.subtitle}</p></div></div>
        ${[group.gifts.known, group.gifts.unknown]
          .map((items) =>
            items.length
              ? `<ul class="gift-list">${items
                  .map((gift) => {
                    const lovedByAnother = [
                      ...(lovedByCharacter.get(gift.name) ?? []),
                    ].some((name) => name !== character.name);
                    const count = giftCounts.get(gift.name) ?? 0;
                    const isFavorite = lovedByAnother;
                    const frequencyClass =
                      !isFavorite
                        ? count <= 4
                          ? "frequency-low"
                          : count <= 9
                            ? "frequency-mid"
                            : "frequency-high"
                        : undefined;
                    const tooltip = [
                      gift.unverified && "Low confidence: may be incorrect",
                      lovedByAnother && "Loved by another character",
                    ]
                      .filter(Boolean)
                      .join(" · ");
                    const classes = [
                      "gift-item",
                      gift.unverified && "unverified",
                      frequencyClass,
                      isFavorite && "favorite",
                      lovedByAnother && "loved-elsewhere",
                      tooltip && "has-tooltip",
                    ]
                      .filter(Boolean)
                      .join(" ");
                    const labels = [
                      gift.name,
                      gift.unverified && "low confidence: may be incorrect",
                      lovedByAnother && "loved by another character",
                    ]
                      .filter(Boolean)
                      .join(", ");
                    return `<li class="${classes}"${labels !== gift.name ? ` aria-label="${escapeHtml(labels)}"` : ""}${tooltip ? ` data-tooltip="${escapeHtml(tooltip)}" tabindex="0"` : ""}><span>${escapeHtml(gift.name)}</span>${lovedByAnother ? '<small class="loved-elsewhere-mark" aria-hidden="true">♥</small>' : ""}</li>`;
                  })
                  .join("")}</ul>`
              : "",
          )
          .join("")}
      </section>`,
            )
            .join("")}</div>`
        : `<div class="empty-state"><span aria-hidden="true">✧</span><p>No named gift preferences have been confirmed for ${escapeHtml(character.name)} yet.</p><small>We’ll add items here as reliable information becomes available.</small></div>`
    }
    <div class="character-actions-row">
      <button type="button" class="bookmark-banner${bookmarks.includes(character.name) ? " is-bookmarked" : ""}" data-bookmark-character="${escapeHtml(character.name)}" aria-pressed="${bookmarks.includes(character.name)}"><svg class="bookmark-icon" viewBox="0 0 16 20" aria-hidden="true" focusable="false"><path d="M3 1.5h10v17l-5-3.5-5 3.5z" /></svg><span class="bookmark-label">${bookmarks.includes(character.name) ? "Bookmarked" : "Bookmark"}</span></button>
      ${hasGifts ? `<aside class="frequency-legend" aria-label="Relative popularity"><span class="legend-title">Relative popularity</span><ul><li><span class="gift-item frequency-low has-tooltip" data-tooltip="Items appearing on fewer than 5 preference lists" tabindex="0" aria-label="Unpopular: Items appearing on fewer than 5 preference lists">Unpopular</span></li><li><span class="gift-item frequency-mid has-tooltip" data-tooltip="Items appearing on 5-9 preference lists" tabindex="0" aria-label="Average: Items appearing on 5-9 preference lists">Average</span></li><li><span class="gift-item frequency-high has-tooltip" data-tooltip="Items appearing on more than 9 preference lists" tabindex="0" aria-label="Popular: Items appearing on more than 9 preference lists">Popular</span></li><li><span class="gift-item favorite has-tooltip" data-tooltip="Items loved by at least 1 other character" tabindex="0" aria-label="Loved: items loved by at least 1 other character">Loved<small class="loved-elsewhere-mark" aria-hidden="true">♥</small></span></li></ul></aside>` : ""}
    </div>
    ${character.automaticRecruitment ? `<aside class="recruitment-note" role="note"><span aria-hidden="true">✦</span><p>${escapeHtml(character.automaticRecruitment)}</p></aside>` : ""}
  `;
}

function updateCharacterUrl(name?: string) {
  const url = new URL(window.location.href);
  if (name) url.searchParams.set("character", name);
  else url.searchParams.delete("character");
  window.history.pushState(name ? { character: name } : {}, "", url);
}

function choose(character: CharacterGifts, updateUrl = true) {
  selected = character;
  query = character.name;
  input.value = character.name;
  if (
    updateUrl &&
    new URL(window.location.href).searchParams.get("character") !==
      character.name
  ) {
    updateCharacterUrl(character.name);
  }
  list.hidden = true;
  input.setAttribute("aria-expanded", "false");
  clearButton.hidden = false;
  root.querySelector(".page-shell")!.classList.add("has-character");
  renderResult(character);
  renderBookmarkHome();
  input.setAttribute("aria-activedescendant", "");
}

function clearSearch(updateUrl = true) {
  if (
    updateUrl &&
    new URL(window.location.href).searchParams.has("character")
  ) {
    updateCharacterUrl();
  }
  selected = null;
  query = "";
  suggestions = [];
  input.value = "";
  result.innerHTML = "";
  renderBookmarkHome();
  root.querySelector(".page-shell")!.classList.remove("has-character");
  clearButton.hidden = true;
  list.hidden = true;
  input.setAttribute("aria-expanded", "false");
  input.removeAttribute("aria-activedescendant");
  window.clearTimeout(timer);
}

root.addEventListener("click", (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
    "[data-bookmark-character]",
  );
  if (!button) return;
  const name = button.dataset.bookmarkCharacter;
  if (!name) return;
  bookmarks = bookmarks.includes(name)
    ? bookmarks.filter((bookmark) => bookmark !== name)
    : [...bookmarks, name];
  saveBookmarks();
  const restoreFocus = bookmarkAction.contains(button);
  renderBookmarkHome(true);
  syncBookmarkButtons();
  if (restoreFocus) {
    bookmarkAction
      .querySelector<HTMLButtonElement>("[data-bookmark-character]")
      ?.focus({ preventScroll: true });
  }
});

function syncBookmarkButtons() {
  root.querySelectorAll<HTMLButtonElement>("[data-bookmark-character]").forEach((button) => {
    const isBookmarked = bookmarks.includes(button.dataset.bookmarkCharacter ?? "");
    button.classList.toggle("is-bookmarked", isBookmarked);
    button.setAttribute("aria-pressed", String(isBookmarked));
  button.setAttribute(
    "aria-label",
    `${isBookmarked ? "Unbookmark" : "Bookmark"} ${button.dataset.bookmarkCharacter ?? "character"}`,
  );
  button.dataset.tooltip = `${isBookmarked ? "Unbookmark" : "Bookmark"} ${button.dataset.bookmarkCharacter ?? "character"}`;
  const label = button.querySelector<HTMLElement>(".bookmark-label");
  if (label) label.textContent = isBookmarked ? "Bookmarked" : "Bookmark";
  });
}

bookmarkHome.addEventListener("click", (event) => {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
    "[data-character]",
  );
  if (!link) return;
  event.preventDefault();
  const character = charactersWithPreferences.find(
    ({ name }) => name === link.dataset.character,
  );
  if (character) choose(character);
});

window.addEventListener("storage", (event) => {
  if (event.key !== bookmarkStorageKey) return;
  bookmarks = readBookmarks();
  renderBookmarkHome(true);
  syncBookmarkButtons();
});

input.addEventListener("input", () => {
  query = input.value;
  if (selected) updateCharacterUrl();
  selected = null;
  renderBookmarkHome();
  root.querySelector(".page-shell")!.classList.remove("has-character");
  clearButton.hidden = query.length === 0;
  result.innerHTML = "";
  window.clearTimeout(timer);
  if (!query.trim()) {
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
    return;
  }
  timer = window.setTimeout(updateSuggestions, 500);
});

input.addEventListener("keydown", (event) => {
  if (list.hidden || !suggestions.length) {
    if (event.key === "Enter") {
      const exact = charactersWithPreferences.find(
        ({ name }) =>
          name.toLocaleLowerCase() === input.value.trim().toLocaleLowerCase(),
      );
      if (exact) choose(exact);
    }
    return;
  }
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    activeIndex =
      (activeIndex + direction + suggestions.length) % suggestions.length;
    [...list.children].forEach((item, index) =>
      item.setAttribute("aria-selected", String(index === activeIndex)),
    );
    input.setAttribute("aria-activedescendant", `suggestion-${activeIndex}`);
  } else if (event.key === "Enter" && activeIndex >= 0) {
    event.preventDefault();
    choose(suggestions[activeIndex]);
  } else if (event.key === "Escape") {
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
  }
});

list.addEventListener("click", (event) => {
  const option = (event.target as HTMLElement).closest<HTMLElement>(
    '[role="option"]',
  );
  if (!option) return;
  const character = suggestions[Number(option.dataset.index)];
  if (character) choose(character);
});

clearButton.addEventListener("click", () => {
  clearSearch();
  input.focus();
});

document.addEventListener("keydown", (event) => {
  if (
    (event.metaKey || event.ctrlKey) &&
    event.key.toLocaleLowerCase() === "k"
  ) {
    event.preventDefault();
    if (input.value || selected) clearSearch();
    input.focus();
  }
});

document.addEventListener("click", (event) => {
  if (
    !event.target ||
    !root.querySelector(".search-wrap")!.contains(event.target as Node)
  ) {
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
  }
});

rosterToggle.addEventListener("click", () => {
  rosterOpen = !rosterOpen;
  rosterToggle.setAttribute("aria-expanded", String(rosterOpen));
  rosterToggle.textContent = rosterOpen
    ? "Hide character list"
    : "See all characters";
  if (rosterOpen) {
    roster.hidden = false;
    roster.inert = false;
    roster.removeAttribute("aria-hidden");
    if (!roster.childElementCount) {
      const ordered = [...charactersWithPreferences].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      roster.innerHTML = `<ul>${ordered.map(({ name }) => `<li><button type="button" data-character="${escapeHtml(name)}">${escapeHtml(name)}</button></li>`).join("")}</ul>`;
    }
    roster.style.setProperty(
      "--roster-open-height",
      `${roster.scrollHeight + 20}px`,
    );
    roster.getBoundingClientRect();
    roster.classList.add("is-open");
  } else {
    roster.inert = true;
    roster.setAttribute("aria-hidden", "true");
    roster.classList.remove("is-open");
    const hideClosedRoster = (event: TransitionEvent) => {
      if (event.target !== roster || event.propertyName !== "max-height")
        return;
      roster.removeEventListener("transitionend", hideClosedRoster);
      if (!rosterOpen) roster.hidden = true;
    };
    roster.addEventListener("transitionend", hideClosedRoster);
  }
});

roster.addEventListener("click", (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
    "[data-character]",
  );
  if (!button) return;
  const character = charactersWithPreferences.find(
    ({ name }) => name === button.dataset.character,
  );
  if (character) {
    choose(character);
    rosterOpen = false;
    roster.classList.remove("is-open");
    roster.inert = true;
    roster.setAttribute("aria-hidden", "true");
    roster.hidden = true;
    rosterToggle.textContent = "See all characters";
    rosterToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("popstate", () => {
  const name = new URL(window.location.href).searchParams.get("character");
  const character = charactersWithPreferences.find(
    ({ name: candidate }) =>
      candidate.toLocaleLowerCase() === name?.toLocaleLowerCase(),
  );
  if (character) choose(character, false);
  else clearSearch(false);
});

const initialCharacterName = new URL(window.location.href).searchParams.get(
  "character",
);
const initialCharacter = charactersWithPreferences.find(
  ({ name }) =>
    name.toLocaleLowerCase() === initialCharacterName?.toLocaleLowerCase(),
);
if (initialCharacter) choose(initialCharacter, false);
else renderBookmarkHome();

input.focus();
