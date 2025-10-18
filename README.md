# React 教程与练习代码仓库

本仓库用于记录并练习来自 B 站 UP 主 HDAlex_John 的 React 系列教程，收录了教程配套代码与若干实践项目示例，便于学习与复现。  

嗯就是这只是记录我自己的学习进度的，所以对于格式没有任何要求，然后我全部项目共用一个依赖，通过在src/main.jsx里面切换不同路由的app.jsx文件来切换项目。

## 项目亮点

- 多个练习项目与示例，用以覆盖 React 常见开发场景。
- 使用现代前端构建工具（Vite），并遵循 ESLint 代码规范。
- 包含对 Redux 状态管理的学习与实践示例。

## 目录与示例项目

仓库中包含若干子项目与练习目录（部分重要项列举如下）：

- `challenge/03` — 练习：表单与输入组件示例（示例文件：`AppInput.jsx`）。
- `challenge/04` — 完整的小型天气应用示例（含 `src/features/forecast`、`hooks` 与 `services`）。
- `lecture` — 课堂示例代码（分章节）。
- `memo` — 练习：待办/备忘录应用（包含新增、编辑、搜索等功能）。
- `shopping` — 练习：商品购买平台（包含购物车、订单列表与状态管理示例）。
- `tailwind-intro` — Tailwind CSS 练习/示例。

此外，仓库根目录下还包含用于构建与配置的文件：`vite.config.js`、`eslint.config.js`、`package.json` 等。

## 主要功能概述

以下是仓库中可复现的几个小型应用示例：

- 天气预报小程序（示例位于 `challenge/04`）：

  - 使用浏览器地理定位（hook）获取当前位置。
  - 调用天气 API 获取当前天气与未来预报（`services/apiWeather.js`）。
  - 组件化呈现：导航、列表与单日天气卡片等。

- 待办（备忘录）应用（示例位于 `memo`）：

  - 支持添加、编辑、搜索与列表展示。
  - 演示组件拆分与状态提升/管理的常见模式。

- 商品购买平台（示例位于 `shopping`）：
  - 包含商品列表、购物车对话框、订单列表与简单结算流程。
  - 使用局部状态与全局状态（Redux 或 Context）示例。

## Redux 学习与实践

该仓库包含对 Redux（或 Redux Toolkit）基本使用模式的学习示例：

- 状态切片（slice）与 reducer 的组织方法（示例：`shopping/app/cartListSlice.js`）。
- 在 React 组件中通过 `useSelector`、`useDispatch` 访问与更新全局状态。

这些示例适合理解如何将业务状态从组件拆分出去、便于跨组件共享和测试。

## 技术栈

- 框架：React（函数组件 + Hooks）
- 构建工具：Vite
- 代码风格：ESLint
- 状态管理：React 本地 state、Context、Redux/Redux Toolkit（示例）
- 样式：CSS Modules、Tailwind CSS（部分示例）
- 包管理：npm
