const {Router} = require('express')
const router = Router()


const {renderNoteForm, createNewNote, renderNotes,renderEditForm, updateNote,deletenote} = require ('../controllers/notes.controller.js')

const {isAuthenticated} = require('../helpers/auth');

//Agregar nota, o registro
router.get('/notes/add', isAuthenticated,renderNoteForm)

router.post('/notes/new-note', isAuthenticated,createNewNote)


//Get all
router.get('/notes',isAuthenticated,renderNotes )

//Edit Notes
router.get('/notes/edit/:id',isAuthenticated,renderEditForm)

router.put('/notes/edit/:id',isAuthenticated, updateNote)

// DELETE
router.delete('/notes/delete/:id',isAuthenticated,deletenote)

module.exports = router;