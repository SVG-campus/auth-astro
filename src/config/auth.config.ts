// src/config/auth.config.ts

import Auth0Provider from '@auth/core/providers/auth0';

export type FullAuthConfig = {
  /**
   * Base path for auth routes.
   * @default '/api/auth'
   */
  prefix?: string;
  /**
   * The secret used to sign tokens.
   */
  secret: string;
  /**
   * Array of authentication providers.
   */
  providers: any[];
  // You can add additional properties as needed
};

const config: FullAuthConfig = {
  // This is the default API endpoint for auth routes
  prefix: '/api/auth',
  // Use an environment variable for production secret, with a fallback for development
  secret: process.env.AUTH_SECRET || 'default-secret',
  // Set up Auth0 as a provider with your credentials
  providers: [
    Auth0Provider({
      clientId: "FOAKMeRNhVal13d4RhJw3zlhlJr3RmMs",
      clientSecret: "ZBzAiShgFHUGnL_g1ub0_O1Wr5YGGapp4M0VRL49W_FcUiIQQF2vSabvmJecdg5t",
      // The issuer URL is based on your Auth0 domain
      issuer: "https://dev-ses1tyrcoxk3nqy2.us.auth0.com"
    })
  ]
};

export default config;
