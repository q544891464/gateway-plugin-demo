# gateway-plugin-demo

增强网关插件演示页面，用于集中展示网关插件能力，并通过插件卡片跳转播放对应的功能演示视频。

## 项目简介

本项目是一个纯前端静态页面，不依赖构建工具或后端服务。页面入口为 `index.html`，插件分类和视频地址由 `app.js` 中的数据驱动渲染，页面样式由 `style.css` 提供。

适用场景：

- 网关插件功能演示
- 移动端 H5 展示页
- 内部汇报或客户演示入口
- 插件视频资料聚合页

## 功能特性

- 按插件类型分组展示插件能力
- 使用 Font Awesome 图标展示插件视觉标识
- 支持本地视频和远程视频地址
- 响应式布局，适配手机和桌面浏览器
- 提供独立视频播放页 `player.html`
- 无需安装依赖，浏览器可直接访问

## 目录结构

```text
gateway-plugin-demo/
├── index.html          # 首页入口
├── app.js              # 插件分类、插件名称、图标和视频地址配置
├── style.css           # 首页样式
├── player.html         # 独立视频播放器页面
├── Untitled-1.json     # 项目附带的数据文件
└── video/              # 本地演示视频资源
```

## 快速开始

### 方式一：直接打开

在浏览器中打开 `index.html` 即可预览页面。

### 方式二：启动本地静态服务

如果浏览器对本地视频、跨域资源或模块加载有限制，可以在项目目录下启动一个静态服务：

```powershell
cd D:\Code\pageweb\gateway-plugin-demo
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

如果本机没有 Python，也可以使用任意静态文件服务器，例如 Nginx、VS Code Live Server 或 Node.js 的 `serve`。

## 插件配置说明

插件列表配置在 `app.js` 的 `data` 数组中。每个分类包含一个标题、分类图标和多个插件项。

示例结构：

```js
{
    title: "安全类",
    iconClass: "fa-solid fa-shield-halved safe-icon",
    plugins: [
        {
            id: "smart-safe",
            name: "智能保险箱",
            icon: "fa-solid fa-vault",
            videoUrl: "https://example.com/demo.mp4"
        }
    ]
}
```

字段说明：

| 字段 | 说明 |
| --- | --- |
| `title` | 插件分类名称 |
| `iconClass` | 分类图标 class，使用 Font Awesome |
| `plugins` | 当前分类下的插件列表 |
| `id` | 插件唯一标识 |
| `name` | 插件展示名称 |
| `icon` | 插件图标 class |
| `videoUrl` | 插件演示视频地址 |

## 添加新插件

1. 打开 `app.js`。
2. 在对应分类的 `plugins` 数组中新增插件对象。
3. 配置插件名称、图标和视频地址。
4. 刷新浏览器查看效果。

示例：

```js
{
    id: "new-plugin",
    name: "新插件",
    icon: "fa-solid fa-puzzle-piece",
    videoUrl: "video/new-plugin.mp4"
}
```

## 视频资源

项目支持两种视频地址：

- 远程视频：填写完整的 `https://...mp4` 地址。
- 本地视频：将视频放入 `video/` 目录，并在 `videoUrl` 中填写相对路径，例如 `video/网络加速.mp4`。

建议：

- 视频格式优先使用 MP4。
- 文件名尽量保持清晰，避免频繁修改。
- 线上部署时确认视频地址可以被公网或目标网络访问。

## 部署方式

这是一个静态站点，可以部署到任意静态资源服务：

- Nginx
- Apache
- GitHub Pages
- Cloudflare Pages
- Vercel
- 内部文件服务器
- 网关或营销活动静态资源目录

部署时只需要上传项目目录中的静态文件即可。

## 维护注意事项

- 当前项目源文件中部分中文内容可能存在编码异常，建议统一保存为 UTF-8。
- `index.html` 依赖外部 CDN 加载字体和 Font Awesome，离线环境需要改成本地资源。
- 如果视频地址来自第三方文件服务，需要确认链接有效期和访问权限。
- 如果需要统一使用 `player.html` 播放视频，可以将插件卡片链接改为 `player.html?src=视频地址&name=插件名称`。

## 技术栈

- HTML5
- CSS3
- JavaScript
- Font Awesome

## 许可证

如需开源或对外分发，请根据项目实际情况补充许可证信息。
