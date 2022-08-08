var express = require('express');
var mongodb = require('mongodb');

const mongoClient  = mongodb.MongoClient;


const app = express();
app.use(express.json())
const dbUrl = 'mongodb+srv://actuallyroy:Pzha5qkdxQTgnyQH@cluster0.hrmerlo.mongodb.net/test'
app.get('/', async (req, res) => {

    const client = await mongoClient.connect(dbUrl);
    
    try {
        let db = await client.db('testDB')
        let compnies = await db.collection('compnies').find({}, {limit: 10}).toArray();
        res.json(compnies)
    } catch (error) {
        
    }

})


app.listen(process.env.PORT || 8001, () => {
    console.log("Server is running on port " + 8001)
})