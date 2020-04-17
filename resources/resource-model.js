module.exports = {
    get,
    add
}

const db = require('../data/dbConfig');

function get(){
    return db('resources');
}

function getById(id){
    return db('resources')
    .where({id}).first();
}

function add(resource){
    return db('resources')
    .insert(resource, "id")
    .then(id => getById(id[0]))
}