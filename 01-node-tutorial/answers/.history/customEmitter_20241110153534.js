const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.on("status", (messagem, code) => {
    console.log(`Status: ${message} (code: ${code})`);
});

setInterval(() => {
    emitter.emit("heartbeat", "Server is alive");
}, 3000);

emitter.on("heartbeat", (msg) => console.log(msg));

//emit events
emitter.emit("greet", "Alice");
emitter.emit("status", "OK", )