# Tools

使用 (sassMagic)[http://w3cplus.github.io/SassMagic/] 充当工具层

## sassMagic 简介

## 安装

1. 直接将(项目)[https://github.com/W3cplus/SassMagic]的**src**下载复制到**tools**
2. 在**vite**引入

   ```json
   // vite.config.json

    css: {
    preprocessorOptions: {
      scss: {
        additonalData: `@import "@/style/tools/_sassMagic.scss";`
      }
    }
   },
   ```

3. 注释未定义文件, 后边我们自己重构, 先编译通过

4. 测试

```vue
// App.vue
<template>
  <section>Hello</section>
</template>

<style lang="scss" scoped>
section {
  display: block;
  width: 100px;
  height: 100px;
  color: red;
  background-color: #7f7f7f;
  @include box-center;
}
</style>
```
