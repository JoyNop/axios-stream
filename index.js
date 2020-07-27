'use strict'
const axios = require('axios');
/**
 *
 * @description 数据流文件下载 
 * @param {string} downFileName  请求的下载名称，必须指定文件名和扩展名
 * @param {AxiosRequestConfig} axiosConfig
 * 
 */



const blobTypeTemplate = {
  bin: "application/octet-stream",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  gif:"image/gif"

}

const download = async (downFileName, extensionName, axiosConfig) => {
  try {
    if (axiosConfig.hasOwnProperty('responseType')) {
      axiosConfig.responseType = "blob"
    } else {
      Object.assign(axiosConfig, { responseType: "blob" })
    }
    const res = await axios(axiosConfig)

    const blobType = extensionName.toLowerCase()
    let type = { type: blobTypeTemplate.bin }
    if (blobType && blobTypeTemplate.hasOwnProperty(blobType)) {
      type = { type: blobTypeTemplate[blobType] }
    }
    const blob = new Blob([res.data], {
      type
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
