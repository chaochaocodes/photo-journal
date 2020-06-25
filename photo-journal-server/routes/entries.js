const express = require('express');

// call router to create custom routes, export via module.exports
// import into app.js `require('./routes/entries)`
const router = express.Router();
const Entry = require('../models/Entry')

// GET All Entries
router.get('/', async (req, res) => {
    // res.send('Index of Entries')
    try {
        // mongoose function .find, call on Entry model
        const entries = await Entry.find();
        res.json(entries);
    } catch (err) {
        res.json({ message: err});
    }
});

// CREATE post
router.post('/', async (req, res) => {
    const entry = new Entry({
        prompt: req.body.prompt,
        title: req.body.title,
        photo: req.body.photo,
        description: req.body.description
    });
    try {
        const savedEntry = await entry.save() // returns a promise, includes .exec()
        res.json(savedEntry);
    } catch (err) {
        res.json({ message: err});
    }
});

// READ (GET) post
router.get('/:entryId', async (req, res) => {
    //console.log(req.params.entryId)
    //=> Postman GET localhost:3000/entries/entryId
    try {
        const entry = await Entry.findById(req.params.entryId);
        res.json(entry);
    } catch (err) {
        res.json({ message: err});
    }
});

// UPDATE post
router.patch('/:entryId', async (req, res) => {
    try {
        const updatedEntry = await Entry.updateOne(
            { _id: req.params.entryId },
            { $set: { title: req.body.title }},
            { $set: { photo: req.body.photo }}, 
            { $set: { description: req.body.description }}
        );
        res.json( updatedEntry );
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE post
router.delete('/:entryId', async (req, res) => {
    try {
        const removedEntry = await Entry.remove({_id: req.params.entryId });
        res.json(removedEntry);
    } catch (err) {
        res.json({ message: err});
    }
});

module.exports = router;