const notesCtrl = {};


notesCtrl.renderNoteForm = (req, res) =>{
  res.send('note')
}

notesCtrl.createNewNote = (req, res) => {
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

module.exports = notesCtrl;