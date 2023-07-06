module.exports = {
  base: "/leo-blog/",
  title: "Leo's Starship",
  description: "Just playing around",
  themeConfig: {
    // 配置Logo
    // logo: "/assets/img/logo.png",

    // 配置标题深度，最小0，最大2。 其中，2支持h2和h3标签
    sidebarDepth: 2,

    // 配置导航栏
    //  - 配置关闭导航
    // navbar: false,
    //  - 配置导航
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        items: [
          {
            text: "Home",
            link: "/",
          },
          // {
          //   text: "JS&ES6",
          //   link: "/js&es6", // 默认读取js&es6.html，md也可识别，不过如果是个文件夹，则不能识别
          // },
        ],
      },
      // { text: "External", link: "https://google.com" },
    ],

    // 3 配置侧边栏
    sidebar: [
      {
        title: "Computer Science", // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0, // 可选的, 默认值是 1
        children: [
          {
            title: "C", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 0, // 可选的, 默认值是 1
            children: [
              {
                title: "C", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 0, // 可选的, 默认值是 1
                path: "../computer-science/C/c",
              },
            ],
          },
          // {
          //   title: "Cocos", // 必要的
          //   collapsable: true, // 可选的, 默认值是 true,
          //   sidebarDepth: 0, // 可选的, 默认值是 1
          //   path: "../computer-science/Cocos",
          //   // children: [],
          // },
          {
            title: "Front End", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [
              {
                title: "Front-End Theory", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 0, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/FrontEndTheory",
              },
              {
                title: "HTML", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 0, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/HTML5",
              },
              {
                title: "CSS", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/CSS",
              },
              {
                title: "JS & ES6+", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/JS&ES6+",
              },
              {
                title: "TypeScript", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/TypeScript",
              },
              {
                title: "Node", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/Node",
              },
              {
                title: "Vue", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/Vue",
              },
              {
                title: "React", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/React",
              },
              {
                title: "Mini App", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/Miniapp",
              },
              {
                title: "Webpack", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/Webpack",
              },
              {
                title: "Component Design", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/ComponentDesign",
              },
              {
                title: "Cloud Development", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/CloudDevelopment",
              },
              {
                title: "Real Project", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/project",
              },
              {
                title: "Special", // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                path: "../computer-science/Front-end/special",
              },
            ],
          },
          {
            title: "Algorithm", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 0, // 可选的, 默认值是 1
            path: "../computer-science/algorithm",
            // children: [],
          },
          {
            title: "Computer Tech", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 0, // 可选的, 默认值是 1
            path: "../computer-science/ComputerScience",
            // children: [],
          },
          {
            title: "Git", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 0, // 可选的, 默认值是 1
            path: "../computer-science/Git",
            // children: [],
          },
          {
            title: "Vue Press", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 0, // 可选的, 默认值是 1
            path: "../computer-science/vue-press",
            // children: [],
          },
        ],
      },
      {
        title: "English", // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: "Grammar", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2, // 可选的, 默认值是 1
            path: "../english/Grammar",
          },
          {
            title: "Sentences", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2, // 可选的, 默认值是 1
            path: "../english/Sentences",
          },
          {
            title: "Verbal", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2, // 可选的, 默认值是 1
            path: "../english/Verbal",
          },
          {
            title: "Word&Lexis", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2, // 可选的, 默认值是 1
            path: "../english/Word&Lexis",
          },
        ],
      },
      {
        title: "Ecnomics", // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          {
            title: "Economics", // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2, // 可选的, 默认值是 1
            path: "../economics/Economics",
          },
        ],
      },
    ],
  },
};
