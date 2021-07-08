#  vue2-echo

## 目录结构

``` bash
├── src                          
│   ├── api                      // 请求api
│   ├── assets                   // 静态资源
│   ├── components               // 全局组件
│   ├── filters                  // 全局过滤
│   ├── mock                     // 模拟数据
│   ├── page                   
│   |   ├── detail               // 详情页
│   |   ├── index                // 首页
│   ├── router                   // 路由
│   ├── store                    // 状态管理
│   ├── utils                    // 公用方法
│   ├── App.vue
│   └── main.js
├── .env.development             // 开发环境变量
├── .env.production              // 生产环境变量
├── package.json                 // 项目依赖
└── vue.config.js                // vue-cli 3.0配置
```

## 开发和发布

``` bash
# 安装依赖
npm install

# 启动项目：localhost:8001
npm run dev

# 打包项目
npm run build

# 查看构建报告：/dist/report.html
npm run build:report
