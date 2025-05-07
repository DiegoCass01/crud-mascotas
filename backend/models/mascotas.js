import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class mascotasModel {
  
  async create(mascota){
    const collectionMascotas = dbClient.db.collection('mascotas');
    return await collectionMascotas.insertOne(mascota);
  }

  async update(id, mascota){
    const collectionMascotas = dbClient.db.collection('mascotas');
    return await collectionMascotas.updateOne({ _id: new ObjectId(id) }, { $set: mascota });
  }

  async delete(id){
    const collectionMascotas = dbClient.db.collection('mascotas');
    return await collectionMascotas.deleteOne({ _id: new ObjectId(id) });
  }

  async getAll(){
    const collectionMascotas = dbClient.db.collection('mascotas');
    return await collectionMascotas.find({}).toArray();
  }

  async getOne(id){
    const collectionMascotas = dbClient.db.collection('mascotas');
    return await collectionMascotas.findOne({ _id: new ObjectId(id) });
  }

}

export default new mascotasModel;