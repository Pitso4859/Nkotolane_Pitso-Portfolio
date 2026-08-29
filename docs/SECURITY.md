# Security Notes

## Client-Side Application Model

This portfolio is a static client-side application. Code executed in the browser must be treated as publicly inspectable.

## Vite Environment Variables

Variables prefixed with `VITE_` are embedded in the client bundle during build.

Therefore:

- do not store passwords in Vite environment variables;
- do not store private API secrets;
- do not store private OAuth client secrets;
- do not store database credentials;
- do not store tokens that grant unrestricted privileged access.

EmailJS browser public keys are intended for browser use, but the associated EmailJS account should still be protected with service/template restrictions and provider-side controls.

## Forms and Abuse Protection

Formspree and EmailJS endpoints can receive untrusted user input.

Recommended controls:

- enable provider-side spam filtering;
- enable CAPTCHA or bot protection if abuse occurs;
- limit EmailJS templates to required recipients/use cases;
- avoid rendering untrusted HTML from messages;
- validate user input before processing;
- add a server-side/API layer if stronger rate limiting is required.

## External Links

External links that open a new tab should include:

```html
rel="noopener noreferrer"
```

This prevents the opened page from receiving control of the source page through `window.opener`.

## Dependency Management

Review dependency reports with:

```bash
npm audit
```

Treat severity reports as investigation items, not as instructions to apply untested upgrades automatically.

Recommended process:

1. review the affected package and dependency path;
2. determine whether the vulnerable code is used in production;
3. update the smallest safe dependency set;
4. run lint, type-check, and production build;
5. smoke-test the deployed application.

## Repository Hygiene

Before pushing:

```bash
git status
git grep -n -E '^(<<<<<<<|=======|>>>>>>>)'
```

Never commit:

- `.env.local`;
- private certificates;
- API secrets;
- access tokens;
- passwords;
- personal account recovery information.

## Future Improvements

For a higher-security booking architecture:

- submit bookings to a serverless API;
- validate and sanitize data server-side;
- apply rate limiting;
- implement CAPTCHA;
- store bookings in a managed database;
- send emails from the server;
- integrate calendar providers using server-side OAuth tokens.
