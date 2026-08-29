# Contributing

Thank you for improving this portfolio project.

## Workflow

1. Create a branch from `main`.
2. Make one focused change per branch where practical.
3. Run the local quality checks.
4. Commit with a clear message.
5. Push the branch and open a pull request.

## Branch Naming

```text
feature/<short-description>
fix/<short-description>
refactor/<short-description>
perf/<short-description>
docs/<short-description>
chore/<short-description>
```

## Commit Message Examples

```text
feat: add booking timezone selection
fix: include inquiry type in contact submission
perf: lazy load booking email dependency
docs: add architecture and deployment guides
refactor: extract reusable button styles
```

## Required Checks

Before submitting a change:

```bash
npm run type-check
npm run lint
npm run build
git grep -n -E '^(<<<<<<<|=======|>>>>>>>)'
```

The final command should print no merge markers.

## UI Review

For visible changes, review:

- desktop layout;
- mobile layout;
- light theme;
- dark theme;
- keyboard focus states;
- button and link behavior;
- icon alignment;
- text readability.

## Integration Changes

If changing Formspree or EmailJS:

- do not commit private credentials;
- keep template variable names synchronized with source code;
- test with safe test submissions;
- confirm both user and owner notification flows.

## Pull Request Description

Include:

- what changed;
- why it changed;
- screenshots for UI changes;
- testing performed;
- any new environment variables;
- known limitations.
