##  AxiosStream

通过axios下载流文件

![徽标](https://raw.githubusercontent.com/JoyNop/axios-stream/master/docs/logo.png)


> **该库仅适用于使用[axios](https://www.npmjs.com/package/axios)作为HTTP请求库的WEB项目**

> **请先安装[axios](https://www.npmjs.com/package/axios)，然后再使用[axios-stream](https://www.npmjs.com/package/axios-stream) **


##它解决的问题：

使用Axios和Blob对象实现文件流下载


##  如何使用：

### 1.安装

`npm install axios-stream`或`yarn add axios-stream`

### 2.参考

从“ axios-stream”导入AxiosStream；

### 3.调用方法

 
```typescript
const downFileName ='今天'
const extensionName ='xlsx'
const axiosConfig = {
  方法：“获取”，
  网址：“ / user / 12345”，
}
 
AxiosStream.download（downFileName，extensionName，axiosConfig）;
```

**输入您要下载的路径和文件名**

**请注意，文件名必须包含扩展名**


#### 谢谢
>此方法源自互联网，并受到WJH的启发