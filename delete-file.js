const fs = require('fs');
const path = require('path');

let deleteFolderRecursive = function(url) {
    if (!fs.existsSync(url)) {
        throw new Error('文件夹不存在');
    }
    //返回相对文件路径
    let files = fs.readdirSync(url);
    for (let refile of files) {
        //拼接成完整文件路径
        let fileUrl = url + refile;
        if (fs.statSync(fileUrl).isDirectory()) {
            deleteFolderRecursive(fileUrl);
        } else {
            fs.unlinkSync(fileUrl);
        }
    }
}

deleteFolderRecursive('./files/demo/')