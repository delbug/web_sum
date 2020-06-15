# mydocs-vuePress

#### 介绍
初次使用 vuePress 搭建个人docs



执行命令：yarn deploy

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:delbug/web_sum.git master:gh-pages

# git@github.com:delbug/web_sum.git

cd -

```



package.json

```bash
{
    "devDependencies": {
        "vuepress": "^1.2.0"
    },
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs",
        "deploy": "bash deploy.sh"
    },
    "dependencies": {
        "moment": "^2.26.0",
        "vue-class-component": "^7.2.3",
        "vuepress-theme-reco": "^1.4.5"
    }
}

```

