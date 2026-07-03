# Turbo Taboo

A browser-playable Taboo word-guessing game. Two teams take turns describing
a target word without saying it or any of its five taboo words, racing a
countdown timer to score as many correct guesses as possible.

## Play locally

No build step needed — it's plain HTML/CSS/JS.

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

(Opening `index.html` directly in a browser also works.)

## How to play

1. Enter both team names, pick a turn length and number of turns per team, and hit **Start Game**.
2. Pass the device to the describer for the active team and tap **I'm Ready — Go!**.
3. Describe the target word on the card without saying it or any of the 5 taboo words while your team shouts out guesses.
4. Tap **✅ Correct** to score a point and draw the next card, **⏭ Skip** to pass a hard card, or **✋ Taboo** if a forbidden word was said.
5. When the timer hits zero, review the turn summary and continue to the next team.
6. After all turns are played, the team with the most correct guesses wins.

## Project structure

```
index.html          Game screens (setup, turn, play, summary, game over)
css/style.css        Styling
js/cards.js          Taboo card deck (20 cards, 5 categories)
js/app.js            Game state machine and logic
data/cards.json      Same deck data in plain JSON, for reuse outside the app
.github/workflows/   GitHub Pages deploy workflow
```

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that deploys the site to GitHub Pages automatically on every push to `main`.

To enable it: go to **Settings → Pages** in this repository and set
**Source** to **GitHub Actions**. The site will publish at
`https://<owner>.github.io/<repo>/`.

## Adding more cards

Add entries to the `TABOO_CARDS` array in `js/cards.js` (and optionally
`data/cards.json` for reference) following the existing shape:

```json
{
  "id": 21,
  "targetWord": "EXAMPLE",
  "category": "Technology",
  "tabooWords": ["Word1", "Word2", "Word3", "Word4", "Word5"]
}
```
