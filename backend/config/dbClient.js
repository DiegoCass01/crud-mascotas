import mongoose from 'mongoose';

class dbClient {
  constructor(){
    this.connectDataBase();
  }

  async connectDataBase(){
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adopcion`;
    await mongoose.connect(queryString);
  }

   // Método para cerrar la conexión
   async closeConnection() {
    try {
        await mongoose.disconnect();
        console.log("Conexión a la base de datos cerrada");
    } catch (e) {
        console.error("Error al cerrar la conexión:", e);
    }
  }
}

export default new dbClient();