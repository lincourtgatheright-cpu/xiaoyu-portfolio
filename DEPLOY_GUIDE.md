# 部署到 GitHub 指南

## 第 1 步：下载并安装 Git

1. 访问 https://git-scm.com/download/win
2. 下载 Git for Windows 安装包
3. 双击安装，全部默认选项即可

## 第 2 步：在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 填写信息：
   - **Repository name**: `xiaoyu-portfolio`
   - **Description**: 小鱼的个人作品集网站
   - **Visibility**: Private（私有）
3. 点击 **Create repository**

## 第 3 步：配置 Git

打开 PowerShell 或 CMD，运行以下命令：

```bash
git config --global user.name "你的GitHub用户名"
git config --global user.email "LincourtGatheright@gmail.com"
```

## 第 4 步：初始化本地仓库并推送

在项目文件夹中打开 PowerShell，依次运行：

```bash
# 进入项目目录
cd "C:\Users\鲁玉晗\Downloads\carter-custom-portfolio (3)"

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: 小鱼的个人作品集网站"

# 连接远程仓库（替换为你的实际仓库地址）
git remote add origin https://github.com/你的用户名/xiaoyu-portfolio.git

# 推送代码
git branch -M main
git push -u origin main
```

## 第 5 步：验证

访问 `https://github.com/你的用户名/xiaoyu-portfolio` 查看代码是否已成功推送。

---

## 可选：部署到 GitHub Pages（免费在线网站）

如果你想让别人能通过网址访问你的网站，可以在仓库创建后进行以下设置：

1. 进入仓库的 **Settings** 页面
2. 左侧菜单点击 **Pages**
3. **Source** 选择 **Deploy from a branch**
4. **Branch** 选择 **main**，文件夹选择 **/(root)**
5. 点击 **Save**

等待几分钟后，访问 `https://你的用户名.github.io/xiaoyu-portfolio` 即可看到网站。

> 注意：GitHub Pages 对私有仓库可能需要付费，建议将仓库改为 Public 才能免费使用 Pages。
