const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: generator } = require('@babel/generator');
const { default: traverse } = require('@babel/traverse');
const { resolve, extname, join, dirname } = require('path');
const { tmpdir } = require('os');
const { readdir } = require('fs').promises;
const { cwd } = require('process');

const exts = ['.ts'];
const excludes = [
    '/node_modules/',
    '/examples/',
    '/dist/',
    '/jsx.d.ts',
    '/mod.d.ts',
    '/deno.d.ts',
];

const regExpRemoveExts = /\.(ts|tsx|js|jsx)$/i;

const tsconfig = {
    compilerOptions: {
        types: ['node'],
        module: 'commonjs',
        declaration: true,
        removeComments: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        allowSyntheticDefaultImports: true,
        target: 'es6',
        sourceMap: false,
        outDir: join(cwd(), 'nodejs'),
        baseUrl: './',
    },
};

// const distFolder = join(tmpdir(), `deno2nodejs-${+new Date()}`);
const distFolder = join(cwd(), `tmp`);
console.log('distFolder:', distFolder);
fs.mkdirSync(distFolder);
fs.writeFileSync(join(distFolder, 'tsconfig.json'), JSON.stringify(tsconfig));

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
        const dist = join(distFolder, file.substr(cwd().length));
        const ensureDir = dirname(dist);
        fs.mkdirSync(ensureDir, { recursive: true });
        fs.writeFileSync(dist, code);
        // console.log({ file, dist, ensureDir });
    });
});
// we might want to execute `tsc -p ./tmp/tsconfig.json` in here

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
