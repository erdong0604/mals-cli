const fs = require('fs');

const checkName = (projectName) => {
    return new Promise((resolve,reject) => {
        fs.stat(`./${projectName}`,(err) => {
            if(err){
                // 存在相同名称的文件/文件夹
                resolve();
            }else{
                reject();
            }
        })
    }).then(_ => {
        return true;
    }).catch(_ => {
        return false;
    })
}

module.exports = checkName;