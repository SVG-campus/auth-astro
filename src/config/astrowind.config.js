// src/config/astrowind.config.js

/**
 * Astrowind Configuration
 *
 * This configuration file defines your project's theme colors and other design settings.
 * Adjust the values below to match your branding.
 */
export default {
    theme: {
      // Primary and secondary colors (first and second)
      primary: '#f6aed6',     // first color
      secondary: '#e34cab',   // second color
  
      // Accent color (third color)
      accent: '#fbeff6',      
  
      // Neutral colors (fourth, fifth, and sixth)
      neutral: {
        light: '#f9d2e7',      // fourth color
        DEFAULT: '#9f7691',    // fifth color
        dark: '#000000',       // sixth color
      },
  
      // Optionally, set other values like background and text
      background: '#ffffff',
      text: '#000000',
    },
  
    fonts: {
      heading: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
    },
  
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  
    spacing: {
      base: '1rem',
      scale: 1.5,
    },
  
    darkMode: {
      enabled: true,
      className: 'dark',
    },
  
    // Extend the configuration with additional customizations if needed
    extend: {},
  };
  