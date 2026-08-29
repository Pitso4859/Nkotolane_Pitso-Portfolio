# Troubleshooting

## Production Build Fails with `Encountered diff marker`

### Symptoms

```text
<<<<<<< HEAD
=======
>>>>>>> commit-hash
```

### Cause

An unresolved Git merge conflict was committed into a source file.

### Fix

Search the repository:

```bash
git grep -n -E '^(<<<<<<<|=======|>>>>>>>)'
```

Resolve every conflict, remove all three marker types, then run:

```bash
npm run type-check
npm run build
```

---

## EmailJS Booking Does Not Send

Check:

1. `.env.local` exists locally;
2. all four `VITE_EMAILJS_*` variables are populated;
3. the Vercel project contains the same production variables;
4. EmailJS service ID is valid;
5. both template IDs exist;
6. template variable names match `emailService.ts`;
7. the EmailJS service has not exceeded usage limits.

Browser console errors can provide the EmailJS failure reason during development.

---

## Booking Email Is Missing a Variable

Compare the EmailJS template placeholder with the object keys in `src/services/emailService.ts`.

Example visitor variables:

```text
{{to_name}}
{{meeting_type}}
{{duration}}
{{platform}}
{{date}}
{{time}}
{{timezone}}
{{message}}
```

A different placeholder name will not automatically map to the submitted value.

---

## Formspree Email Is Missing the Selected Inquiry Type

The select field must have a `name` attribute:

```html
<select name="inquiry_type">
```

Use the Formspree dashboard to inspect the raw submission. If `inquiry_type` exists in the submission but not the notification email, update the Formspree notification/template configuration.

---

## Images or Icons Do Not Load After Deployment

Public assets should use root-relative paths:

```text
/icon-logo/calendar.png
/images/profile.webp
```

Verify:

- filename spelling and capitalization;
- image exists under `public/`;
- Git committed the file;
- path does not include a local Windows filesystem location.

Remember that production hosting can be case-sensitive even when Windows development is not.

---

## Vercel Builds Locally but Not in Production

Compare:

- Node.js version;
- environment variables;
- exact Git commit deployed;
- filename capitalization;
- lockfile state.

Run locally from a clean checkout when possible:

```bash
npm ci
npm run type-check
npm run lint
npm run build
```

---

## `npm audit` Reports Vulnerabilities

Audit warnings are separate from a Vite compilation error.

Inspect:

```bash
npm audit
```

Do not assume `npm audit fix --force` is safe. Forced upgrades can introduce breaking changes.

---

## Theme Does Not Persist

The theme is stored in browser `localStorage` under the `theme` key.

Check browser storage and ensure JavaScript is enabled. The application also responds to `prefers-color-scheme` changes.

---

## CV Download Does Not Work

Verify the PDF exists at the expected `public/Files/` path and that the exact filename matches the component link, including spaces and capitalization.
