# People for Passion

A public website and frontend-only administration demo for People for Passion, a community-focused non-profit organization.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/people-for-passion/` — public website and admin demo.
- `artifacts/people-for-passion/src/data/` — organization content and clearly labeled demo records.

## Architecture decisions

- The admin experience is a frontend demo; its sample records and metrics are not real organization data.
- Demo admin changes use browser storage and are not shared with other users or backed by an API.

## Product

- The public site shares the organization's mission, programs, events, and volunteer/contact information.
- The admin demo provides role-aware navigation and beneficiary-record management.

## Content accuracy

- Use only facts supplied in the organization's brief; do not invent an address, dates, partnerships, funding, awards, staff, or impact figures.
- Label organization-reported figures and all admin sample data clearly; do not present demo records as real beneficiaries.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
