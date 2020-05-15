# AxiosStream

Download stream files via axios

>**This library is only suitable for WEB projects that use [axios]("https://www.npmjs.com/package/axios") as the HTTP request library**

>**Please install [axios]("https://www.npmjs.com/package/axios") first, and then use [axios-stream]("https://www.npmjs.com/package/axios-stream")**

## How to use:

### 1. Installation

`npm install axios-stream` or `yarn add axios-stream`

### 2. Reference

`import AxiosStream from "axios-stream";`

### 3. Call the method

```typescript

const reqUrl='http.get.url'
const fileName='yourFileName.txt'
AxiosStream.download(reqUrl,fileName);
```

**Enter the path and file name you want to download**

**Note that the file name must include the extension**


#### Thanks
>This method originated from the Internet and was inspired by WJH


