# xiaomi-shop

## 技术栈

+ 图标方案选用字节跳动的
  + [官网](https://iconpark.oceanengine.com/official)
  + [github](https://github.com/bytedance/IconPark)
  + (项目相关)(./docs/iconpark.md)

## css 架构方案

项目采用 ITCSS 为主题 BEM ACSS 辅助的方案

1. settings 维护变量
2. base 浏览器样式重置和标签定制
3. tools 维护工具类
4. components 是 ITCSS 中 Objects 和 component 合并, 用`BEM`命名规范来约束组件
5. ACSS 常用的原子类
6. theme 维护主题相关

## 测试

### 组件测试

组件测试我们使用**cypress** [查看更多](./docs/test/cypress.md)

## Q&A

1. Q:**vite.config.json.css.preprocessorOptions.scss.additionalData** 导入 和**main.ts import**有什么区别
   A: 前者相当在每一个**scss**文件和`<style lang="scss"></style>`都导入一份, 适用于高频的**scss**导入;
   而后者在全局公共入口导入, 所有页面自然而然就会受到影响, 所以它适用于一些纯样式导入.
   + **additionalData**: 适合于共享在整个css框架的内容, 比如**settings**层和**tool**层;
   + **main.ts**适用于只在页面上起作用的样式, 比如**base**层, **acss**层和**theme**层.
