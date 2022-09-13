import { MongoClient } from "mongodb";
import {data} from "./src/Data.js"

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://Jeyhun:Cqu2425232@dragon.x1bcazp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('CatalogData');
    const coll = database.collection('BasicData');

    const model = await coll.insertOne(data)

    console.log(model);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.log);