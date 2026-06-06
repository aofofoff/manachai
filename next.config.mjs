/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static-first: every page in this app is content-only, so Next.js
  // statically generates it at build time and it can be served from any
  // static host.
  //
  // We intentionally do NOT set `output: 'export'`. Leaving the default
  // keeps the option to add server features later (API routes under
  // app/api, server actions, middleware) without restructuring. If you
  // decide you will *never* need a backend, uncomment the line below for a
  // pure static export to ./out:
  //
  // output: 'export',
};

export default nextConfig;
