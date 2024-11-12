const fs = require("fs");

const stream = fs.createReadStream("../content/big.txt", {
    encoding: "utf8",
    highWaterMark
})