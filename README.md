# chsi-cell.github.io

这是一个静态网页项目，已部署到 GitHub Pages。

线上地址：

https://chsi-cell.github.io/

## 页面入口

- `index.html`：在线验证查询页
- `report.html`：查询后的报告展示页

当前可用验证码：

```text
A4NFW2HLZRCQRX2W
```

在首页输入上面的验证码，会跳转到：

```text
report.html?vcode=A4NFW2HLZRCQRX2W&srcid=bgcx
```

## 文件说明

- `index.html`：查询首页结构
- `report.html`：报告页结构和文字内容
- `styles.css`：所有页面样式，包括打印/PDF 样式
- `script.js`：验证码校验、报告日期、打印/PDF 按钮逻辑
- `profile.png`：报告页照片
- `qr.png`：报告页二维码
- `report-actions.png`：报告页右上角操作图标

## 常改位置

### 修改验证码

在 `script.js` 里改：

```js
var allowedCode = "A4NFW2HLZRCQRX2W";
```

同时如果需要，也改 `report.html` 里的默认显示文本：

```html
<strong id="reportCode">A4NFW2HLZRCQRX2W</strong>
```

### 修改报告信息

在 `report.html` 里搜索字段名，例如：

```text
姓名
学校名称
专业
毕（结）业日期
证书编号
```

直接改右侧 `<span class="value">...</span>` 里的内容。

### 修改更新日期

更新日期由 `script.js` 自动生成，规则是“访问当天的前一天”。

例如 2026 年 6 月 27 日打开页面，会显示：

```text
更新日期：2026年06月26日
```

### 修改图片

替换同名文件即可：

- 照片：`profile.png`
- 二维码：`qr.png`
- 右上角图标：`report-actions.png`

替换后如果线上没立刻变化，强制刷新浏览器，或在 HTML 里的资源链接后面改版本号，例如：

```html
styles.css?v=2026062703
script.js?v=2026062702
```

## 部署方式

这个仓库是 GitHub Pages 用户站点仓库：

```text
chsi-cell/chsi-cell.github.io
```

只要文件上传到 `main` 分支根目录，GitHub Pages 会自动发布到：

```text
https://chsi-cell.github.io/
```

注意：这台电脑命令行里保存的是旧 GitHub 账号凭据，直接 `git push` 会失败。之前是用 Chrome 登录的 `chsi-cell` 账号，在 GitHub 网页里上传文件完成部署的。
