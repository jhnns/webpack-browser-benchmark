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
    // Only activate for debugging
    // devtool: "eval",
    bail: true,
    plugins: [
        // Replace dynamic requires with an empty mock module.
        // Of course, if the dynamic require() is actually executed in the browser,
        // we need to prepare the build for that case. Luckily, it is not an issue now.
        new webpack.ContextReplacementPlugin(/^\.$/, path.dirname(require.resolve("./mocks/dummy.js")), {}),
    ],
};
