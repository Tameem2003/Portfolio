/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        midnight: 'var(--color-midnight)',
        navy: 'var(--color-navy)',
        indigo: 'var(--color-indigo)',
        storm: 'var(--color-storm)',
        aqua: 'var(--color-aqua)',
        mint: 'var(--color-mint)',
        royal: 'var(--color-royal)',
        lavender: 'var(--color-lavender)',
        fuchsia: 'var(--color-fuchsia)',
        orange: 'var(--color-orange)',
        sand: 'var(--color-sand)',
        coral: 'var(--color-coral)',
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        orbit: "orbit var(--duration, 30s) linear infinite",
        // 'orbit-reverse': 'orbit var(--duration, 30s) linear infinite reverse',
      },
    },
  },
  plugins: [],
};