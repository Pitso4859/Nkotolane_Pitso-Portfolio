# Development Guide

## Prerequisites

- Node.js 20.19+ or 22.12+
- npm
- Git
- VS Code or another TypeScript-capable editor

## Local Setup

```bash
git clone https://github.com/Pitso4859/Nkotolane_Pitso-Portfolio.git
cd Nkotolane_Pitso-Portfolio
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
npm run dev
```

## Development Workflow

Recommended branch naming:

```text
feature/booking-improvements
fix/contact-form-subject
refactor/project-cards
chore/update-dependencies
docs/architecture
```

Before committing:

```bash
npm run type-check
npm run lint
npm run build
```

Check for accidental merge markers:

```bash
git grep -n -E '^(<<<<<<<|=======|>>>>>>>)'
```

## Code Organization

- Keep page sections in `src/components/`.
- Keep reusable primitives in `src/components/ui/`.
- Keep external-service logic in `src/services/`.
- Keep generic helpers in `src/lib/`.
- Keep cross-cutting React context in `src/contexts/`.
- Store static public assets under `public/`.

## React Guidelines

- Prefer small, focused components.
- Keep display logic separate from integration logic where practical.
- Avoid direct DOM access for new features unless required; prefer controlled inputs or refs.
- Preserve accessible labels for form controls.
- Use semantic HTML for headings, lists, navigation, and contact information.
- Use `rel="noopener noreferrer"` with external links opened in new tabs.

## Styling Guidelines

The site combines Tailwind utility classes with application CSS.

When extending the design:

- reuse existing spacing and typography patterns;
- preserve the navy/blue professional palette;
- support both light and dark mode;
- avoid unnecessary gradients and oversized decorative elements;
- keep image icons transparent and visually aligned;
- verify responsive behavior at mobile, tablet, and desktop widths.

## Environment Variables

Copy `.env.example` to `.env.local` and populate:

```env
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_BOOKING_TEMPLATE=
VITE_EMAILJS_ADMIN_TEMPLATE=
```

Never commit `.env.local`.

## Testing Strategy

### Current state

There is no automated test suite in the repository at present.

### Recommended test pyramid

**Unit tests — Vitest**

Test pure utilities and booking calculations.

**Component tests — React Testing Library**

Test:

- theme switching;
- contact-form field rendering;
- booking-type selection;
- invalid email handling;
- past-date disabling;
- success/error status states.

**End-to-end tests — Playwright**

Test critical flows:

1. homepage loads;
2. navigation scrolls to sections;
3. CV link resolves;
4. contact form contains expected fields;
5. booking workflow reaches submission state;
6. mobile navigation works;
7. light/dark theme works.

Do not send real EmailJS/Formspree requests in normal automated tests; mock integrations or use dedicated test endpoints.

## Commit Messages

Use concise, meaningful commit messages. A Conventional Commit style is recommended:

```text
feat: add recruiter booking workflow
fix: resolve Formspree inquiry type submission
docs: add deployment and architecture documentation
perf: lazy load analytics and email integration
refactor: extract reusable picture icon component
chore: update build dependencies
```

## Pull Request Checklist

- [ ] Change has a clear purpose
- [ ] No merge-conflict markers remain
- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Light mode checked
- [ ] Dark mode checked
- [ ] Mobile layout checked
- [ ] External links checked
- [ ] Contact/booking behavior checked if modified
- [ ] No secrets committed
