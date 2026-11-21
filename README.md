# Fortune’s Weave Gift Almanac

Search gift preferences for the 75 characters in *Fire Emblem: Fortune’s Weave*. Type a name or browse the full roster.

## Run locally

Requires [Bun](https://bun.sh/).

```sh
bun install
bun run dev
```

To build the site, run `bun run build`.

## Gift data

Gift reactions are generated from the consolidated `data/gifts.sqlite` database during each production build. Loved and Really Liked entries marked unverified in the database receive the low-confidence indicator in the app. Lower-tier results are omitted from the Loved and Really Liked lists. Do not edit generated gift data by hand; update and recalculate the SQLite database, then rebuild.

Characters without a Loved or Really Liked database entry remain searchable.

## Recruitment notes

Automatic recruitment notes appear under a character’s gift list only when a guide confirms an automatic join. They identify the Flame Lord path and include known later-part conditions. Other characters generally require manual recruitment or are not recruitable on that path. Recruitment details are based on [RPG Site’s route-by-route recruitment guide](https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them).
