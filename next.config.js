const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx", // Ensure the correct path
});

module.exports = withNextra({
  reactStrictMode: true,
});
