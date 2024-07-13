/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        function ({ addUtilities, theme }) {
            addUtilities(
                {
                    ".scrollbar-custom": {
                        scrollbarWidth: "thin" /* For Firefox */,
                    },
                    ".scrollbar-custom::-webkit-scrollbar": {
                        width: theme("scrollbar.custom.width"),
                    },
                    ".scrollbar-custom::-webkit-scrollbar-track": {
                        background: theme("scrollbar.custom.track"),
                    },
                    ".scrollbar-custom::-webkit-scrollbar-thumb": {
                        background: theme("scrollbar.custom.thumb"),
                    },
                    ".scrollbar-custom::-webkit-scrollbar-thumb:hover": {
                        background: theme("scrollbar.custom.thumbHover"),
                    },
                },
                ["responsive", "hover"]
            );
        },
    ],
};
