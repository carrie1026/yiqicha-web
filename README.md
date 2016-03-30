#一起查前端帮助文档

## Angular Html5 Model

nginx conf

```
location / {
    try_files $uri $uri/ /index.html =404;
}
```

## FIS3

#### 开始
安装 `fis3` 及依赖`npm`包 `fis3-hook-amd` `fis3-postpackager-loader`

```
npm install -g fis3
npm install -g fis3-hook-amd
npm install -g fis3-postpackager-loader
```
然后运行

```
fis3 release
fis3 server start
```
#### 文件监听
为了方便开发，FIS3 支持文件监听，当启动文件监听时，修改文件会构建发布。而且其编译是增量的，编译花费时间少。

FIS3 通过对 `release` 命令添加 `-w` 或者 `--watch` 参数启动文件监听功能。

```
fis3 release -w
```

添加 `-w` 参数时，程序不会执行终止；停止程序用快捷键 `CTRL+c`

#### 浏览器自动刷新
文件修改自动构建发布后，如果浏览器能自动刷新，这是一个非常好的开发体验。

FIS3 支持浏览器自动刷新功能，只需要给 `release` 命令添加 `-L`参数，通常 `-w` 和 `-L` 一起使用。

```
fis3 release -wL
```
程序停止用快捷键 `CTRL+c`


```
重启nginx 重新加载配置
./nginx.exe -s reload

```
