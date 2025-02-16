import { MongoClient } from "mongodb";

const URI = "mongodb+srv://laracesquini:Lara.080304@cluster0.zwelo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(URI)

export const db = client.db("spotifyProject");