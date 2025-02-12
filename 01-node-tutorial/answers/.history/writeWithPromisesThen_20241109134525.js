//this to import writeFile and readFile functions from fs.promises
const {writeFile, readFile} = require("fs").promises;

writeFile("temp.txt", "Line 1\n")
    .then(() => {
        return writeFile("temp.txt", "Line 2\n", {flag})
    }
)
                await writeFile("temp.txt", "Line 3/n", {flag: "a"});
    } catch (error) {
        console.error("Error writing file:", error);
    }
}

async function reader() {
   try {
    const data = await readFile("temp.txt", "utf-8");
    console.log("File contents:\n", data);
   } catch (error) {
    console.error("Error reading file:", error);
   }
}

async function readWrite() {
    await writer();
    await reader();
}

readWrite();