const webpack = require("webpack");
const path = require("path");

const config = {
    entry: require.resolve("./app/entry.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
};

const compiler = webpack(config);

compiler.run((err, stats) => {
    if (err) {
        throw err;
    }

    console.log(
        stats.toString({
            errorDetails: true,
        })
    );
});