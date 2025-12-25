export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
    theme: {
        extend: {
            keyframes: {
                "infinite-scroll": {
                    "0%": { transform: "translateX(0)" },
                    // "100%": { transform: "translateX(calc(-50%-20px))" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                "infinite-scroll": "infinite-scroll 30s linear infinite",
            },
        },
    },
    plugins: [],
};
