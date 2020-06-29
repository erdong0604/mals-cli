## mals-cli

### 效果
![demo](/demo.gif)
### 使用

```shell
// 安装

npm i -g mals-cli  or  yarn global add mals-cli

// 查看模板列表

mals list

// 初始化项目

mals init <project name> 

```

### 目录

```
|-- mals-cli
    |-- bin
    |   |-- mals.js
    |-- config
    |   |-- program.js 
    |   |-- prompt.js
    |   |-- template.js
    |-- util
        |-- check.js 
        |-- compile.js
        |-- download.js
    |-- .gitignore
    |-- README.md
    |-- package.json
    |-- yarn.lock
```