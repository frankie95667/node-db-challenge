module.exports = {
    get,
    add
}

const db = require('../data/dbConfig');

function get(){
    return db('tasks as t').select('t.*', 'p.name as projectName', 'p.description as projectDescription')
    .join("projects as p", function() {
        return this.on('p.id','=', 't.project_id');
    });
}

function getById(id){
    return db('tasks')
    .where({id}).first();
}

function add(resource){
    return db('tasks')
    .insert(resource, "id")
    .then(id => getById(id[0]))
}