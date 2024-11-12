const fs = require("fs");

const stream = fs.createReadStream("../content/big.txt", {
    encoding: "utf8",
    highWaterMark: 300,
});

let chunkCount = 0;

stream.on("data", (chunk) => {
    chunkCount++;
    console.log(`Chunk ${chunkCount}:`, chunk);
});

stream.on("end", () => {
    console.log(`Stream ended. Total chunks received`)
})