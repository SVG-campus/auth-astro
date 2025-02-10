/**
 * Astrowind Configuration
 *
 * This file configures the settings for the Astrowind integration.
 * Adjust the values below to match your desired theme, fonts, breakpoints, spacing, and dark mode preferences.
 */

export default {
    theme: {
      // Primary color for buttons, links, etc.
      primary: '#1E40AF', // blue-800
      // Secondary color
      secondary: '#F59E0B', // amber-500
      // Accent color
      accent: '#10B981', // emerald-500
      // Neutral colors for backgrounds and text
      neutral: {
        light: '#F3F4F6', // gray-100
        DEFAULT: '#9CA3AF', // gray-400
        dark: '#374151', // gray-700
      },
      // Overall background color for pages
      background: '#F3F4F6',
      // Default text color
      text: '#111827',
    },
    fonts: {
      // Font family for headings and titles
      heading: "'Inter', sans-serif",
      // Font family for body text
      body: "'Inter', sans-serif",
    },
    breakpoints: {
      // Responsive breakpoints for your design
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    spacing: {
      // Base spacing (for margins, padding, etc.)
      base: '1rem',
      // Spacing scale multiplier
      scale: 1.5,
    },
    darkMode: {
      // Enable dark mode support
      enabled: true,
      // Class name to apply when dark mode is active
      className: 'dark',
    },
    // Additional customizations or overrides can be added here
    extend: {},
  };
  