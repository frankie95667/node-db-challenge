const {
    get,
    add,
    getById,
    getTasks,
    getResources
} = require('./project-model');
const router = require('express').Router();

router.get('/', (req, res) => {
    get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({errorMessage: "Something went wrong when retrieving projects"}))
})

router.post('/', (req, res) => {
    add(req.body)
    .then(project => res.status(201).json(project))
    .catch(err => res.status(500).json({errorMessage: "Something went wrong when adding project"}))
})

router.get('/:id', (req, res) => {
    let obj = {};
    const {id} = req.params;
    getById(id)
    .then(project => {
        obj = {...project};
        return getTasks(id);
    })
    .then(tasks => {
        obj.tasks = tasks;
        return getResources(id);
    })
    .then(resources => {
        obj.resources = resources;
        res.status(200).json(obj);
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Something went wrong when retrieving projects"})
    })
})

module.exports = router;