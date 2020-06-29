const fs = require("fs");
const handlebars = require("handlebars");


const compileJson = (projectName,answers) => {
    return new Promise((resolve,reject) => {
        try{
            const pakckagePath = `${projectName}/package.json`;
            const packageJson = fs.readFileSync(pakckagePath,'utf-8');
            const packageSource = handlebars.compile(packageJson)(answers);
            fs.writeFileSync(pakckagePath,packageSource);
            resolve();
        }catch(e){
            reject(e);
        }
    })


};

module.exports = compileJson;