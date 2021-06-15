# oocss

**面向对象设计模式**
以`类(.classname{})`为对象编码, 在不想修改之前的 css 源码的情况下,新增类来修改或者扩展样式.
**oocss**编写过程中要遵守两个原则

- 内容与容器分离
- 结构与皮肤分离

## 内容与容器分离

```html
<!-- 容器与内容分离-->
<!-- post中的meta-data -->
<div class=" post">
  <p class=" metadata ">post</p>
</div>
<!-- comment中的meta-data -->
<div class=" comment">
  <p class=" metadata">comment</p>
</div>
```

其中**post**和**comment**为容器, **metadata**为内容.
如果按`.post .metadata {}`编写, 则容器和内容耦合,`.post`和`.metadata`高度绑定在一起, 所以建议`.post{} .metadata{}`分开编写.

## 结构与皮肤分离

```html
<div class="menu fix1 fix2..."></div>
.menu{ color: black; font-size: 24px; } .fix1{ color: red; } .fix2 { font-size:
16px; }
```

结构(基础对象 menu) : 页面最基本的代码(html 以及其相关的 css 代码)
皮肤(对象 .fix1, fix2): 更复杂的 css 代码
结构与皮肤分离, 只需修改皮肤对象就可以修改整个页面的样式

## oocss 应用

1. vue 的组件开发
2. Grid 栅格系统
3. 布局组件

# BEM

B(block 块) E(元素)\_\_ M(modifier 修饰符) --

- B: 是在页面独立的**模块**, 任何页面都可以被切分成许多 block, block 之间可以相互嵌套.
- E : B 中元素,值得注意的是, 一个 Block 下的所有 Element 无论相互层级如何, 都要摊开扁平的属于 Block, 所以只有**B+E+M**三层. B 与 E 用下划线**\_**相连

- M: 对相似元素(也可以是 block)进行修饰区分, 可以表示不同状态(.current .active, .selected ...) 注意, M 不能单独存在,必须搭配 E 或者 B, 如`icon icon-font`.

BEM 作用: 命名规范 结构清晰
**进阶版的 oocss**

# SMACSS

为 css 带来了分类 (Base(reset) Layout(页面布局) Modules State Theme)
Yes: 高复用, 易维护, 易扩展
命名规范: l-header(layout) is-hidden(state) theme-nav(theme)

# ITCSS

对 css 进行分层

![分层图](https://files.mdnice.com/user/7673/9e612ad2-9267-4611-84e1-06ad3eacc015.png)

- SETTINGS 维护网页的变量, 设置, 配置
- TOOLs 维护着工具类@mixins, @function 如 省略号... 清除浮动.clearfix
- GENERIC 对浏览器默认样式重置
- BASE 对元素进行定制化, a{... color: #030303} input{} form{}
- OBJECTS, OOCSS
- COMPONENTS
- TRUMPS 提高权重

# ACSS

原子类 一个样式对应一个类
好处: 复用, 维护成本低
坏处: 破坏了 css 命名语义
