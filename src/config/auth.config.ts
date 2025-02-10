// src/config/auth.config.ts

export type FullAuthConfig = {
  secret: string;
  providers: any[];
  // add other properties as needed
};

const config: FullAuthConfig = {
  secret: process.env.AUTH_SECRET || 'default-secret',
  providers: [],
  // additional configuration properties here
};

export default config;
