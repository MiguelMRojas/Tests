const notesCtrl = {};


notesCtrl.renderNoteForm = (req, res) =>{
  res.render('notes/new-note')
}

notesCtrl.createNewNote = (req, res) => {
  console.log(req.body)
  res.send('new registro')
}

notesCtrl.renderNotes = (req, res) => {
  res.send('Total')
}

notesCtrl.renderEditForm = (req, res) => {
  res.send('render edit form')
}

notesCtrl.updateNote = (req, res) => {
  res.send('Update note')
}


notesCtrl.deletenote  = (req, res) => {
  res.send('Delete note')
}

module.exports = notesCtrl;