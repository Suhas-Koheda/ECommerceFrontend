import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-background':"#16161d",
        'navBar-background':"#2c2c2c",
        textColor:"#ffffff",
      },
      backgroundImage: {
        "billBoard-background": 'url(/images/BillBoard.jpg)',
      },
    },
  },
  plugins: [],
} satisfies Config;
