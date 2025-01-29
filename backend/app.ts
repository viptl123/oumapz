import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import {example} from './schema/exampleSchemaClass'
const {ServerApiVersion } = require("mongodb");


//For env File 
dotenv.config();


const app: Application = express();
const port = process.env.PORT || 8000;


const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoURI = process.env.URI;

main().catch((err) => console.log(err));
async function main() {
    mongoose.connect(mongoURI)
    .then((result: any) => {
        console.log('connected to Mongodb');
    }).catch((err: any) => {
        console.error(err);
    });
}

app.get('/', async(req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
  // example how to run create operation
  example.create({name: "42", age: "30"});

  // example how to run read operation
  const query = example.findOne({name: "42"});
  query.select("name age");
  const person = await query.exec() || {name: "32", age: "42"};
  console.log(person.name + " " + person.age); 

  // example update operation
  await example.updateOne({name: "42"}, {name: "32"});

  // example delete operation
  await example.deleteOne({ name: '42' });
});

app.listen(port, async () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});




