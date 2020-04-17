module.exports = {
    get,
    add,
    getById,
    getTasks,
    getResources
}

const db = require('../data/dbConfig');

function get(){
    return db('projects');
}

function getById(id){
    return db('projects')
    .where({id}).first();
}

function getTasks(id){
    return db("tasks as t").select("t.id", "t.description", "t.notes", "t.completed")
    .join("projects as p", function(){
        return this.on("p.id", "=", "t.project_id");
    })
    .where({"p.id": id});
}

function getResources(id){
    return db("resources as r").select("r.id", "r.name", "r.description")
    .join("projects as p")
    .join("project_resources as pr", function(){
        return this.on("pr.project_id", "=", "p.id").andOn("pr.resource_id", "=", "r.id");
    })
    .where({"p.id": id});
}

function add(resource){
    return db('projects')
    .insert(resource, "id")
    .then(id => getById(id[0]))
}