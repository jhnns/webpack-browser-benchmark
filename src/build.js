if ("captureStackTrace" in Error === false) {
    Error.captureStackTrace = () => {};
}

const webpack = require("webpack");
const fs = require("fs");

const config = {
    entry: "/src/app/entry.js",
    output: {
        path: "/src/dist",
        filename: "bundle.js",
    },
    // We need to define that because Firefox has a Object.prototype.watch function
    watch: false,
};

const compiler = webpack(config);

compiler.run((err, stats) => {
    if (err) {
        throw err;
    }
    console.log(stats.toString());
});
