const express = require('express')
const bodyParser = require('body-parser')
const { json } = require('body-parser')


// const projects = require('./controllers/projectsController');
// const tasks = require('./controllers/tasksController');



const app = express()

app.use(json())

app.use('/users',require('./routes/users.route'))
app.use('/projects',require('./routes/projects.route'))
app.use('/tasks',require('./routes/tasks.route'))





app.listen(5000)

console.log('listening at port 5000');