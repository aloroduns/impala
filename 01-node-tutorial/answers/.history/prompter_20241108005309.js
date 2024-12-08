const http = require("http");
const StringDecode = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecode("utf-8");
  let body = "";
  req.on("data", (chunk) => {
    body += decode.write(chunk);
  });
  req.on("end", ()=> {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const [key, value] = part.split("=");
      resultHash[key] = value;
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Enter something below.";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => `
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

const server = http.createServer((req, res) => {
  console.log("Request method:", req.method);
  console.log("Request URL:", req.url);
  if (req.method === "POST") {
    getBody(req, (data) => {
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
    res.writeHead(200, {"Content-Type": "text/html" });
    res.end(form());
  }
});
    
   }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
