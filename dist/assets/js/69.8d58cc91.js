(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{719:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webapis-day04"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webapis-day04"}},[t._v("#")]),t._v(" webAPIs-day04")]),t._v(" "),a("h2",{attrs:{id:"_4-其他操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他操作"}},[t._v("#")]),t._v(" 4. 其他操作")]),t._v(" "),a("h3",{attrs:{id:"_4-1-插入元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-插入元素"}},[t._v("#")]),t._v(" 4.1 插入元素")]),t._v(" "),a("ul",[a("li",[t._v("语法："),a("strong",[t._v("父节点.insertBefore(新的节点,旧的子节点)")])]),t._v(" "),a("li",[t._v("代码：")])]),t._v(" "),a("h3",{attrs:{id:"_4-2-替换元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-替换元素"}},[t._v("#")]),t._v(" 4.2 替换元素")]),t._v(" "),a("ul",[a("li",[t._v("语法："),a("strong",[t._v("父节点.replaceChild(新的节点,旧的子节点)")])])]),t._v(" "),a("h3",{attrs:{id:"_4-3-克隆元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-克隆元素"}},[t._v("#")]),t._v(" 4.3 克隆元素")]),t._v(" "),a("ul",[a("li",[t._v("语法：元素.cloneNode(true或false);  返回一份新的克隆后的元素\n"),a("ul",[a("li",[t._v("true，克隆元素内部所有的内容")]),t._v(" "),a("li",[t._v("false,默认，克隆的是外部的标签")])])])]),t._v(" "),a("p",[t._v("输入事件：oninput")]),t._v(" "),a("h2",{attrs:{id:"核心知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心知识点"}},[t._v("#")]),t._v(" 核心知识点")]),t._v(" "),a("ul",[a("li",[t._v("事件监听注册和移除事件")]),t._v(" "),a("li",[t._v("事件流（事件的三个阶段）")]),t._v(" "),a("li",[t._v("事件对象")]),t._v(" "),a("li",[t._v("事件委托")])]),t._v(" "),a("h2",{attrs:{id:"_1-事件监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件监听"}},[t._v("#")]),t._v(" 1. 事件监听")]),t._v(" "),a("h3",{attrs:{id:"_1-1-为什么要学事件监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-为什么要学事件监听"}},[t._v("#")]),t._v(" 1.1 为什么要学事件监听")]),t._v(" "),a("blockquote",[a("p",[t._v("需求：给一个元素连续绑定两次点击事件，并且事件处理程序都有效。")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-事件监听注册事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-事件监听注册事件"}},[t._v("#")]),t._v(" 1.2 事件监听注册事件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("语法："),a("strong",[t._v("事件源.addEventListener('事件类型',事件处理程序,是否捕获);")])]),t._v(" "),a("blockquote",[a("p",[t._v("事件源 → 操作的元素")]),t._v(" "),a("p",[t._v("事件类型→ 在此不加on,  onclick→click")]),t._v(" "),a("p",[t._v("事件处理程序→ 函数")]),t._v(" "),a("p",[t._v("是否捕获，可选参数，默认为false。 true→ 捕获，false→冒泡")])])]),t._v(" "),a("li",[a("p",[t._v("代码：")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需求：给一个元素连续绑定两次点击事件，并且事件处理程序都有效。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册一个点击事件")]),t._v("\n    btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])])]),t._v(" "),a("h3",{attrs:{id:"_1-3-事件监听移除事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-事件监听移除事件"}},[t._v("#")]),t._v(" 1.3 事件监听移除事件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("语法："),a("strong",[t._v("事件源.removeEventListener('事件类型',事件处理程序的名称)")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("事件源，操作的元素")]),t._v(" "),a("li",[t._v("事件类型，不加on")]),t._v(" "),a("li",[t._v("事件处理程序的名字：函数名\n"),a("ul",[a("li",[t._v("注意：若将来要通过事件监听的方式移除事件时，之前注册事件"),a("strong",[t._v("要把事件处理程序单独抽取出来命名")]),t._v(" 。")])])])])])]),t._v(" "),a("li",[a("p",[t._v("代码：")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("按钮"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需求：给一个元素连续绑定两次点击事件，并且事件处理程序都有效。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册一个点击事件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除事件(前提：注册事件处理程序时，事件处理程序要有名字，而不是匿名函数)")]),t._v("\n    btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    \n    \n  ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])])])])]),t._v(" "),a("h2",{attrs:{id:"_2-事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-事件流"}},[t._v("#")]),t._v(" 2. 事件流")]),t._v(" "),a("h3",{attrs:{id:"_2-1-什么是事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-什么是事件流"}},[t._v("#")]),t._v(" 2.1 什么是事件流")]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"media/01.png",alt:""}}),t._v(" "),a("strong",[t._v("事件流")]),t._v(" ：事件触发后的三个阶段（捕获阶段、==目标阶段==、==冒泡阶段==）。")]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" 在事件触发后，这三个阶段始终是存在的，"),a("strong",[t._v("顺序① 先捕获，② 到达目标，③ 再冒泡。")]),t._v("  但是在触发后，针对捕获和冒泡，仅仅启用一个。")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-事件冒泡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-事件冒泡"}},[t._v("#")]),t._v(" 2.2 事件冒泡")]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"media/02.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("事件冒泡：目标阶段→document")])])]),t._v(" "),a("h3",{attrs:{id:"_2-3-事件捕获"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-事件捕获"}},[t._v("#")]),t._v(" 2.3 事件捕获")]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"media/03.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("事件捕获：document→目标阶段;  反冒泡。了解即可")])])]),t._v(" "),a("h2",{attrs:{id:"_3-事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-事件对象"}},[t._v("#")]),t._v(" 3. 事件对象")]),t._v(" "),a("p",[t._v("event")]),t._v(" "),a("h3",{attrs:{id:"_3-1-什么是事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-什么是事件对象"}},[t._v("#")]),t._v(" 3.1 什么是事件对象")]),t._v(" "),a("blockquote",[a("p",[t._v("事件对象，在事件==触发后== ，在==事件处理程序中== （函数体），所获取并操作的==对象==。")]),t._v(" "),a("p",[t._v("事件对象中存放了和当前事件相关的信息（比如鼠标的位置、键盘按下哪个键等等）")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-获取事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-获取事件对象"}},[t._v("#")]),t._v(" 3.2 获取事件对象")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("语法："),a("strong",[a("code",[t._v("事件源.事件类型 = function(e){ // 第一个形参e就是事件对象 }")])])])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-鼠标事件对象相关属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-鼠标事件对象相关属性"}},[t._v("#")]),t._v(" 3.3 鼠标事件对象相关属性")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("鼠标事件类型")]),t._v(" "),a("ul",[a("li",[t._v("onclick")]),t._v(" "),a("li",[t._v("onmouseenter")]),t._v(" "),a("li",[t._v("onmouseleave")]),t._v(" "),a("li",[t._v("onmousedown 鼠标按下")]),t._v(" "),a("li",[t._v("onmouseup      鼠标弹起")]),t._v(" "),a("li",[t._v("onmousemove 鼠标移动")])])]),t._v(" "),a("li",[a("p",[t._v("鼠标事件对象相关属性-获取鼠标的位置")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("事件对象.clientX   /    事件对象.clientY    参照是==浏览器==")]),t._v(" "),a("li",[t._v("事件对象.pageX   /    事件对象.pageY    参照是==文档==")]),t._v(" "),a("li",[t._v("事件对象.offsetX   /    事件对象.offsetY    参照是==当前的元素==\n"),a("img",{attrs:{src:"media/04.png",alt:""}})])])]),t._v(" "),a("p",[t._v("​")])])]),t._v(" "),a("h3",{attrs:{id:"_3-4-键盘事件对象相关属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-键盘事件对象相关属性"}},[t._v("#")]),t._v(" 3.4 键盘事件对象相关属性")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("键盘事件")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("事件类型\n"),a("ul",[a("li",[t._v("onkeydown    键盘按下事件")]),t._v(" "),a("li",[t._v("onkeyup         键盘弹起事件")])])]),t._v(" "),a("li",[t._v("注意：\n"),a("ul",[a("li",[t._v("一般情况给document绑定键盘事件。")])])])])])]),t._v(" "),a("li",[a("p",[t._v("键盘事件对象相关属性-键盘按下哪个键")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("==事件对象.keyCode==     获取键盘按键对应的键码值")]),t._v(" "),a("li",[t._v("事件对象.altKey        表示alt键是否按下，返回布尔值。")]),t._v(" "),a("li",[t._v("事件对象.shiftKey        表示shift键是否按下，返回布尔值。")]),t._v(" "),a("li",[t._v("==事件对象.ctrlKey==        表示ctrl键是否按下，返回布尔值。true（按下），false(没有按下)")])])])])]),t._v(" "),a("h3",{attrs:{id:"_3-5-事件对象的公共属性和方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-事件对象的公共属性和方法"}},[t._v("#")]),t._v(" 3.5 事件对象的公共属性和方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("属性：")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("==事件对象.target==     获取最先触发的元素")]),t._v(" "),a("li",[t._v("和this的区别\n"),a("ul",[a("li",[t._v("this在事件处理程序中始终代表的是事件源")]),t._v(" "),a("li",[t._v("e.target 代表不一定是事件源，代表的是最先触发的元素【目标阶段→ document】")])])])])])]),t._v(" "),a("li",[a("p",[t._v("方法：")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("事件对象.preventDefault();   阻止默认行为")]),t._v(" "),a("li",[t._v("==事件对象.stopPropagation();==   停止冒泡传播")])])])])]),t._v(" "),a("h3",{attrs:{id:"案例："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例："}},[t._v("#")]),t._v(" 案例：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("图片跟着鼠标移动")])]),t._v(" "),a("li",[a("p",[t._v("拖拽（元素的offsetLeft 和 offsetTop）")]),t._v(" "),a("p",[t._v("​")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);