const MemoryFs = require("memory-fs");

const fs = new MemoryFs({
    // These properties are used as flags by the memory-fs to detect directories
    "": true,
    "package.json": Buffer.from(require("raw-loader!../../package.json"), "utf8"),
    src: {
        "": true,
        app: {
            "": true,
            "entry.js": Buffer.from(require("raw-loader!../../src/app/entry.js"), "utf8"),
        },
    },
});

module.exports = fs;