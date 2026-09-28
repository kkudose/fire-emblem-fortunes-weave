import './style.css';
import { characters, type CharacterGifts } from './gifts';

const root = document.querySelector<HTMLDivElement>('#app')!;
let query = '';
let selected: CharacterGifts | null = null;
let suggestions: CharacterGifts[] = [];
let activeIndex = -1;
let timer: number | undefined;
let rosterOpen = false;

root.innerHTML = `
  <main class="page-shell">
    <header class="masthead">
      <span class="eyebrow"><span class="seal" aria-hidden="true">✦</span> A field guide for thoughtful gifts</span>
      <h1>Fortune’s Weave <em>Gift Almanac</em></h1>
    </header>

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

    <section id="result" class="result" aria-live="polite"></section>

  </main>
`;

const input = root.querySelector<HTMLInputElement>('#character-search')!;
const list = root.querySelector<HTMLUListElement>('#suggestions')!;
const clearButton = root.querySelector<HTMLButtonElement>('.clear-button')!;
const result = root.querySelector<HTMLElement>('#result')!;
const rosterToggle = root.querySelector<HTMLButtonElement>('#roster-toggle')!;
const roster = root.querySelector<HTMLDivElement>('#all-characters')!;

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);

function updateSuggestions() {
  const needle = query.trim().toLocaleLowerCase();
  suggestions = needle ? characters.filter(({ name }) => name.toLocaleLowerCase().includes(needle)).slice(0, 7) : [];
  activeIndex = -1;
  list.innerHTML = suggestions.map(({ name }, index) => `
    <li id="suggestion-${index}" role="option" aria-selected="false" data-index="${index}">
      <span>${escapeHtml(name)}</span><span class="option-arrow" aria-hidden="true">↗</span>
    </li>`).join('');
  const open = suggestions.length > 0 && !selected;
  list.hidden = !open;
  input.setAttribute('aria-expanded', String(open));
  if (suggestions.length === 0 && needle) {
    const exact = characters.find(({ name }) => name.toLocaleLowerCase() === needle);
    if (exact) choose(exact);
  }
}

function renderResult(character: CharacterGifts) {
  const groups = [
    { title: 'Loved', subtitle: 'A rare favorite', gifts: character.loved, icon: '✦', kind: 'loved' },
    { title: 'Preferred', subtitle: 'A documented good match', gifts: character.preferred, icon: '✧', kind: 'preferred' }
  ];
  const visibleGroups = groups.filter(({ gifts }) => gifts.length > 0);
  const hasGifts = visibleGroups.length > 0;
  result.innerHTML = `
    <div class="result-heading"><h2>${escapeHtml(character.name)}</h2><span class="divider" aria-hidden="true">✧</span></div>
    ${hasGifts ? `<div class="gift-columns">${visibleGroups.map((group) => `
      <section class="gift-card ${group.kind}" aria-labelledby="heading-${group.kind}">
        <div class="card-heading"><span class="gift-icon" aria-hidden="true">${group.icon}</span><div><h3 id="heading-${group.kind}">${group.title}</h3><p>${group.subtitle}</p></div></div>
        <ul class="gift-list">${group.gifts.map((gift) => `<li class="gift-item">${escapeHtml(gift)}</li>`).join('')}</ul>
      </section>`).join('')}</div>` : `<div class="empty-state"><span aria-hidden="true">✧</span><p>No named preferred gifts have been confirmed for ${escapeHtml(character.name)} yet.</p><small>We’ll add items here as reliable information becomes available.</small></div>`}
  `;
}

function choose(character: CharacterGifts) {
  selected = character;
  query = character.name;
  input.value = character.name;
  list.hidden = true;
  input.setAttribute('aria-expanded', 'false');
  clearButton.hidden = false;
  renderResult(character);
  input.setAttribute('aria-activedescendant', '');
}

input.addEventListener('input', () => {
  query = input.value;
  selected = null;
  clearButton.hidden = query.length === 0;
  result.innerHTML = '';
  window.clearTimeout(timer);
  if (!query.trim()) {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    return;
  }
  timer = window.setTimeout(updateSuggestions, 260);
});

input.addEventListener('keydown', (event) => {
  if (list.hidden || !suggestions.length) {
    if (event.key === 'Enter') {
      const exact = characters.find(({ name }) => name.toLocaleLowerCase() === input.value.trim().toLocaleLowerCase());
      if (exact) choose(exact);
    }
    return;
  }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    activeIndex = (activeIndex + direction + suggestions.length) % suggestions.length;
    [...list.children].forEach((item, index) => item.setAttribute('aria-selected', String(index === activeIndex)));
    input.setAttribute('aria-activedescendant', `suggestion-${activeIndex}`);
  } else if (event.key === 'Enter' && activeIndex >= 0) {
    event.preventDefault();
    choose(suggestions[activeIndex]);
  } else if (event.key === 'Escape') {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
  }
});

list.addEventListener('mousedown', (event) => {
  const option = (event.target as HTMLElement).closest<HTMLElement>('[role="option"]');
  if (option) choose(suggestions[Number(option.dataset.index)]);
});

clearButton.addEventListener('click', () => {
  selected = null;
  query = '';
  input.value = '';
  result.innerHTML = '';
  clearButton.hidden = true;
  input.focus();
});

document.addEventListener('click', (event) => {
  if (!event.target || !root.querySelector('.search-wrap')!.contains(event.target as Node)) {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
  }
});

rosterToggle.addEventListener('click', () => {
  rosterOpen = !rosterOpen;
  rosterToggle.setAttribute('aria-expanded', String(rosterOpen));
  rosterToggle.textContent = rosterOpen ? 'Hide character list' : 'See all characters';
  roster.hidden = !rosterOpen;
  if (rosterOpen && !roster.childElementCount) {
    const ordered = [...characters].sort((a, b) => a.name.localeCompare(b.name));
    roster.innerHTML = `<ul>${ordered.map(({ name }) => `<li><button type="button" data-character="${escapeHtml(name)}">${escapeHtml(name)}</button></li>`).join('')}</ul>`;
  }
});

roster.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-character]');
  if (!button) return;
  const character = characters.find(({ name }) => name === button.dataset.character);
  if (character) {
    choose(character);
    rosterOpen = false;
    roster.hidden = true;
    rosterToggle.textContent = 'See all characters';
    rosterToggle.setAttribute('aria-expanded', 'false');
  }
});

input.focus();
