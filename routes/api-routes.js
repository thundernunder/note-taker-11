// Add required dependencies
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

// Require HTML routes file
require('./html-routes');

// Set up API routes export for server.js page
module.exports = function (app) {
    fs.readFile('db/db.json', 'utf8', function (err, data) {
        if (err) throw err;
        
        let notes = JSON.parse(data);
      
        app.get('/api/notes', function(req, res) {
            res.json(notes);
        })

        app.post('/api/notes', function(req, res) {
            
            const activeNote = {
                title: req.body.title,
                text: req.body.text,
                id: uuid.v5()
            };
            notes.push(activeNote);
            updateNotes(notes);
            res.json(notes);
        })

        app.get('/api/notes/:id', function(req, res) {
            res.json(notes[req.params.id]);
        })

        app.delete('/api/notes/:id', function(req, res) {
            notes.splice(req.params.id, 1);
            updateNotes(notes);
            res.json(notes);
        })
    })

    function updateNotes(notes) {
        fs.writeFile('db/db.json', JSON.stringify(notes, '\t'), function(err) {
            if (err) throw err;
            return true;
        })
    };
};