#!/bin/sh

echo "开始打包⌛️"

npm run build 
cp -a -f  ./public/ ../build-file/yzme/

cd ../build-file/yzme

git status
git add -A .
git status
git commit -m "提交新版本"
git push 

echo "部署完成✅"
