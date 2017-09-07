const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: require.resolve("./src/build.js"),
    output: {
        path: path.resolve(__dirname, "benchmark"),
        filename: "./run.js",
    },
    node: {
        __dirname: true,
        __filename: true,
    },
    resolve: {
        alias: {
            fs: require.resolve("./mocks/fs"),
            "graceful-fs": require.resolve("./mocks/fs"),
            module: require.resolve("./mocks/dummy"),
            chokidar: require.resolve("./mocks/chokidar"),
            "uglify-js": require.resolve("./mocks/dummy"),
        },
    },
    devtool: "eval",
    bail: true,
    plugins: [
        // The node-pre-gyp module optionally requires the aws-sdk
        // It's not necessary for the build though...
        // new webpack.IgnorePlugin(/^(aws-sdk|child_process)$/, /node_modules[/\\]node-pre-gyp[/\\]lib/),
        // new webpack.IgnorePlugin(/.*/, /node_modules[/\\]loader-runner[/\\]lib$/),
        new webpack.ContextReplacementPlugin(/^\.$/, path.dirname(require.resolve("./mocks/dummy.js")), {}),
        // new webpack.ContextReplacementPlugin(/^\.$/, data => {
        //     if (/node_modules[/\\]loader-runner[/\\]lib$/.test(data.context) === false) {
        //         return;
        //     }
        //     console.log(data);
        //     data.request = path.relative(data.context, require.resolve("./mocks/dummy.js"));
        // }),
    ],
};