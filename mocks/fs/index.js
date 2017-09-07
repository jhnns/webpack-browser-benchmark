const MemoryFs = require("memory-fs");

/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/max-dependencies */
const fs = new MemoryFs({
    "": true, // These properties are used as flags by the memory-fs to detect directories
    src: {
        "": true,
        app: {
            "": true,
            "entry.js": Buffer.from(require("raw-loader!../../src/app/entry.js"), "utf8"),
            number: {
                "": true,
                "index.js": Buffer.from(require("raw-loader!../../src/app/number/index.js"), "utf8"),
                "number.1.js": Buffer.from(require("raw-loader!../../src/app/number/number.1.js"), "utf8"),
                "number.2.js": Buffer.from(require("raw-loader!../../src/app/number/number.2.js"), "utf8"),
                "number.3.js": Buffer.from(require("raw-loader!../../src/app/number/number.3.js"), "utf8"),
                "number.4.js": Buffer.from(require("raw-loader!../../src/app/number/number.4.js"), "utf8"),
                "number.5.js": Buffer.from(require("raw-loader!../../src/app/number/number.5.js"), "utf8"),
                "number.6.js": Buffer.from(require("raw-loader!../../src/app/number/number.6.js"), "utf8"),
                "number.7.js": Buffer.from(require("raw-loader!../../src/app/number/number.7.js"), "utf8"),
                "number.8.js": Buffer.from(require("raw-loader!../../src/app/number/number.8.js"), "utf8"),
                "number.9.js": Buffer.from(require("raw-loader!../../src/app/number/number.9.js"), "utf8"),
            },
            preact: {
                "": true,
                "index.js": Buffer.from(require("raw-loader!../../src/app/preact/index.js"), "utf8"),
                "preact.1.js": Buffer.from(require("raw-loader!../../src/app/preact/preact.1.js"), "utf8"),
                "preact.2.js": Buffer.from(require("raw-loader!../../src/app/preact/preact.2.js"), "utf8"),
                "preact.3.js": Buffer.from(require("raw-loader!../../src/app/preact/preact.3.js"), "utf8"),
                "preact.4.js": Buffer.from(require("raw-loader!../../src/app/preact/preact.4.js"), "utf8"),
                "preact.5.js": Buffer.from(require("raw-loader!../../src/app/preact/preact.5.js"), "utf8"),
                "preact.6.js": Buffer.from(require("raw-loader!../../src/app/preact/preact.6.js"), "utf8"),
                "preact.7.js": Buffer.from(require("raw-loader!../../src/app/preact/preact.7.js"), "utf8"),
                "preact.8.js": Buffer.from(require("raw-loader!../../src/app/preact/preact.8.js"), "utf8"),
                "preact.9.js": Buffer.from(require("raw-loader!../../src/app/preact/preact.9.js"), "utf8"),
            },
        },
    },
});
/* eslint-enable import/no-webpack-loader-syntax */
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable import/no-unresolved */
/* eslint-enable import/max-dependencies */

module.exports = fs;
