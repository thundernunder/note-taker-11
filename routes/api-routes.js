const path  = require('path');
const fs = require('fs');
const uuid = require('uuid');
const router = express.Router();

let data  = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    const newNoteTitle = req.body.noteTitle;
    const newNoteText = req.body.noteText;

    if(!newNoteTitle || !newNoteText) {
        res.status(400).json({message: "Note must have title and body please."});

    } else {
        const newNote = {
            id: uuid.v4(),
            title: newNoteTitle,
            text: newNoteText
        };
    }
});

module.exports = router;
