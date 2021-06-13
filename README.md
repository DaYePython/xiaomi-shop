# xiaomi-shop

## css架构方案
项目采用 ITCSS为主题 BEM ACSS辅助的方案

1. settings 维护变量
2. base 浏览器样式重置和标签定制
3. tools 维护工具类 
4. components 是ITCSS中Objects和component合并, 用`BEM`命名规范来约束组件
5. ACSS 常用的原子类
6. theme 维护主题相关


## Q&A

1. Q:**vite.config.json.css.preprocessorOptions.scss.additionalData** 导入 和**main.ts import**有什么区别
   A: 前者相当在每一个**scss**文件和`<style lang="scss"></style>`都导入一份, 适用于高频的**scss**导入;
   而后者在全局公共入口导入, 所有页面自然而然就会受到影响, 所以它适用于一些纯样式导入.
