# zymo-shared

Shared TypeScript source of truth for Zymo Cloud Functions repos.

Consumed by:
- `zymo-web` (SSR + api Cloud Function)
- `zymo-backend` (payment / trigger / partner Cloud Functions)
- `Zymo-Partner` (partner-portal SPA)
- `zymo-analytics-backend` (analytics platform)

## Wire-up

Each consumer repo imports via git submodule at `shared/`:

```
git submodule add https://github.com/Zymocars/zymo-shared.git shared
```

Then in code:

```ts
import { FIELDS } from '../shared/schemas/bookingDoc';
```

## Contents

- `schemas/bookingDoc.ts` — field-key constants for the `CarsPaymentSuccessDetails` Firestore collection. Source of truth.

## Provenance

Zero-Bug Architecture Chunk 5 (2026-07-31). Full plan at:
`~/.claude/plans/vivid-frolicking-salamander.md` (Zymocars-private).
