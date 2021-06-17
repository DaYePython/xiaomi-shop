# jest 进阶

## 对配置文件测试

使用**toMatchSnapshot()**, 每次匹配生成快照, 每次比对都是快照之间的比对, 修改配置项测试不通过

```js
import { generateConfig } from ' ./demo' ;
test( '测试generateConfig 函数'，() => {
    expect (generateConfig()). toMatchSnapshot();
});

```

### 更新快照

`yarn jest --watch`, 选择**u**就可以更新测试不通过的快照了, 也可以选择**i**交互式地更新快照

### 指定快照字段类型

**expect.any()** 指定类型, 即使内容发生变化, 只要类型没有变化, 测试也可以通过

### 内联快照

**toMatchInlineSnapshot** 配合 **prettier** 可以将 快照内嵌进测试代码中

