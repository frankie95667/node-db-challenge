const {
    get,
    add
} = require('./resource-model');
const router = require('express').Router();

router.get('/', (req, res) => {
    get()
    .then(resources => res.status(200).json(resources))
    .catch(err => res.status(500).json({errorMessage: "Something went wrong when retrieving resources"}))
})

router.post('/', (req, res) => {
    add(req.body)
    .then(resource => res.status(201).json(resource))
    .catch(err => res.status(500).json({errorMessage: "Something went wrong when adding resource"}))
})

module.exports = router;
