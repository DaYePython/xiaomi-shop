项目采用 ITCSS 为主题 BEM ACSS 辅助的方案

1. settings 维护变量
2. base 浏览器样式重置和标签定制
3. tools 维护工具类
4. components 是 ITCSS 中 Objects 和 component 合并, 用`BEM`命名规范来约束组件
5. ACSS 常用的原子类
6. theme 维护主题相关

1-6 从高到低

- 低层引用高层
- 层数越高复用度就越大, 权重越低

其中 **settings**和**tools**需要被其他层引用,
