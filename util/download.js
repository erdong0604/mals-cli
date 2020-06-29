const downloadGitRepo = require("download-git-repo");
const ora = require("ora");

let timer;
const generateText = (spinner) => {
    let text = "正在下载模板";
    timer = setInterval(() => {
        text += '=';
        spinner.text = text;
    },500)
}

const download = (downloadUrl,projectName) => {
    const spinner = ora('正在下载模板').start();
    generateText(spinner);
    return new Promise((resolve,reject) => {
        downloadGitRepo(
            downloadUrl
            ,projectName,
            {clone:true},
            (err) =>{
                clearInterval(timer);
                if(err){
                    // 模板下载失败
                    spinner.text = '模板下载失败';
                    spinner.fail();
                    
                    reject(err);
                    return;
                }
                spinner.succeed("模板下载成功");
                resolve();
            }
        )
    })
}

module.exports = download;