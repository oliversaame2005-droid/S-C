# S&C By Saame — First release

A dependency-free, static coaching website for Oliver Saame. The existing red, black, and off-white palette, condensed typography, sports imagery, and responsive card layouts are retained. English and Estonian flag controls translate all active pages; only the language preference is saved locally.

## Run and validate

Node.js 18+ is sufficient; no dependency installation or build step is needed.

```sh
npm run dev
npm run check
```

The local server listens on port 3000 (`PORT` can override it). Deploy the static files with GitHub Pages from `main` / repository root. The HTML references release-versioned scripts/styles to avoid mixing older cached assets with this release.

## Pages and services

Navigation is Home, Coaching, Training Plans, About, Contact. Coaching contains two in-person options and the three monthly packages. Training Plans contains only the three upcoming sport programs. Team coaching is a secondary consultation option, not another main catalogue category.

| Offering | Price / terms |
|---|---|
| 1-on-1 S&C Coaching | €45 / 60-minute session |
| Small Group S&C Coaching | €20–25 / athlete / session; 2–4 athletes |
| Performance Online | €119 / month |
| Performance Hybrid — flagship | €199 / month; Online benefits + two 60-minute in-person sessions, technique coaching, initial assessment, progress testing about every 8–12 weeks |
| Performance Elite | €299 / month; Online benefits + four 60-minute in-person sessions, priority feedback, development roadmap, tracking/reviews |
| Football, Basketball, Volleyball Performance Programs | Coming soon; future price €39–69 each |

Monthly coaching represents recurring packages; no subscriptions or billing are created on the website. Planned programs have no purchase, download, or checkout controls. Assessments are part of the coaching process and Hybrid package rather than a standalone priced service. Names, prices, and inclusions come from one data source in `app.js`.

The homepage has six sections: clear athlete-focused hero, three coaching pathways, monthly package comparison, Assess → Plan → Train & Monitor → Review & Adapt, a short coach profile, and a consultation CTA. Hybrid is highlighted as Flagship Coaching; there are no popularity or results claims. The About page retains the portrait placeholder and owner-supplied qualifications, with concise coaching philosophy and development principles. Existing illustrations remain; no new real coaching photographs were added.

## Consultation preview boundary

**Consultation is frontend-only.** The form collects requester details, sport, age, goals, and an optional message, and supports parents/guardians and team representatives. Package CTAs prefill the selected coaching option and its price.

Submitting displays a local preview only. It sends no emails or network requests, stores no submissions, creates no appointments, and takes no payments. There is no consultation backend, database, calendar, or payment integration. Even stale `window.saameConfig` delivery settings cannot activate submission: the released application does not read them. Future activation requires a separate implementation task.

Only the language preference uses `localStorage`. Form values exist in the current page and are preserved during a language switch; user-provided text is rendered with `textContent` and excluded from translation.

## Compatibility and retained code

Old `#programs` and `#shop` routes redirect to Coaching or Training Plans, with monthly and team links preserved appropriately. Retired personalized-program and assessment links redirect to the relevant active page. Unknown pages show a useful return-home route.

The bag and selection popup are removed from the active interface. Historical code is retained under `archive/` for future reuse and is not loaded or linked by the released site. The previous HTML is stored as plain text to avoid publishing a second obsolete interface. Do not activate archived delivery code without a separate review and task.

## Validation performed

Browser verification covered exact service prices, Hybrid prominence and inclusions, five coaching CTA selections, planned-product restrictions, guardian/team forms, safe user-text rendering, absence of network sending and submission storage, legacy routes, mobile navigation, and all five pages in both languages at 320/390/768/1440 px. JavaScript syntax checks also passed. No live bookings, purchases, or email delivery were tested or enabled.

## Assets

Fonts and imagery are local. Font licenses are included in `assets/`. Existing football/basketball images are generated editorial illustrations rather than coach/client photographs. The existing gym image comes from the codewithsadee/fitlife template. Volleyball and coach photography use intentional placeholders.
