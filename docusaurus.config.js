// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Your imagination, Minekube’s open source',
  tagline: 'Build modern high-traffic Minecraft networks & games',
  url: 'https://developers.minekube.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon-32x32.png',
  organizationName: 'minekube', // Usually your GitHub org/user name.
  projectName: 'minekube-docs',
  customFields: {
    homeDescription: 'Minekube provides open source software and services ' +
        'to developers to simplify building high-traffic Minecraft networks globally.'
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', /* Show "/docs" at root too */
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/minekube/minekube-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/minekube/minekube-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: ['/']
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'early_docs',
        content:
            '<b>' +
            'This is an early version of the Minekube documentation, please report any bugs in ' +
            '<a target="_blank" rel="noopener noreferrer" href="https://minekube.com/discord">our Discord</a> , thank you! ❤' +
            '</b>',
        backgroundColor: '#303846',
        textColor: 'white',
        isCloseable: false,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      autoCollapseSidebarCategories: false,
      navbar: {
        title: 'Minekube Developers',
        logo: {
          alt: 'Minekube Logo',
          src: 'minekube-logo.png',
        },
        items: [
          {to: '/gate', label: 'Gate', position: 'left'},
          {to: '/connect', label: 'Connect', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://minekube.com/discord',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/minekube',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Gate',
                to: '/gate',
              },
              {
                label: 'Connect',
                to: '/connect',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://minekube.com/discord',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/minekube',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Minekube`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
