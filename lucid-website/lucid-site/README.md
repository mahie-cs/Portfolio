# Lucid website

A static, multi-page website for Lucid, the ad-free YouTube Music client for Android.
No build step and no dependencies.

## Files

- `index.html` : all four pages (Home, Features, Download, About), switched by the URL hash
- `css/style.css` : styles, light and dark themes, reduced-motion and reduced-transparency support
- `js/main.js` : interactive player demo, ASCII background, download popup, mobile menu, page routing
- `assets/favicon.svg` : the Lucid logo

## Run it

Open `index.html` in a browser, or serve the folder with any static host
(GitHub Pages, Netlify, Cloudflare Pages) or locally:

    python3 -m http.server 8000

## Releasing a new version

Open `js/main.js` and change this line near the top of the "Release" section:

    var VERSION='1.0.0'

Every download link and file name is built from it as
`https://github.com/mahie-cs/Lucid/releases/download/v<version>/lucid-<version>-<architecture>.apk`.
The architectures are `arm64-v8a`, `armeabi-v7a`, `universal` and `x86_64`.
The size labels in the download popup (in `index.html`) are written by hand, so update them too.
The links in `index.html` also carry the version once as a fallback for visitors without JavaScript.

## Desktop

The desktop version is marked "Upcoming". When it ships, replace the Desktop card on the Download page.
