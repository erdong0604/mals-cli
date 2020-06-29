const { Command } = require("commander");
const { version } = require("./../package.json");
const templateConfig = require("./../config/template");
const program = new Command();
program.version(version); // 版本号
program
    .command('list')
    .description('获取模板列表')
    .action(function(){
        // 在这里输出模板列表
        console.log();
        Object.keys(templateConfig).forEach(name => {
            let temp = templateConfig[name];
            console.log(`${name} ${temp.desc}`)
        });
        console.log();
        
    })


module.exports = program;