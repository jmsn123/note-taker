const router = require('express').Router();
const data = require('../db/db.json')
const fs = require("fs");


router.get('/', (req, res) => {
    res.json(data)
})
router.post('/', (req, res) => {
    console.log(data)
})
router.get('/notes', ({ params }, res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    console.log(notes)
    res.json(notes)
})
router.post('/notes', (req, res) => {
    let saved = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    let note = req.body;
    console.log(saved.length);
    note.id = saved.length
    saved.push(note)
    fs.writeFileSync("./db/db.json", JSON.stringify(saved));
    console.log("face", saved)
    res.json(saved)
})
router.delete('/notes/:id', (req, res) => {
    let notes = fs.readFileSync("./db/db.json", "utf-8")
    let saved = JSON.parse(notes);
    // console.log("saved", saved)
    // console.log(saved)

    let del = saved.filter(note => note.id != req.params.id)
    console.log("let", del)
    notes = JSON.stringify(del)
    fs.writeFile("./db/db.json", notes, "utf8", function(err) {
        // error handling
        if (err) throw err;
    });
    res.json(notes)


})


module.exports = router