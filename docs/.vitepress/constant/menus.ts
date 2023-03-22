export const navMenus = [
  {
    text: '前端基础',
    link: '/front-end/html/guide',
    activeMatch: '/front-end',
  },
  {
    text: '服务端',
    link: '/services/node/guide',
    activeMatch: '/services/'
  },
  {
    text: 'leetcode',
    link: '/leetcode/basic/guide',
    activeMatch: '/leetcode/'
  },
  {
    text: '区块链',
    link: '/blockchain/basic/guide',
    activeMatch: '/blockchain'
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
    link: '/recommend/guide',
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
          link: '/front-end/html/guide',
        },
        {
          text: 'CSS',
          link: '/front-end/css/guide',
        },
        {
          text: 'Javascript',
          link: '/front-end/javascript/guide',
        },
      ],
    },
  ],
  '/services/': [
    {
      text: '服务端',
      collapsed: true,
      items: [
        {
          text: 'node',
          link: '/services/node/guide',
        },
      ],
    },
    {
      text: 'nginx',
      collapsed: true,
      items: [],
    },
  ],
  '/leetcode/': [
    {
      text: '基础算法',
      link: '/leetcode/basic/guide',
    }
  ],
  '/blockchain/': [
    {
      text: '区块链',
      collapsed: false,
      items: [
        {
          text: '基本概念',
          link: '/blockchain/basic/guide',
        }
      ],
    },
    {
      text: 'web3',
      collapsed: false,
      items: [
        {
          text: '基本概念',
          link: '/blockchain/web3/guide',
        },
      ],
    },
    {
      text: '智能合约',
      collapsed: false,
      items: [
        {
          text: '基本概念',
          link: '/blockchain/smart-contracts/guide',
        },
        {
          text: '专业术语',
          link: '/blockchain/smart-contracts/terminology',
        }
      ],
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
