# Content Guide

This site uses simple multi-page tabs:
- `index.html` (Home)
- `about.html`
- `projects.html`
- `notes.html`
- `adventures.html`
- `CV.html`

## 1) Professional photo
- Preferred path: `data/photos/professional/main.jpg`
- Fallback path: `profile.jpg`
- Config lives in `data/profile.json` (`professionalPhoto`, `heroFallbackPhoto`).

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
- `image` (relative image path)

## 4) Profile/contact links
- Update `data/profile.json` for email, phone, GitHub, LinkedIn, and tagline.
