/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#050914',
          secondary: '#080E1C',
        },
        surface: {
          primary: '#0B1220',
          secondary: '#0F172A',
        },
        green: {
          primary: '#22C55E',
          bright: '#4ADE80',
        },
        purple: {
          glow: '#8B5CF6',
        },
        blue: {
          glow: '#3B82F6',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
          accent: '#4ADE80',
        },
        border: {
          default: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(74, 222, 128, 0.45)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
        wide: '1280px',
      },
    },
  },
  plugins: [],
}
