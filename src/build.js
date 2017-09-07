const webpack = require("webpack");
const fs = require("fs");

const config = {
    entry: "/src/app/entry.js",
    output: {
        path: "/src/dist",
        filename: "bundle.js",
    },
};

const compiler = webpack(config);

compiler.run((err, stats) => {
    if (err) {
        throw err;
    }
    console.log(stats.toString());
    // It should print "Hello world"
    console.log(eval(fs.readFileSync("/src/dist/bundle.js", "utf8"))); // eslint-disable-line no-eval
});