const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
require('dotenv').config()

const connectDB = require('./db/connect')


//middleware to parse JSON
app.use(express.json());

//routes

app.use('/api/v1/tasks', tasks);

app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

// app.get('/api/v1/tasks')    - get all the tasks
// app.post('/api/v1/tasks')   - create a new tasks
// app.get('/api/v1/tasks/:id')- single tasks
// app.patch('/api/v1/tasks/:id')-update tasks
// app.delete('/api/v1/tasks/:id') - delete tasks

const port = 3000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening on: port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}


start()