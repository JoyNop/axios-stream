# AxiosStream

Download stream files via axios

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
