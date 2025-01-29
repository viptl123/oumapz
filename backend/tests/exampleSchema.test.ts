import {example} from '../schema/exampleSchemaClass'
import dotenv from 'dotenv';

dotenv.config();
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
afterAll(async () => {
  await mongoose.disconnect();  
  console.log('Disconnected from MongoDB');
});

test('test add and read schema', async () => {

  example.create({name: "Test User", age: "292392838"});


  const query = example.findOne({name: "Test User"});
  query.select("name age");
  const person = await query.exec() || {name: "", age: ""};
  
  expect(person.name).toBe("Test User");
  expect(person.age).toBe("292392838");
});


test('test update schema', async () => {
  await example.updateOne({name: "Test User"}, {name: "Updated User", age: "223"});
  const query = example.findOne({name: "Updated User"});
  query.select("name age");
  const person = await query.exec() || {name: "", age: ""};
  expect(person.name).toBe("Updated User");
  expect(person.age).toBe("223");
});


test('test delete schema', async() => {
  
  const result = await example.deleteOne({ name: 'Updated User' });
  expect(result.deletedCount).toBe(1)
});


