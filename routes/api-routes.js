const path  = require('path');
const fs = require('fs');
const uuid = require('uuid');
const router = express.Router();

let data  = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    const noteTitle = req.body.noteTitle;
    const noteText = req.body.noteText;

    if(!noteTitle || !noteText) {
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
