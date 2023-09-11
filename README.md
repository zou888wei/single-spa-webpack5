# [single-spa-webpack5](https://github.com/zou888wei/single-spa-webpack5)
single-spa + Module Federation项目，本项目以vue2为基座(my-root)，搭配四个子应用：my-vue2子应用，my-vue3 (TS) 子应用，my-react子应用，my-components-vue2组件库，除了组件库外，各个子应用也可以独立运行并使用 Module Federation，此项目用于学习与理解single-spa及Module Federation的使用及与各个框架搭建

整体项目都是基于vue和react框架的脚手架搭建，并且使用pnpm进行依赖管理，如果修改了目录名字，需要删除node_modules重新建立依赖关系，或者自行改成yarn、npm等

框架项目不推荐集成原生html项目，还不如直接用iframe切换，除非也有一个入口js能进行模块化

使用方法：

```cmake
git clone https://github.com/zou888wei/single-spa-webpack5.git

cd single-spa-webpack5

pnpm install

pnpm serve

// 各个子项目也可以独立运行查看
// my-vue2: http://localhost:11001
// my-vue3: http://localhost:11002
// my-react: http://localhost:11003
```

## 特别说明 
```
1. 该项目使用的是最新的vue-cli，新版本内置了webpack@5.54以上，老版本一般是webpack4或者webpack5的bate版，则需要另外去解决，一般是配合vue-loader等插件
2. 由于模块联邦导出组件是异步的，所以在子应用中加载组件时需要在single-spa及new vue之前加载，写法上有些不优雅，如果有好的想法，可以联系我讨论一下
3. 由于webpack5得原因，单独开发的话需要设置IS_ROOT为true，并且必须移除shared和exposes（已做配置），shared会导致找不到依赖无法启动，exposes会导致本地开发没有热更新（并报错）
```

## 待完善

```
1. 集成vite-vue、vite-react（vite环境与webpack环境不一致，需要更改基座构建环境来适配）
2. 增加angule
```

## 扩展项目

1. single-spa-default：[原生single-spa + vue基座项目](https://github.com/zou888wei/single-spa-default)
2. single-spa-qiankun（待添加）
3. micro-app-demo（待添加）

