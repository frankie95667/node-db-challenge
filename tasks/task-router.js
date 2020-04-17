const {
    get,
    add
} = require('./task-model');
const router = require('express').Router();

router.get('/', (req, res) => {
    get()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({errorMessage: "Something went wrong when retrieving projects"}))
})

router.post('/', (req, res) => {
    add(req.body)
    .then(task => res.status(201).json(task))
    .catch(err => res.status(500).json({errorMessage: "Something went wrong when adding project"}))
})

module.exports = router;