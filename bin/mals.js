#!/usr/bin/env node




const program = require("./../config/program");
const promptConfig = require("./../config/prompt.js");
const check  = require("./../util/check");
const inquirer = require('inquirer');
const download = require("./../util/download");
const templateConfig = require("./../config/template");
const compileJson = require("./../util/compile");
const chalk = require("chalk");
const log = log;
let selectTemplateName, selectTemplate;

program
    .command('init [projectName]')
    .description('初始化模板')
    .action(async function (projectName){
        if(projectName){
            promptConfig.splice(promptConfig.findIndex(v => v.name === 'projectName'),1);
            const isCanUse = await check(projectName);
            if(!isCanUse){
                log(chalk.red("文件夹名称已存在"));
                return;
            }
        }

        const answers = await inquirer.prompt(promptConfig);
        selectTemplateName = answers[selectTemplateName];
        selectTemplate =  templateConfig[answers['selectTemplateName']];
        projectName = projectName||answers['projectName'];
        answers.name = projectName;
        const downloadUrl = `direct:${selectTemplate.githubRepo}`;
        await download(downloadUrl,projectName);
        await compileJson(projectName,answers);

        log();
        log(chalk.green(`cd ${projectName}`));
        const { moduleTool } = answers;
        log(chalk.green(moduleTool === 'yarn'?`yarn`:`${moduleTool} install`));
        log(chalk.green(moduleTool === 'yarn'?`yarn ${selectTemplate.run}`:`${moduleTool} run ${selectTemplate.run}`));
        log();
    })
program.parse(process.argv);
