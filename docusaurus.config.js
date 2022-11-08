// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path")
const lightCodeTheme = require("prism-react-renderer/themes/vsLight")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Flaregun",
  tagline: "A Utility belt for your Cloudflare domain",
  url: "http://localhost:3000",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "/docs/img/favicon-32x32.png",
  organizationName: "flaregun",
  projectName: "flaregun",
  staticDirectories: ["static", "public"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          // https://docusaurus.io/docs/docs-introduction#docs-only-mode
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) =>
            `https://github.com/flaregun-net/docs/edit/master/docs/${docPath}`,
          docItemComponent: require.resolve(
            "./src/components/CustomDocItem/index.tsx",
          ),
          exclude: ["**/*.wip"],
          lastVersion: "current",
          versions: {
            current: {
              label: "v1.x",
              badge: true,
              path: "latest",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "wiki",
        path: "wiki",
        routeBasePath: "wiki",
        editUrl: ({ docPath }) =>
          `https://github.com/hasura/graphql-engine/edit/master/docs/docs/${docPath}`,
        editCurrentVersion: true,
        docItemComponent: require.resolve(
          "./src/components/CustomDocItem/CustomDocItemWiki.tsx",
        ),
        // disableVersioning: true,
        breadcrumbs: false,
        sidebarPath: require.resolve("./sidebarsWiki.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      path.resolve(
        __dirname,
        "./src/plugins/docusaurus-plugin-segment-analytics",
      ),
      {
        prodKey: "RQXoHRpNcmBKllUDihjDjupGv4AHn5TB",
        devKey: "FRKElp5cyMax6GAdM8OVyNMIFVppgEgp",
        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        trackPage: true,
        // number (defaults to 50); time to wait after a route update before it should
        // track the page change, to implement this, make sure your `trackPage` property is set to `true`
        // trackPageDelay: 50,
      },
    ],
    [
      path.resolve(__dirname, "./src/plugins/docusaurus-plugin-google-gtm"),
      {
        trackingID: "GTM-PF5MQ2Z",
      },
    ],
    //   [
    //     'ideal-image',
    //     {
    //       quality: 70,
    //       max: 1030, // max resized image's size.
    //       min: 640, // min resized image's size. if original is lower, use that size.
    //       steps: 2, // the max number of images generated between min and max (inclusive)
    //       disableInDev: false,
    //     },
    //   ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["http", "nginx", "markdown"],
      },
      algolia: {
        appId: "AL3AX5W7T3",
        apiKey: "29c4e15fc636ba402de3d36c645d5c99",
        indexName: "flaregun_docs",
        // Optional: see doc section below
        // contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Algolia search parameters
        // searchParameters: {},
      },
      announcementBar: {
        id: "announcementBar-1", // Increment on change
        content: `⭐️ We're just getting started, stay in touch by following us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/flaregun-net" >Twitter</a>`,
      },
      navbar: {
        hideOnScroll: true,
        title: "Flaregun",
        logo: {
          target: "_self",
          alt: "Flaregun Logo",
          src: "/img/flaregun.svg",
          srcDark: "/img/flaregun.svg",
          href: "http://localhost:3000",
        },
        items: [
          {
            type: "dropdown",
            label: "Docs",
            position: "left",
            items: [
              // {
              //   type: "doc",
              //   docId: "proxyflare/core/index",
              //   label: "Proxyflare",
              // },
              {
                type: "docSidebar",
                sidebarId: "proxyflarePluginSidebar",
                label: "Proxyflare",
              },
              // {
              //   type: "doc",
              //   docId: "edgeflare/core/index",
              //   label: "Edgeflare",
              // },
              // {
              //   type: "docSidebar",
              //   sidebarId: "edgeflarePluginSidebar",
              //   label: "Edgeflare",
              // },
            ],
          },
          // {
          //   to: "https://flaregun.net/blog/",
          //   label: "Blog",
          //   position: "left",
          // },
          // {
          //   to: "https://flaregun.net/learn/",
          //   label: "Tutorials",
          //   position: "left",
          // },
          {
            type: "search",
            position: "right",
          },
          // {
          //   href: "https://discord.gg/ukPanmZPsq",
          //   position: "right",
          //   className: "header-discord-link",
          //   "aria-label": "Flaregun on Discord",
          // },
          // {
          //   to: "https://flaregun.net/pricing/",
          //   label: "Pricing",
          //   position: "right",
          // },
          // {
          //   to: "https://flaregun.net/login",
          //   label: "Login",
          //   position: "right",
          //   className: "nav-link_login",
          // },
          // {
          //   to: "https://flaregun.net/signup",
          //   label: "Get Started",
          //   position: "right",
          //   className: "nav-link_getting-started",
          // },
        ],
      },
    }),
}

module.exports = config
