//to create server that listens on port 3000 and responds to different URLs

const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.end("<h1> Welcome to the Home Page!</h1>");
    
    }
})