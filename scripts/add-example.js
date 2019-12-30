const fs = require('fs');
const path = require('path');

const inquirer = require('inquirer');

(async () => {
    const existingExamples = fs.readdirSync(path.join(__dirname, '../recipes'));

    const { exampleName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'exampleName',
            message: 'What is your example name?',
        },
    ]);

    const exampleIdentifier = toSnakeCase(exampleName);

    if (existingExamples.some(example => example.startsWith(exampleIdentifier))) {
        console.log(`Sorry, example "${exampleName}" already exists`);
        process.exit(0);
    }

    const exampleFilenamePath = path.join(__dirname, '..', 'recipes', `${exampleIdentifier}.md`);
    const content = `import Example from '../components/md/Example';

<Example flutter>

\`\`\`dart
// flutter example source 
\`\`\`

</Example>
`;

    fs.writeFileSync(exampleFilenamePath, content);

    const indexPagePath = path.join(__dirname, '../recipes/index.md');
    let indexPageSource = fs.readFileSync(indexPagePath, 'utf-8');

    const exampleIdentifierCamel = snakeToCamel(exampleIdentifier);

    const lines = indexPageSource.split('\n');
    const lastImportIndex = lines.findIndex((value, index) => {
        const nextValue = lines[index + 1];

        if (!nextValue.startsWith('import')) {
            return true;
        }
    });

    lines.splice(lastImportIndex + 1, 1, `import ${exampleIdentifierCamel} from './${exampleIdentifier}.md';\n`);
    lines.push(...[`## ${exampleName}`, '', `<${exampleIdentifierCamel} />`, '']);

    fs.writeFileSync(indexPagePath, lines.join('\n'));

    console.log(`We're all set! \nCheck out and edit ./recipes/${exampleIdentifier}.md`);
})().catch(console.error);

/**
 *
 * @param {String} str
 */
function toSnakeCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .join('-');
}

/**
 *
 * @param {String} string
 */
function snakeToCamel(str) {
    return str
        .split('-')
        .map(capitalize)
        .join('');
}

/**
 *
 * @param {String} str
 */
function capitalize(str) {
    return str
        .charAt(0)
        .toUpperCase()
        .concat(str.substring(1, str.length));
}
