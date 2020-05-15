

const axios = require('axios');
/**
 *
 * @description 数据流文件下载
 * @param {string} reqUrl 请求的API
 * @param {string} downFileName  请求的下载名称，必须指定文件名和扩展名
 * 
 */



  export const streamDownload = async (reqUrl, downFileName) => {
    try {
      const res = await axios.get(reqUrl, {
        responseType: "blob",
      });
      const blob = new Blob([res.data], {
        type: "application/octet-stream",
      });
      const hideLink = document.createElement("a");
      hideLink.style.display = "none";
      const objectUrl = window.URL.createObjectURL(blob);
      hideLink.href = objectUrl;
      hideLink.download = downFileName;
      document.body.appendChild(hideLink);
      hideLink.click();
      document.body.removeChild(hideLink);
    } catch (error) {
      throw error
    }

  };


module.exports=streamDownload


