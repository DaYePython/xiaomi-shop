# IconPark

## SvgIcon

### 优势

- 矢量图像, 不失真, 更锐利
- 多色图标
- 控制图标不同部位, 还可以加入动画

## IconPark

**IconPark**[vue文档](https://github.com/bytedance/IconPark/blob/master/packages/vue-next/README.zh-CN.md)

### 安装

```
yarn add @icon-park/vue-next
// or npm
npm i @icon-park/vue-next --save
```

### 导入组件

如文档所示 分 **组件(局部或全局)导入**, **样式导入**
```js
// 局部导入
<template>
 <home theme="filled"/>
</template>
<script>
import {Home} from '@icon-park/vue-next';

export default {
    components: {
        Home
    }
}
</script>


```

```js
// main.ts
import {install} from '@icon-park/vue-next/es/all';
import {createApp} from 'vue';

const app = createApp({});

// Install
install(app); // use default prefix 'icon', eg: icon is People, name is icon-people.
install(app, 'i'); // use custom prefix 'i', eg: icon is People, name is i-people.

app.mount('#app');
```

**一定要忘了导入样式**

```js
// 样式导入
import '@icon-park/vue-next/styles/index.css';
```

### 配置
在项目根路径下新建 `icons.json`

```json
```