const defaultTheme = require("tailwindcss/defaultTheme");
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight: {
      semibold: '600',
    },
    extend: {
      backgroundImage: {},
      fontFamily: {
        bodyFont: ["Urbanist", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
export default config
