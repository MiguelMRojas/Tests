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
      res.send('Nota guardada');
    } catch (err) {
      console.log(err);
      res.status(500).send('Error saving note to database');
    }
  };


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