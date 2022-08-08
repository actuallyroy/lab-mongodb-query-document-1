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
        
    } catch (error) {
        
    }

})


app.listen(process.env.PORT || 8001, () => {
    console.log("Server is running on port " + 8001)
})