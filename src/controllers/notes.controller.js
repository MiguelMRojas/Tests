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
      req.flash('success_msg', 'Register Added Successfully')
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
    res.render("notes/edit-note",{note});
  }

  notesCtrl.updateNote = async (req, res) => {
    const {title,description,nombres,apellidos,cedula,edad} = req.body;
    await Note.findByIdAndUpdate(req.params.id,{title,description,nombres,apellidos,cedula,edad} )
    req.flash('success_msg', 'Register Update Successfully');
    res.redirect('/notes');
  }


  notesCtrl.deletenote  = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Register Delete Successfully');

    res.redirect('/notes')
  }

  module.exports = notesCtrl;