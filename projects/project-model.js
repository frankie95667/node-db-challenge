module.exports = {
    get,
    add
}

const db = require('../data/dbConfig');

function get(){
    return db('projects');
}

function getById(id){
    return db('projects')
    .where({id}).first();
}

function add(resource){
    return db('projects')
    .insert(resource, "id")
    .then(id => getById(id[0]))
}