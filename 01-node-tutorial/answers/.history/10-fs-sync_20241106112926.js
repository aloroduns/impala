const fs = require("fs");

const filePath = "./temporary/fileA.txt";

fs.writeFileSync(filePath, "Line 1\n");
fs.writeFileSync(filePath, "Line 2\n", { flag: "a"});
fs.writeFileSync)