import { defineConfig } from 'vitepress';

import { navMenus, sidebarMenus } from './constant/menus';

export default defineConfig ( {
  title: 'zguiyang Blog',
  lastUpdated: true,
  themeConfig: {
    nav: navMenus,
    sidebar: sidebarMenus,
    editLink: {
      pattern: 'https://github.com/zguiyang/blog/tree/main/docs/:path',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zguiyang' },
    ],
  },
} );
