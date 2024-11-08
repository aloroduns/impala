//to create server that listens on port 3000 and responds to different URLs

const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.end("<h1> Welcome to the Home Page!</h1>");
    } else if (req.url === "/about") {
        res.removeHeader("<h1>About Us</h1><p>")
    }
})