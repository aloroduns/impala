const {writeFile} = require("fs");

const filePath = "./temporary/fileB.txt";

console.log("at start");

writeFile(filePath, "This is line 1\n", (err) => {
    if (err) retu
})