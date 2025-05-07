import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
  {   
    nombre: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      enum: ['perro', 'gato', 'conejo', 'hamster'],
      required: true
    },
    raza: {
      type: String,
      required: true
    },
    edad: {
      type: Number,
      required: true,
      min: [ 0, 'La edad no puede ser negativa' ],
      max: [ 30, 'La edad no parece correcta' ]
    },
    // 'sexo' field: 'M' for Male, 'F' for Female
    sexo: {
      type: String,
      enum: ['m','f'],
      required: true
    },
    descripcion: {
      type: String
    },
    adoptado: {
      type: Boolean,
      default: false
    }
  }, 
  { timestamps: true }
);

export default mongoose.model('mascotas', mascotaSchema);