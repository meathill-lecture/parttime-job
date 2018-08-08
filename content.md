<!--
title: 一起挣外快吧
description: 环境搭建+万能的WP+前端玩转WP
-->

一起挣外快吧
=======

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

{{> author}}

<!-- page -->

## 教学目标

1. 学会服务器环境配置
2. 学会搭建 WordPress
3. 学会 WP 主题开发
4. 理解浏览器工作原理
5. 可以接私活儿

<!-- page -->

## 课程大纲

本次直播采用穿插讲解知识点的方式，请大家做好笔记。

<!-- section -->

1. 配置 Windows 10 开发环境
2. 配置线上服务器
3. 启动静态网页服务
4. 安装 WordPress
5. 开发 WordPress 主题

<!-- section -->

### 各种知识

1. 浏览器的工作机制
2. 常见优化策略
3. 各种云工具释义
4. 自由工作真的好么？
5. 请谨慎接私活

<!-- page -->

## 配置 Windows 10 开发环境

[使用 Windows Linux Subsystem 配置开发环境](https://blog.meathill.com/tech/setup-windows-subsystem-linux-for-php.html)

<!-- section -->

### Windows Subsystem Linux

vs 虚拟机/懒人包：

1. 直接使用本机资源
2. 节省系统资源
3. 纯正的 Linux 版本
4. 缺点：存在有一些 bug

<!-- page -->

## 配置线上服务器

[Ubuntu 16.04 搭建 LNMP 开发环境](https://blog.meathill.com/tech/serverside/setting-lnmp-on-ubuntu-16-04.html)

<!-- section -->

### LNMP

* Linux
* Nginx
* MySQL
* PHP

<!-- page -->

## 启动静态网页服务

<!-- page -->

## 安装 WordPress

<!-- section -->

用户数量巨大

* 生态完整
* 插件功能丰富
* 安全性能良好
* 解决基础 CMS 需求

<!-- page -->

## 开发 WordPress 主题

<!-- section -->

1. 满足 CMS 需要
2. 选择熟悉的知识栈

<!-- page -->

## 各种知识

Note:
考虑到各种安装需要一些时间，我准备了一些知识点跟大家分享。

这些知识点可能并不能直接帮助你搭建网站，但了解这些知识有助于你理解网站优化策略和工具选择，也有助于你理解整个互联网基础设施背后的生存逻辑。

在接私活儿的时候也可以显得你更专业。

<!-- page -->

### 浏览器的工作机制

从你输入地址到网页渲染完成，中间经历了什么？

<!-- section -->

### 1. 浏览器分析地址，解析域名

关键词：域名，IP，DNS

<!-- section -->

### 2. 浏览器包装请求，向 IP 发起

关键词：HTTP header

<!-- section -->

### 3. 通过层层转发，最终到达服务器

关键词：网络，traceroute

<!-- section -->

### 4. 服务器将请求转发给处理程序

关键词：nginx/apache，php-fpm，node.js

<!-- section -->

### 5. 服务器处理请求

1. 读取缓存
2. 读取数据库
3. 生成响应体
4. 输出响应体

<!-- section -->

### 6. 浏览器下载响应体

1. 边下载边解析边渲染
2. 加载完 `<head>` 里的样式开始渲染
3. 同一域名最多发起3个连接

<!-- section -->

### 7. 执行 JS 加载更多内容

关键词：单页应用（SPA），路由

<!-- page -->

## 常见优化策略

<!-- section -->

### 提前加载

1. 域名预解析
2. 页面预加载
3. 页面预渲染
4. 主动缓存

<!-- section -->

### 缓存

1. 静态资源缓存
2. 数据缓存
3. 处理好过期时间

<!-- section -->

### 减少请求数量

1. CSS sprite
2. 使用多个域名
3. webpack

<!-- section -->

### 减少网络层级

1. CDN
2. 部署本地机房

<!-- section -->

### 减少 PHP 运行时间

1. 减少加载时间
2. 减少磁盘 io
3. 使用数据缓存
4. 负载均衡

<!-- section -->

### 减少 JS 运行时间

1. Tree shaking
2. SSR
3. `<script defer>` 和 `<script async>`
4. 按需加载模块

<!-- section -->

### 提高首屏打开速度

1. 必要的样式放在 `<head>`
2. 使用 lazyload

<!-- page -->

## 常用优化工具

1. [lighthouse](https://github.com/GoogleChrome/lighthouse)
2. Chrome 开发者工具

<!-- page -->

## 云工具释义

<!-- section -->

### CDN

* Content Delivery Network
* 内容分发网络
* 主要用于分发静态资源，亦可分发动态数据
* 多地部署，提高加载速度

<!-- section -->

### 云存储

<!-- section -->

### 云数据库

<!-- section -->

### 负载均衡

<!-- section -->

### IM

<!-- page -->

## 一些概念

1. 自由职业
2. 远程工作
3. 独立开发者
4. 全职/兼职

<!-- page -->

## 自由职业真的好么？

答案：不好

<!-- section -->

1. 没有社保
1. 无法保证工作量
2. 无法保证收入
3. 缺少延续性
4. 收入总量低

<!-- page -->

### 常见的流程

<!-- section -->

#### 谈项目期

> 2w？你这个报价太高了，我问了别的朋友，他说1w就能做下来。

> 我不是说你报价太高哈，我是想知道这里面都有哪些内容，是不是有一些我暂时不需要的，能不能先不做？

<!-- section -->

#### 项目执行期

> 哎，你看，这个功能也不错，给我加上呗。

> 我觉得要不用这个设计吧。

> 那啥，先不着急开工，我这边情况有些变化……

<!-- section -->

#### 项目交付后

我：“这里应该这样，那里应该那样，你需要有N个人做A，M个人做B……”

甲方：好（但没真的做）

三个月后，项目黄了……

<!-- section -->

### 总结

1. 很难遇到认同技术价值的老板
2. 很难遇到理解产品研发的老板
3. 很难遇到会经营公司的老板

<!-- page -->

### 注意事项

1. 不要离开大城市
2. 要有长期计划，比如独立项目
3. 要有养老计划
4. 要注意积累

<!-- page -->

## 接私活一定要谨慎
## 接私活一定要谨慎
## 接私活一定要谨慎

<!-- section -->

### 1. 正职工作绝对优先

1. 主要收入来源
2. 跟公司一起成长的机会
3. 简历的说服力

<!-- section -->

### 2. 要能提升自己的能力

1. 宁可做不挣钱的 side project
2. 尝试工作中需要但不太接触到的技术
3. 使用新技术提升效率

<!-- section -->

### 3. 积累成功案例

1. 比如做网站……
2. 结成松散的联盟
3. 勤总结勤归纳记笔记

<!-- section -->

### 4. 要有合适的财务回报

1. 不理解技术价值的老板多半是坑
2. 日薪x1.25为宜
3. 商量好付费方式，比如 442
4. 可能要考虑税点

<!-- page -->

Q&A

<!-- page -->

参考阅读：

* [自由职业的利与弊](https://blog.meathill.com/career/good-and-bad-parts-of-freelance.html)
* [使用 Windows Linux Subsystem 配置开发环境](https://blog.meathill.com/tech/setup-windows-subsystem-linux-for-php.html)
[Ubuntu 16.04 搭建 LNMP 开发环境](https://blog.meathill.com/tech/serverside/setting-lnmp-on-ubuntu-16-04.html)
