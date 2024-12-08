//this to import writeFile and readFile functions from fs.promises
const {writeFile, readFile} = require("fs").promises;

writeFile("temp.txt", "Line 1\n")
    .then(() => {
        return writeFile("temp.txt", "Line 2\n", {flag: "a"});
    })
    .then(() => {
        return writeFile("temp.txt", "Line 3\n", {flag: "a"});
    })
    .then(() => {
        return writeFile("temp.txt", "utf-8");
    })
    .then(() => {
        return readFile("temp.txt", "utf-8");
    })
    .then((data) => {
        console.log("File contents:\n", data);
    })
    