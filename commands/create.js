import path from "path";
import fs from "fs";

const createComponent = (componentPath) => {
    const componentName = componentPath.split("/").at(-1);
    const baseFilePath = path.join(process.cwd(), componentPath);

    if (!fs.existsSync(baseFilePath)) {
        fs.mkdirSync(baseFilePath, { recursive: true });
    }

    const baseComponentString = `import { FC } from 'react';
import "./{{ComponentName}}.scss";

type {{ComponentName}}Props = {

}

const {{ComponentName}}: FC<{{ComponentName}}Props> = ({}) => {
  return (
    <div class='{{ComponentName}}'></div>
  )
}

export default {{ComponentName}};
`.replace(/{{ComponentName}}/g, componentName);

    const baseStyleString = `.{{ComponentName}} { }`.replace(/{{ComponentName}}/g, componentName);

    fs.writeFileSync(`${baseFilePath}\\${componentName}.tsx`, baseComponentString);
    fs.writeFileSync(`${baseFilePath}\\${componentName}.scss`, baseStyleString);
    console.log(`${componentName} component created in ${componentPath}/`);
};

export default createComponent;
