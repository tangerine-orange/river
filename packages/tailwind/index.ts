import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    'src/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
  ],
  theme: {
    // Replaces all of the default `fontSize` values
    fontSize: {
      sm: [
        '0.75rem',
        {
          lineHeight: '1.125rem',
          letterSpacing: '0.013em',
          fontWeight: '400',
        },
      ],
      base: [
        '0.813rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.013em',
          fontWeight: '400',
        },
      ],
      lg: [
        '1.063rem',
        {
          lineHeight: '1.625rem',
          letterSpacing: '0.013em',
          fontWeight: '400',
        },
      ],
      xl: [
        '1.563rem',
        {
          lineHeight: '2.125rem',
          letterSpacing: '0.013em',
          fontWeight: '600',
        },
      ],
      '2xl': [
        '1.625rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0.013em',
          fontWeight: '700',
        },
      ],
    },
    // Replaces all of the default color values
    colors: {
      base: 'hsl(var(--base) / <alpha-value>)',
      'base-hover': 'hsl(var(--base-hover) / <alpha-value>)',
      'base-border': 'hsl(var(--base-border) / <alpha-value>)',
      'base-shade': 'hsl(var(--base-shade) / <alpha-value>)',
      label: 'hsl(var(--label) / <alpha-value>)',
      'label-muted': 'hsl(var(--label-muted) / <alpha-value>)',
      'label-faint': 'hsl(var(--label-faint) / <alpha-value>)',
      'river-accent': 'hsl(var(--accent) / <alpha-value>)',
      'river-accent-hover': 'hsl(var(--accent-hover) / <alpha-value>)',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-helvetica-neue)'],
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '80%': {
            opacity: '0.6',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '80%': {
            opacity: '0.6',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s',
        'fade-down': 'fade-down 0.5s',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
