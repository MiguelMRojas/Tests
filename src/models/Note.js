const {Schema, model} = require ('mongoose');

const NoteSchema = new Schema ({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  cedula: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    enum: ['Hombre', 'Mujer'],
    required: true
  },
  edad: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})


module.exports = model('Note', NoteSchema);