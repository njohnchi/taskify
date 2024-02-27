module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "./formkit.theme.ts"
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
}

export {}