// src/config/auth.config.ts
export type FullAuthConfig = {
  secret: string;
  providers: any[];
  // add other auth configuration properties here
};

const config: FullAuthConfig = {
  secret: process.env.AUTH_SECRET || 'default-secret',
  providers: [],
  // additional configuration as needed
};

export default config;
