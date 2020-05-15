'use strict'
const axios = require('axios');
/**
 *
 * @description 数据流文件下载 
 * @param {string} downFileName  请求的下载名称，必须指定文件名和扩展名
 * @param {AxiosRequestConfig} axiosConfig
 * 
 */

const download = async (downFileName, extensionName, axiosConfig) => {
  try {
    if (axiosConfig.hasOwnProperty('responseType')) {
      axiosConfig.responseType = "blob"
    } else {
      Object.assign(axiosConfig, { responseType: "blob" })
    }
    const res = await axios(axiosConfig)

    const blob = new Blob([res.data], {
      type: "application/octet-stream",
    });
    const hideLink = document.createElement("a");
    hideLink.style.display = "none";
    const objectUrl = window.URL.createObjectURL(blob);
    hideLink.href = objectUrl;
    hideLink.download = `${downFileName}.${extensionName}`;
    document.body.appendChild(hideLink);
    hideLink.click();
    document.body.removeChild(hideLink);
  } catch (error) {
    throw error
  }
};

export default {
  download
}
