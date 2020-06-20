'use strict';

var regExp = /\.(ts|tsx|js|jsx)$/i;

module.exports = function () {
    return {
        visitor: {
            ImportDeclaration: function ImportDeclaration(path) {
                var source = path.node.source;
                if (!source.value.match(regExp)) {
                    return;
                }
                source.value = source.value.replace(regExp, '');
            },
            ExportDeclaration: function ExportDeclaration(path) {
                var source = path.node.source;
                if (source) {
                    if (!source.value.match(regExp)) {
                        return;
                    }
                    source.value = source.value.replace(regExp, '');
                }
            },
        },
    };
};
