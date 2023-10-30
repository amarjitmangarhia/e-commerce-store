const { MongoClient } = require("mongodb")
const URI = "mongodb+srv://amar309:Mongodb309@mongodb.pbootdt.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(URI)

async function getData() {
    let connectedDatabase = await client.connect()
    console.log("database connected!")
    let databaseName = connectedDatabase.db("ecommerce_store")
    let collection = databaseName.collection("ecommerce_data")
    let data = await collection.find({}).toArray();
    console.log(data)
}
