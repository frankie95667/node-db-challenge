const {
    get,
    add
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

module.exports = router;