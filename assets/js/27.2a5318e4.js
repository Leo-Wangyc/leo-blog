(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{336:function(t,s,a){"use strict";a.r(s);var n=a(14),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),s("p",[t._v("算法 algorithm [/'ælgərɪðəm/]")]),t._v(" "),s("p",[t._v("前端算法参考资料")]),t._v(" "),s("blockquote",[s("p",[t._v("https://juejin.cn/post/6844904175562653710")])]),t._v(" "),s("h2",{attrs:{id:"复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复杂度"}},[t._v("#")]),t._v(" 复杂度")]),t._v(" "),s("h2",{attrs:{id:"爬楼梯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#爬楼梯"}},[t._v("#")]),t._v(" 爬楼梯")]),t._v(" "),s("p",[s("strong",[t._v("假设你正在爬楼梯。需要 "),s("em",[t._v("n")]),t._v(" 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("p",[t._v("思路解析：")]),t._v(" "),s("p",[t._v("​ 设爬到第 n 阶楼梯的总共可能数为 dp[n]，那么，该问题就变成了一个寻求一个 dp[n]与前几项的一个等式的问题，从而能利用循环，以及 dp[n]已知的前几项来得出所求的 dp[n]")]),t._v(" "),s("p",[t._v("​ 按照思路，首先寻求一下 dp[n]和前几项的关系，即 dp[n]和 dp[n-1]，dp[n-2]，dp[n-3]....之间的关系，可以发现，，即爬到第 n 阶，有两种可能，一种是从第 n-1 阶爬 1 个台阶到 n，还一种是从 n-2 阶爬 2 个台阶到 n，所以，爬到第 n 阶的可能数 dp[n]就会等于爬到第 n-1 阶的所有可能的总数 dp[n-1]，再爬一级上 n，加上爬到第 n-2 阶的所有可能的总数 dp[n-2]，再爬两级台阶上 n，故而得到等式："),s("code",[t._v("dp[n] = dp[n-1] + dp[n-2]")])]),t._v(" "),s("p",[t._v("​ 项与项之前的关系确定之后，只要确定前几项的值，就可以推算出 dp[n]的值了，第 0 阶为 0，爬到第一阶只有一种可能，那就是直接上 1 级。爬到第二阶有两种可能，上两次一级台阶和直接上两级台阶。故而得出"),s("code",[t._v("dp[0] = 0, dp[1] = 1, dp[2] = 2")])]),t._v(" "),s("p",[t._v("​ 思路理清后，直接上代码")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calStairs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处注意，i为0，1，2时已经有值，所以循环直接从3开始，而且此处的i一定是小于等于")]),t._v("\n    dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calStairs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 89")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);