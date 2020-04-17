const express = require('express');
const server = express();
const resourceRouter = require('../resources/resource-router');
const projectRouter = require('../projects/project-router');
const taskRouter = require('../tasks/task-router');

server.use(express.json());

// routers
server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;