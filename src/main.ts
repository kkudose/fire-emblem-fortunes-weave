import './style.css';
import { characters, getGiftPreferenceCounts, type CharacterGifts } from './gifts';

const root = document.querySelector<HTMLDivElement>('#app')!;
const lovedByCharacter = new Map<string, Set<string>>();
for (const character of characters) {
  for (const gift of character.loved) {
    const lovedBy = lovedByCharacter.get(gift.name) ?? new Set<string>();
    lovedBy.add(character.name);
    lovedByCharacter.set(gift.name, lovedBy);
  }
}

let query = '';
let selected: CharacterGifts | null = null;
let suggestions: CharacterGifts[] = [];
let activeIndex = -1;
let timer: number | undefined;
let rosterOpen = false;

root.innerHTML = `
  <header class="hero-band">
    <div class="hero-inner">
      <div class="masthead">
        <h1>Fortune’s Weave <em>Gift Almanac</em></h1>
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
  const giftCounts = new Map(getGiftPreferenceCounts().map(({ name, totalCount }) => [name, totalCount]));
  const groups = [
    { title: 'Loved', subtitle: 'Double support gain', gifts: character.loved, icon: '✦', kind: 'loved' },
    { title: 'Really liked', subtitle: 'Strong support gain', gifts: character.reallyLiked, icon: '✧', kind: 'really-liked' }
  ];
  const visibleGroups = groups.filter(({ gifts }) => gifts.length > 0);
  const hasGifts = visibleGroups.length > 0;
  result.innerHTML = `
    <aside class="character-rail" aria-label="Selected character"><h2>${escapeHtml(character.name)}</h2></aside>
    ${hasGifts ? `<div class="gift-columns${visibleGroups.length === 1 ? ' single' : ''}">${visibleGroups.map((group) => `
        <section class="gift-card ${group.kind}" aria-labelledby="heading-${group.kind}">
        <div class="card-heading"><span class="gift-icon" aria-hidden="true">${group.icon}</span><div><h3 id="heading-${group.kind}">${group.title}</h3><p>${group.subtitle}</p></div></div>
        <ul class="gift-list">${group.gifts.map((gift) => {
          const lovedByAnother = [...(lovedByCharacter.get(gift.name) ?? [])].some((name) => name !== character.name);
          const count = giftCounts.get(gift.name) ?? 0;
          const isFavorite = group.kind === 'loved' || lovedByAnother;
          const frequencyClass = group.kind === 'really-liked' && !isFavorite
            ? count <= 4 ? 'frequency-low' : count <= 9 ? 'frequency-mid' : 'frequency-high'
            : undefined;
          const tooltip = [gift.unverified && 'Low confidence: may be incorrect', lovedByAnother && 'Loved by another character'].filter(Boolean).join(' · ');
          const classes = ['gift-item', gift.unverified && 'unverified', frequencyClass, isFavorite && 'favorite', lovedByAnother && 'loved-elsewhere', tooltip && 'has-tooltip'].filter(Boolean).join(' ');
          const labels = [gift.name, gift.unverified && 'low confidence: may be incorrect', lovedByAnother && 'loved by another character'].filter(Boolean).join(', ');
          return `<li class="${classes}"${labels !== gift.name ? ` aria-label="${escapeHtml(labels)}"` : ''}${tooltip ? ` data-tooltip="${escapeHtml(tooltip)}" tabindex="0"` : ''}><span>${escapeHtml(gift.name)}</span>${lovedByAnother ? '<small class="loved-elsewhere-mark" aria-hidden="true">♥</small>' : ''}</li>`;
        }).join('')}</ul>
      </section>`).join('')}</div>` : `<div class="empty-state"><span aria-hidden="true">✧</span><p>No named gift preferences have been confirmed for ${escapeHtml(character.name)} yet.</p><small>We’ll add items here as reliable information becomes available.</small></div>`}
    ${hasGifts ? `<aside class="frequency-legend" aria-label="Number of times items appear in Loved or Really liked lists across all characters"><span class="legend-title"># of times items appear in these lists</span><ul><li><span class="gift-item frequency-low">1–4</span></li><li><span class="gift-item frequency-mid">5–9</span></li><li><span class="gift-item frequency-high">10+</span></li><li><span class="gift-item favorite">Loved</span></li></ul></aside>` : ''}
    ${character.automaticRecruitment ? `<aside class="recruitment-note" role="note"><span aria-hidden="true">✦</span><p>${escapeHtml(character.automaticRecruitment)}</p></aside>` : ''}
  `;
}

function updateCharacterUrl(name?: string) {
  const url = new URL(window.location.href);
  if (name) url.searchParams.set('character', name);
  else url.searchParams.delete('character');
  window.history.pushState(name ? { character: name } : {}, '', url);
}

function choose(character: CharacterGifts, updateUrl = true) {
  selected = character;
  query = character.name;
  input.value = character.name;
  if (updateUrl && new URL(window.location.href).searchParams.get('character') !== character.name) {
    updateCharacterUrl(character.name);
  }
  list.hidden = true;
  input.setAttribute('aria-expanded', 'false');
  clearButton.hidden = false;
  root.querySelector('.page-shell')!.classList.add('has-character');
  renderResult(character);
  input.setAttribute('aria-activedescendant', '');
}

function clearSearch(updateUrl = true) {
  if (updateUrl && new URL(window.location.href).searchParams.has('character')) {
    updateCharacterUrl();
  }
  selected = null;
  query = '';
  suggestions = [];
  input.value = '';
  result.innerHTML = '';
  root.querySelector('.page-shell')!.classList.remove('has-character');
  clearButton.hidden = true;
  list.hidden = true;
  input.setAttribute('aria-expanded', 'false');
  input.removeAttribute('aria-activedescendant');
  window.clearTimeout(timer);
}

input.addEventListener('input', () => {
  query = input.value;
  if (selected) updateCharacterUrl();
  selected = null;
  root.querySelector('.page-shell')!.classList.remove('has-character');
  clearButton.hidden = query.length === 0;
  result.innerHTML = '';
  window.clearTimeout(timer);
  if (!query.trim()) {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    return;
  }
  timer = window.setTimeout(updateSuggestions, 500);
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

list.addEventListener('click', (event) => {
  const option = (event.target as HTMLElement).closest<HTMLElement>('[role="option"]');
  if (!option) return;
  const character = suggestions[Number(option.dataset.index)];
  if (character) choose(character);
});

clearButton.addEventListener('click', () => {
  clearSearch();
  input.focus();
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === 'k') {
    event.preventDefault();
    if (input.value || selected) clearSearch();
    input.focus();
  }
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
  if (rosterOpen) {
    roster.hidden = false;
    roster.inert = false;
    roster.removeAttribute('aria-hidden');
    if (!roster.childElementCount) {
      const ordered = [...characters].sort((a, b) => a.name.localeCompare(b.name));
      roster.innerHTML = `<ul>${ordered.map(({ name }) => `<li><button type="button" data-character="${escapeHtml(name)}">${escapeHtml(name)}</button></li>`).join('')}</ul>`;
    }
    roster.style.setProperty('--roster-open-height', `${roster.scrollHeight + 20}px`);
    roster.getBoundingClientRect();
    roster.classList.add('is-open');
  } else {
    roster.inert = true;
    roster.setAttribute('aria-hidden', 'true');
    roster.classList.remove('is-open');
    const hideClosedRoster = (event: TransitionEvent) => {
      if (event.target !== roster || event.propertyName !== 'max-height') return;
      roster.removeEventListener('transitionend', hideClosedRoster);
      if (!rosterOpen) roster.hidden = true;
    };
    roster.addEventListener('transitionend', hideClosedRoster);
  }
});

roster.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-character]');
  if (!button) return;
  const character = characters.find(({ name }) => name === button.dataset.character);
  if (character) {
    choose(character);
    rosterOpen = false;
    roster.classList.remove('is-open');
    roster.inert = true;
    roster.setAttribute('aria-hidden', 'true');
    roster.hidden = true;
    rosterToggle.textContent = 'See all characters';
    rosterToggle.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('popstate', () => {
  const name = new URL(window.location.href).searchParams.get('character');
  const character = characters.find(({ name: candidate }) => candidate.toLocaleLowerCase() === name?.toLocaleLowerCase());
  if (character) choose(character, false);
  else clearSearch(false);
});

const initialCharacterName = new URL(window.location.href).searchParams.get('character');
const initialCharacter = characters.find(({ name }) => name.toLocaleLowerCase() === initialCharacterName?.toLocaleLowerCase());
if (initialCharacter) choose(initialCharacter, false);

input.focus();
