const dotenv = require('dotenv/config');
const {MongoClient} = require('mongodb');

const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-vgq33.mongodb.net/<dbname>?retryWrites=true&w=majority`
const client = new MongoClient(uri);
client.connect().then(console.log("done"))
async function mongoStart(username){
  
  try {
      // Connect to the MongoDB cluster
    //   await client.connect()
      // await client.connect().then(console.log("done"))

      // Make the appropriate DB calls
      // await  listDatabases(client);
      // await start(username);
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

module.exports = {client, mongoStart};