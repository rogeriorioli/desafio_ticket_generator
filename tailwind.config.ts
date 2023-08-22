

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      purple: {
        normal: '#8860E6',
        dark: '#5B409B'
      },
      white: '#FFFFFF',
      gray: {
        light: '#F3F4FE',
        dark: '#202024'
      },
      success: '#04D361',
      danger: '#FF8F8F',
    }
  },
  plugins: [],
}
export default config
