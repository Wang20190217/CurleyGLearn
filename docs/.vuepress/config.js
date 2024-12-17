module.exports = {
    port: "8080",
    dest: ".site",
    base: "/",
    // 是否开启默认预加载js
    shouldPrefetch: (file, type) => {
        return false;
    },
    // webpack 配置 https://vuepress.vuejs.org/zh/config/#chainwebpack
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            const dateTime = new Date().getTime();

            // 清除js版本号
            config.output.filename('assets/js/cg-[name].js?v=' + dateTime).end();
            config.output.chunkFilename('assets/js/cg-[name].js?v=' + dateTime).end();

            // 清除css版本号
            config.plugin('mini-css-extract-plugin').use(require('mini-css-extract-plugin'), [{
                filename: 'assets/css/[name].css?v=' + dateTime,
                chunkFilename: 'assets/css/[name].css?v=' + dateTime
            }]).end();

        }
    },
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "CurleyG技术",
            description: "包含：编程语言，开发技术，分布式，微服务，高并发，高可用，高可扩展，高可维护，JVM技术，MySQL，分布式数据库，分布式事务，云原生，大数据，云计算，渗透技术，各种面试题，面试技巧..."
        }
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/favicon.ico`}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "CurleyG"}],
        ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate"}],
        ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
        ["meta", {"http-equiv": "Expires", content: "0"}],
        ["meta", {
            name: "keywords",
            content: "CurleyG，CurleyG技术, 编程语言，开发技术，分布式，微服务，高并发，高可用，高可扩展，高可维护，JVM技术，MySQL，分布式数据库，分布式事务，云原生，大数据，云计算，渗透技术，各种面试题，面试技巧"
        }],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                // src: 'https://code.jquery.com/jquery-3.5.1.min.js',
                src: '/js/jquery.min.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                // src: 'https://code.jquery.com/jquery-3.5.1.min.js',
                src: '/js/global.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                src: '/js/fingerprint2.min.js',
            }],
        //github: binghe001.github.io
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                src: 'https://v1.cnzz.com/z_stat.php?id=1281063564&web_id=1281063564',
            }],
        //gitee: binghe001.gitee.io
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                src: 'https://s9.cnzz.com/z_stat.php?id=1281064551&web_id=1281064551',
            }],
        // 添加百度统计
        ["script", {},
            `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?d091d2fd0231588b1d0f9231e24e3f5e";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
            `
        ]
    ],
    plugins: [
        [
            {globalUIComponents: ['LockArticle', 'PayArticle', 'RedirectArticle']}
        ],
        // ['@vssue/vuepress-plugin-vssue', {
        //     platform: 'github-v3', //v3的platform是github，v4的是github-v4
        //     // 其他的 Vssue 配置
        //     owner: 'fuzhengwei', //github账户名
        //     repo: 'CodeGuide', //github一个项目的名称
        //     clientId: 'df8beab2190bec20352a',//注册的Client ID
        //     clientSecret: '7eeeb4369d699c933f02a026ae8bb1e2a9c80e90',//注册的Client Secret
        //     autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
        // }
        // ],
        // ['@vuepress/back-to-top', true], replaced with inject page-sidebar
        ['@vuepress/medium-zoom', {
            selector: 'img:not(.nozoom)',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],
        // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html#%E9%80%89%E9%A1%B9
        // ['@vuepress/pwa', {
        //     serviceWorker: true,
        //     updatePopup: {
        //         '/': {
        //             message: "发现新内容可用",
        //             buttonText: "刷新"
        //         },
        //     }
        // }],
        // see: https://vuepress.github.io/zh/plugins/copyright/#%E5%AE%89%E8%A3%85
        // ['copyright', {
        //     noCopy: false, // 允许复制内容
        //     minLength: 100, // 如果长度超过 100 个字符
        //     authorName: "https://binghe.gitcode.host",
        //     clipboardComponent: "请注明文章出处, [CurleyG技术](https://binghe.gitcode.host)"
        // }],
        // see: https://github.com/ekoeryanto/vuepress-plugin-sitemap
        // ['sitemap', {
        //     hostname: 'https://binghe.gitcode.host'
        // }],
        // see: https://github.com/IOriens/vuepress-plugin-baidu-autopush
        ['vuepress-plugin-baidu-autopush', {}],
        // see: https://github.com/znicholasbrown/vuepress-plugin-code-copy
        ['vuepress-plugin-code-copy', {
            align: 'bottom',
            color: '#3eaf7c',
            successText: '@CurleyG: 代码已经复制到剪贴板'
        }],
        // see: https://github.com/tolking/vuepress-plugin-img-lazy
        ['img-lazy', {}],
        ["vuepress-plugin-tags", {
            type: 'default', // 标签预定义样式
            color: '#42b983',  // 标签字体颜色
            border: '1px solid #e2faef', // 标签边框颜色
            backgroundColor: '#f0faf5', // 标签背景颜色
            selector: '.page .content__default h1' // ^v1.0.1 你要将此标签渲染挂载到哪个元素后面？默认是第一个 H1 标签后面；
        }],
        // https://github.com/lorisleiva/vuepress-plugin-seo
        ["seo", {
            siteTitle: (_, $site) => $site.title,
            title: $page => $page.title,
            description: $page => $page.frontmatter.description,
            author: (_, $site) => $site.themeConfig.author,
            tags: $page => $page.frontmatter.tags,
            // twitterCard: _ => 'summary_large_image',
            type: $page => 'article',
            url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
            image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
            publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
            modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        }]
    ],
    themeConfig: {
        docsRepo: "Wang20190217/CurleyG",
        // 编辑文档的所在目录
        docsDir: 'docs',
        // 文档放在一个特定的分支下：
        docsBranch: 'master',
        //logo: "/logo.png",
        editLinks: true,
        sidebarDepth: 0,
        //smoothScroll: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: 'curleyg后台管理系统',
                        link: '/md/project/curleyg/1.简介.md'
                    },
                ],
                sidebar: {
                    "/md/project/curleyg/": getCurleyG(),
                }
            }
        }
    }
};



function getCurleyG() {
    return [
        {
            title: "萌新必读",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "1.简介.md",
                "2.视频教程.md",
                "3.功能列表.md",
                "4.快速启动（后端项目）.md",
                "5.快速启动（前端项目）.md",
                "6.接口文档.md",
                "7.技术选型.md",
                "8.项目结构.md",
                "9.一键改包.md",
                "10.删除功能.md",
                "11.表结构变更.md",
                "12.国产信创数据库.md",
                "13.如何去除 Redis 缓存.md",
                "14.内网穿透.md",
                "15.代码热加载.md",
                "16.迁移模块（适合新项目）.md",

            ]
        },
        {
            title: "后端手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "27.新建模块.md",
                "28.代码生成【单表】.md",
                "29.代码生成【主子表】.md",
                "30.代码生成（树表）.md",
                "31.功能权限.md",
                "32.数据权限.md",
                "33.用户体系.md",
                "34.三方登录.md",
                "35.OAuth 2.0（SSO 单点登录).md",
                "36.SaaS 多租户【字段隔离】.md",
                "37.SaaS 多租户【数据库隔离】.md",
                "38.WebSocket 实时通信.md",
                "39.异常处理（错误码）.md",
                "40.分页实现.md",
                "41.VO 对象转换、数据翻译.md",
                "42.文件存储（上传下载）.md",
                "43.Excel 导入导出.md",
                "44.操作日志、访问日志、异常日志.md",
                "45.MyBatis 数据库.md",
                "46.MyBatis 联表&分页查询.md",
                "47.多数据源（读写分离）、事务.md",
                "48.Redis 缓存.md",
                "49.本地缓存.md",
                "50.异步任务.md",
                "51.分布式锁.md",
                "52.幂等性（防重复提交）.md",
                "53.请求限流（RateLimiter）.md",
                "54.HTTP 接口签名（防篡改）.md",
                "55.单元测试.md",
                "56.验证码.md",
                "57.工具类 Util.md",
                "58.配置管理.md",
                "59.数据库文档.md",
            ]
        },
        {
            title: "系统手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "144.短信配置.md",
                "145.邮件配置.md",
                "146.站内信配置.md",
                "147.数据脱敏、字段权限.md",
                "148.敏感词.md",
                "149.地区 & IP 库.md",
            ]
        },
        {
            title: "中间件手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "60.定时任务.md",
                "61.消息队列（内存）.md",
                "62.消息队列（Redis）.md",
                "63.消息队列（RocketMQ）.md",
                "64.消息队列（RabbitMQ）.md",
                "65.消息队列（Kafka）.md",
                "66.限流熔断.md",
            ]
        },
        {
            title: "大屏手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "67.报表设计器.md",
                "68.大屏设计器.md",
            ]
        },
        {
            title: "支付手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "69.功能开启.md",
                "70.支付宝支付接入.md",
                "71.微信公众号支付接入.md",
                "72.微信小程序支付接入.md",
                "73.支付宝、微信退款接入.md",
                "74.钱包充值、支付、退款.md",
                "75.模拟支付、退款.md",
            ]
        },
        {
            title: "会员手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "76.功能开启.md",
                "77.微信公众号登录.md",
                "78.微信小程序订阅消息.md",
                "79.微信小程序码.md",
                "80.会员用户、标签、分组.md",
                "81.会员等级、积分、签到.md",
            ]
        },
        {
            title: "商城手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "82.商城演示.md",
                "84.商城装修.md",
                "85.在线客服.md",
                "86.【商品】商品分类.md",
                "87.【商品】商品属性.md",
                "88.【商品】商品 SPU 与 SKU.md",
                "90.【商品】商品评价.md",
                "91.【交易】购物车.md",
                "92.【交易】交易订单.md",
                "93.【交易】售后退款.md",
                "94.【交易】快递发货.md",
                "95.【交易】门店自提.md",
                "96.【交易】分销返佣.md",
                "97.【营销】优惠劵.md",
                "98.【营销】积分商城.md",
                "99.【营销】拼团活动.md",
                "100.【营销】秒杀活动.md",
                "101.【营销】砍价活动.md",
                "102.【营销】满减送活动.md",
                "103.【营销】限时折扣.md",
                "104.【营销】内容管理.md",
                "105.【统计】会员、商品、交易统计.md",
            ]
        },
        {
            title: "ERP手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "106.ERP 演示.md",
                "107.功能开启.md",
                "108.【产品】产品信息、分类、单位.md",
                "109.【库存】产品库存、库存明细.md",
                "110.【库存】其它入库、其它出库.md",
                "112.【采购】采购订单、入库、退货.md",
                "113.【销售】销售订单、出库、退货.md",
                "114.【财务】采购付款、销售收款.md",

            ]
        },
        {
            title: "CRM手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "115.CRM 演示.md",
                "116.功能开启.md",
                "117.【线索】线索管理.md",
                "118.【客户】客户管理、公海客户.md",
                "119.【商机】商机管理、商机状态.md",
                "120.【合同】合同管理、合同提醒.md",
                "121.回款】回款管理、回款计划.md",
                "122.【产品】产品管理、产品分类.md",
                "123.【通用】数据权限.md",
                "124.【通用】跟进记录、待办事项.md",
            ]
        },
        {
            title: "AI大模型手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "125.AI 大模型演示.md",
                "126.功能开启.md",
                "127.AI 聊天对话.md",
                "128.AI 绘画创作.md",
                "129.AI 音乐创作.md",
                "130.AI 写作助手.md",
                "131.AI 思维导图.md",
                "132.【模型接入】OpenAI.md",
                "133.【模型接入】通义千问.md",
                "134.【模型接入】LLAMA.md",
                "135.【模型接入】文心一言.md",
                "136.【模型接入】DeepSeek.md",
                "137.【模型接入】智谱 GLM.md",
                "138.【模型接入】讯飞星火.md",
                "139.【模型接入】微软 OpenAI.md",
                "140.【模型接入】谷歌Gemini.md",
                "141.【模型接入】Stable Diffusion.md",
                "142.【模型接入】Midjourney.md",
                "143.【模型接入】Suno.md",
            ]
        },

        {
            title: "公众号手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "17.公众号手册.md",
                "18.公众号接入.md",
                "19.公众号粉丝.md",
                "20.公众号标签.md",
                "21.公众号消息.md",
                "22.自动回复.md",
                "23.公众号菜单.md",
                "24.公众号素材.md",
                "25.公众号图文.md",
                "26.公众号统计.md",
            ]
        },
        {
            title: "运维手册",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "150.开发环境.md",
                "151.Linux 部署.md",
                "152.Docker 部署.md",
                "153.Jenkins 部署.md",
                "154.宝塔部署.md",
                "155.HTTPS 证书.md",
                "156.服务监控.md",
            ]
        },
        {
            title: "前端手册VUE3",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "157.开发规范.md",
                "158.菜单路由.md",
                "159.Icon 图标.md",
                "160.字典数据.md",
                "161.系统组件.md",
                "162.通用方法.md",
                "163.配置读取.md",
                "164.CRUD 组件.md",
                "165.国际化.md",
                "166.IDE 调试.md",
                "167.代码格式化.md",
            ]
        },
        {
            title: "前端手册VUE2",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "168.开发规范.md",
                "169.菜单路由.md",
                "170.Icon 图标.md",
                "171.字典数据.md",
                "172.系统组件.md",
                "173.通用方法.md",
                "174.配置读取.md",
            ]
        }


    ]
}




