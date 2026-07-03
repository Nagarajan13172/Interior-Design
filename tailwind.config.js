/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Brand palette (from colorhunt.co/palette/f4f4f4f0a500cf7500000000) ──
        brandGold: '#F0A500', // Primary gold — highlights, accents
        brandOrange: '#CF7500', // Secondary orange — call-to-action buttons
        brandBlack: '#000000', // Black — dark sections, footer
        brandLight: '#F4F4F4', // Off-white — page background
        // ── Supporting neutrals ──
        brandCharcoal: '#1A1A1A', // Dark charcoal — cards on dark, headings
        brandBeige: '#EFE7DA', // Soft beige — warm surfaces
        brandGray: '#6B6B6B', // Muted gray — body copy, captions
      },
      fontFamily: {
        // Headings: Playfair Display (elegant serif). Body: Inter (clean sans).
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(0, 0, 0, 0.15)',
        cardHover: '0 24px 60px -18px rgba(207, 117, 0, 0.35)',
        gold: '0 12px 30px -8px rgba(240, 165, 0, 0.45)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F0A500 0%, #CF7500 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #000000 100%)',
        'gold-black-overlay':
          'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 55%, rgba(207,117,0,0.35) 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
