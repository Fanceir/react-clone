# Day1

## commitlint

目标要做一个react-clone首先安装了`commitlint` 这可以规范化我们的commit信息，然后安装了`husky`这个可以在我们的git提交的时候执行一些脚本，比如我们可以在提交的时候执行`commitlint`来检查我们的commit信息是否符合规范。

## 合适的打包工具

因为项目的目标是实现一个react-clone，这里选择了`rollup`

## 安装prettier和eslint

这两个工具可以帮助我们规范化我们的代码，`prettier`可以帮助我们格式化我们的代码，`eslint`可以帮助我们检查我们的代码是否符合规范。

## 项目结构

```shell
├── Development_documentation
│   ├── day1.md
│   └── day2.md
├── LICENSE
├── package.json
├── packages
│   └── test.js
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── reactdemo
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
└── tsconfig.json
```
