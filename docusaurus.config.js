// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '汐明之恋 - 星宫汐',
  tagline: 'Dinosaurs are cool',
  url: 'https://hosimiyasio.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '//static.qxazusa.xyz/sio/image/favicon.jpg?x-image-process=style/favicon',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
        title: '汐明之恋',
        logo: {
          alt: 'Site Logo',
          src: '//static.qxazusa.xyz/sio/image/favicon.jpg?x-image-process=style/favicon',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '网站地图',
            items: [
              {
                label:'文章',
                to:'/blog'
              }
            ],
          },
          {
            title: '官方账号',
            items: [
              {
                label: '哔哩哔哩-主页',
                href: 'https://space.bilibili.com/402417817',
              },
              {
                label: '哔哩哔哩-直播间',
                href: 'https://live.bilibili.com/22047448',
              },
              {
                label: 'Blibili',
                href: 'https://space.bilibili.com/148833361',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '官方主页',
                href: 'https://hosimiyasio-official.com/',
              }
            ],
          },
        ],
        copyright: `<div id="footer_pc">Copyright © ${new Date().getFullYear()} QXAzusa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Powered by Docusaurus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-2</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.beian.gov.cn/portal/registerSystemInfo" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 00000000000000号</a><br></div>
        <div id="footer_mobile">
        <br><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-2</a>
        <br><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32081202000264" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 00000000000000号</a><br>
        Copyright © ${new Date().getFullYear()} QXAzusa
        <br>Powered by Docusaurus`},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [{name: 'referrer', content: 'always'},{name: 'unami-website-id', content: 'e26300ec-c5e8-4adc-88f5-bf4d3cf19d09'}],
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
      {
        src: 'https://static.qxazusa.xyz/public/script/s-l.min.js',
        async: true,
        defer: true,
      }
    ]
};

module.exports = config;
