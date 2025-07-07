/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // esto redefine `font-sans`
            },
            animation: {
                "fade-in": "fadeIn 0.2s ease-in",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [],
}
