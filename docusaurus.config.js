// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '美月もも的后花园',
  tagline: 'Dinosaurs are cool',
  url: 'https://mitsuki.qxazusa.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '//static.qxazusa.xyz/public/image/favicon.png_favicon',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','ja-jp','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '所有文章',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag:{
          trackingID: 'G-MD28TLTYRQ',
          anonymizeIP: false,
          id: 'default'
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/blog/tags/**','/album/***','/error-page/***'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '浅笑Azusa的小世界',
        logo: {
          alt: 'Site Logo',
          src: '//static.qxazusa.xyz/public/image/favicon.png_favicon',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `<div id="footer_pc">Copyright © ${new Date().getFullYear()} QXAzusa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" rel="noopener" href="https://docusaurus.io" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">Powered by Docusaurus</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" rel="noopener" href="https://www.cloudflare.com/products/pages/" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">Deployed on Cloudflare Pages</a><br><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32081202000264" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000264号</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://icp.gov.moe/?keyword=20220417" target="_blank" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">萌ICP备20220417号</a></div><div id="footer_mobile"><br><a href="https://icp.gov.moe/?keyword=20220417" target="_blank" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">萌ICP备20220417号</a><br><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-1</a><br><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32081202000264" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000264号</a><br>Copyright © ${new Date().getFullYear()} QXAzusa<br><a target="_blank" rel="noopener" href="https://docusaurus.io" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">Powered by Docusaurus</a><br><a target="_blank" rel="noopener" href="https://www.cloudflare.com/products/pages/" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">Deployed on Cloudflare Pages</a></div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [{name: 'referrer', content: 'always'}],
    }),
  scripts: [
      {
        src: 'https://cdn.staticfile.org/jquery/3.6.1/jquery.min.js',
        async: false,
      },
      {
        src: 'https://static.qxazusa.xyz/docusaurus/script/clipboard.min.js',
        async: true,
      },
    ]
};

module.exports = config;
