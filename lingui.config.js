module.exports = {
    locales: ["en", "es", "it"], // Add your supported locales here
    sourceLocale: "en",
    catalogs: [
        {
            path: "src/locales/{locale}/messages",
            include: ["src"],
            exclude: ["**/node_modules/**"]
        }
    ],
    format: "po",
    compileNamespace: "cjs",
    fallbackLocales: {
        default: "en"
    }
};