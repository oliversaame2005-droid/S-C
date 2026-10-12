# S&C By Saame — Athlete Performance

Strength and conditioning coaching by Oliver Saame. The responsive red/black brand design is preserved. Flag buttons switch all views and enquiry controls between English and Estonian; the language preference persists locally.

## Run

Use Node.js 18 or newer. No dependency installation is needed.

```sh
npm run dev
```

The server listens on port 3000, or `PORT` if provided. `npm run check` validates every JavaScript file. The site is static and also runs on GitHub Pages; Node is only needed for the local development server.

## Offerings

Programs and Shop show four core services: Personal S&C Coaching (€45/60-minute session), Online Performance Coaching (from €119/month), Small Group Performance Training (€20–25/athlete/session, 2–4 athletes), and Individual Training Programs (€49–89, 6–8 weeks).

Three recurring monthly packages are listed separately: Performance Online (€119), Hybrid (€199, including two 60-minute in-person sessions), and Elite (€299, including four 60-minute in-person sessions). Hybrid and Elite both include all Online package benefits. Physical assessments and progress testing are planned, not currently included in Hybrid.

Team Athletic Development is available for custom-quote enquiries; team performance testing is planned and not currently included. Athletic Performance Assessment is listed under Planned Services (planned €49–79, 60–75 minutes) and accepts interest only, with no booking or bag action. Five planned Digital Performance Program categories are shown at a planned €29–69 range; these are not finished products and cannot be purchased.

The bag saves interested coaching options, supports removal and persistence, and feeds a combined enquiry. It does not sum one-off and recurring prices or take payment. Previously saved supported interests are migrated; unavailable old demo products are removed.

## Enquiries and free calls

Service links preselect the offering. Free 15-minute call links open the same form with the call selected. The form collects the requester’s name and email, athlete’s sport and age, performance goals, and an optional message. Parents or guardians can enquire on an athlete’s behalf. Team requests accept an age group in the message instead of requiring an individual age.

Current mode is **preview only** at the owner’s request. `SCBYSAAME@GMAIL.COM` is explicitly a placeholder, not a verified delivery address. Valid submissions show a local request preview; nothing is sent or persisted. No appointment, payment, subscription, or availability is created or confirmed.

To enable delivery, edit the public `site-config.js` settings:

- Set `formEndpoint` to a verified HTTPS, CORS-enabled form endpoint that accepts JSON POST requests, such as a public Formspree form configured to deliver to the owner. The request includes the selected service and price, requester type, form fields, language, and subject. Success is shown only after an HTTP success response. Failures keep the fields for retry. A live endpoint must be independently tested for actual inbox delivery.
- Alternatively, set `contactEmail` to a confirmed business address and `contactEmailIsPlaceholder` to `false`. With no endpoint, this opens a populated email draft for the visitor to send. It does not claim a request has been sent.
- Leave the placeholder flag enabled until a real address is confirmed. Never put credentials or API tokens in these public files.

Scheduling remains manual: Oliver must agree a time after receiving an enquiry. An actual scheduling provider is required for confirmed online appointment booking. No payment or subscription billing integration is included.

## Validation

Browser checks covered both languages, all offering prices, service selection, guardian and team requests, the selection bag, request previews, and layouts at 320/390/768/1440 pixels. Endpoint success and failure behavior were tested with intercepted responses, not a live delivery provider. Placeholder mode was verified to make no submission requests.

## Assets

Fonts and demo images are bundled locally. Font licenses are included under `assets/`. Football and basketball visuals are generated editorial illustrations of sports training, not photographs of the coach or clients. The gym pull-up photo comes from the codewithsadee/fitlife template on GitHub. Sports images retain the original monochrome hero and card presentation. Replace illustrative imagery with your own photography if desired.
