const {writeFile} = require("fs");

const filePath = "./temporary/fileB.txt";

console.log("at start");

writeFile(filePath, "")