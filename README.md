# Node Legacy Debug

> 相关文章地址：[《解密 VS Code 断点调试的原理》](https://www.barretlee.com/blog/2019/11/15/vscode-study-03-debug-protocol/)

一个 Node Debug 的调试 Demo。

> 请将 Node.js 版本调整到 v6.3 一下，如 v6.2.2

## Usage

首先启动待调试的程序：

```bash
# 启动了一个监听了 8888 端口的 HTTP Server
➜ node --debug test.js
```

然后启动调试客户端：

```bash
➜ node debugClient.js
```

尝试发起请求：

```bash
➜ curl 127.0.0.1:8888
````

此时程序会进入断点位置，并打印了 `hello\n`，我们可以在调试客户端的控制台输入：

```json
{"seq":1,"type":"request","command":"continue"}
```

此时，你会看到，curl 命令执行接入，打印了剩下的 `world`。

## LICENSE

MIT.
