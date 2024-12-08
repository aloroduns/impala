const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.on("status", (messagem, code) => {
    console.log(`Status: ${message} (code: $)`)
})