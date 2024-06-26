# Installation

```sh
pnpm create next-app@latest . --typescript --tailwind --eslint
```

## authjs

<https://authjs.dev/getting-started/installation>

```sh
pnpm add next-auth@beta
```

```sh
openssl rand -hex 32
```

Then add it to your .env.local file:

<https://authjs.dev/getting-started/authentication>
<https://authjs.dev/getting-started/authentication/oauth>

Setup Environment Variables

<https://console.cloud.google.com/apis/credentials>
<https://authjs.dev/getting-started/session-management/login>
<https://authjs.dev/getting-started/session-management/get-session>

update next.config.mjs to allow images from google
<https://github.com/vercel/next.js/blob/canary/examples/image-component/next.config.js>
<https://github.com/nodejs/nodejs.org/blob/main/next.config.mjs>

```mjs
images: {
    // We disable image optimisation during static export builds
    // unoptimized: ENABLE_STATIC_EXPORT,
    // We allow SVGs to be used as images
    dangerouslyAllowSVG: true,
    // We add it to the remote pattern for the static images we use from Google Cloud Storage
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
```

```sh
pnpm build
pnpm start
```

<https://www.reddit.com/r/nextjs/comments/1bepd14/autherror_untrustedhost_host_must_be_trusted_url/>
<https://github.com/nextauthjs/next-auth/issues/6113>
