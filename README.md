# muse-mobile

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目目录结构
```
#|-- dist 生成打包后文件
#|-- node_modules 安装的依赖包
#|-- public public中的静态资源会被复制到输出目录（dist）中
#|-- src
#|   |-- api 与后端交互使用相关方法和配置
#|   |-- assets 放置一些静态资源，例如图片，图标，字体。
#|   |-- components 一些公共组件
#|   |-- libs 工具方法
#|   |   |-- auth.js token管理
#|   |   |-- loading 全局loading方法(暂无)
#|   |-- router vue-router相关配置
#|   |   |-- index.js 导出路由配置
#|   |   |-- routes.js 所有的路由
#|   |-- store vuex相关配置
#|   |   |-- global 全局vuex使用的配置
#|   |   |   |-- actions.js 全局vuex actions方法(暂无)
#|   |   |   |-- index.js 导出全局vuex配置(暂无)
#|   |   |   |-- mutations.js 全局vuex mutations方法(暂无)
#|   |   |   |-- state.js 全局vuex state(暂无)
#|   |   |-- modules 模块化的vuex
#|   |   |   |-- index.js 将modules下的所有模块（about）导出(暂无)
#|   |   |   |-- about.js about组件对应的vuex模块(暂无)
#|   |-- utils 自定义函数方法
#|   |   |-- axios.js ajax请求的方法
#|   |   |-- request.js ajax请求的方法
#|   |   |-- storage.js 存储的方法
#|   |-- views 所有的路由组件
#|   |   |-- wanyuanTraver 万源差旅模块
#|   |   |-- recuperation 疗休养模块
#|   |   |--      ·
#|   |   |--      ·
#|   |   |--      ·
#|   |   |-- Index.vue 首页
#|   |   |-- Serve.vue 服务
#|   |   |-- My.vue 我的
#|   |-- App.vue 路由组件的顶层路由
#|   |-- main.js vue的入口文件
#|-- env.development 打测试包
#|-- env.production 打生产包（vue-cli-service build）配置环境变量的文件
#|-- .gitignore 配置不提交到git仓库的文件
#|-- package.json 项目所需要的各种模块
#|-- babel.config.js 参见https://cli.vuejs.org/zh/config/#babel
#|-- vue.config.js 参见https://cli.vuejs.org/zh/config/#vue.config
