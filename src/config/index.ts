// src/config/index.ts
export type FullAuthConfig = {
  // Define your auth configuration properties here
  secret: string;
  providers: any[];
  // ...other settings
};

const config: FullAuthConfig = {
  secret: process.env.AUTH_SECRET || 'default-secret',
  providers: [],
  // ...initialize other settings as needed
};

export default config;
