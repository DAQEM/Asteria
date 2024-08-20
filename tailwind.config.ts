/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                player: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "color-scheme": "dark",
                    primary: "#0b4ad4",
                    "--primary-color-light": "#2873fc",
                    "--primary-color-dark": "#1E429F",
                    "--primary-color": "oklch(var(--p))",
                    ".btn-primary": {
                        "background-image":
                            "linear-gradient(to right, var(--primary-color), var(--primary-color-light))",
                        color: "var(--selected-text-color)",
                    },
                    ".bg-primary-gradient": {
                        "background-image":
                            "linear-gradient(to right, var(--primary-color), var(--primary-color-light))",
                    },
                    ".bg-primary-light": {
                        "background-color": "var(--primary-color-light)",
                    },
                    ".border-primary-light": {
                        "border-color": "var(--primary-color-light)",
                    },
                    ".fill-primary": {
                        fill: "url(#player-gradient) var(--primary-color)",
                    },
                    ".btn-primary:hover": {
                        "background-image":
                            "linear-gradient(to right, var(--primary-color-dark), var(--primary-color))",
                        color: "var(--selected-text-color)",
                    },
                    secondary: "#FFFF00",
                    accent: "#00FFFF",
                    neutral: "#232b46",
                    "neutral-content": "#979aae",
                    "base-100": "#080f28",
                    "base-200": "#050a20",
                    "base-300": "#232b46",
                    "base-content": "#979aae",
                },
                developer: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "color-scheme": "dark",
                    primary: "#5145CD",
                    "--primary-color": "#5145CD",
                    "--primary-color-light": "#5850EC",
                    ".btn-primary": {
                        "background-image":
                            "linear-gradient(to right, #5145CD, #5850EC)",
                        color: "var(--selected-text-color)",
                    },
                    ".bg-primary-gradient": {
                        "background-image":
                            "linear-gradient(to right, var(--primary-color), var(--primary-color-light))",
                    },
                    ".bg-primary-light": {
                        "background-color": "var(--primary-color-light)",
                    },
                    ".border-primary-light": {
                        "border-color": "var(--primary-color-light)",
                    },
                    ".fill-primary": {
                        fill: "url(#player-gradient) #5145CD",
                    },
                    ".btn-primary:hover": {
                        "background-image":
                            "linear-gradient(to right, #42389D, #5145CD)",
                        color: "var(--selected-text-color)",
                    },
                    secondary: "#FFFF00",
                    accent: "#00FFFF",
                    neutral: "#232b46",
                    "neutral-content": "#979aae",
                    "base-100": "#080f28",
                    "base-200": "#050a20",
                    "base-300": "#232b46",
                    "base-content": "#979aae",
                },
            },
        ],
    },
};
