// <reference types="vite/client" />
declare module "*.png";
interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
  readonly VITE_SENTRY_DSN: string;
  readonly PRODUCTION_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
