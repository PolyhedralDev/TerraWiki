const { description } = require("../../package")

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Terra",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/PolyhedralDev/Terra",
    editLinks: true,
    docsRepo: "https://github.com/PolyhedralDev/TerraWiki",
    docsDir: "src",
    editLinkText: "Contribute!",

    lastUpdated: true,

    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Docs",
        link: "/docs/",
      },
      {
        text: "Discord",
        link: "https://discord.gg/PXUEbbF",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Essentials",
          collapsable: false,
          children: ["", "getting-started", "config-packs", "terrascript"],
        },
        {
          title: "Tutorials",
          collapsable: false,
          children: [
            "noise",
            "first-noise-equation",
            "multi-layer-noise",
            "structures",
            "weighted-pools",
          ],
        },
      ],
      "/docs/": [
        {
          title: "Intro",
          collapsable: false,
          children: [""],
        },
        {
          title: "TerraScript",
          collapsable: false,
          children: ["terrascript-syntax", "terrascript-functions"],
        },
        {
          title: "Noise & Functions",
          collapsable: false,
          children: [
            "functions-and-variables",
            "noise-options",
            "noise-equations",
          ],
        },
        {
          title: "Biome",
          collapsable: false,
          children: ["biome-config", "biome-grid-config", "biome-selection"],
        },
        {
          title: "Flora",
          collapsable: false,
          children: ["flora-config", "included-flora"],
        },
        {
          title: "Blocks",
          collapsable: false,
          children: [
            "custom-blocks",
            "block-palettes",
            "ore-config",
            "palette-config",
          ],
        },
        {
          title: "Structures",
          collapsable: false,
          children: ["structure-config"],
        },
        {
          title: "Trees",
          collapsable: false,
          children: ["tree-config", "default-tree-types"],
        },
        {
          title: "MISC",
          collapsable: false,
          children: ["carver-config", "objects", "pack.yml-options"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-active-header-links",
    "vuepress-plugin-container",
    {
      type: "tip",
      defaultTitle: "",
    },
    "vuepress-plugin-clean-urls",
    {
      normalSuffix: "/",
      indexSuffix: "/",
      notFoundPath: "/404",
    },
    "vuepress-plugin-nprogress",
    "vuepress-plugin-smooth-scroll",
  ],
}
