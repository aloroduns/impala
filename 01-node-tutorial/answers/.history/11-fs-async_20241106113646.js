const {writeFile} = require("fs");

const filePath = "./temporary/fileB.txt";

console.log("at start");

writeFile(filePath, "This is line 1\n", (err) => {
    if (err) return console.log("Error:", err);
    console.log("at point 1");

    writeFile
})