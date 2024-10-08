/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": '#0ea5e9',
      'white': '#ffffff',
      'slateGray': '#94a3b8',
      'zincWhite': '#fafafa',
      'lessBlack': '#1e293b',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia' ],
      'mono': ['ui-monospace', 'SFMono-Regular' ],
      'display': ['Oswald' ],
      'body': ['"Open Sans"'],
    },
  },
  
  plugins: [],
}