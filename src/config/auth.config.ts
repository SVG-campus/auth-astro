// src/config/auth.config.ts

export type FullAuthConfig = {
  secret: string;
  providers: any[];
  // Add other auth settings as needed
};

const config: FullAuthConfig = {
  secret: process.env.AUTH_SECRET || 'default-secret',
  providers: [],
  // Add additional settings here
};

export default config;
