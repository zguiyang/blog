export const navMenus = [
  {
    text: '前端基础',
    link: '/front-end/html',
    activeMatch: '/front-end/',
  },
  {
    text: '服务端',
    link: '/services/node',
    activeMatch: '/services/'
  },
  {
    text: '算法',
    link: '/leetcode/',
    activeMatch: '/leetcode/'
  },
  {
    text: 'web3',
    link: '/web3',
    activeMatch: '/web3/'
  },
  {
    text: '框架',
    link: '/framework/vue',
    activeMatch: '/framework/'
  },
  {
    text: '跨平台开发',
    link: '/cross-platform/',
    activeMatch: '/cross-platform/'
  },
  {
    text: '推荐',
    link: '/recommend/',
    activeMatch: '/recommend/'
  },
];

export const sidebarMenus = {
  '/front-end/': [
    {
      text: '前端',
      collapsed: false,
      items: [
        {
          text: 'HTML',
          link: '/front-end/html',
        },
        {
          text: 'CSS',
          link: '/front-end/css',
        },
        {
          text: 'Javascript',
          link: '/front-end/javascript',
        },
      ],
    },
  ],
  '/services/': [
    {
      text: 'node',
      collapsed: true,
      items: [],
    },
    {
      text: 'nginx',
      collapsed: true,
      items: [],
    },
  ],
  '/framework/': [
    {
      text: 'Vue',
      collapsed: true,
      items: [],
    },
    {
      text: 'React',
      collapsed: true,
      items: [],
    },
    {
      text: 'Nuxt',
      collapsed: true,
      items: [],
    },
    {
      text: 'Next',
      collapsed: true,
      items: [],
    },
  ],
  '/web3/': [
    {
      text: '区块链',
      collapsed: true,
      items: [],
    },
    {
      text: '智能合约',
      collapsed: true,
      items: [],
    },
    {
      text: '应用开发',
      collapsed: true,
      items: [],
    },
  ],
  '/recommend/': [
    {
      text: '工具推荐',
      collapsed: true,
      items: [],
    },
  ],
  '/cross-platform/': [
    {
      text: 'uni-app',
      collapsed: true,
      items: [],
    },
  ],
}
