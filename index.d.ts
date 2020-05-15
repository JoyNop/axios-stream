// Type definitions for index.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 * @param reqUrl 
 * @param downFileName 
 */ 

 declare function streamDownload(pattern: string, downFileName:string ): void;

// declare const streamDownload: (reqUrl: string, downloadFileName: string) => void;

export default streamDownload;