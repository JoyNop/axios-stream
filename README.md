# AxiosStream

Download stream files via axios

![Logo](https://raw.githubusercontent.com/JoyNop/axios-stream/master/docs/logo.png)


>**This library is only suitable for WEB projects that use [axios](https://www.npmjs.com/package/axios) as the HTTP request library**

>**Please install [axios](https://www.npmjs.com/package/axios) first, and then use [axios-stream](https://www.npmjs.com/package/axios-stream)**


## The problems it solves:

Using Axios and Blob objects to achieve file stream download


## How to use:

### 1. Installation

`npm install axios-stream` or `yarn add axios-stream`

### 2. Reference

`import AxiosStream from "axios-stream";`

### 3. Call the method

```typescript

const downFileName='today'
const extensionName='xlsx'
const axiosConfig={
  method: 'get',
  url: '/user/12345',
}
 
AxiosStream.download(downFileName, extensionName, axiosConfig);
```

**Enter the path and file name you want to download**

> the file name must include the extension**


#### Thanks
>This method originated from the Internet and was inspired by [chennvwang](https://github.com/chennvwang)


