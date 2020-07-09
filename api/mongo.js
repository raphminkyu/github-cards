var rp = require('request-promise');
const dotenv = require('dotenv/config');
const {MongoClient} = require('mongodb');

async function mongoStart(){
  const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-vgq33.mongodb.net/<dbname>?retryWrites=true&w=majority`
  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
    //   await client.connect()
      await client.connect()
      // Make the appropriate DB calls
      await  listDatabases(client);
      // await createDB(client);
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

async function listDatabases(client){
  // databasesList = await client.db("trackUsers").collection("user").insertOne({
  //   a:3,
  //   b:4
  // })
  db = await client.db("trackUsers").collection("user")
  // .collection("user")
  // .admin().listDatabases();
  db.find({a:1}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });

  //everytime the url is clicked, add 1
};

async function createDB(client){
    var repoList = [];
//     databasesList = await client.db("bro").collection("sis").insertOne({
//     a:3,
//     b:4
//   })

    // var options = {
    //     uri: 'http://localhost:9000/repos',
    //     json: true // Automatically parses the JSON string in the response
    // };
    // rp(options)
    // .then((resp) =>{
    //     // console.log(resp)
    //     Promise.all(
    //       resp.map((x)=>{
    //         console.log("a")
    //         databasesList =  await client.db("collect").collection(x.name).insertOne({
    //         clicks:0
    //         }).catch((err)=>{
    //           console.log(err)
    //       });
    //       })
    //     )
    //   // ).then(result => console.log(result))
       
    // })
    // .catch((err)=>{
    //     console.log(err)
    // });

    


    //  request('http://localhost:9000/repos', { json: true }, (err, res, body) => {
    // if (err) { return console.log(err); }
    //     // console.log(body);
    //     body.map((x)=>{
    //         databasesList = await client.db("collect").collection(x.name).insertOne({
    //         clicks:0
    //     })
    //     })
    // });
   

    // fetch("http://localhost:9000/repos")
    // .then(res=>res.json())
    // .then(res=>repoList = res)
   
    
    // .then(client => {
    // // ...
    // const db = client.db('star-wars-quotes')
    // const quotesCollection = db.collection('quotes')

    // ...
  
}

module.exports = mongoStart;