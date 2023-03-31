const {Router} = require('express')
const router = Router()


const {renderNoteForm, createNewNote, renderNotes,renderEditForm, updateNote,deletenote} = require ('../controllers/notes.controller.js')


//Agregar nota, o registro
router.get('/notes/add', renderNoteForm)

router.post('/notes/new-note', createNewNote)


//Get all
router.get('/notes',renderNotes )

//Edit Notes
router.get('/notes/edit/:id',renderEditForm)

router.put('/notes/edit/:id', updateNote)

// DELETE
router.delete('/notes/delete/:id',deletenote)

module.exports = router;