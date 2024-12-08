const fs = require("fs");

const filePath = "./temporary/fileA.txt";

//Write lines to the file
fs.writeFileSync(filePath, "Line 1\n");
fs.writeFileSync(filePath, "Line 2\n", { flag: "a"});
fs.writeFileSync(filePath, "Line 3\n", { flag: "a"});

//To Read and display the file contents
const content = fs.readFileSync(filePath, "utf8");
console.log("File Contents:\n", content);