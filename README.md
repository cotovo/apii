# 玄武API 前端

玄武API 是面向多模型接入的 AI API 网关前端，包含首页、模型广场、排行榜、文档入口、关于、协议、隐私政策以及账号相关页面。

## Development

```bash
cd web
bun install
bun run --cwd default dev
```

## Build

```bash
cd web
bun run --cwd default build
```

构建产物位于：

```text
web/default/dist
```

部署时将该目录发布到静态托管服务，并配置 SPA fallback 到 `index.html`。
