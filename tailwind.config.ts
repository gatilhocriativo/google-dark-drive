import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface-0': '#0C0C14',
        'surface-1': '#1B1B24',
        'surface-2': '#2D2D37',
        'surface-3': '#585862',
        'on-surface': '#E6E0E9',
        primary: '#9EDFFF',
        'on-primary': '#075F8B',
      },
    },
  },
  plugins: [],
}
export default config
