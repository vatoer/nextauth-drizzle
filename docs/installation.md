# installation

```sh
pnpm create next-app@latest . --typescript --tailwind --eslint
pnpm dlx shadcn-ui@latest init

```

## Drizzle

<https://orm.drizzle.team/learn/migrate/migrate-from-prisma>

```sh
pnpm add drizzle-orm pg
pnpm add drizzle-orm mysql2
pnpm add -D drizzle-kit @types/pg
pnpm add dotenv
```

introspect mysql

```sh
npx drizzle-kit introspect:pg
```

introspect mysql

```sh
npx drizzle-kit introspect:mysql
```

## authjs

<https://authjs.dev/getting-started/installation>

```sh
pnpm add next-auth@beta
openssl rand -base64 33
openssl rand -hex 33

```
