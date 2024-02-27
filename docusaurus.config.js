// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '汐明之恋 - 星宫汐',
  tagline: 'Dinosaurs are cool',
  url: 'https://www.hosimiyasio.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://static.hosimiyasio.com/image/favicon.jpg',

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
          path:'article',
          routeBasePath:'article'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/article/tags/**','/archive-page/**','/docs/**','/about'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-K43BZT70Q4',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '汐明之恋 - 非官方主页',
        logo: {
          alt: 'Site Logo',
          src: 'https://static.hosimiyasio.com/image/navbar_icon.ico',
        },
        items: [
          {to: '/article', label: 'Article', position: 'left'},
          {label:'历程',to:'/timeline'},
          {label:'字幕组招募',to:'/fansub-recruit'}
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
                to:'/article'
              },
              {
                label:'历程',
                to:'/timeline'
              },
              {label:'字幕组招募',to:'/fansub-recruit'}
            ],
          },
          {
            title: '官方相关',
            items: [
              {
                label: '官方主页',
                href: 'https://page.hosimiyasio.com/outlinks.html?target=https://hosimiyasio-official.com',
              },
              {
                label: '哔哩哔哩-主页',
                href: 'https://page.hosimiyasio.com/outlinks.html?target=https://space.bilibili.com/402417817',
              },
              {
                label: '哔哩哔哩-直播间',
                href: 'https://page.hosimiyasio.com/outlinks.html?target=https://live.bilibili.com/22047448',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Copyright Info',
                to: '/copyright',
              },
              //{
              //  label: 'Gitlab',
              //  href: 'https://page.hosimiyasio.com/outlinks.html?target=https://gitlab.com/QXAzusa/hosimiyasio.com',
              //},
              {
                label: '关于本站',
                to: '/about',
              }
            ],
          },
        ],
        copyright: `<div id="footer_pc">Copyright © ${new Date().getFullYear()} QXAzusa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Powered by Docusaurus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-2</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id="gongan_logo" alt="gongan_logo" src="//static.hosimiyasio.com/image/gongan.png" align="center">&nbsp;<a href="https://beian.mps.gov.cn/#/query/webSearch?code=32081202000374" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000374号</a><br></div>
        <div id="footer_mobile">
        <br><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-2</a>
        <br><a href="https://beian.mps.gov.cn/#/query/webSearch?code=32081202000374" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000374号</a><br>
        Copyright © ${new Date().getFullYear()} QXAzusa
        <br>Powered by Docusaurus`},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {name: 'referrer', content: 'always'},
        {name: 'keywords', content:'星宮汐,HosimiyaSio,Hosimiya,Sio'},
        {name: 'description', content:'说中文和日语的喜欢玩游戏的百合系Vtuber星宫汐的非官方网站'}
      ],
    }),
    scripts: [
      //{
      //  src: 'https://cdn.staticfile.org/jquery/3.6.1/jquery.min.js',
      //  async: false,
      //},
      //{
      // src: '/img/i18n-0b19cb7a.js',
      //  async: true,
      //  defer: true,
      //}
      {
        src: 'https://static.hosimiyasio.com/scripts/uploadClientInfo.js',
        async: true,
        defer: true,
      }
    ],
    //clientModules: [require.resolve('./inject-lodash.js')],
    plugins: [
      [
        "docusaurus-plugin-less",{lessOptions:{javascriptEnabled: true}}
      ]
    ],
};

module.exports = config;
