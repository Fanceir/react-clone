# Day 2: 实现 JSX 方法

## 1. 实现 JSX 方法

**步骤**：

- 在 `src` 目录下创建一个 `jsx` 文件夹，并在其中新建 `jsx.js` 文件，用于实现将 `jsx` 语法转换为 `React.createElement` 方法。
- **JSX 转换逻辑**：JSX 是语法糖，最终会被转换为 `React.createElement`。因此，在 `jsx.js` 文件中，实现一个方法来进行这种转换。

**文件结构**：

- **`ReactSymbols.ts`**：在 `shared` 文件夹中创建，用于存放 `REACT_ELEMENT_TYPE`，它是每个 React 元素的标识符。
- **`ReactTypes.ts`**：用于定义 React 元素的类型，比如 `ReactElement`，这些类型能够保证类型安全和代码的规范性。

## 2. 打包流程

**打包步骤**：

- 使用命令 `build:dev` 进行打包，会在 `dist` 目录下生成 `react.js` 文件，这就是项目的打包输出文件。
- 创建 `reactdemo` 项目：通过命令 `npx create-react-app reactdemo` 创建一个基于 React 的项目，用于测试我们自定义的 React 实现。
- 修改 `reactdemo` 项目的 `src/App.js` 文件以引入我们自己构建的 `react`。

**连接步骤**：

- 使用 `pnpm link react --global` 将自定义的 `react` 项目（也就是 `big-react`）链接到全局，供 `reactdemo` 项目使用。
- 这样，我们可以在 `reactdemo` 项目中使用自己实现的 `big-react`，便于调试和观察效果。

## 优缺点

- **优点**：可以在 `big-react` 项目中直接修改代码，并在 `reactdemo` 项目中快速测试效果，调试更加灵活和直观。
- **缺点**：每次修改 `big-react` 项目后，都需要重新打包并重新链接，增加了一些操作步骤。

这个调试方式对于开发自定义的 React 库非常适用，能够方便地在真实项目中测试和验证 JSX 的实现效果。
