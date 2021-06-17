# jest

## 单元测试和集成测试

1. 单元测试: 对最小单元进行测试, 最小单元可以是一个函数, 一个文件.
2. 集成测试: 在单元测试的基础上，将所有模块按照设计要求组装成为子系统或系统，进行集成测试。

## jest 环境搭建

### 安装

```shell
yarn add -D jest
```

### 初始化

```shell
yarn jest --init
```
按照指引完成初始化(Vue等前端开发一般选择**jsdom**, 其他按照要求选择即可), 执行完成会在项目根目录生成**jest.config.json**文件

### 开启自动化测试

```json
//package.json
{
    "script": {
        "test-unit": "jest"
    }
}
```

之后运行`yarn test-unit`就可以开始自动测试

## jest匹配器

[匹配器文档](https://jestjs.io/docs/using-matchers)

### 类型匹配器

1. toBe(), 相当于绝对相等("===");
2. toEqual(), 内容匹配相等;
3. toBeNull(), 匹配**null**, 但不匹配**undefined**;
4. toBeUndefined(), 匹配**undefined**;
5. toBeDefined(), 只要是被定义过的就能匹配成功;
6. toBeTruthy(), 匹配**true**, false无法通过;
7. toBeFalsy(), 匹配**false**, true无法通过;

### 数值匹配器

1. toBeGreaterThan() 数值匹配器, 大于期待数值则匹配成功
2. toBeGreaterThanOrEqual()
3. toBeLessThan()
4. toBeLessThanOrEqual()
5. toBeCloseTo(), 这个匹配器自动消除**js浮点数精度错误**, 如 **0.1 + 0.2** js的j结果可能是**0.300000004**, 但是这个匹配器可以匹配到**3**

### 字符串匹配器

1. toMatch(), 字符串包含匹配器, 传入可以是**正则**对象
2. toContain(), 迭代器数组包含匹配器, 同时匹配多个字符串
3. toThrow() 异常消息匹配器, 期望值与抛出异常字符串对比
   
### 特殊匹配器

1. not(), 表示不希望后面匹配器成功, 如果后面匹配器匹配成功, 则整个匹配失败

## 让jest支持**import**和**Es6**语法

需要使用**babel**
```
yarn add  @babel/core @babel/preset-env  -D
```

配置bebel

```json
// .babelrc or babel
{
    "presets":[
        [
                "@babel/preset-env",{
                "targets":{
                    "node":"current"
                }
            }
        ]
    ]
}

```
**babel** 可以将我们代码转化为能被**当前node**读取的代码

## 测试异步代码

由于异步**执行时机的不确定**, Jest无法对异步执行结果进行匹配,
Jest会对测试异步函数执行完成后测试就已经完成, 他不会等待异步执行完成再去匹配

### 回调函数

对于回调函数
测试函数第一个参数可以帮助jest掌握测试完成时机, 将参数放入回调函数**执行**

``` js
test( 'fetchData'，(done) => {
    fetchData( (data) => {
        expect (data). toEqual({
            success: true
        })
        done() ;
    })
});

```

### Promise

针对测试函数返回的是**Promise**对象

```js
test('FetchData', ()=>{
        // 注意 return
       return  fetchTwoData().then((response)=>{
            expect(response.data).toEqual({
                success: true
            })
        })
  })
```

注意执行结果一定要**return**, 不然测试不会通过

测试**catch**错误, 如果没有触发**catch**时, 程序不会执行测试代码里面内容,而直接**测试成功** 但是我们必须测试这个里面的内容
我们可以通过**expect.assertions()**指定**expect**必须执行的次数

```js
test('FetchData', ()=>{
      expect.assertions(1)  // 必须执行一次expect
      return fetchThreeData().catch((e)=>{
        expect(e.toString().indexOf('404')> -1).toBe(true)

      })
  })
```

### await/async

**resolves** 可以将普通对象转化成**Promise**对象

```js
test('FetchFourData 测试', async()=>{
        //resolves把现有对象转换成Promise对象，
        //toMatchObject 匹配对象中的属性
        await expect(fetchFourData()).resolves.toMatchObject({
            data:{
                success:true
            }
        })
})

```

当然你也可以在**await**返回之后进行测试

```js
test('FetchFourData 测试', async()=>{
        const response  = await fetchFourData()
        expect(response.data).toEqual({
            success : true
        })
})
```

## 四个钩子函数

- beforeAll(), 在所有测试用例执行之前执行
- afterAll(), 在所有测试用例执行之后执行
- beforeEach(), 在每个测试用例执行之前执行
- afterEach(), 在每个测试用例执行之后执行

[示例](http://www.jspang.com/detailed?id=65#toc263)

## 测试用例分组

**Jest**为我们提供了一个分组的语法`describe()`


## 钩子函数的生命周期

- 钩子函数在父级分组可作用域子集，类似继承
- 钩子函数同级分组作用域互不干扰，各起作用
- 先执行外部的钩子函数，再执行内部的钩子函数

## Jest mock

### jest.fn()

**jest.fn**可以创建一个可以被捕捉调用的函数

1. mock 返回值
2. 自由修改返回值
3. 改变函数实现

```js
test( '测试runCallback', () => {
    const func = jest.fn(); // mock 函数，捕获函数的调用
    runCallback( func) ;
    runCallback( func) ;
    runCallback( func) ;
    // 模拟一次return 
    jest.mockReturnValueOnce()
    expect(func.mock.calls.length).toBe(3);
    console.log( func.mock) ;
});

```

jest.fn().mock
- calls, 调用情况,[[调用时传入的参数], [调用时传入的参数]]
- instance
- results: {} 返回的结果, mockReturnValue
- invocationCallOrder 执行顺序


### mockImplementation

```js
const fun = mock.fn()
fun.mockImplementation(()=>{
    console.log("...")
    return "something"
})
```

### 修改函数实现

修改**axios**函数实现 异步改成了同步

```js
jest.mock('axios')

test.only( '测试getData' ,
    async()=>{
        // mock, 第三个用处是改变函数的内部实现
        axios.get.mockResolvedValue( {data: 'hello'})
        await getData().then((data) => {
            expect(data).toBe('hello');
    })
})
```

- unmock 移除mock


### auto mock

```json
{
    automock: true
}

```
**automock**为**true**时, jest会去**__mocks__**目录查找相同函数的执行, 如果没有找到就使用真实的函数

**jest.requireActual()**可以引入真实的函数


### mock timer

对定时器进行模拟

- jest.useFakeTimers() 将后面出现的定时器全部模拟
- jest.advanceTimersByTime(1) 将定时器前进1秒
- jest.runAllTimers(), 将所有定时器执行完成, 包括嵌套的定时器
- jest.runOnlyPendingTimers(), 只执行在等待队列的定时器