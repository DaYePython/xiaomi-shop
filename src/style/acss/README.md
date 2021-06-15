# acss

## 让样式极限复用

一种样式就用一个类来实现, 需要直接引入即可.

```html
<style>
  .flex{
      display
  }
</style>

<div class="flex"></div>
```

### acss vs component

**acss** 和 **component** 复用区别, 后者是页面需要这个组件才有复用的意义, 而不需要时就没有复用的必要;
**acss** 则是对样式的复用, 需要样式时引入即可.

## 属性选择器

使用属性选择既能发挥**acss**的特长, 又能避免语义化的缺失
如 引入**flex**

```html
<style>
  [flex]{
      display
  }
</style>
<main flex></main>
```

## settings 和 acss

**acss**的抽象来源

- **settings**是对样式频繁出现值, 变量抽象, 这个也可以被**acss**引用
- 平时项目重复出现的, 如 'flex, float'
