const templateConfig = require("./../config/template");

const templateNames = Object.keys(templateConfig);
const promptConfig = [
        {
            type: 'list',
            message: '请选择一种模板: ',
            name: 'selectTemplateName',
            choices: templateNames,
        },
        {
            type:'input',
            name:'projectName',
            default:'my-project',
            message:'请输入项目名称'
        },
        {
            type:'input',
            name:'description',
            message:'请输入项目描述'
        },
        {
            type:'input',
            name:'author',
            message:'请输入作者名称'
        },
        {
            type:'input',
            name:'version',
            default:'1.0.0',
            message:'请输入版本号'
        },
        {
            type:'list',
            name:'moduleTool',
            choices:[
                'yarn',
                'npm',
                'cnpm'
            ],
            default:'yarn',
            message:'请选择包管理工具'
        },

]


module.exports = promptConfig;