// <reference types="vite/client" />
declare module "*.png";
interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
