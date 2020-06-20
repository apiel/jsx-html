const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: generator } = require('@babel/generator');
const { default: traverse } = require('@babel/traverse');
const { resolve, extname } = require('path');
const { readdir } = require('fs').promises;

const exts = ['.ts'];
const excludes = [
    '/node_modules/',
    '/examples/',
    '/dist/',
    '/jsx.d.ts',
    '/deno.d.ts',
];

const regExpRemoveExts = /\.(ts|tsx|js|jsx)$/i;

async function getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        dirents.map((dirent) => {
            const res = resolve(dir, dirent.name);
            return dirent.isDirectory() ? getFiles(res) : res;
        }),
    );
    return Array.prototype.concat(...files);
}
getFiles('./').then((files) => {
    const tsFiles = files.filter(
        (f) =>
            exts.includes(extname(f)) &&
            !excludes.some((val) => f.includes(val)),
    );
    tsFiles.forEach((file) => {
        const code = deno2nodejs(file);
        console.log({ code, file });
    });
});

function deno2nodejs(file) {
    const source = fs.readFileSync(file).toString();

    const ast = parse(source, {
        sourceType: 'module',
        plugins: ['typescript', 'classProperties'],
    });

    traverse(ast, {
        ImportDeclaration: function ImportDeclaration(path) {
            var source = path.node.source;
            if (!source.value.match(regExpRemoveExts)) {
                return;
            }
            source.value = source.value.replace(regExpRemoveExts, '');
        },
        ExportDeclaration: function ExportDeclaration(path) {
            var source = path.node.source;
            if (source) {
                if (!source.value.match(regExpRemoveExts)) {
                    return;
                }
                source.value = source.value.replace(regExpRemoveExts, '');
            }
        },
    });

    const { code } = generator(ast);

    return code;
}
