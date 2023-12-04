<!--
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-27 17:52:27
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-12-04 09:32:25
 * @FilePath: \dd-static\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

### 快速开始

请注意 node 版本,本次开发的 node 版本是 16.19.1 如果依赖安装或者启动失败 请检查本地 node 版本是否适合

# 安装依赖

npm i -g pnpm # 装了可忽略
pnpm i # 或者 npm i

# 启动开发环境

pnpm run serve:dev

```

# 启动测试环境

pnpm run serve:test

```

### 构建发布

```shell
# 构建测试环境
pnpm build:test

# 构建预发环境
pnpm build:pre

# 构建生产环境
pnpm build:prod
```

### 其他指令

```shell
# eslint代码格式检查
pnpm lint

```
