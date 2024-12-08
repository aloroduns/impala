const fs = require("fs");

const filePath = "./temporary/fileA.txt";

//Write lines to the fil
fs.writeFileSync(filePath, "Line 1\n");
fs.writeFileSync(filePath, "Line 2\n", { flag: "a"});
fs.writeFileSync(filePath, "Line3\n", { flag: "a"});