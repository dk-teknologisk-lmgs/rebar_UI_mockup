# Rebar UI Mockup (v1)

Standalone HTML/CSS/JS prototype of the new Rebar Inspection Tool UI.
**No backend, no install** — just open the HTML files in any browser.

## How to use

1. Unzip this folder anywhere on your computer.
2. Drop a logo at `assets/logo.png` (optional — Teknologisk Institut logo).
3. Drop a sample rebar photo at `assets/sample-rebar.jpg` (optional).
4. Open any `.html` file by double-clicking it.

## Pages

| File | Page |
|---|---|
| `login.html` | Login screen |
| `projects.html` | All projects list |
| `project.html` | Single project (Info & docs / Locations) |
| `location.html` | Location with drawing + control points |
| `control-point.html` | Control point with requirements + capture sessions |
| `capture.html` | Live camera capture |
| `preview.html` | Just-captured preview (single + gallery) |
| `annotation.html` | Annotation / measurement workspace |

## Note for testing

This is a **visual prototype**. Buttons navigate but don't save anything.
Mock data lives in `js/mock-data.js` — feel free to edit it to test with your own examples.

## Sharing

Zip the whole folder and email/upload it. Recipients only need a browser.