# Velaxor — Studio Website

Static marketing site for Velaxor. No build step required — plain HTML/CSS/JS.

## Structure

```
velaxor-website/
├── index.html          Main page
├── css/
│   └── style.css       All styling
├── js/
│   └── script.js       Form handling + footer year
├── assets/
│   └── hero-0ad.png    Hero reference image (0 A.D. project, CC BY-SA 3.0)
└── README.md
```

## Before going live

1. **Email capture**: Sign up at [formspree.io](https://formspree.io), create a form,
   and replace `YOUR_FORM_ID` in `index.html` (the form's `action` attribute) with
   your real endpoint.
2. **Avarra section**: The `#games` section is currently a placeholder teaser.
   Expand it once there's real gameplay footage to show.
3. **Hero image**: `assets/hero-0ad.png` is 0 A.D.'s own promotional screenshot,
   used as a placeholder reference visual with attribution in the hero caption.
   Swap it for real Avarra screenshots once available.

## Local preview

Open `index.html` directly in a browser, or use WebStorm's built-in browser
preview (click the browser icon in the gutter next to `<html>`).

## Deploy (Render)

1. Push this folder to a GitHub repo.
2. In Render: **New → Static Site** → connect the repo.
3. Build command: leave empty. Publish directory: `.` (repo root).
4. Add `velaxor.xyz` under **Custom Domains** and point Domain Cheap's DNS
   at the record Render provides.