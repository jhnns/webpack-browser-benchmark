const webpack = require("webpack");
const path = require("path");

const config = {
    entry: path.resolve(__dirname, "./app/entry.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
};

// Object.keys(fs).forEach(key => {
//     if (typeof fs[key] === "function") {
//         const fn = fs[key];

//         fs[key] = function () {
//             // console.log(Array.from(arguments));
//             console.log(
//                 key,
//                 new Error().stack
//                     .split("\n")
//                     .slice(3, 5)
//                     .join("\n")
//             );

//             return fn.apply(this, arguments);
//         };
//     }
// });

const compiler = webpack(config);

compiler.run((err, stats) => {
    if (err) {
        throw err;
    }
    console.log(stats);
});