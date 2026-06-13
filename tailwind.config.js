

export const content = [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
    extend: {
        fontFamily: {
            vt: ["var(--font-vt)", 'monospace'],
            mono: ["var(--font-mono)", 'monospace'],
        }
    }
};

export const plugins = [];