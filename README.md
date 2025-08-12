# Jellyfin 弹幕设置界面优化增强

一个用于 [Jellyfin 弹幕扩展](https://github.com/Izumiko/jellyfin-danmaku/tree/jellyfin) 的界面美化脚本。

## 功能特点

此脚本优化了 Jellyfin 弹幕设置界面，提供以下功能：

- **分组折叠布局**：将设置项分组并支持折叠，方便用户快速导航。
- **集成控制功能**：添加常用控制功能的快捷入口。
- **样式美化**：应用现代化、响应式的样式设计，提升视觉体验。
- **动态更新**：自动检测并更新界面元素的样式。

## 部署方式

### 方法一：使用用户脚本管理器

1. 安装用户脚本管理器，例如 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)。 
2. 点击 [此处](https://github.com/guiyuanyuanbao/jellyfin-danmaku-beautify/raw/main/danmu_setting_beautify.js) 将脚本添加到您的用户脚本管理器。
3. 确保脚本已启用并刷新 Jellyfin 网页界面。

### 方法二：通过 Nginx 部署

1. 将 `danmu_setting_beautify.js` 文件上传到 Nginx 服务器的 `/usr/share/nginx/html/js/` 目录下。
2. 下载并参考 [Nginx 配置文件示例](https://github.com/guiyuanyuanbao/jellyfin-danmaku-beautify/blob/main/jellyfin.conf)。
3. 重启 Nginx 服务以应用更改：

```bash
sudo systemctl restart nginx
```

4. 访问 Jellyfin 网页界面，脚本将自动加载并优化弹幕设置界面。

## 使用说明

安装后，脚本会自动优化 Jellyfin 弹幕设置界面。您可以：

- 从播放器设置菜单访问改进后的设置界面。
- 使用侧边栏快速调整设置。
- 享受更清晰、更响应的设计。

## 支持

如果您遇到问题或有功能需求，请在 [GitHub 仓库](https://github.com/guiyuanyuanbao/jellyfin-danmaku-beautify/issues) 提交 Issue。

## 许可证

本项目基于 MIT 许可证开源。详情请参阅 [LICENSE](LICENSE) 文件。
