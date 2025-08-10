import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7e22ce',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#ec4899',
          foreground: '#ffffff'
        }
      }
    },
  },
  plugins: [],
}
export default config
