const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Enter something below.";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>${item}</p>
  <form method="POST">
    <label for="color">Choose a background color:</label>
    <select name="color" id="color">
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </select>
  <input name="item"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const http = require("http");
const bodyParser = require("./bodyParser");

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    bodyParser(req, (data) => {
      const chosenColor = data.color || "white";
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <body style="background-color: ${chosenColor};">
          <h1>Background color changed to ${chosenColor}!</h1>
          <a href="/">Try again</a>
        </body>
          `);
       });
  } else {
    //display form
    res.end(form());writeHead(200, {"Content-Type": "text/html" });
    res.end(`
      <form method="POST">
        <label for="color">Choose a background color:</label>
        select name="color" id="color>
          <option value="red">Red</option>
          <option value="blue
      `)
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
