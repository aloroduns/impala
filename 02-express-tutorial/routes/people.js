const express = require('express');
const { addPerson, getPeople, getPersonById, updatePerson, deletePerson }= require('../controllers/peoplecontrol');
const router = express.Router();



//define routes for /api/v1/people
router.get('/', getPeople);
router.post('/', addPerson);
router.get('/:id', getPersonById);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;