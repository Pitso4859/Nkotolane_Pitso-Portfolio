# External Integrations

## 1. Formspree — Contact Form

The Contact component submits directly to a Formspree endpoint using a standard HTML POST.

Submitted fields include:

```text
name
email
inquiry_type
message
subject
```

Current inquiry categories:

- Job Opportunity
- Project Collaboration
- Freelance Work
- Technical Question
- Other

### Operational notes

- Keep every field that must appear in Formspree notifications assigned a `name` attribute.
- Verify the Formspree project notification settings after changing field names.
- Use the Formspree dashboard to inspect raw submissions when debugging missing email fields.

---

## 2. EmailJS — Booking Emails

The booking workflow uses `src/services/emailService.ts`.

Required Vite environment variables:

```env
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_BOOKING_TEMPLATE=
VITE_EMAILJS_ADMIN_TEMPLATE=
```

EmailJS is dynamically imported only when a booking is submitted.

### Visitor confirmation template variables

The user-facing booking template receives:

```text
email
{{to_name}}
{{meeting_type}}
{{duration}}
{{platform}}
{{date}}
{{time}}
{{timezone}}
{{message}}
```

### Administrator notification template variables

The owner/admin template receives:

```text
email
{{from_name}}
{{from_email}}
{{meeting_type}}
{{duration}}
{{platform}}
{{date}}
{{time}}
{{timezone}}
{{message}}
```

### Booking behavior

The service currently sends two messages sequentially:

1. confirmation to the visitor;
2. notification to the portfolio owner.

If either operation throws an error, the booking function returns `false` and the UI displays a failure message.

### Important limitation

EmailJS is an email delivery integration, not a booking database or calendar reservation system. A successful email does not guarantee that a calendar slot has been reserved.

---

## 3. Vercel Analytics

`@vercel/analytics/react` is lazy loaded from `App.tsx`.

This keeps analytics outside the critical initial JavaScript path while still enabling production traffic measurement.

---

## 4. External Profile Links

Professional profile links used by the project/documentation:

- GitHub: `https://github.com/Pitso4859`
- LinkedIn: `https://www.linkedin.com/in/nkotolanepitso`
- Portfolio: `https://pitsoporfolio.co.za`
- Email: `mailto:pnkotolane@gmail.com`

When updating links, search the repository for older profile URLs to keep Header, Contact, Footer, and documentation consistent.
