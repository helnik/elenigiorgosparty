# 🎉 Πάρτι Γενεθλίων – Ελένη & Γιώργος

A single-page interactive birthday party invitation for **Ελένη (4)** and **Γιώργος (2)**, themed around **Disney Princesses & Superheroes**.

## Overview

The invitation is built as a side-scrolling, game-style experience with multiple "zones" the guest navigates through:

| Zone | Content |
|------|---------|
| Start Screen | Welcome splash with a "Start" button |
| Zone 1 – Heroes | Meet the birthday kids |
| Zone 2 – Time Quest | Date & time details + calendar download |
| Zone 3 – Location Portal | Venue info, directions & website link |
| Zone 4 – RSVP Quest | Call / Viber RSVP buttons with deadline |
| Zone 5 – Finale | Closing message |

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full application (HTML + CSS + JS) |
| `settings.js` | All configurable text, dates, venue, and RSVP details |

## Quick Start

1. Open `index.html` in any modern browser — no build step or server required.
2. Edit `settings.js` to customise names, dates, venue, and messages.

## Configuration (`settings.js`)

The `PARTY` object exposes every user-facing string and setting:

- **`child1` / `child2`** — Name, age, emoji, emblem, and labels for each child.
- **`date`** — Display date, time, and mini-calendar values.
- **`calendar`** — ICS start/end times and download filename.
- **`venue`** — Name, address, Google Maps URL, website, and geo coordinates.
- **`rsvp`** — Deadline, phone number, and allergen note.
- **`theme`** — Party theme label.
- **`text`** — All UI strings (titles, button labels, toasts, Viber message template).

## Features

- Parallax sky, stars, clouds, and hills
- Animated superhero characters
- One-tap **Add to Calendar** (`.ics` download)
- **Google Maps** directions link
- **Viber** RSVP with pre-filled message
- Fully responsive — works on mobile and desktop
- No external dependencies
