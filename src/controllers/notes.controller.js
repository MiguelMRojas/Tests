  const notesCtrl = {};

  const Note = require('../models/Note')


  notesCtrl.renderNoteForm = (req, res) =>{
    res.render('notes/new-note')
  }

  notesCtrl.createNewNote = async (req, res) => {
    const { title, description, nombres, apellidos, cedula, genero, edad } = req.body;
    const newNote = new Note({
      title,
      description,
      nombres,
      apellidos,
      cedula,
      genero,
      edad
    });
    try {
      const savedNote = await newNote.save();
      res.redirect('/notes');
    } catch (err) {
      console.log(err);
      res.status(500).send('Error saving note to database');
    }
  };


  notesCtrl.renderNotes = async (req, res) => {
    const notes =  await Note.find().lean();
    res.render('../views/notes/all-note.hbs', {notes})
  }

  notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();

    res.render('../views/notes/edit-note.hbs', {note});
  }

  notesCtrl.updateNote = (req, res) => {
    console.log(req.body)
    res.send('Update note')
  }


  notesCtrl.deletenote  = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);

    res.redirect('/notes')
  }

  module.exports = notesCtrl;