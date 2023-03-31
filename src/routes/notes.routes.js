const {Router} = require('express')
const router = Router()


const {renderNoteForm, createNewNote, renderNotes,renderEditForm, updateNote} = require ('../controllers/notes.controller.js')


//Agregar nota, o registro
router.get('/notes/add', renderNoteForm)

router.post('/notes/add', createNewNote)


//Get all

router.get('/notes',renderNotes )

//Edit Notes
router.get('/notes/edit/:id',renderEditForm)

router.post('/notes/edit/:id', updateNote)

module.exports = router;