# cypress

## 安装

```shell
yarn add @cypress/vite-dev-server @cypress/vue@next cypress

// 初始化
yarn cypress open
```

命令执行后, cypress 会自动在项目目录上新建**cypress**, 里面有插件和示例, 我们需要将他移入**tests**文件夹
将项目所有**js**改成**ts**

## 配置

```json
// cypress.json
{
  "pluginsFile": "tests/cypress/plugins/index.ts",
  "testFiles": "**/*spec.*",
  "componentFolder": "src",
  "video": false
}
```
