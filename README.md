# DevFest Workshop — Chrome DevTools MCP Server

静态网站示例，用于记录在 DevFest Workshop 上关于 Chrome DevTools MCP Server 的学习笔记。支持英文/中文国际化及深色/浅色主题切换。

如何运行

1. 本站为静态文件。推荐在本地启动一个简单的静态服务器（以 macOS 为例）：

```bash
cd /path/to/devtools-mcp-website
python3 -m http.server 8000
# 然后打开 http://localhost:8000
```

2. 页面在加载时会根据 URL 查询参数 `?lang=en` 或 `?lang=zh` 切换语言，或记住你上次的选择。
3. 主题切换按钮会在本地存储你的偏好。

文件说明

- `index.html` — 首页
- `gdg-devfest.html` — 介绍 GDG 与 DevFest
- `devtools-mcp.html` — 介绍 DevTools MCP（参考 https://github.com/ChromeDevTools/chrome-devtools-mcp/）
- `about.html` — 关于 Jabez
- `assets/styles.css` — 样式
- `assets/script.js` — 国际化 + 主题逻辑

备注

1. 页面内容基于公开信息进行汇总和整理；如需更详细或更精确的原文引用，我可以把相应段落从指定页面抓取并加入（如果你授权我去抓取网页内容）。
2. 若需我把页面改为单页应用（SPA）、增加更多语言或把内容拆成可编辑的 Markdown 文件并生成站点，请告诉我下一步需求。
