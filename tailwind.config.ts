import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "14px",
      base: "16px",
      title: ["40px", { lineHeight: "48px", fontWeight: 700 }],
      subTitle: ["22px", { lineHeight: "28px", fontWeight: 700 }],
    },
    extend: {
      colors: {
        "dark-blue": "#052B52",
        "primary-blue": "#2622FF",
        "gray-primary": "#6F6F6F",
        "gray-sideNav": "#EFF3F8",
        "gray-secondary": "#C6D0DB",
        "status-hover": "#ECFFFF",
        "status-active": "#0F35FE",
        "status-error": "#EC131E",

        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
