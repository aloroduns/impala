//this to import writeFile and readFile functions from fs.promises
const {writeFile, readFile} = require("fs").promises;

async function writer() {
    try {
        await writeFile("temp.txt", "Line 1\n");
        await writeFile("temp.txt", "Line 2/n", {flag:"a"});
        await writeFile("temp.txt", "Line 3/n", {flag: "a"});
    } catch (error) {
        console.error("Error writing file:", error);
    }
}

async function readWrite() {
    await writer
    
}