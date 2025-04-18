const path = require("path")

module.exports = {
    entry: {
        "index": "./dist/index.js",
        "wasi_defs": "./dist/wasi_defs.js",
         "fd": "./dist/fd.js",
         "fs_core": "./dist/fs_core.js",
         "strace":"./dist/strace.js",
         "wasi":"./dist/wasi.js",
         "debug":"./dist/debug.js"
    },
    output: {
        path: path.resolve(__dirname,'out'),
        filename: "[name].js",
        libraryTarget: 'umd',
    },
};
