// .vuepress/config.js
const moment = require('moment'); // 时间
moment.locale('zh-cn')

// 配置
module.exports = {
    title: '酱紫的世界', // 设置网站标题
    // dest: './dist', // 设置输出目录
    // base: './', // 设置站点根路径
    // repo: 'https://ipv7.gitee.io/vuepress/docs', // 添加 github 链接
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }] //移动端搜索优化
    ],
    publish: true,
    // theme: 'reco',
    description: ' ', // meta 首页 中的描述文字，用于SEO
    // 插件
    plugins: [
        ['flowchart'], // 支持流程图
        [
            '@vuepress-reco/vuepress-plugin-bgm-player', // BGM播放器
            {
                audios: [
                    { name: 'Faster Than Light', artist: 'Andreas Waldetoft / Mia Stegmar', url: 'https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3', cover: 'https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg' },
                    { name: 'Dawn', artist: 'DDRKirby(ISQ)', url: 'https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3', cover: 'https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg' },
                    { name: 'TRON Legacy (End Titles)', artist: 'Daft Punk', url: 'https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3', cover: 'https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg' },
                    { name: 'Broken Boy', artist: 'Tonspender', url: 'https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac', cover: 'https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg' },
                    { name: 'Life Of Sin Pt. 4', artist: 'MitiS', url: 'https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3', cover: 'https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg' },
                    { name: 'Sea Of Voices (RAC Mix)', artist: 'Porter Robinson', url: 'https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3', cover: 'https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg' },
                    { name: 'New Lipstick', artist: 'The Kissaway Trail', url: 'https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac', cover: 'https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg' },
                ],
            },
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    // 不要忘了安装 moment
                    return moment(timestamp).format('lll') // 时间
                }
            },
        ],
        ['vuepress-plugin-smooth-scroll'], // 平滑滚动
        ['@vuepress/nprogress'], // 加载进度条
        ['reading-progress'] // 阅读进度条
    ],
    themeConfig: {
        // collapsable: true, // 可选的, 默认值是 true,
        // displayAllHeaders: false,
        sidebarDepth: 2,
        // heroImage: '/assets/img/bg.png',
        // bgImage: '/assets/img/bg.png',
        // type: 'blog',
        lastUpdated: '最后更新时间', // string | boolean
        authorAvatar: '/assets/img/logo.png', // 设置头像右边
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '前端' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            }
        },
        friendLink: [ // 设置右下角的友情链接 title 友链标题desc 友链描述logo 友链 LOGO（本地图片或网络图片）email 如果没有设置 logo，将通过 Email获取到的 Gravatar 头像来设置 LOGO ；link 友链地址
            {
                title: '码云',
                desc: '开放的平台.',
                logo: "https://gitee.com/static/images/logo-black.svg?t=158106664",
                link: 'https://gitee.com/'
            }
            // ...
        ],
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            { text: '学习', link: '/study/', target: '_self', icon: 'reco-linkedin' },
            // { text: '工具', link: '/tools/' },
            {
                text: '工具',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '浏览器同步测试工具', link: '/tools/浏览器同步测试工具/' },
                    { text: '正则表达式', link: '/regexp/正则表达式/' },
                ]
            },
            // {
            //     text: '前端',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         {
            //             text: 'html',
            //             items: [{
            //                 text: '01-前言&WEB标准',
            //                 link: '/html/01-前言&WEB标准'
            //             }, {
            //                 text: '02-HTML标签',
            //                 link: '/html/02-HTML标签'
            //             }]
            //         }
            //     ]
            // },
        ],
        sidebar: {
            '/css/': ['/', '1.CSS初始以及选择器', '2.CSS复合选择器', '3.CSS文字文本样式', '4.显示模式', '5.三大特性', '6.背景', '7.盒子模型', '8.清除浮动', '9.CSS高级技巧', '10.定位讲义'],
            '/html/': ['/', '01-前言-WEB标准', '02-HTML标签'],
            '/ps/': ['ps的基本使用和切图'],
            '/js/': [
                '/',
                '01-JS基础',
                '02-JS基础',
                '03-JS基础',
                '04-JS基础',
                '05-JS基础',
                '06-JS基础',
                '07-JS高级',
                '08-JS高级-继承',
                '09-JS高级-函数进阶',
                '10-JS高级-函数高阶',
                '11-JS高级-总结'
            ],
            '/mobile_web/': [
                '01-mobileweb-2d3d动画',
                '02-mobileweb-移动web之屏幕适配',
                '03-mobileweb-伸缩布局和LESS介绍',
                '04-mobileweb-rem,媒体查询适配方案',
                '05-mobileweb-响应式布局',
            ],
            '/webapi/': [
                '01-webapi',
                '02-webapi',
                '03-webapi',
                '04-webapi',
                '05-webapi',
                '06-webapi',
                '07-webapi',
            ],
            '/jquery/': [
                '01-jquery',
                '02-jquery',
                '03-jquery',
                '04-jquery',
                '05-jquery',
            ],
            '/regexp/': [
                '正则表达式'
            ],
            '/es6/': [
                'ES6',
                'ES6及ES6降级处理'
            ],
            '/nodejs/': [
                '01-Web概念-初识Node.js',
                '02-文件模块-核心模块-第三方模块',
                '03-HTTP协议-静态服务器',
                '04-动态服务器',
                '05-Express',
                '06-MySQL',
                '07-综合案例-状态保持',
            ],
            '/ajax/': [
                '01-ajax',
                '02-ajax'
            ],
            '/tools/': [
                '/',
                "浏览器同步测试工具",
            ],
            '/canvas/': [
                'canvas'
            ]
        },
        //作者
        author: '酱紫',
        // 备案
        // record: 'ICP 备案文案',
        // recordLink: 'ICP 备案指向链接',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2020',

        mode: 'light', //默认显示白天模式
        // 评论设置
        // valineConfig: {
        //     appId: process.env.LEANCLOUD_APP_ID,
        //     appKey: process.env.LEANCLOUD_APP_KEY,
        // }

    },
    markdown: {
        lineNumbers: true //代码显示行号
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,

}