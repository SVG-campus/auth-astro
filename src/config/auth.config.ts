// src/config/auth.config.ts

import Auth0Provider from '@auth/core/providers/auth0';

/**
 * FullAuthConfig defines the configuration structure for your authentication.
 */
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
  /**
   * Option to determine whether to inject API endpoints automatically.
   * @default true
   */
  injectEndpoints?: boolean;
  // You can add additional properties as needed.
};

/**
 * The default authentication configuration using Auth0.
 * This configuration is used by the auth-astro integration.
 */
const config: FullAuthConfig = {
  // Default API endpoint for auth routes
  prefix: '/api/auth',
  // Use an environment variable for production; fallback to a development secret
  secret: process.env.AUTH_SECRET || 'default-secret',
  // Configure Auth0 as a provider with your credentials
  providers: [
    Auth0Provider({
      clientId: "FOAKMeRNhVal13d4RhJw3zlhlJr3RmMs",
      clientSecret: "ZBzAiShgFHUGnL_g1ub0_O1Wr5YGGapp4M0VRL49W_FcUiIQQF2vSabvmJecdg5t",
      issuer: "https://dev-ses1tyrcoxk3nqy2.us.auth0.com",
    })
  ],
  // Automatically inject API endpoints if desired
  injectEndpoints: true,
};

/**
 * A helper to merge and set default configuration values.
 */
export const defineConfig = (config: FullAuthConfig) => {
  config.prefix ??= '/api/auth';
  config.injectEndpoints ??= true;
  return config;
};

export default config;
