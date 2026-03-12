# Content Guide for Portfolio Updates

This site is designed so you can update content without touching `app.js`.

## 1) Professional photos
- Main professional profile photo path:
  - `data/photos/professional/main.jpg`
- Fallback photo currently used:
  - `profile.jpg`

If you replace `data/photos/professional/main.jpg`, the hero image updates automatically.

## 2) Adventure photos (tennis/travel/life)
- Add photo files under:
  - `data/adventures/photos/`
- Register each photo in:
  - `data/adventures/adventures.json`

### Format (`data/adventures/adventures.json`)
Each item:
- `title` (string)
- `date` (`YYYY-MM-DD`)
- `location` (string)
- `caption` (string)
- `image` (relative path to photo)

## 3) Learning notes
- Add markdown notes under:
  - `data/notes/`
- Register notes in:
  - `data/notes/notes.json`

### Format (`data/notes/notes.json`)
Each item:
- `title` (string)
- `date` (`YYYY-MM-DD`)
- `tags` (array of strings)
- `summary` (short string shown on card)
- `file` (relative path to `.md` note)

The app shows cards from `notes.json` and links directly to each markdown file.

## 4) Profile/contact details
Update:
- `data/profile.json`

Useful keys:
- `tagline`, `headline`, `summary`
- `linkedin`, `github`, `cvFile`
- `professionalPhoto`

