const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require('cors')

dotenv.config();

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = "passop";
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors());

client.connect(); // Use connect method to connect to the server


//Get all password
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
 
});

//Save a password
app.post("/", async (req, res) => {
  try {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const findResult = await collection.insertOne(password);
    res.json({ success: true,  result: findResult});
  } catch (error) {
    console.error("Error inserting password:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});



// //Delete a password by id
//Save a password
app.delete("/", async (req, res) => {
  try {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const findResult = await collection.deleteOne(password);
    res.json({ success: true,  result: findResult});
  } catch (error) {
    console.error("Error inserting password:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
// app.post("/", async (req, res) => {
//   const password = req.body
//   const db = client.db(dbName);
//   const collection = db.collection("passwords");
//   const findResult = await collection.deleteOne(password);
//   res.send({successL: true, result: findResult});
// });

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
