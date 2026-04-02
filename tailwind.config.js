/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Navbar & Footer ONLY ──
        navy:   '#171720',   // midnight deep grey-black

        // ── Content headings everywhere ──
        dark:   '#111118',   // very dark background for alternate sections

        // ── Gold accent: CTAs, dividers, highlights ──
        gold:   '#b0a73e',
        'gold-light': '#c5bc5c',
        'gold-dark':  '#8e862c',

        // ── Backgrounds ──
        white:      '#FFFFFF',
        offwhite:   '#F9F6F1',   // very warm off-white for alternating sections

        // ── Text ──
        body:   '#333333',   // dark grey body text
        muted:  '#7A7060',   // secondary / muted text

        // ── Borders ──
        border: '#E8E0D5',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', '"Source Sans Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
