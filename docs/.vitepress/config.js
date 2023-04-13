module.exports = {
  // 网站标题
  title: 'vitepress-demo',
  // 网站描述
  description: '个人博客',
  base: '/blog/',
  // 打包目录
  dest: './dist',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  plugins: [
    '@vuepress/active-header-links', // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top', // 返回顶部插件
    '@vuepress/medium-zoom', // 图片预览插件
    '@vuepress/nprogress', //页面顶部进度条
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    // lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    // 导航栏配置
    nav: [
      { text: '百度', link: 'https://www.baidu.com' },
      { text: '掘金', link: 'https://juejin.cn/frontend' },
      { text: 'github', link: 'https://github.com' },
    ],
    sidebar: {
      '/': getSidebar(),
    },
    footer: {
      message: '其实我也不知道写啥注脚',
      copyright: '那我就随便写个吧'
    }
  },
}

function getSidebar() {
  return [
    {
      text: 'HTML',
      items: [
        { text: '基础', link: '/HTML/' },
        { text: '进阶', link: '/HTML/advanced' },
      ],
      sidebarDepth: 3,
    },
    {
      text: 'CSS',
      items: [
        { text: '基础', link: '/CSS/' },
        { text: '进阶', link: '/CSS/advanced' },
      ],
    },
    {
      text: 'Javascript',
      items: [
        { text: '基础', link: '/Javascript/' },
        { text: '进阶', link: '/Javascript/advanced' },
      ],
    },
    {
      text: 'Vue',
      items: [
        { text: '基础', link: '/Vue/' },
        { text: '进阶', link: '/Vue/advanced' },
      ],
    },
    {
      text: '浏览器',
      items: [
        { text: '基础', link: '/Vue/' },
        { text: '进阶', link: '/Vue/advanced' },
      ],
    },
    {
      text: '网络',
      items: [
        { text: '基础', link: '/Network/' },
        { text: '进阶', link: '/Network/advanced' },
      ],
    },
  ]
}
