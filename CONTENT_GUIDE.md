# Content Guide

This site uses simple multi-page tabs:
- `index.html` (Home)
- `about.html`
- `projects.html`
- `notes.html`
- `adventures.html`
- `CV.html` (Résumé)

## 1) Professional photo
- Replace `data/photos/professional/main.jpg` to update the homepage portrait.

## 2) Notes content (topic tabs + readable markdown)
- Note index file: `data/notes/notes.json`
- Note markdown files: `data/notes/*.md`

### notes.json format
Each note item should include:
- `title` (string)
- `date` (`YYYY-MM-DD`)
- `topic` (string, used as topic tab)
- `tags` (array of strings)
- `summary` (short card/list summary)
- `file` (relative path to markdown file)

Example:
```json
{
  "title": "Transformer Attention Basics",
  "date": "2026-01-03",
  "topic": "LLMs",
  "tags": ["Transformers", "Attention"],
  "summary": "A concise mental model of Q/K/V attention and scaling.",
  "file": "data/notes/transformer-attention-basics.md"
}
```

## 3) Adventure photos
- Add photos in: `data/adventures/photos/`
- Register items in: `data/adventures/adventures.json`

### adventures.json format
Each item:
- `title`
- `date` (`YYYY-MM-DD`)
- `location`
- `caption`
- `image` (optional relative path to a photo)

## 4) Résumé and contact links
- Replace `CV.pdf` and update the date and download filename in `CV.html`.
- Update the contact links in `index.html`.
