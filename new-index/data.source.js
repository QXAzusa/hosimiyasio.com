import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航一', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>文章</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>历程</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>字幕组招募</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page llt3f4ewvwk-editor_css' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0 llt2ygg7eu-editor_css' },
        title: {
          className: 'banner2-title llt2wo4b4g-editor_css',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>八成の場合</p>
                        <p>
                          <span>攻めです！</span>
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        content: {
          className: 'banner2-content llt3abw4irj-editor_css',
          children: (
            <span>
              <span>
                <p>2020年11月在B站出道</p>
                <p>梦想是一边旅游环游世界一边直播！</p>
              </span>
            </span>
          ),
        },
        button: {
          className: 'banner2-button llt559cuowp-editor_css',
          children: 'Learn More',
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>非官方网站，其内容不代表官方立场</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <p>网站地图</p>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <span>
                    <p>文章</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <span>
                    <p>历程</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <span>
                    <p>字幕组招募</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <p>官方相关</p>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>
                    <span>哔哩哔哩主页</span>
                    <br />
                  </p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <span>
                      <p>哔哩哔哩直播间</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link2',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>官方主页</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <p>更多</p>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>版权相关</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>关于本站</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <span>
            Copyright © 2023 QXAzusa{' '}
            <a href="https://beian.miit.gov.cn/" target="_blank">
              苏ICP备2021044611号-2{' '}
            </a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo"
              target="_blank"
            >
              {' '}
              苏公网安备 32081202000374号
            </a>
            <br />
          </span>
        </span>
      </span>
    ),
  },
};
