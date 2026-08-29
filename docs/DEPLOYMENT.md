# Deployment Guide

## Target Platform

The portfolio is configured for deployment on Vercel as a Vite static application.

`vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

## Pre-Deployment Checklist

Run locally:

```bash
npm install
npm run type-check
npm run lint
npm run build
```

Verify no unresolved Git merge markers exist:

```bash
git grep -n -E '^(<<<<<<<|=======|>>>>>>>)'
```

If the command prints any files, resolve them before pushing.

## Vercel Environment Variables

Configure the following in:

**Vercel Project → Settings → Environment Variables**

```text
VITE_EMAILJS_PUBLIC_KEY
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_BOOKING_TEMPLATE
VITE_EMAILJS_ADMIN_TEMPLATE
```

Apply them to the required environments (Production, Preview, and Development as appropriate).

After changing environment variables, trigger a new deployment.

## Git Deployment Flow

```bash
git status
git add .
git commit -m "feat: update portfolio"
git push origin main
```

Vercel will build the pushed commit automatically when the repository is connected.

## Custom Domain

The project includes a `CNAME` file and is intended to serve from:

```text
pitsoporfolio.co.za
```

When using Vercel, manage DNS and domain association through Vercel's Domains settings. Confirm both apex and preferred `www` behavior if applicable.

## Production Smoke Test

After deployment, manually verify:

- home page loads without console errors;
- profile and project images load;
- navigation links scroll correctly;
- CV downloads successfully;
- GitHub and LinkedIn links open correctly;
- Formspree contact form submits;
- booking form validates input;
- EmailJS sends both booking templates;
- dark/light theme works after refresh;
- mobile menu works;
- favicon and metadata are visible;

## Rollback

If a deployment is broken:

1. open the Vercel project;
2. go to **Deployments**;
3. select the last known-good deployment;
4. promote/redeploy it as production;
5. fix the source repository before the next push.

## Deployment Failure: Diff Marker / Merge Conflict

A Vite error such as:

```text
Encountered diff marker
<<<<<<< HEAD
=======
>>>>>>> commit-hash
```

means unresolved Git conflict markers were committed into source files.

Resolve the conflict manually, then run:

```bash
git grep -n -E '^(<<<<<<<|=======|>>>>>>>)'
npm run build
```

Only push after both checks are clean.

## Dependency Audit Messages

`npm install` may report dependency vulnerabilities. These warnings do not automatically mean the Vite build failed.

Inspect them separately:

```bash
npm audit
```

Avoid running aggressive dependency upgrades immediately before a deployment without testing the resulting build.
