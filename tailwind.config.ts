import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens {
    //   mobile:
    //   table:
    //   desktop:
    
    // }
    extend: {
      colors: {
        primary: 'var(--primary)',
        'secundary': 'var(--secundary)',
      },
      
    },
  },
  plugins: [],
}
export default config
