import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
  {   
    nombre: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
    raza: {
      type: String,
      required: true
    },
    edad: {
      type: Number,
      required: true
    },
    // 'sexo' field: 'M' for Male, 'F' for Female
    sexo: {
      type: String,
      enum: ['M','F'],
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