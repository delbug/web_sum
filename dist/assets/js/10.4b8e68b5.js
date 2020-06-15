(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{522:function(t,_,v){t.exports=v.p+"assets/img/01_定位示例1.1ccdb8e6.gif"},523:function(t,_,v){t.exports=v.p+"assets/img/02_定位示例2.2c08844e.gif"},524:function(t,_,v){t.exports=v.p+"assets/img/03_定位示例3.a4363313.png"},525:function(t,_,v){t.exports=v.p+"assets/img/05_绝对定位_父级无定位.115b9280.png"},526:function(t,_,v){t.exports=v.p+"assets/img/06_绝对定位_父级有定位.d2933e2a.png"},527:function(t,_,v){t.exports=v.p+"assets/img/07_子绝父相截图.a659f005.png"},528:function(t,_,v){t.exports=v.p+"assets/img/08_固定定位案例.9983f1ca.png"},529:function(t,_,v){t.exports=v.p+"assets/img/09_哈根达斯案例示意图.e21ce993.png"},530:function(t,_,v){t.exports=v.p+"assets/img/10_绝对定位水平居中.7834615b.png"},531:function(t,_,v){t.exports=v.p+"assets/img/11_绝对定位居中示意图.30073c2f.png"},532:function(t,_,v){t.exports=v.p+"assets/img/12_zindex示意图.1abe916a.png"},669:function(t,_,v){"use strict";v.r(_);var s=v(4),n=Object(s.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"定位-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定位-position"}},[t._v("#")]),t._v(" 定位(position)")]),t._v(" "),s("h2",{attrs:{id:"目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("记忆")]),t._v(" "),s("ul",[s("li",[t._v("能够说出 CSS 的布局的三种机制")])])]),t._v(" "),s("li",[s("strong",[t._v("理解")]),t._v(" "),s("ul",[s("li",[t._v("能说出为什么要用定位")]),t._v(" "),s("li",[t._v("能说出定位的4种分类")]),t._v(" "),s("li",[t._v("能说出四种定位的各自特点")]),t._v(" "),s("li",[t._v("能说出我们为什么常用子绝父相布局")])])]),t._v(" "),s("li",[s("strong",[t._v("应用")]),t._v(" "),s("ul",[s("li",[t._v("能写出小米轮播图")])])])]),t._v(" "),s("h2",{attrs:{id:"_1-css-布局的三种机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-布局的三种机制"}},[t._v("#")]),t._v(" 1. CSS 布局的三种机制")]),t._v(" "),s("blockquote",[s("p",[t._v("网页布局的核心 —— 就是"),s("strong",[t._v("用 CSS 来摆放盒子位置")]),t._v("。")])]),t._v(" "),s("p",[t._v("CSS 提供了 "),s("strong",[t._v("3 种机制")]),t._v("来设置盒子的摆放位置，分别是"),s("strong",[t._v("普通流")]),t._v("、"),s("strong",[t._v("浮动")]),t._v("和"),s("strong",[t._v("定位")]),t._v("，其中：")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("普通流")]),t._v("（"),s("strong",[t._v("标准流")]),t._v("）")]),t._v(" "),s("ul",[s("li",[t._v("一个网页内的标签元素按照"),s("strong",[t._v("从上到下，从左到右")]),t._v("的顺序排列：\n"),s("ul",[s("li",[s("strong",[t._v("块级元素")]),t._v("会独占一行，"),s("strong",[t._v("从上向下")]),t._v("顺序排列。")]),t._v(" "),s("li",[s("strong",[t._v("行内元素")]),t._v("会按照顺序，"),s("strong",[t._v("从左到右")]),t._v("顺序排列。")])])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("浮动")])]),t._v(" "),s("ul",[s("li",[t._v("让盒子从普通流中"),s("strong",[t._v("浮")]),t._v("起来 —— "),s("strong",[t._v("让多个盒子(div)水平排列成一行")]),t._v("。")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("定位")])]),t._v(" "),s("ul",[s("li",[t._v("将盒子"),s("strong",[t._v("定")]),t._v("在某一个"),s("strong",[t._v("位")]),t._v("置  漂浮在其他盒子的上面  —— CSS 离不开定位，特别是后面的 js 特效。")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-认识定位-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-认识定位-position"}},[t._v("#")]),t._v(" 2. 认识定位(position)")]),t._v(" "),s("p",[s("strong",[t._v("概念")]),t._v("："),s("code",[t._v("定位 = 定位模式 + 边偏移")]),t._v("，将盒子"),s("strong",[t._v("定")]),t._v("在某一个"),s("strong",[t._v("位")]),t._v("置。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-定位的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-定位的作用"}},[t._v("#")]),t._v(" 2.1 定位的作用")]),t._v(" "),s("blockquote",[s("p",[t._v("我们先来看几个"),s("strong",[t._v("使用定位实现的页面效果")]),t._v("，同时思考一下"),s("strong",[t._v("用标准流或浮动能否实现类似的效果")]),t._v("？")])]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("小黄色块")]),t._v("在图片上移动，"),s("strong",[t._v("吸引用户的眼球")]),t._v("。")]),t._v(" "),s("img",{attrs:{src:v(522)}})]),t._v(" "),s("li",[s("p",[s("strong",[t._v("左右箭头")]),t._v("压在图片上，"),s("strong",[t._v("方便用户交互")]),t._v("。\n"),s("img",{attrs:{src:v(523)}})])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("hot")]),t._v("、"),s("strong",[t._v("new")]),t._v(" 压在盒子上方，"),s("strong",[t._v("吸引用户的眼球")]),t._v("。")]),t._v(" "),s("img",{attrs:{src:v(524)}})])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("结论")]),t._v("：要实现以上效果，"),s("strong",[t._v("标准流")]),t._v("或"),s("strong",[t._v("浮动")]),t._v("不太好做，这时候就需要使用到 CSS 布局的第 3 个机制 —— "),s("strong",[t._v("定位")]),t._v("！")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-语法"}},[t._v("#")]),t._v(" 2.2 语法")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("定位的概念")]),t._v("："),s("code",[t._v("定位 = 定位模式 + 边偏移")])])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-边偏移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-边偏移"}},[t._v("#")]),t._v(" 2.2.1 边偏移")]),t._v(" "),s("p",[t._v("在 CSS 中，通过 "),s("code",[t._v("top")]),t._v("、"),s("code",[t._v("bottom")]),t._v("、"),s("code",[t._v("left")]),t._v(" 和 "),s("code",[t._v("right")]),t._v(" 属性定义元素的"),s("strong",[t._v("边偏移")]),t._v("：（方位名词）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("边偏移属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("top")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("top: 80px")])]),t._v(" "),s("td",[s("strong",[t._v("顶端")]),t._v("偏移量，定义元素相对于其父元素"),s("strong",[t._v("上边线的距离")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("bottom")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("bottom: 80px")])]),t._v(" "),s("td",[s("strong",[t._v("底部")]),t._v("偏移量，定义元素相对于其父元素"),s("strong",[t._v("下边线的距离")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("left")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("left: 80px")])]),t._v(" "),s("td",[s("strong",[t._v("左侧")]),t._v("偏移量，定义元素相对于其父元素"),s("strong",[t._v("左边线的距离")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("right")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("right: 80px")])]),t._v(" "),s("td",[s("strong",[t._v("右侧")]),t._v("偏移量，定义元素相对于其父元素"),s("strong",[t._v("右边线的距离")]),t._v("。")])])])]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("边偏移")]),t._v("需要和"),s("strong",[t._v("定位模式")]),t._v("联合使用，"),s("strong",[t._v("单独使用无效")]),t._v("；")]),t._v(" "),s("li",[s("code",[t._v("top")]),t._v(" 和 "),s("code",[t._v("bottom")]),t._v(" 不要同时使用；")]),t._v(" "),s("li",[s("code",[t._v("left")]),t._v(" 和 "),s("code",[t._v("right")]),t._v(" 不要同时使用。")])]),t._v(" "),s("blockquote",[s("p",[t._v("案例演示：边偏移属性。")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-2-定位模式（定位的分类）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-定位模式（定位的分类）"}},[t._v("#")]),t._v(" 2.2.2 定位模式（定位的分类）")]),t._v(" "),s("p",[t._v("在 CSS 中，通过 "),s("code",[t._v("position")]),t._v(" 属性定义元素的"),s("strong",[t._v("定位模式")]),t._v("，语法如下：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("选择器")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 属性值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("语义")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("关键词")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("static")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("静态")]),t._v("定位")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("不定位")])]),t._v(" "),s("td",[t._v("所有元素的默认定位方式。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("relative")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("相对")]),t._v("定位")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("自恋")])]),t._v(" "),s("td",[t._v("相对于其"),s("strong",[t._v("原标准流的位置")]),t._v("进行定位")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("absolute")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("绝对")]),t._v("定位")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("拼爹")])]),t._v(" "),s("td",[t._v("相对于其上一个"),s("strong",[t._v("已经定位的父元素")]),t._v("进行定位")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("fixed")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("固定")]),t._v("定位")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("浏览器")])]),t._v(" "),s("td",[t._v("相对于"),s("strong",[t._v("浏览器窗口")]),t._v("进行定位")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-3-定位模式间的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-定位模式间的区别"}},[t._v("#")]),t._v(" 2.3 定位模式间的区别")]),t._v(" "),s("h4",{attrs:{id:"_2-3-1-静态定位-static"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-静态定位-static"}},[t._v("#")]),t._v(" 2.3.1 静态定位(static)")]),t._v(" "),s("p",[s("strong",[t._v("静态定位")]),t._v("是元素的默认定位方式，也就是说网页中"),s("strong",[t._v("所有元素")]),t._v("默认"),s("strong",[t._v("都是静态定位的")]),t._v(" —— 按照标准流特性摆放位置。")]),t._v(" "),s("blockquote",[s("p",[t._v("用大白话来讲，"),s("strong",[t._v("在不需要定位元素时，元素的定位属性就是 "),s("code",[t._v("static")]),t._v(" 的")]),t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：在"),s("strong",[t._v("静态模式")]),t._v("下，无法通过"),s("strong",[t._v("边偏移属性")]),t._v("（"),s("code",[t._v("top")]),t._v("、"),s("code",[t._v("bottom")]),t._v("、"),s("code",[t._v("left")]),t._v(" 或 "),s("code",[t._v("right")]),t._v("）来改变元素的位置。")]),t._v(" "),s("p",[s("strong",[t._v("提示")]),t._v("：因为是默认值，所以"),s("strong",[t._v("静态定位在布局时不使用")]),t._v("，但是要知道。")]),t._v(" "),s("blockquote",[s("p",[t._v("案例演示：静态模式下边偏移属性无效。")])]),t._v(" "),s("h4",{attrs:{id:"_2-3-2-相对定位-relative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-相对定位-relative"}},[t._v("#")]),t._v(" 2.3.2 相对定位(relative)")]),t._v(" "),s("p",[s("strong",[t._v("相对定位")]),t._v("是元素"),s("strong",[t._v("相对")]),t._v("于它 "),s("code",[t._v("在标准流中的位置 + 边偏移属性")]),t._v(" 来设置元素的位置。（自恋型）")]),t._v(" "),s("blockquote",[s("p",[t._v("案例演示：相对定位案例。")])]),t._v(" "),s("p",[s("strong",[t._v("效果图")]),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:"",alt:"相对定位案例"}})]),t._v(" "),s("p",[s("strong",[t._v("相对定位小结")]),t._v(" —— "),s("strong",[t._v("相对定位不脱标")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("以 "),s("code",[t._v("自己在标准流位置的左上角为基点 + 边偏移属性")]),t._v(" 定位元素新的位置；")])]),t._v(" "),s("li",[s("p",[t._v("原来"),s("strong",[t._v("在标准流的区域继续占有")]),t._v("，后面的盒子仍然以标准流的方式对待它。")])])]),t._v(" "),s("h5",{attrs:{id:"与浮动的对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与浮动的对比"}},[t._v("#")]),t._v(" 与浮动的对比")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("浮动")]),t._v(" —— 让多个块级元素在一行显示，"),s("strong",[t._v("脱离标准流")]),t._v("；")]),t._v(" "),s("li",[s("strong",[t._v("相对定位")]),t._v(" —— 让盒子移动到我们想要的位置，"),s("strong",[t._v("不脱标")]),t._v("。")])]),t._v(" "),s("h4",{attrs:{id:"_2-3-3-绝对定位-absolute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-绝对定位-absolute"}},[t._v("#")]),t._v(" 2.3.3 绝对定位(absolute)")]),t._v(" "),s("p",[s("strong",[t._v("绝对定位")]),t._v("有两个重要的概念：（拼爹型）")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("完全脱标")]),t._v(" —— 完全不占位置；")]),t._v(" "),s("li",[s("strong",[t._v("父元素要有定位")]),t._v(" —— "),s("code",[t._v("父元素在标准流中的位置 + 边偏移属性")]),t._v(" 来设置元素的位置；\n"),s("ul",[s("li",[t._v("如果当前父元素没有定位（"),s("strong",[t._v("相对")]),t._v("、"),s("strong",[t._v("绝对")]),t._v("或"),s("strong",[t._v("固定")]),t._v("），则寻找上一级"),s("strong",[t._v("有定位")]),t._v("的父元素；")]),t._v(" "),s("li",[t._v("如果"),s("strong",[t._v("所有父元素")]),t._v("都没有定位，则以"),s("strong",[t._v("浏览器")]),t._v("为准定位（Document 文档）。")]),t._v(" "),s("li",[t._v("如果父亲有定位，则以父亲为准。")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("案例演练：父级没有定位。")])]),t._v(" "),s("img",{attrs:{src:v(525),width:"700"}}),t._v(" "),s("blockquote",[s("p",[t._v("案例演练：父级有定位。")])]),t._v(" "),s("img",{attrs:{src:v(526),width:"700"}}),t._v(" "),s("h5",{attrs:{id:"定位口诀-子绝父相"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定位口诀-子绝父相"}},[t._v("#")]),t._v(" 定位口诀 —— 子绝父相")]),t._v(" "),s("p",[s("strong",[t._v("子绝父相")]),t._v(" —— "),s("strong",[t._v("子级")]),t._v("是"),s("strong",[t._v("绝对")]),t._v("定位，"),s("strong",[t._v("父级")]),t._v("要用"),s("strong",[t._v("相对")]),t._v("定位。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("子绝父相")]),t._v("是使用绝对定位的口诀，要牢牢记住！")])]),t._v(" "),s("p",[s("strong",[t._v("疑问")]),t._v("：为什么在布局时，"),s("strong",[t._v("子级元素")]),t._v("使用"),s("strong",[t._v("绝对定位")]),t._v("时，"),s("strong",[t._v("父级元素")]),t._v("就要用"),s("strong",[t._v("相对定位")]),t._v("呢？")]),t._v(" "),s("p",[t._v("观察下图，思考一下在布局时，"),s("strong",[t._v("左右两个方向的箭头图片")]),t._v("以及"),s("strong",[t._v("父级盒子")]),t._v("的定位方式。")]),t._v(" "),s("img",{attrs:{src:v(527),width:"700"}}),t._v("\n**分析**：\n"),s("ol",[s("li",[s("strong",[t._v("方向箭头")]),t._v("叠加在其他图片上方，应该使用"),s("strong",[t._v("绝对定位")]),t._v("，因为"),s("strong",[t._v("绝对定位完全脱标")]),t._v("，完全不占位置。")]),t._v(" "),s("li",[s("strong",[t._v("父级盒子")]),t._v("应该使用"),s("strong",[t._v("相对定位")]),t._v("，因为"),s("strong",[t._v("相对定位不脱标")]),t._v("，后续盒子仍然以标准流的方式对待它。\n"),s("ul",[s("li",[t._v("如果父级盒子也使用"),s("strong",[t._v("绝对定位")]),t._v("，会完全脱标，那么下方的"),s("strong",[t._v("广告盒子")]),t._v("会上移，这显然不是我们想要的。")])])])]),t._v(" "),s("p",[s("strong",[t._v("结论")]),t._v("："),s("strong",[t._v("父级要占有位置，子级要任意摆放")]),t._v("，这就是"),s("strong",[t._v("子绝父相")]),t._v("的由来。")]),t._v(" "),s("h4",{attrs:{id:"_2-3-4-固定定位-fixed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-固定定位-fixed"}},[t._v("#")]),t._v(" 2.3.4 固定定位(fixed)")]),t._v(" "),s("p",[s("strong",[t._v("固定定位")]),t._v("是"),s("strong",[t._v("绝对定位")]),t._v("的一种特殊形式： （认死理型）")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("完全脱标")]),t._v(" —— 完全不占位置；")]),t._v(" "),s("li",[t._v("只认"),s("strong",[t._v("浏览器的可视窗口")]),t._v(" —— "),s("code",[t._v("浏览器可视窗口 + 边偏移属性")]),t._v(" 来设置元素的位置；\n"),s("ul",[s("li",[t._v("跟父元素没有任何关系；")]),t._v(" "),s("li",[t._v("不随滚动条滚动。")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("案例演练：固定定位案例。")])]),t._v(" "),s("img",{attrs:{src:v(528)}}),t._v("\n**提示**：IE 6 等低版本浏览器不支持固定定位。\n"),s("h2",{attrs:{id:"_3-定位-position-的案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-定位-position-的案例"}},[t._v("#")]),t._v(" 3. 定位(position)的案例")]),t._v(" "),s("h3",{attrs:{id:"_3-1-哈根达斯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-哈根达斯"}},[t._v("#")]),t._v(" 3.1 哈根达斯")]),t._v(" "),s("p",[s("strong",[t._v("备课代码")]),t._v("："),s("RouterLink",{attrs:{to:"/css/备课代码/07_哈根达斯.html"}},[t._v("哈根达斯备课代码")])],1),t._v(" "),s("p",[s("strong",[t._v("案例截图")]),t._v("：")]),t._v(" "),s("img",{attrs:{src:v(529),width:"500"}}),t._v(" "),s("h4",{attrs:{id:"哈根达斯分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哈根达斯分析"}},[t._v("#")]),t._v(" 哈根达斯分析")]),t._v(" "),s("ol",[s("li",[t._v("一个大的 "),s("code",[t._v("div")]),t._v(" 中包含 "),s("code",[t._v("3")]),t._v(" 张图片；")]),t._v(" "),s("li",[t._v("大的 "),s("code",[t._v("div")]),t._v(" 水平居中；")]),t._v(" "),s("li",[s("code",[t._v("2")]),t._v(" 张小图片"),s("strong",[t._v("重叠")]),t._v("在"),s("strong",[t._v("广告")]),t._v("图片上方 —— 脱标，不占位置，需要使用"),s("strong",[t._v("绝对定位")]),t._v("；")]),t._v(" "),s("li",[s("code",[t._v("2")]),t._v(" 张小图片分别显示在"),s("strong",[t._v("左上角")]),t._v("和"),s("strong",[t._v("右下角")]),t._v(" —— 需要"),s("strong",[t._v("使用边偏移确定准确位置")]),t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("案例小结")]),t._v("：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("子绝父相")]),t._v(" —— "),s("strong",[t._v("子元素")]),t._v("使用"),s("strong",[t._v("绝对定位")]),t._v("，"),s("strong",[t._v("父元素")]),t._v("使用"),s("strong",[t._v("相对定位")]),t._v("；")]),t._v(" "),s("li",[s("strong",[t._v("与浮动的对比")]),t._v("：\n"),s("ul",[s("li",[s("strong",[t._v("绝对定位")]),t._v("：脱标，"),s("strong",[t._v("利用边偏移指定准确位置")]),t._v("；")]),t._v(" "),s("li",[s("strong",[t._v("浮动")]),t._v("：脱标，不能指定准确位置，"),s("strong",[t._v("让多个块级元素在一行显示")]),t._v("。")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("课堂练习：模拟老师的随堂案例完成"),s("strong",[t._v("哈根达斯")]),t._v("案例（5 分钟）。")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-仿新浪头部和广告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-仿新浪头部和广告"}},[t._v("#")]),t._v(" 3.2 仿新浪头部和广告")]),t._v(" "),s("p",[s("strong",[t._v("备课代码")]),t._v("："),s("RouterLink",{attrs:{to:"/css/备课代码/08_仿新浪头部和广告.html"}},[t._v("仿新浪头部和广告")])],1),t._v(" "),s("h4",{attrs:{id:"新浪案例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新浪案例分析"}},[t._v("#")]),t._v(" 新浪案例分析")]),t._v(" "),s("ol",[s("li",[t._v("顶部图片"),s("strong",[t._v("固定")]),t._v("在浏览器可视窗口顶部，不会随窗口一起滚动；")]),t._v(" "),s("li",[t._v("左右两侧的广告图片"),s("strong",[t._v("固定")]),t._v("在浏览器可视窗口的左右两侧，不会随窗口一起滚动；")]),t._v(" "),s("li",[t._v("注意："),s("strong",[t._v("底部的内容图片")]),t._v("初始"),s("strong",[t._v("显示在顶部图片的下方")]),t._v("，如何解决？")])]),t._v(" "),s("h4",{attrs:{id:"步骤-1-顶部图片和底部内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-顶部图片和底部内容"}},[t._v("#")]),t._v(" 步骤 1 —— 顶部图片和底部内容")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".top")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 注意：使用固定定位时，如果盒子中没有内容，需要指定宽度 */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 44px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("./images/top.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" no-repeat top center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1002px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 顶部的 44px 的 margin 可以让 box 显示在顶部图片下方 */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 44px auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("p",[s("strong",[t._v("注意")]),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("在使用固定定位时，如果盒子中没有内容，需要指定宽度（稍后就讲）；")]),t._v(" "),s("li",[t._v("设置底部内容图片的"),s("strong",[t._v("顶部 "),s("code",[t._v("margin")])]),t._v("，可以让底部盒子初始显示在顶部图片的下方。")])]),t._v(" "),s("h4",{attrs:{id:"步骤-2-左右两侧广告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-左右两侧广告"}},[t._v("#")]),t._v(" 步骤 2 —— 左右两侧广告")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ad-left,\n.ad-right")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ad-left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ad-right")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[s("strong",[t._v("注意")]),t._v("：不要同时使用 "),s("code",[t._v("left")]),t._v(" 和 "),s("code",[t._v("right")]),t._v(" 和边偏移属性。")]),t._v(" "),s("p",[s("strong",[t._v("案例小结")]),t._v("：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("固定定位")]),t._v("的应用场景："),s("strong",[t._v("固定在浏览器可视窗口某个位置的布局")]),t._v("；")]),t._v(" "),s("li",[t._v("在使用固定和绝对定位时，如果盒子中没有内容，需要指定宽度（稍后就讲）。")])]),t._v(" "),s("blockquote",[s("p",[t._v("课堂练习：模拟老师的随堂案例完成"),s("strong",[t._v("仿新浪头部和广告")]),t._v("案例（5 分钟）。")])]),t._v(" "),s("h2",{attrs:{id:"_4-定位-position-的扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-定位-position-的扩展"}},[t._v("#")]),t._v(" 4. 定位(position)的扩展")]),t._v(" "),s("h3",{attrs:{id:"_4-1-绝对定位的盒子居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-绝对定位的盒子居中"}},[t._v("#")]),t._v(" 4.1 绝对定位的盒子居中")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注意")]),t._v("："),s("strong",[t._v("绝对定位")]),t._v("不能通过设置 "),s("code",[t._v("margin: auto")]),t._v(" 设置"),s("strong",[t._v("水平居中")]),t._v("。")])]),t._v(" "),s("p",[t._v("在使用"),s("strong",[t._v("绝对定位")]),t._v("时要想实现水平居中，可以按照下图的方法：")]),t._v(" "),s("img",{attrs:{src:v(530)}}),t._v(" "),s("ol",[s("li",[s("code",[t._v("left: 50%;")]),t._v("：让"),s("strong",[t._v("盒子的左侧")]),t._v("移动到"),s("strong",[t._v("父级元素的水平中心位置")]),t._v("；")]),t._v(" "),s("li",[s("code",[t._v("margin-left: -100px;")]),t._v("：让盒子"),s("strong",[t._v("向左")]),t._v("移动"),s("strong",[t._v("自身宽度的一半")]),t._v("。")])]),t._v(" "),s("blockquote",[s("p",[t._v("案例演示：相对定位案例。")])]),t._v(" "),s("h4",{attrs:{id:"盒子居中定位示意图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒子居中定位示意图"}},[t._v("#")]),t._v(" 盒子居中定位示意图")]),t._v(" "),s("img",{attrs:{src:v(531)}}),t._v(" "),s("blockquote",[s("p",[t._v("课堂练习：实现"),s("strong",[t._v("盒子左中、右中、中上、中下、中中定位")]),t._v("（5 分钟）。")])]),t._v(" "),s("h3",{attrs:{id:"_4-2-堆叠顺序（z-index）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-堆叠顺序（z-index）"}},[t._v("#")]),t._v(" 4.2 堆叠顺序（z-index）")]),t._v(" "),s("p",[t._v("在使用"),s("strong",[t._v("定位")]),t._v("布局时，可能会"),s("strong",[t._v("出现盒子重叠的情况")]),t._v("。应用 "),s("code",[t._v("z-index")]),t._v(" 层叠等级属性可以"),s("strong",[t._v("调整盒子的堆叠顺序")]),t._v("。如下图所示：")]),t._v(" "),s("img",{attrs:{src:v(532)}}),t._v(" "),s("p",[s("code",[t._v("z-index")]),t._v(" 的特性如下：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("属性值")]),t._v("："),s("strong",[t._v("正整数")]),t._v("、"),s("strong",[t._v("负整数")]),t._v("或 "),s("strong",[t._v("0")]),t._v("，默认值是 0，数值越大，盒子越靠上；")]),t._v(" "),s("li",[t._v("如果"),s("strong",[t._v("属性值相同")]),t._v("，则按照书写顺序，"),s("strong",[t._v("后来居上")]),t._v("；")]),t._v(" "),s("li",[s("strong",[t._v("数字后面不能加单位")]),t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("："),s("code",[t._v("z-index")]),t._v(" 只能应用于"),s("strong",[t._v("相对定位")]),t._v("、"),s("strong",[t._v("绝对定位")]),t._v("和"),s("strong",[t._v("固定定位")]),t._v("的元素，其他"),s("strong",[t._v("标准流")]),t._v("、"),s("strong",[t._v("浮动")]),t._v("和"),s("strong",[t._v("静态定位")]),t._v("无效。")]),t._v(" "),s("blockquote",[s("p",[t._v("案例演示：堆叠顺序。")])]),t._v(" "),s("h3",{attrs:{id:"_4-3-行内块元素特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-行内块元素特性"}},[t._v("#")]),t._v(" 4.3 行内块元素特性")]),t._v(" "),s("p",[t._v("前面我们讲过， 行内块的特性，   一行可以有多个， 可以设置高度和宽度， 大小是受内容的影响。")]),t._v(" "),s("ul",[s("li",[t._v("可以用inline-block  转换为行内块")]),t._v(" "),s("li",[t._v("可以用浮动 float 默认转换为行内块（类似，并不完全一样，因为浮动是脱标的）")]),t._v(" "),s("li",[t._v("绝对定位和固定定位也和浮动类似， 默认转换的特性 转换为行内块。")])]),t._v(" "),s("p",[t._v("所以说， 一个行内的盒子，如果加了浮动、固定定位和绝对定位，不用转换，就可以给这个盒子直接设置宽度和高度等。")]),t._v(" "),s("h2",{attrs:{id:"_4-综合演练-淘宝轮播图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-综合演练-淘宝轮播图"}},[t._v("#")]),t._v(" 4. 综合演练 - 淘宝轮播图")]),t._v(" "),s("h2",{attrs:{id:"_5-定位小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-定位小结"}},[t._v("#")]),t._v(" 5. 定位小结")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("定位模式")]),t._v(" "),s("th",[t._v("是否脱标占有位置")]),t._v(" "),s("th",[t._v("是否可以使用边偏移")]),t._v(" "),s("th",[t._v("移动位置基准")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("静态static")]),t._v(" "),s("td",[t._v("不脱标，正常模式")]),t._v(" "),s("td",[t._v("不可以")]),t._v(" "),s("td",[t._v("正常模式")])]),t._v(" "),s("tr",[s("td",[t._v("相对定位relative")]),t._v(" "),s("td",[t._v("不脱标，占有位置")]),t._v(" "),s("td",[t._v("可以")]),t._v(" "),s("td",[t._v("相对自身位置移动（自恋型）")])]),t._v(" "),s("tr",[s("td",[t._v("绝对定位absolute")]),t._v(" "),s("td",[t._v("完全脱标，不占有位置")]),t._v(" "),s("td",[t._v("可以")]),t._v(" "),s("td",[t._v("相对于定位父级移动位置（拼爹型）")])]),t._v(" "),s("tr",[s("td",[t._v("固定定位fixed")]),t._v(" "),s("td",[t._v("完全脱标，不占有位置")]),t._v(" "),s("td",[t._v("可以")]),t._v(" "),s("td",[t._v("相对于浏览器移动位置（认死理型）")])])])])])}),[],!1,null,null,null);_.default=n.exports}}]);