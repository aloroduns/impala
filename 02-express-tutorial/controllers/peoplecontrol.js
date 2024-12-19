const { people } = require('../data.js');

//retieve all people
const getPeople = (req, res) => {
    res.json({ success:true, data: people });
    };
const addPerson = (req, res) => {
        const {name} = req.body;

        if (!name) {
            return res.status(400).json({ success: false, message: 'Please provide a name'});
        }

        const newPerson = {id: people.length + 1, name };
        people.push(newPerson);

        res.status(201).json({ success: true, data: newPerson});

    };
 

const getPersonById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const person = people.find((p) => p.id === id);

    if (!person) {
        return res.status(404).json({success: false, message: 'Please provide a name'});
    }
    res.json({success: true, data: person });

};

const updatePerson = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name } =  req.body;

    if (!name) {
        return res.status(400).json({success: false, message: 'Please provide a name'});
    }

    const person = people.find((p) => p.id === id);
   
    if (!person) {
        return res.status(404).json({success: false, message: 'No person found'});
    }
   
    person.name = name;
    res.json({success: true, data: person });

};

const deletePerson = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const personIndex = people.findIndex((p) => p.id === id);

    if (personIndex === -1) {
       return res.status(404).json({ success: false, message: `No person found with ID ${id} `});  
}
people.splice(personIndex, 1);

res.json({ success: true, message: `Person with ID ${id} deleted`});
};
module.exports = { addPerson, getPeople, getPersonById, updatePerson, deletePerson};

